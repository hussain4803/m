(function(){
	const htmlEl = document.documentElement;
	const yearEl = document.getElementById('year');
	if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

	const $ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

	// Simple i18n using data attributes; we still keep a dictionary for extensibility
	function applyLanguage(lang){
		const isAr = lang === 'ar';
		htmlEl.lang = isAr ? 'ar' : 'en';
		htmlEl.dir = isAr ? 'rtl' : 'ltr';
		$('#lang-ar')[0]?.setAttribute('aria-pressed', String(isAr));
		$('#lang-en')[0]?.setAttribute('aria-pressed', String(!isAr));
		$('[data-i18n-key]').forEach(node=>{
			const value = node.getAttribute(isAr ? 'data-ar' : 'data-en');
			if(value){ node.textContent = value; }
		});
		try{ localStorage.setItem('lang', lang); }catch(e){}
	}

	function detectDefault(){
		try{
			const saved = localStorage.getItem('lang');
			if(saved){ return saved; }
		}catch(e){}
		const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
		return navLang.startsWith('ar') ? 'ar' : 'en';
	}

	$('#lang-ar')[0]?.addEventListener('click', ()=>applyLanguage('ar'));
	$('#lang-en')[0]?.addEventListener('click', ()=>applyLanguage('en'));
	applyLanguage(detectDefault());

	// Inject monochrome SVG icons into social buttons (currentColor)
	const igSvg = '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.086 3.27.24 2.76.46c-.52.226-.96.528-1.397.965A3.86 3.86 0 0 0 .398 2.822c-.22.51-.374 1.09-.412 1.943C-.01 5.618 0 5.89 0 8s-.01 2.382.048 3.235c.038.853.192 1.433.412 1.943.226.52.528.96.965 1.397.437.437.877.739 1.397.965.51.22 1.09.374 1.943.412C5.556 15.99 5.829 16 8 16s2.382-.01 3.235-.048c.853-.038 1.433-.192 1.943-.412.52-.226.96-.528 1.397-.965.437-.437.739-.877.965-1.397.22-.51.374-1.09.412-1.943C15.99 10.382 16 10.11 16 8s-.01-2.382-.048-3.235c-.038-.853-.192-1.433-.412-1.943a3.86 3.86 0 0 0-.965-1.397 3.86 3.86 0 0 0-1.397-.965c-.51-.22-1.09-.374-1.943-.412C10.382.01 10.11 0 8 0Zm0 1.444c2.136 0 2.39.008 3.233.046.78.035 1.203.166 1.485.276.374.146.64.32.92.6.28.28.454.546.6.92.11.282.241.706.276 1.485.038.844.046 1.097.046 3.233s-.008 2.39-.046 3.233c-.035.78-.166 1.203-.276 1.485a2.42 2.42 0 0 1-.6.92 2.42 2.42 0 0 1-.92.6c-.282.11-.706.241-1.485.276-.844.038-1.097.046-3.233.046s-2.39-.008-3.233-.046c-.78-.035-1.203-.166-1.485-.276a2.42 2.42 0 0 1-.92-.6 2.42 2.42 0 0 1-.6-.92c-.11-.282-.241-.706-.276-1.485C1.452 10.39 1.444 10.136 1.444 8s.008-2.39.046-3.233c.035-.78.166-1.203.276-1.485.146-.374.32-.64.6-.92.28-.28.546-.454.92-.6.282-.11.706-.241 1.485-.276C5.61 1.452 5.864 1.444 8 1.444ZM8 3.889a4.111 4.111 0 1 0 0 8.222 4.111 4.111 0 0 0 0-8.222Zm0 1.6a2.511 2.511 0 1 1 0 5.022A2.511 2.511 0 0 1 8 5.489Zm4.222-.933a.889.889 0 1 1-1.778 0 .889.889 0 0 1 1.778 0Z"/></svg>';
	$('.icon-btn.ig').forEach(el=>{ if(!el.innerHTML.trim()) el.innerHTML = igSvg; });

	const waSvg = '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M13.6 2.4A7.9 7.9 0 0 0 8 .5 7.5 7.5 0 0 0 .6 8.7L0 15.5l6.9-1.8a7.6 7.6 0 0 0 11-6.5 7.9 7.9 0 0 0-2.3-4.8ZM6.8 12.9l-3.9 1 1-3.8a6 6 0 1 1 2.9 2.8Zm4.1-3.1c-.2-.1-1.2-.6-1.3-.7-.2-.1-.3-.1-.5.1-.1.2-.6.7-.7.8-.1.1-.3.1-.5 0-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3l-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3.1-.4.2-.2.2-.7.7-.7 1.7s.7 2 1 2.3c.2.3 1.4 2.2 3.5 3.1.5.2.9.4 1.2.5.5.2 1 .2 1.4.1.4-.1 1.2-.5 1.3-1 .2-.5.2-.9.1-1 0-.1-.2-.1-.4-.2Z"/></svg>';
	$('.icon-btn.wa').forEach(el=>{ if(!el.innerHTML.trim()) el.innerHTML = waSvg; });
})();
