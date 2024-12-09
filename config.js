// Imports
import { 
  @Vigilant,
  @SwitchProperty,
  @TextProperty,
  @CheckboxProperty,
  @ButtonProperty,
  @SelectorProperty,
  @SliderProperty,
  @ColorProperty,
  @PercentSliderProperty,
  @DecimalSliderProperty,
  Color
} from "../Vigilance/index"

import { version } from "./utils/constants"

@Vigilant("Perry", "§3§lPerry§6Client", {
  getCategoryComparator: () => (a, b) => {
    const categories = ["General", "Temp"]
    return categories.indexOf(a.name) - categories.indexOf(b.name);
  }
})

// Settings Class
class Settings {    
  @SliderProperty({
    name: "Random Slider 1",
    description: "Does Something",
    min: 0,
    max: 100,
    category: "General"
  })
  sliderNumber = 0;

  @ColorProperty({
    name: 'Random Color 1',
    description: `Sets the color for something`,
    category: 'General'
  })
  colorColor = Color.WHITE;

  @SelectorProperty({
    name: "Random Selector 1",
    description: "Selects something from a list",
    category: "Temp",
    options: ["1", "2", "3"]
  })
  selectorNumber = 0;

  @SwitchProperty({
    name: "Random Switch 1",
    description: "Switches something on or off",
    category: "Temp"
  })
  switchBoolean = false;    

  // Init Viligant Settings Page
  constructor() {
    this.initialize(this);
    this.setCategoryDescription("General", `&f&r[&3Perry&6Client&7-v${version}&f]&3 by Perry5596`);
    this.setCategoryDescription("Temp", "temp")
  }
}
export default new Settings();