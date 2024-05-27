/**
 * options.js
 *
 * @license MIT, https://opensource.org/license/mit
 * @version 2.0
 * @author  G.A. Jazali, dev@jazali.org
 * @updated 2024-05-28
 * @link    https://addons.mozilla.org/en-US/firefox/addon/put-site-domain-in-tab-title/
 *
 */

function saveOptions(e) {
  e.preventDefault();
  values = document.querySelector("#exceptions").value;
  browser.storage.sync.set({
    exceptions: values,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    defaultValues = "colab.research.google.com=Colab\nmail.google.com=Gmail\noutlook.live.com=Outlook";
    document.querySelector("#exceptions").value = result.exceptions || defaultValues;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("exceptions");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
