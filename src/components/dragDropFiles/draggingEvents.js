
const overrideEventDefaults = event => {
    event.preventDefault();
    event.stopPropagation();
};

const preventDropOnRestWindow = () => {
    window.addEventListener("dragover", event => {
        overrideEventDefaults(event);
      });

    window.addEventListener("drop", event => {
        overrideEventDefaults(event);
      });
};

const restoreDropOnRestWindow = () => {
    window.removeEventListener("dragover", overrideEventDefaults);
    window.removeEventListener("drop", overrideEventDefaults);
};


export {
    overrideEventDefaults,
    preventDropOnRestWindow,
    restoreDropOnRestWindow,
}
