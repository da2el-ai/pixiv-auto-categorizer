/**
 * 指定されたテキストを含む要素を検索し、関連する要素を返す関数
 * @param {string} text - 検索するテキスト
 * @param {string} selector - 対象となる要素のセレクタ
 * @param {number} [parent=0] - 上層への移動回数（デフォルトは0）
 * @returns {Element|null} 見つかった要素、または null
 */
function searchElement(text, selector, parent = 0, area = document) {
    // セレクタに一致する全ての要素を取得
    const elements = area.querySelectorAll(selector);

    // テキストを含む要素を探す
    for (let element of elements) {
        if (element.textContent.trim() === text) {
            let targetElement = element;

            // 指定された回数だけ親要素に移動
            for (let i = 0; i < parent; i++) {
                targetElement = targetElement.parentElement;
                // 移動できなくなった場合、ループを抜ける
                if (!targetElement) break;
            }

            return targetElement;
        }
    }
    // 見つからなかった場合は null を返す
    return null;
}

function setupAge(mainArea){
    // 年齢制限エリア
    const ageArea = searchElement('年齢制限', 'span', 1, mainArea);
    ageArea.classList.add('d2-age-area');
    console.log("ageArea", ageArea);
  
    // 年齢制限
    const ageAllLabel = searchElement('全年齢', 'div.charcoal-radio__label_div', 1, ageArea);
    console.log("ageAllLabel", ageAllLabel);
    ageAllLabel.querySelector('input').classList.add('d2-age-all');

    const ageR18Label = searchElement('R-18', 'div.charcoal-radio__label_div', 1, ageArea);
    ageR18Label.querySelector('input').classList.add('d2-age-r18');
    ageR18Label.click();

    const ageR18gLabel = searchElement('R-18G', 'div.charcoal-radio__label_div', 1, ageArea);
    ageR18gLabel.querySelector('input').classList.add('d2-age-r18g');
}


function setupAttribute(mainArea){
    // すでに class 割り当て済みなら抜ける
    if(document.querySelector('.d2-attr-area')) return;

    // 属性エリア
    const attrArea = searchElement('作品属性', 'span', 1, mainArea);

    // 属性エリアが存在しなければ抜ける
    if(!attrArea) return;

    attrArea.classList.add('d2-attr-area');

    // 属性
    const attrLoliLabel = searchElement('未成年', 'div.flex.w-fit', 2, attrArea);
    attrLoliLabel.querySelector('input').classList.add('d2-attr-loli');
    // attrLoliLabel.click();

    const attrFurryLabel = searchElement('ケモノ', 'div.flex.w-fit', 2, attrArea);
    attrFurryLabel.querySelector('input').classList.add('d2-attr-furry');

    const attrBlLabel = searchElement('男性同性愛', 'div.flex.w-fit', 2, attrArea);
    attrBlLabel.querySelector('input').classList.add('d2-attr-furry');

    const attrLesLabel = searchElement('女性同性愛', 'div.flex.w-fit', 2, attrArea);
    attrLesLabel.querySelector('input').classList.add('d2-attr-furry');
}

function setupAi(mainArea){
    // AIエリア
    const aiArea = searchElement('AI生成作品', 'span', 2, mainArea);
    aiArea.classList.add('d2-ai-area');

    const aiYesLabel = searchElement('はい', 'div.charcoal-radio__label_div', 1, aiArea);
    aiYesLabel.querySelector('input').classList.add('d2-ai-yes');
    aiYesLabel.click();

    const aiNoLabel = searchElement('はい', 'div.charcoal-radio__label_div', 1, aiArea);
    aiNoLabel.querySelector('input').classList.add('d2-ai-no');
}


function setup() {
    const mainArea = document.querySelector('.bg-background2');

    setupAge(mainArea);
    setupAi(mainArea);

    setInterval(()=>{
      setupAttribute(mainArea);
    }, 500);
}


(function () {
    setTimeout(() => {
        setup();
    }, 500);
})();
