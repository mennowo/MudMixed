export function HandleNavMenuToggled(isOpen) {
    const layoutElement = document.querySelector(".mud-layout");
    if (isOpen) {
        layoutElement.classList.replace("mud-drawer-close-responsive-md-left", "mud-drawer-open-responsive-md-left");
        console.log("Open");
    } else {
        layoutElement.classList.replace("mud-drawer-open-responsive-md-left", "mud-drawer-close-responsive-md-left");
        console.log("Close");
    }
}

export function HandleSecondListToggled(isOpen) {
    const layoutElement = document.querySelector(".mud-layout");
    if (isOpen) {
        layoutElement.classList.replace("mud-drawer-close-responsive-md-right", "mud-drawer-open-responsive-md-right");
        console.log("Open");
    } else {
        layoutElement.classList.replace("mud-drawer-open-responsive-md-right", "mud-drawer-close-responsive-md-right");
        console.log("Close");
    }
}