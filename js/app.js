/* Lógica de la página. Depende de DATA (js/data.js). */
(() => {
  "use strict";

  /* ---------- Utilidades ---------- */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const render = (sel, items, tpl) => { $(sel).innerHTML = items.map(tpl).join(""); };
  const tone = c => `style="--c:var(--${c})"`;

  /* ---------- Plantillas ---------- */
  const tintCard = d =>
    `<article class="tint rv" ${tone(d.color)}><div class="ic">${d.icon}</div><h3>${d.title}</h3><p>${d.text}</p></article>`;
  const pill = d =>
    `<article class="pill rv" ${tone(d.color)}><div class="ic">${d.icon}</div>
     <div><h3>${d.title}</h3><p>${d.text}</p></div></article>`;

  /* ---------- Secciones estáticas ---------- */
  function renderStatic() {
    render("#vision-cards", DATA.vision, tintCard);
    render("#pillars", DATA.pillars, tintCard);
    render("#principles", DATA.principles, pill);
    render("#topics", DATA.topics, pill);
    render("#steps", DATA.route,
      (s, i) => `<li class="st rv" data-n="${i + 1}" ${tone(s.color)}>
        <small>${s.when}</small><h3>${s.title}</h3><p>${s.text}</p></li>`);
  }

  /* ---------- Valores (selector) ---------- */
  function initValues() {
    render("#values", DATA.values,
      v => `<button type="button" aria-pressed="false" ${tone(v.color)}>${v.name}</button>`);
    const buttons = $$("#values button");
    buttons.forEach((btn, i) => btn.addEventListener("click", () => {
      buttons.forEach(b => b.setAttribute("aria-pressed", b === btn));
      $("#value-detail").textContent = DATA.values[i].text;
    }));
  }

  /* ---------- Pestañas de práctica ---------- */
  function initTabs() {
    const tabs = $("#tabs");
    const select = (group, btn) => {
      $$("button", tabs).forEach(b => b.setAttribute("aria-selected", b === btn));
      $("#tab-panel").innerHTML = group.items
        .map(([icon, text]) => `<div ${tone(group.color)}><i>${icon}</i>${text}</div>`).join("");
    };
    DATA.practice.forEach((group, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.textContent = group.tab;
      b.addEventListener("click", () => select(group, b));
      tabs.appendChild(b);
      if (!i) select(group, b);
    });
  }

  /* ---------- Brújula ética ---------- */
  function initCompass() {
    const questions = DATA.compass;
    let index = 0, missed = [];
    $("#quiz-progress").innerHTML = questions.map(() => "<i></i>").join("");
    const strip = q => q.replace(/[¿?]/g, "");

    function showResult() {
      $("#quiz-body").innerHTML = missed.length
        ? `<h3>Hagamos una pausa 🤔</h3>
           <p class="muted">Antes de actuar, revisa:</p>
           <ul class="review">${missed.map(q => `<li>${strip(q)}</li>`).join("")}</ul>
           <button type="button" class="btn btn--ghost" id="quiz-reset">Reiniciar</button>`
        : `<h3>¡Decisión coherente! ✨</h3>
           <p class="muted">Va alineada con nuestros principios y pilares.</p>
           <button type="button" class="btn btn--ghost" id="quiz-reset">Reiniciar</button>`;
      $("#quiz-reset").addEventListener("click", () => { index = 0; missed = []; step(); });
    }

    function step() {
      $$("#quiz-progress i").forEach((d, i) => d.classList.toggle("is-done", i < index));
      if (index >= questions.length) return showResult();
      $("#quiz-body").innerHTML =
        `<h3>${questions[index]}</h3>
         <div class="quiz__actions">
           <button type="button" class="yes" data-answer="yes">Sí</button>
           <button type="button" class="no" data-answer="no">No</button>
         </div>`;
      $$("#quiz-body [data-answer]").forEach(b => b.addEventListener("click", () => {
        if (b.dataset.answer === "no") missed.push(questions[index]);
        index++;
        step();
      }));
    }
    step();
  }

  /* ---------- Compromiso ---------- */
  function initCommitments() {
    render("#commit-list", DATA.commitments,
      c => `<label><input type="checkbox"><span>${c}</span></label>`);
    const total = DATA.commitments.length;
    const update = () => {
      const done = $$("#commit-list input:checked").length;
      const pct = Math.round(done / total * 100);
      $("#ring").style.setProperty("--p", pct);
      $("#commit-pct").textContent = pct + "%";
      $("#commit-msg").textContent =
        done === total ? "¡Compromiso completo! 🎉" :
        done ? `${done} de ${total} asumidos` : "Empieza marcando uno";
    };
    $$("#commit-list input").forEach(i => i.addEventListener("change", update));
  }

  /* ---------- Aparición al hacer scroll ---------- */
  function initReveal() {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: .1 });
    $$(".rv").forEach(el => io.observe(el));
  }

  /* ---------- Arranque ---------- */
  renderStatic();
  initValues();
  initTabs();
  initCompass();
  initCommitments();
  initReveal();
})();