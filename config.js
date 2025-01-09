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
    const categories = ["General", "Combat", "Dungeons", "Fishing"]
    return categories.indexOf(a.name) - categories.indexOf(b.name);
  }
})

// --------------------------------- Settings ---------------------------------
class Settings { 
  // Init Viligant Settings Page
  constructor() {
    this.initialize(this);
    this.setCategoryDescription("General", consts.HEADER + "&f&bGeneral Features\n");
    this.setCategoryDescription("Combat", consts.HEADER + "&f&bCombat Features\n");
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

  @SwitchProperty({
    name: "Booster Cookie Alert",
    description: "Alerts you of your Booster Cookie status.",
    category: "General",
    subcategory: "Alerts"
  })
  boosterCookieAlert = true;

  // --- QOL ---
  @SwitchProperty({
    name: 'Click To Visit',
    description: 'Click a chat message that contains "visit" to visit that person.',
    category: 'General',
    subcategory: 'QOL'
  })
  clickToVisit = true;

  // --------------------------------- Combat ---------------------------------
  // --- ESP's ---
  @SwitchProperty({
    name: "Ghost ESP",
    description: "Renders ESP for Ghosts in the Dwarven Mines.",
    category: "Combat",
    subcategory: "ESP's"
  })
  ghostESP = true;

  @ColorProperty({
    name: 'Ghost ESP Color',
    description: `Sets the color for the Ghost ESP`,
    category: 'Combat',
    subcategory: "ESP's"
  })
  ghostEspColor = Color.RED;

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

}

export default new Settings();