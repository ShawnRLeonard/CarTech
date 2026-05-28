// mk-lang.js — bilingual EN/ES toggle for all make-specific landing pages
// Each page defines window.MK_ES with page-specific Spanish content before loading this script.
// Shared translations (nav, footer, form, CTA, etc.) are handled here.
// Uses the same localStorage key ('ct-lang') as the main site's lang.js.

(function () {
    'use strict';

    // ─── Helpers ────────────────────────────────────────────────────────────
    function find(sel) { return document.querySelector(sel); }
    function findAll(sel) { return document.querySelectorAll(sel); }

    // Store original innerHTML before first Spanish swap so English can be restored
    function storeOrig(el) {
        if (el && !el.getAttribute('data-orig')) {
            el.setAttribute('data-orig', el.innerHTML);
        }
    }

    function setEl(sel, html) {
        var el = find(sel);
        if (el && html != null) { storeOrig(el); el.innerHTML = html; }
    }

    function restoreAll() {
        findAll('[data-orig]').forEach(function (el) {
            el.innerHTML = el.getAttribute('data-orig');
        });
    }

    function fill(str, make) {
        return str.replace(/\{make\}/g, make || '');
    }

    // ─── Page config provided by each page ──────────────────────────────────
    var es = window.MK_ES || {};
    var make = es.make || '';

    // ─── Shared Spanish translations ────────────────────────────────────────
    var SHARED = {

        // Nav
        nav_home:        'Inicio',
        nav_services:    'Servicios',
        nav_paint:       'Pintura y Carrocería',
        nav_repair:      'Reparación y Diagnóstico',
        nav_noise:       'Ruidos y Manejo',
        nav_maint:       'Mantenimiento',
        nav_engine:      'Servicio de Motor',
        nav_trans:       'Servicio de Transmisión',
        nav_about:       'Nosotros',
        nav_story:       'Nuestra Historia',
        nav_contact:     'Contacto',
        nav_faq:         'Preguntas Frecuentes',

        // Hero buttons
        hero_btn_appt:   'Programar Cita',
        hero_btn_call:   'Llamar &mdash; 615-220-6114',

        // Why section — items 2-4 (item 1 is page-specific)
        why2_h3: 'Carrocería a Mitad del Precio',
        why2_p:  'Los talleres de colisión del concesionario tienen sus propios gastos generales. Nuestro taller de pintura y carrocería dedicado ofrece resultados precisos de igualación de color a precios independientes — un ahorro significativo en tu {make}.',
        why3_h3: 'Citas en la Misma Semana',
        why3_p:  'Sin largas esperas. La mayoría de los clientes del área de Smyrna obtienen cita en 1–3 días hábiles. Diagnosticamos correctamente, te damos una respuesta directa y devolvemos tu {make} rápidamente.',
        why4_h3: 'Estimados Honestos, Sin Sorpresas',
        why4_p:  'Taller familiar, no una franquicia. Tratas directamente con el técnico que trabaja en tu {make}. Explicamos exactamente qué necesita y cuánto cuesta — antes de comenzar cualquier cosa.',

        // Services section — "View All" button
        svc_all_btn: 'Ver Todos los Servicios',

        // Body callout — shared second paragraph and bullet list
        body_p2_shared:  'Trabajamos con todas las aseguradoras principales y ofrecemos estimados escritos el mismo día. Tráelo, revisamos el daño contigo directamente — sin presión, sin sorpresas.',
        body_btn:        'Obtener Estimado Gratis',
        body_bullets_shared: [
            'Reparación de colisiones — daño menor a mayor',
            'Eliminación de abolladuras y enderezado de paneles',
            'Reparación de rayones, desportilladuras y rozaduras',
            'Respintado completo y pintura personalizada',
            'Estimados para seguros — todas las aseguradoras',
            'Estimado escrito gratuito — sin compromiso'
        ],

        // Compare section
        compare_h2:      'Concesionario vs. CarTech — ¿Cuál es la Diferencia?',
        compare_sub:     'El servicio del concesionario es ideal para trabajos de garantía. Para todo lo demás, así nos comparamos.',
        compare_th_dealer:  'Concesionario',
        compare_th_ct:      'CarTech',
        compare_r1_label:   'Costo por hora',
        compare_r1_dealer:  '$150–$180 / hr',
        compare_r1_ct:      'Precio independiente',
        compare_r2_label:   'Disponibilidad de citas',
        compare_r2_dealer:  '1–3 semanas de espera',
        compare_r2_ct:      '1–3 días hábiles',
        compare_r3_label:   'Taller de carrocería',
        compare_r3_dealer:  'Precios del concesionario',
        compare_r3_ct:      'Precios independientes',
        compare_r4_label:   '¿Quién explica la reparación?',
        compare_r4_dealer:  'Asesor de servicio',
        compare_r4_ct:      'Tu técnico directamente',
        compare_r5_label:   'Herramientas de diagnóstico',
        compare_r5_dealer:  'Herramientas OEM',
        compare_r5_ct:      'Herramientas avanzadas',
        compare_r6_label:   'Reparaciones bajo garantía',
        compare_r6_dealer:  '&#10003; Usa el concesionario',
        compare_r6_ct:      'Usa el concesionario — en serio',
        compare_r7_label:   'Reparaciones fuera de garantía',
        compare_r7_dealer:  'Costoso',
        compare_r7_ct:      '&#10003; Somos tu taller',

        // Models section — intro and note
        models_intro_shared: 'Modelos actuales y clásicos — si es un {make}, lo atendemos. Todos los años, todos los niveles de equipamiento.',
        models_note_shared:  '¿No ves tu modelo? <a href="tel:+16152206114">Llama al 615-220-6114</a> — atendemos todos los modelos de {make}.',

        // Service areas
        areas_h2:     'Servimos Smyrna y Áreas Cercanas',
        areas_intro:  'Ubicados en 207 Monroe Street en Smyrna, TN — conveniente para todo el Condado de Rutherford y el área metropolitana de Nashville.',
        areas_county: 'Condado de Rutherford &bull; Condado de Davidson &bull; Condado de Williamson &bull; Condado de Wilson',

        // Form — shared labels and options
        form_name_label:    'Tu Nombre <span class="form-required">*</span>',
        form_phone_label:   'Número de Teléfono <span class="form-required">*</span>',
        form_email_label:   'Correo Electrónico <span style="color:#555; font-size:11px; text-transform:none; letter-spacing:0;">(opcional)</span>',
        form_service_label: 'Servicio Necesario <span class="form-required">*</span>',
        form_msg_label:     'Detalles Adicionales <span style="color:#555; font-size:11px; text-transform:none; letter-spacing:0;">(opcional)</span>',
        form_opt_0:         'Seleccionar servicio...',
        form_opt_1:         'Pintura y Carrocería / Reparación de Colisión',
        form_opt_2:         'Reparación y Diagnóstico',
        form_opt_3:         'Mantenimiento (Cambio de Aceite, Frenos, etc.)',
        form_opt_7:         'Estimado Gratis',
        form_opt_8:         'Otro / No Estoy Seguro',
        form_submit:        'Enviar Mensaje',
        form_note:          'Generalmente respondemos en pocas horas durante nuestro horario de atención (Lun–Vie 8AM–5PM).',
        form_success_h3:    '¡Mensaje Enviado!',
        form_success_p:     'Gracias por contactarnos. Te responderemos lo antes posible — generalmente el mismo día hábil. Si es urgente, llámanos al <a href="tel:+16152206114" style="color:#05b6fc;">615-220-6114</a>.',

        // CTA banner
        cta_h2:  '¿Listo para Programar?<br>Llámenos o Envíenos un Mensaje Hoy.',
        cta_btn: 'Llamar Ahora &mdash; 615-220-6114',

        // Footer
        footer_tagline:   'Taller mecánico y de carrocería familiar en Smyrna, TN. Atendiendo todas las marcas y modelos desde 2020.',
        footer_precision: 'Precisión. Rendimiento. Perfección.',
        footer_contact_h: 'Contáctenos',
        footer_hours:     'Lun &ndash; Vie: 8:00 AM &ndash; 5:00 PM<br>Sáb &ndash; Dom: Cerrado',
        footer_site_h:    'Nuestro Sitio',
        footer_home:      'Inicio',
        footer_services:  'Servicios',
        footer_about:     'Nosotros',
        footer_contact:   'Contacto',
        footer_faq:       'Preguntas Frecuentes',
        footer_areas_h:   'Áreas de Servicio',
        footer_areas_p:   'Smyrna<br>Murfreesboro<br>La Vergne<br>Antioch<br>Nashville y más',
        footer_copy:      '&copy; 2025 CarTech Automotive LLC &mdash; Todos los Derechos Reservados',

        // Mobile CTA bar
        cta_call_text: 'Llamar',
        cta_text_text: 'Mensaje'
    };

    // ─── Apply Spanish ───────────────────────────────────────────────────────
    function applySpanish() {

        // Nav
        setEl('header nav ul > li:nth-child(1) > a', SHARED.nav_home);
        setEl('header nav ul > li:nth-child(2) > a', SHARED.nav_services);
        setEl('header nav ul > li:nth-child(2) .dropdown li:nth-child(1) a', SHARED.nav_paint);
        setEl('header nav ul > li:nth-child(2) .dropdown li:nth-child(2) a', SHARED.nav_repair);
        setEl('header nav ul > li:nth-child(2) .dropdown li:nth-child(3) a', SHARED.nav_noise);
        setEl('header nav ul > li:nth-child(2) .dropdown li:nth-child(4) a', SHARED.nav_maint);
        setEl('header nav ul > li:nth-child(2) .dropdown li:nth-child(5) a', SHARED.nav_engine);
        setEl('header nav ul > li:nth-child(2) .dropdown li:nth-child(6) a', SHARED.nav_trans);
        setEl('header nav ul > li:nth-child(3) > a', SHARED.nav_about);
        setEl('header nav ul > li:nth-child(3) .dropdown li:nth-child(1) a', SHARED.nav_story);
        setEl('header nav ul > li:nth-child(4) > a', SHARED.nav_contact);
        setEl('header nav ul > li:nth-child(5) > a', SHARED.nav_faq);

        // Hero buttons
        setEl('.hero-btns .hero-btn', SHARED.hero_btn_appt);
        setEl('.hero-btns .hero-btn-outline', SHARED.hero_btn_call);

        // Hero — page-specific
        if (es.hero_h1) setEl('.mk-hero h1', es.hero_h1);
        // hero_sub usually stays (model names don't need translation)

        // Why section
        if (es.why_heading) setEl('.mk-why .container > h2, .mk-why > .container > h2', es.why_heading);
        if (es.why1_h3) setEl('.mk-why-grid .mk-why-item:nth-child(1) h3', es.why1_h3);
        if (es.why1_p)  setEl('.mk-why-grid .mk-why-item:nth-child(1) p',  es.why1_p);
        setEl('.mk-why-grid .mk-why-item:nth-child(2) h3', SHARED.why2_h3);
        setEl('.mk-why-grid .mk-why-item:nth-child(2) p',  fill(SHARED.why2_p, make));
        setEl('.mk-why-grid .mk-why-item:nth-child(3) h3', SHARED.why3_h3);
        setEl('.mk-why-grid .mk-why-item:nth-child(3) p',  fill(SHARED.why3_p, make));
        setEl('.mk-why-grid .mk-why-item:nth-child(4) h3', SHARED.why4_h3);
        setEl('.mk-why-grid .mk-why-item:nth-child(4) p',  fill(SHARED.why4_p, make));

        // Services section
        if (es.svc_heading) setEl('.mk-services h2', es.svc_heading);
        var svcKeys = ['svc1_h3','svc2_h3','svc3_h3','svc4_h3','svc5_h3','svc6_h3',
                       'svc1_p',  'svc2_p',  'svc3_p',  'svc4_p',  'svc5_p',  'svc6_p'];
        var cards = findAll('.mk-svc-grid .mk-svc-card');
        cards.forEach(function (card, i) {
            var n = i + 1;
            var hKey = 'svc' + n + '_h3';
            var pKey = 'svc' + n + '_p';
            if (es[hKey]) { storeOrig(card.querySelector('h3')); card.querySelector('h3').innerHTML = es[hKey]; }
            if (es[pKey]) { storeOrig(card.querySelector('p'));  card.querySelector('p').innerHTML  = es[pKey]; }
        });
        setEl('.mk-services .cta-banner-btn', SHARED.svc_all_btn);

        // Body callout
        if (es.body_h2) setEl('.mk-body-text h2', es.body_h2);
        if (es.body_p1) setEl('.mk-body-text > p:nth-child(2)', es.body_p1);
        // Second paragraph — use page override or shared version
        var bodyP2 = es.body_p2 || SHARED.body_p2_shared;
        setEl('.mk-body-text > p:nth-child(3)', bodyP2);
        // Bullet list — use page bullets or shared
        var bullets = es.body_bullets || SHARED.body_bullets_shared;
        var ul = find('.mk-body-text > ul');
        if (ul) { storeOrig(ul); ul.innerHTML = bullets.map(function(b){ return '<li>' + b + '</li>'; }).join(''); }
        setEl('.mk-body-text > .cta-banner-btn', SHARED.body_btn);

        // Compare section (not all pages have it)
        setEl('.mk-compare .container > h2', SHARED.compare_h2);
        setEl('.mk-compare-sub', SHARED.compare_sub);
        setEl('.mk-compare-table thead .th-dealer', SHARED.compare_th_dealer);
        setEl('.mk-compare-table thead .th-cartech', SHARED.compare_th_ct);
        var rows = findAll('.mk-compare-table tbody tr');
        var rData = [
            [SHARED.compare_r1_label, es.compare_r1_dealer || SHARED.compare_r1_dealer, SHARED.compare_r1_ct],
            [SHARED.compare_r2_label, SHARED.compare_r2_dealer, SHARED.compare_r2_ct],
            [SHARED.compare_r3_label, SHARED.compare_r3_dealer, SHARED.compare_r3_ct],
            [SHARED.compare_r4_label, SHARED.compare_r4_dealer, SHARED.compare_r4_ct],
            [SHARED.compare_r5_label, SHARED.compare_r5_dealer, SHARED.compare_r5_ct],
            [SHARED.compare_r6_label, SHARED.compare_r6_dealer, SHARED.compare_r6_ct],
            [SHARED.compare_r7_label, SHARED.compare_r7_dealer, SHARED.compare_r7_ct]
        ];
        rows.forEach(function (row, i) {
            if (rData[i]) {
                var tds = row.querySelectorAll('td');
                if (tds[0]) { storeOrig(tds[0]); tds[0].innerHTML = rData[i][0]; }
                if (tds[1]) { storeOrig(tds[1]); tds[1].innerHTML = rData[i][1]; }
                if (tds[2]) { storeOrig(tds[2]); tds[2].innerHTML = rData[i][2]; }
            }
        });
        if (es.compare_note) setEl('.mk-compare .container > p[style]', es.compare_note);

        // Models section
        if (es.models_heading) setEl('.mk-models .container > h2', es.models_heading);
        var modelsIntro = es.models_intro || fill(SHARED.models_intro_shared, make);
        setEl('.mk-models .intro', modelsIntro);
        var modelsNote = es.models_note || fill(SHARED.models_note_shared, make);
        setEl('.mk-models-note', modelsNote);

        // Service areas
        setEl('.service-areas-section .container > h2', SHARED.areas_h2);
        setEl('.service-areas-section .areas-intro', SHARED.areas_intro);
        setEl('.service-areas-section .areas-county-note', SHARED.areas_county);

        // Form section
        setEl('.form-section-head h2', es.form_heading || '');
        setEl('.form-section-head p', es.form_intro || '');
        // Labels — use attribute-ends-with selector to handle any prefix
        var nameLabel = find('label[for$="-name"]');
        if (nameLabel) { storeOrig(nameLabel); nameLabel.innerHTML = SHARED.form_name_label; }
        var phoneLabel = find('label[for$="-phone"]');
        if (phoneLabel) { storeOrig(phoneLabel); phoneLabel.innerHTML = SHARED.form_phone_label; }
        var emailLabel = find('label[for$="-email"]');
        if (emailLabel) { storeOrig(emailLabel); emailLabel.innerHTML = SHARED.form_email_label; }
        // Vehicle label — page-specific
        var vehicleLabel = find('label[for$="-vehicle"]');
        if (vehicleLabel && es.form_vehicle_label) { storeOrig(vehicleLabel); vehicleLabel.innerHTML = es.form_vehicle_label; }
        var vehicleInput = find('input[id$="-vehicle"]');
        if (vehicleInput && es.form_vehicle_placeholder) { vehicleInput.setAttribute('placeholder', es.form_vehicle_placeholder); }
        var serviceLabel = find('label[for$="-service"]');
        if (serviceLabel) { storeOrig(serviceLabel); serviceLabel.innerHTML = SHARED.form_service_label; }
        var msgLabel = find('label[for$="-message"]');
        if (msgLabel) { storeOrig(msgLabel); msgLabel.innerHTML = SHARED.form_msg_label; }
        // Service select options
        var sel = find('select[id$="-service"]');
        if (sel) {
            storeOrig(sel);
            var opts = sel.options;
            if (opts[0]) opts[0].text = SHARED.form_opt_0;
            if (opts[1]) opts[1].text = SHARED.form_opt_1;
            if (opts[2]) opts[2].text = SHARED.form_opt_2;
            if (opts[3]) opts[3].text = SHARED.form_opt_3;
            if (opts[4] && es.form_opt_specific) opts[4].text = es.form_opt_specific;
            // Option 5 may be present on some pages (Engine Service before Free Estimate)
            var freeIdx = es.form_free_idx != null ? es.form_free_idx : (opts.length - 2);
            if (opts[freeIdx]) opts[freeIdx].text = SHARED.form_opt_7;
            if (opts[freeIdx + 1]) opts[freeIdx + 1].text = SHARED.form_opt_8;
        }
        // Textarea placeholder
        var msgArea = find('textarea[id$="-message"]');
        if (msgArea) msgArea.setAttribute('placeholder', 'Describe el problema o cualquier otro detalle...');
        // Submit button
        var submitBtn = find('.form-submit-btn');
        if (submitBtn) { storeOrig(submitBtn); submitBtn.innerHTML = SHARED.form_submit; }
        setEl('.form-section p.form-note', SHARED.form_note);
        // Form success
        var successH3 = find('.form-success h3');
        if (successH3) { storeOrig(successH3); successH3.innerHTML = SHARED.form_success_h3; }
        var successP = find('.form-success p');
        if (successP) { storeOrig(successP); successP.innerHTML = SHARED.form_success_p; }

        // CTA banner
        setEl('section.cta-banner h2', SHARED.cta_h2);
        setEl('section.cta-banner .cta-banner-btn', SHARED.cta_btn);

        // Footer
        setEl('.footer-col:nth-child(1) .footer-tagline',  SHARED.footer_tagline);
        setEl('.footer-col:nth-child(1) .footer-precision', SHARED.footer_precision);
        setEl('.footer-col:nth-child(2) h4', SHARED.footer_contact_h);
        var footerHoursP = find('.footer-col:nth-child(2) p');
        if (footerHoursP) { storeOrig(footerHoursP); footerHoursP.innerHTML = SHARED.footer_hours; }
        setEl('.footer-col:nth-child(3) h4', SHARED.footer_site_h);
        var footerLinks = findAll('.footer-col:nth-child(3) a');
        var footerLinkEs = [SHARED.footer_home, SHARED.footer_services, SHARED.footer_about, SHARED.footer_contact, SHARED.footer_faq];
        footerLinks.forEach(function (a, i) { if (footerLinkEs[i]) { storeOrig(a); a.innerHTML = footerLinkEs[i]; } });
        setEl('.footer-col:nth-child(4) h4', SHARED.footer_areas_h);
        var areasP = find('.footer-col:nth-child(4) p');
        if (areasP) { storeOrig(areasP); areasP.innerHTML = SHARED.footer_areas_p; }
        setEl('.footer-bottom', SHARED.footer_copy);

        // Mobile CTA bar — text nodes are after SVG, wrap them via textContent manipulation
        var callBtn = find('.mobile-cta-call');
        var textBtn = find('.mobile-cta-text');
        if (callBtn) {
            storeOrig(callBtn);
            var callSvg = callBtn.querySelector('svg');
            callBtn.textContent = SHARED.cta_call_text;
            if (callSvg) callBtn.insertBefore(callSvg, callBtn.firstChild);
        }
        if (textBtn) {
            storeOrig(textBtn);
            var textSvg = textBtn.querySelector('svg');
            textBtn.textContent = SHARED.cta_text_text;
            if (textSvg) textBtn.insertBefore(textSvg, textBtn.firstChild);
        }

        // Lang toggle button
        var btn = find('button.lang-toggle');
        if (btn) btn.textContent = 'CLICK FOR ENGLISH';
    }

    // ─── Toggle handler ──────────────────────────────────────────────────────
    function setLang(lang, save) {
        if (save !== false) localStorage.setItem('ct-lang', lang);
        if (lang === 'es') {
            applySpanish();
        } else {
            restoreAll();
            var btn = find('button.lang-toggle');
            if (btn) btn.textContent = 'HAZ CLIC PARA ESPAÑOL';
        }
    }

    // Wire up the toggle button
    document.addEventListener('DOMContentLoaded', function () {
        var btn = find('button.lang-toggle');
        if (btn) {
            btn.addEventListener('click', function () {
                setLang(localStorage.getItem('ct-lang') === 'es' ? 'en' : 'es');
            });
        }
        // Apply on load if Spanish preference is set
        if (localStorage.getItem('ct-lang') === 'es') {
            setLang('es', false);
        }
    });

})();
