const defaultSelect = () => {
  const element = document.querySelector('.js-gallery-choices');
  const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
    allowHTML: true,

    classNames: {
      containerOuter: 'broadcasts__choices',
      containerInner: 'broadcasts__choices__inner',
      input: 'broadcasts__choices__input',
      inputCloned: 'broadcasts__choices__input--cloned',
      list: 'broadcasts__choices__list',
      listItems: 'broadcasts__choices__list--multiple',
      listSingle: 'broadcasts__choices__list--single',
      listDropdown: 'broadcasts__choices__list--dropdown',
      item: 'broadcasts__choices__item',
      itemSelectable: 'broadcasts__choices__item--selectable',
      itemDisabled: 'broadcasts__choices__item--disabled',
      itemChoice: 'broadcasts__choices__item--choice',
      placeholder: 'broadcasts__choices__placeholder',
      group: 'broadcasts__choices__group',
      groupHeading: 'broadcasts__choices__heading',
      button: 'broadcasts__choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-choices'
    },
  });
};

defaultSelect();
