
function animateButton(target) {
    const itemBlock = [...document.getElementsByClassName('header_item_link')];
    itemBlock.map(block => {
        block.classList.remove('active_button');
    });
     
    target.classList.add('active_button');
}

export default animateButton;