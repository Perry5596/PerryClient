// --------------------------------- Imports ---------------------------------
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
    const categories = ["General", "Fishing"]
    return categories.indexOf(a.name) - categories.indexOf(b.name);
  }
})

// --------------------------------- Settings ---------------------------------
class Settings { 
  // Init Viligant Settings Page
  constructor() {
    this.initialize(this);
    this.setCategoryDescription("General", `&f&r[&3Perry&6Client&7-v${version}&f]&3 by Perry5596`);
    this.setCategoryDescription("Fishing", `&f&r[&3Perry&6Client&7-v${version}&f]&3 by Perry5596`)
  }
  // --------------------------------- General ---------------------------------

  // --- Essential ---
  @ButtonProperty({
    name: "GitHub Link",
    description: "A link to our official GitHub Repository for updates.",
    placeholder: "Link",
    category: "General",
    subcategory: "Essential"
  })
  githubLink() {
    const url =
      "https://github.com/Perry5596/Perry";
    java.awt.Desktop.getDesktop().browse(new java.net.URI(url));
  }

  // --- Alerts ---
  @SwitchProperty({
    name: "Piggy Bank Alert",
    description: "Alerts you when your piggy bank cracks.",
    category: "General",
    subcategory: "Alerts"
  })
  piggyBankAlert = true;

  // --- Random ---
  @SliderProperty({
    name: "Random Slider 1",
    description: "Does Something",
    min: 0,
    max: 100,
    category: "General",
    subcategory: "Random"
  })
  sliderNumber = 0;

  @ColorProperty({
    name: 'Random Color 1',
    description: `Sets the color for something`,
    category: 'General',
    subcategory: "Random"
  })
  colorColor = Color.WHITE;

  // --------------------------------- Fishing ---------------------------------
  // Renders
  @SwitchProperty({
    name: "Trophy Fishing Waypoints",
    description: "Renders where to fish for specific trophy fish.",
    category: "Fishing",
    subcategory: "Renders"
  })
  renderTrophyLocations = true;

  @SelectorProperty({
    name: "Random Selector 1",
    description: "Selects something from a list",
    category: "Fishing",
    options: ["1", "2", "3"]
  })
  selectorNumber = 0;

  @SwitchProperty({
    name: "Random Switch 1",
    description: "Switches something on or off",
    category: "Fishing"
  })
  switchBoolean = false;    

}

export default new Settings();