window.onload = function () {
  localStorage.removeItem("social-qa/telemetry");

  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("flexible-funnel")) {
      localStorage.removeItem(key);
    }
  });

  const pathName = window.location.pathname;
  if (pathName.startsWith("/tarefa") || pathName.startsWith("/question")) {
    const banner = document.getElementsByClassName("js-react-bottom-banner")[0];

    if (banner) banner.parentNode.removeChild(banner);

    const bottomBanner = document.querySelector(
      "div[data-testid=b2s_promo_bottom_banner_module_id]"
    );

    if (bottomBanner) bottomBanner.remove();
  }
};
