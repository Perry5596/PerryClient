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

import { consts } from "./utils/constants"

@Vigilant("PerryClient", "§3§lPerry§6Client", {
  getCategoryComparator: () => (a, b) => {
    const categories = ["General", "Dungeons", "Fishing"]
    return categories.indexOf(a.name) - categories.indexOf(b.name);
  }
})

// --------------------------------- Settings ---------------------------------
class Settings { 
  // Init Viligant Settings Page
  constructor() {
    this.initialize(this);
    this.setCategoryDescription("General", consts.HEADER + "&f&bGeneral Features\n");
    this.setCategoryDescription("Dungeons", consts.HEADER + "&f&bDungeon Features\n");
    this.setCategoryDescription("Fishing", consts.HEADER + "&f&bFishing Features\n");
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
      "https://github.com/Perry5596/PerryClient";
    java.awt.Desktop.getDesktop().browse(new java.net.URI(url));
  }

  @SwitchProperty({
    name: "Discord Webhook Toggle",
    description: "Toggles the Discord Webhook for all reminders/alerts that go to webhooks.",
    category: "General",
    subcategory: "Essential"
  })
  webhookToggle = false;

  @TextProperty({
    name: "Discord Webhook URL",
    description: "The URL for the Discord Webhook for all reminders/alerts that go to webhooks.",
    placeholder: "Discord webhook url here...",
    category: "General",
    subcategory: "Essential"
  })
  webhookURL = "";

  // --- Alerts ---
  @SwitchProperty({
    name: "Piggy Bank Alert",
    description: "Alerts you when your piggy bank cracks.",
    category: "General",
    subcategory: "Alerts"
  })
  piggyBankAlert = true;

  // --- ESP's ---
  @SwitchProperty({
    name: "Ghost ESP",
    description: "Renders ESP for Ghosts in the Dwarven Mines.",
    category: "General",
    subcategory: "ESP's"
  })
  ghostESP = true;

  @ColorProperty({
    name: 'Ghost ESP Color',
    description: `Sets the color for the Ghost ESP`,
    category: 'General',
    subcategory: "ESP's"
  })
  ghostEspColor = Color.RED;

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

  // --------------------------------- Dungeons ---------------------------------
  // ESP's
  @SwitchProperty({
    name: "Dungeon Teammate ESP",
    description: "Renders ESP for all teammates in Dungeons.",
    category: "Dungeons",
    subcategory: "ESP's"
  })
  dungeonTeammateESP = true;

  @ColorProperty({
    name: 'Dungeon Teammate ESP Color',
    description: `Sets the color for the Dungeon Teammate ESP`,
    category: 'Dungeons',
    subcategory: "ESP's"
  })
  dungeonTeammateESPColor = Color.GREEN;

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