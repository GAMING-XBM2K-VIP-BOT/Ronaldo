// TEMPLATE SETUP: replace these with your own Supabase project values.
// Use the anon/publishable key ONLY. Never put a service_role/secret key in browser code.
const SUPABASE_URL = "https://fwvjxhofgxbhwdsxpbzs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_9H0OPV6V3rksMjKCXPffVA_dMPF6RtW";

// Set to your deployed site URL (no trailing slash), or leave empty for local development.
const PUBLIC_APP_URL = "https://gamin-xbm2k-panel-shop-web.netlify.app";

function getPublicAppUrl(){
  return (PUBLIC_APP_URL || window.location.origin).replace(/\/+$/, '');
}

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

(function(){
  const cached=localStorage.getItem('SHOP_template_SHOP_name');
  const logo=localStorage.getItem('SHOP_template_SHOP_logo');
  if(cached){ document.title=cached; document.querySelectorAll('.brand-name').forEach(el=>el.textContent=cached); }
  if(logo){ document.querySelectorAll('.brand-mark').forEach(el=>el.innerHTML=`<img src="${logo.replace(/"/g,'&quot;')}" alt="" class="brand-logo">`); }
})();
