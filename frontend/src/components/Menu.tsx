const Menu = () => {
  return (
    <div id="Menu">
      <div className="menu-group">
        <div className="pet-selection all-pets selected-pets">
          <div className="selection-wrap all-pets-wrap">
            <img
              className="pet-selection-svg all-pets-svg "
              src="images/all-pets.svg"
              alt="all-pets"
            />
            <span className="pet-select-text all-pets-text"></span>
          </div>
        </div>
        <div className="pet-selection cat-pet">
          <div className="selection-wrap cat-pet-wrap">
            <img
              className="pet-selection-svg cat-pet-svg"
              src="images/cat-pet.svg"
              alt="cat-pet"
            />
            <span className="pet-select-text  cat-pet-text"></span>
          </div>
        </div>
        <div className="pet-selection dog-pet">
          <div className="selection-wrap dog-pet-wrap">
            <img
              className="pet-selection-svg dog-pet-svg"
              src="images/dog-pet.svg"
              alt="dog-pet"
            />
            <span className="pet-select-text  dog-pet-text"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
