//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.84;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.84] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
 * 
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Auto Save After New Game
 * 
 * Normally, when starting a new game through the "New Game" option, there is
 * no auto save trigger. However, if you start a new game or load a saved game,
 * then go to the Game End screen, return back to the title screen, then start
 * a New Game, the auto save trigger occurs when it shouldn't. The Core Engine
 * will now patch this and prevent the trigger from taking place.
 * 
 * ---
 * 
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Debug Console Refresh Bug
 * 
 * When pressing F5 to refresh while the debug console (DevTools) is open,
 * some graphics will fail to load properly. This started occurring since the
 * RPG Maker MZ 1.5.0 update and the code for loading the images has now been
 * reverted to the 1.4.4 version where it was last stable.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 * 
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Skill List Active After Party Member Change
 * 
 * If the skill list is active (ie. the player can move the cursor around) and
 * the party member currently being viewed is changed via the button commands,
 * then previously, RPG Maker MZ would still have that window be active despite
 * having the cursor hidden temporarily. Upon pressing direction buttons, the
 * cursor reveals itself and both the skill type window and skill list window
 * are both active, making way for lots of potential problems to happen.
 * 
 * ---
 * 
 * Sprite Removal and Destroy Crash
 * 
 * A texture check will now occur for sprites that are being removed and
 * destroyed in order to prevent crashes. In the off chance that someone
 * creates a sprite through a script call and removes it through such, the
 * likelihood of this occurance becomes higher. This makes the "destroy"
 * property take into account a texture check in order to see if the sprite
 * removal is taking extra steps and will reduce those extra steps.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Water Tile Bug
 * 
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * The plugin will not fix the problem itself since flag data is delicate and
 * should not be tampered with midgame as the changes made by the plugin might
 * not match the desired settings.
 * 
 * This plugin, however, will also send out an alert message when coming across
 * such a tile. Pay attention to it and do one of the following two steps above
 * to fix the problem.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * ---
 *
 * === Actors-Related Notetags ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes-Related Notetags ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies-Related Notetags ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations-Related Notetags ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 * 
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 * 
 * <Scroll Lock X>
 * <Scroll Lock Y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - This will use the display nudge setting found in the Plugin Parameters.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 * 
 * <Scroll Lock X: x>
 * <Scroll Lock Y: y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present and will nudge the map camera slightly.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - Replace 'x' and 'y' with numbers between 0 and 1 to represent how much is
 *   being judged.
 *   - For example, for a 1280x720 resolution, a 27 tile wide map will benefit
 *     from a nudge of 0.15625. Play with these numbers to determine the best
 *     value for your maps.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 * - This does NOT set the max cap to be lower than the default cap.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 * 
 * ---
 * 
 * === Tileset-Related Notetags ===
 * 
 * ---
 * 
 * <Taller By x: id>
 * 
 * - Used for: Tileset Notetags
 * - Changes any page B, C, D, E tile marked by terrain tag 'id' to be taller
 *   by 'x' tiles.
 *   - Replace 'x' with a number representing the tiles to be taller by.
 *   - Replace 'id' with a number representing the Terrain Tag you will use to
 *     mark this tile with in the Database editor.
 * - When placing these tiles on the map, all you have to do is just place the
 *   bottom tile.
 *   - ie.: For a tree that's one tile taller, just place the tile at the
 *     bottom where you see the trunk.
 *   - Then, in-game, the tree will appear taller by one tile as marked.
 * - Depending on the priority settings, the tile will appear on different
 *   layers.
 *   - O will place the tile on the below player layer.
 *   - X will place the tile on the same level as the player.
 *   - ★ will place the tile on the above player layer.
 *   - O/X layer tiles have a special property where tall sprites standing in
 *     front of it will no longer clip the top of the sprite, while sprites
 *     standing behind it will be covered by it.
 *   - The X layer sprite will only have a hitbox of 1x1 at the base.
 * - This does not work with events using tiles as graphics. Instead, if you
 *   want to do similar, use the Event & Movement Core's <Tile Expand> notetags
 *   for better control.
 * 
 * ---
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <Grid>
 * <Battle Grid>
 * 
 * <No Grid>
 * <No Battle Grid>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Requires VisuMZ_2_BattleGridSystem!
 * - Changes the battle system to utilize the Battle Grid System or not.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * - If none of these notetags or comment tags are found, refer to the default
 *   settings found in the Plugin Parameters.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Audio Plugin Commands ===
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
 * 
 * ---
 * 
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Rotate by Angle
 * - Rotates target picture by a amount angle over a set duration instead of
 *   continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Adjust Angle:
 *   - What is the angle you wish to rotate the picture by?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Rotate to Angle
 * - Rotates target picture to a certain angle over a set duration
 *   instead of continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Target Angle:
 *   - What is the target angle you wish to rotate the picture?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 * - Some battle systems REQUIRE their specific plugins!
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 * 
 * === Text Popup Command ===
 * 
 * ---
 * 
 * Text Popup: Show Text
 * - Adds text to a text popup window to briefly appear.
 * - Multiple text popups will be queued.
 * - Does not halt the game and works parallel to game activity.
 * 
 *   Text:
 *   - Write the text that you want to appear here.
 *   - You may use text codes.
 * 
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 * 
 *   CTRL + n: Quick Load:
 *   - CTRL + a number from 1 to 9 will yield a quick load of that safe file.
 *   - Does not count auto saves.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 *   Shift+R: Recover All:
 *   - For Play Test only!
 *   - During battle, pressing SHIFT + R will refill the whole party's HP
 *     and MP and status.
 * 
 *   Shift+T: Full TP
 *   - For Play Test only! 
 *   - During battle, pressing SHIFT + T will refill the whole party's TP.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 * 
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 * 
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 * 
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Finish Entry:
 *   - Text used to describe finish entry.
 * 
 *   Page Change:
 *   - Text used to describe character page changing.
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 * 
 *   Blur Strength:
 *   - Strength used for menu background snapshots.
 *   - Default: 8. Higher is stronger. Lower is weaker.
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
 *
 * ---
 *
 * Background Settings
 *
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 *
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Split "Escape":
 *   - Used ONLY for those making their own custom keyboard key input maps.
 *   - "Split" option makes separate instances of "Cancel" and "Menu" keys.
 *   - "Don't" option will consolidate both into "Escape" keys.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 * 
 *   Show Actor Level?:
 *   - Show the actor level when displaying actors?
 *   - Affects for most windows in-game.
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 * 
 * Maps
 * 
 *   Scroll Lock Small X?:
 *   Scroll Lock Small Y?:
 *   - Automatically scroll lock X/Y scrolling if the map is too small?
 *   - Useful for 1280x720 resolutions when the map is 27 tiles wide.
 *     - This will get rid of the subtle scrolling when moving from one half of
 *       the screen to the other.
 *   - This setting will be disabled if the map is zoomed in.
 * 
 *   Locked Display X?:
 *   Locked Display Y?:
 *   - What display X/Y value do you want for auto-scroll locked maps?
 *   - Use a number between 0 and 1 for best results.
 * 
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 * 
 *   State Icons Non-Frame:
 *   - Replace sprite frame system for non-frame.
 *   - Better for any instances where icons are zoomed.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 * 
 * These settings also allow you to add scroll bars to scrollable windows,
 * letting the player know how much of the window's contents there are left for
 * scrolling. The scroll bar can be enabled, disabled, have its thickness
 * changed, colors changed, etc.
 *
 * ---
 *
 * Window Defaults
 * 
 *   Enable Masking:
 *   - Enable window masking (windows hide other windows behind them)?
 *   - WARNING: Turning it on can obscure data.
 * 
 *   Correct Skin Bleed:
 *   - Allows you to enable/disable the window skin bleeding correction for
 *     those who wish to use the 95 calculator instead of 96 to augment higher
 *     and larger screen resolutions.
 *   - Read the "Bug Fixes" section if you don't understand what the window
 *     skin bleeding problem is.
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Scroll Bar
 * 
 *   Show Scroll Bar?:
 *   - Show the scroll bar for scrollable windows?
 * 
 *   Thickness:
 *   - How thick do you want the scroll bar to be?
 * 
 *   Offset:
 *   - How much do you want to offset the scroll bar by?
 * 
 *   Bar Body Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Opacity:
 *   - What opacity value do you want the off bar opacity to be?
 *   - Use a number between 0 and 255.
 * 
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
 * 
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 *
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.84: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New notetags added by Arisu:
 * *** Tileset Notetag: <Taller By x: id>
 * **** Changes any page B, C, D, E tile marked by terrain tag 'id' to be
 *      taller by 'x' tiles.
 * **** When placing these tiles on the map, all you have to do is just place
 *      the bottom tile.
 * ***** ie.: For a tree that's one tile taller, just place the tile at the
 *       bottom where you see the trunk. Then, in-game, the tree will appear
 *       taller by one tile as marked.
 * **** O/X layer tiles have a special property where tall sprites standing in
 *      front of it will no longer clip the top of the sprite, while sprites
 *      standing behind it will be covered by it.
 * **** This does not work with events using tiles as graphics. Instead, if
 *      you want to do similar, use the Event & Movement Core's <Tile Expand>
 *      notetags for better control.
 * 
 * Version 1.83: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated documentation for <param Max: x> notetag.
 * *** This does not set the max cap to be lower than the default cap.
 * * New Feature!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > UI Settings > State Icons Non-Frame
 * **** Replace sprite frame system for non-frame.
 * **** Better for any instances where icons are zoomed.
 * 
 * Version 1.82: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added failsafe for $textPopup when some windows have not been initialized
 *    and requesting the text popup.
 * * New Feature!
 * ** New Plugin Parameter and playtest shortcut added by Arisu:
 * *** Plugin Parameters > QoL Settings > Playtest > CTRL + n: Quick Load
 * **** CTRL + a number from 1 to 9 will yield a quick load of that save file.
 * **** Does not count auto saves.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.81: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added for future plugin: VisuMZ_2_BattleGridSystem
 * *** <Grid>
 * *** <No Grid>
 * **** Requires the future plugin VisuMZ_2_BattleGridSystem!
 * **** Read the help section for more information on these.
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Window > Correct Skin Bleed
 * **** Allows you to enable/disable the window skin bleeding correction for
 *      those who wish to use the 95 calculator instead of 96 to augment higher
 *      and larger screen resolutions.
 * **** Read the "Bug Fixes" section if you don't understand what the window
 *      skin bleeding problem is.
 * 
 * Version 1.80: January 18, 2024
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Auto Save After New Game
 * **** Normally, when starting a new game through the "New Game" option, there
 *      is no auto save trigger. However, if you start a new game or load a
 *      saved game, then go to the Game End screen, return back to the title
 *      screen, then start a New Game, the auto save trigger occurs when it
 *      shouldn't. The Core Engine will now patch this and prevent the trigger
 *      from taking place.
 * 
 * Version 1.79: November 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Command added by Arisu:
 * ** Text Popup: Show Text
 * *** Adds text to a text popup window to briefly appear.
 * *** Multiple text popups will be queued.
 * *** Does not halt the game and works parallel to game activity.
 * 
 * Version 1.78: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL:
 * *** QoL Settings > Battle Test > Shift+R: Recover All
 * **** For Play Test only! During battle, pressing SHIFT + R will refill the
 *      whole party's HP and MP and status.
 * *** QoL Settings > Battle Test > Shift+T: Full TP
 * **** For Play Test only! During battle, pressing SHIFT + T will refill the
 *      whole party's TP.
 * 
 * Version 1.77: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the BGS related Plugin Commands to crash.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Scroll-Linked Pictures now work if the image file are in a folder within
 *    the img/pictures/ folder without the folder needing a ! at the start.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Picture: Rotate by Angle
 * **** Rotates target picture by a amount angle over a set duration instead of
 *      continuously.
 * **** View help file for more information on the Plugin Command.
 * *** Picture: Rotate to Angle
 * **** Rotates target picture to a certain angle over a set duration instead
 *      of continuously.
 * **** View help file for more information on the Plugin Command.
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Menu Button Assist > General > Split "Escape":
 * **** Used ONLY for those making their own custom keyboard key input maps.
 * **** "Split" option makes separate instances of "Cancel" and "Menu" keys.
 * **** "Don't" option will consolidate both into "Escape" keys.
 * 
 * Version 1.76: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a bug that displayed the incorrect button press key for name input
 *    processing's cancel action. Fix made by Olivia.
 * 
 * Version 1.75: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** In Scene_Name, when using the Keyboard Input, the button assist windows
 *    will no longer display the keyboard shortcuts for Ok and Cancel, but
 *    instead, show them for ENTER and BKSP. Update made by Arisu.
 * ** In Scene_Name, when manual inputting, the Page Up/Dn keys are now
 *    displayed to show changing character pages.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by AndyL:
 * *** Params > Keyboard Input > Button Assist > Finish Entry
 * **** Text used to describe finish entry.
 * *** Params > Keyboard Input > Button Assist > Page Change
 * **** Text used to describe changing character pages.
 * *** Params > Window Settings > Scroll Bar
 * **** These settings also allow you to add scroll bars to scrollable windows,
 *      letting the player know how much of the window's contents there are
 *      left for scrolling. The scroll bar can be enabled, disabled, have its
 *      thickness changed, colors changed, etc.
 * 
 * Version 1.74: February 16, 2023
 * * Compatibility Update!
 * ** Plugin Commands for: Audio: Change Current BGM/BGS Volume/Pitch/Pan
 *    should now work properly with the updated RPG Maker MZ version and
 *    WebAudio changes. Update made by Arisu.
 * 
 * Version 1.73: January 20, 2023
 * * Compatibility Update!
 * ** Added better Effekseer version compatibility.
 * 
 * Version 1.72: December 15, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Skill List Active After Party Member Change
 * **** If the skill list is active (ie. the player can move the cursor around)
 *      and the party member currently being viewed is changed via the button
 *      commands, then previously, RPG Maker MZ would still have that window be
 *      active despite having the cursor hidden temporarily. Upon pressing
 *      direction buttons, the cursor reveals itself and both the skill type
 *      window and skill list window are both active, making way for lots of
 *      potential problems to happen.
 * ** Water Tile Bug
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * *** The plugin will not fix the problem itself since flag data is delicate
 *     and should not be tampered with midgame as the changes made by the
 *     plugin might not match the desired settings.
 * *** This plugin, however, will also send out an alert message when coming
 *     across such a tile. Pay attention to it and do one of the following two
 *     steps above to fix the problem.
 * * Documentation Update!
 * ** Added "Skill List Active After Party Member Change" section to the
 *    "Important Changes: Bug Fixes" section of the help file.
 * ** Added "Water Tile Bug" section to the "Important Changes: Bug Fixes"
 *    section of the help file.
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Menu Backgrounds > Blur Strength
 * **** Strength used for menu background snapshots.
 * 
 * Version 1.71: November 10, 2022
 * * Bug Fixes!
 * ** Title Command Window should now allow for more than 4 custom commands
 *    without hidden commands. Fix made by Irina.
 * ** Fixed a problem with repeating animations from Visual State Effects
 *    causing softlocks. Fix made by Olivia.
 * 
 * Version 1.70: October 6, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** A texture check will now occur for sprites that are being removed and
 *     destroyed in order to prevent crashes. In the off chance that someone
 *     creates a sprite through a script call and removes it through such, the
 *     likelihood of this occurance becomes higher. This makes the destroy
 *     property take into account a texture check in order to see if the sprite
 *     removal is taking extra steps and will reduce those extra steps.
 * * Documentation Update!
 * ** Added "Sprite Removal and Destroy Crash" section to the "Important
 *    Changes: Bug Fixes" section.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.69: September 8, 2022
 * * Bug Fixes!
 * ** Fixed the combination of Button Assist Location: Top with Help Location:
 *    Bottom combination not working properly. Fix made by Irina.
 * 
 * Version 1.68: August 4, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by Archeia:
 * *** Audio: Change Current BGM Volume
 * *** Audio: Change Current BGM Pitch
 * *** Audio: Change Current BGM Pan
 * *** Audio: Change Current BGS Volume
 * *** Audio: Change Current BGS Pitch
 * *** Audio: Change Current BGS Pan
 * **** Changes the current BGM/BGS volume/pitch/pan without changing any of
 *      the current BGM/BGS's other properties and without restarting BGM/BGS.
 * 
 * Version 1.67: July 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added notes for Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * *** This setting will be disabled if the map is zoomed in.
 * * New Features!
 * ** New map notetags added by Irina and sponsored by AndyL:
 * *** <Scroll Lock X>
 * *** <Scroll Lock X: x>
 * *** <Scroll Lock Y>
 * *** <Scroll Lock Y: y>
 * **** Causes the map to not scroll left/right(x) or up/down(y). Useful for
 *      when maps are just slightly smaller than normal and the tiny scrolling
 *      is distracting.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small X?
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small Y?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display X?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display Y?
 * **** Automatically scroll locks small maps to prevent them from scrolling
 *      horizontally/vertically. Useful for 1280x720 resolutions when the map
 *      is 27 tiles wide. This will get rid of the subtle scrolling when moving
 *      from one half of the screen to the other.
 * **** This setting will be disabled if the map is zoomed in.
 * * Feature Update!
 * ** Warnings added to Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 * Version 1.66: July 14, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Debug Console Refresh Bug
 * **** When pressing F5 to refresh while the debug console (DevTools) is open,
 *      some graphics will fail to load properly. This started occurring since
 *      the RPG Maker MZ 1.5.0 update and the code for loading the images has
 *      now been reverted to the 1.4.4 version where it was last stable.
 * * Documentation Update!
 * ** Help file updated for new major bug fix.
 * 
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
 * 
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Audio
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmVolume
 * @text Audio: Change Current BGM Volume
 * @desc Changes the current BGM volume without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGM's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPitch
 * @text Audio: Change Current BGM Pitch
 * @desc Changes the current BGM pitch without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGM's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPan
 * @text Audio: Change Current BGM Pan
 * @desc Changes the current BGM pan without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGM's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsVolume
 * @text Audio: Change Current BGS Volume
 * @desc Changes the current BGS volume without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGS's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPitch
 * @text Audio: Change Current BGS Pitch
 * @desc Changes the current BGS pitch without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGS's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPan
 * @text Audio: Change Current BGS Pan
 * @desc Changes the current BGS pan without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGS's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Game
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Gold
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @max 100
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotateBy
 * @text Picture: Rotate By Angle
 * @desc Rotates target picture by a amount angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg AdjustAngle:eval
 * @text Adjust Angle
 * @desc What is the angle you wish to rotate the picture by?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotate
 * @text Picture: Rotate to Angle
 * @desc Rotates target picture to a certain angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg TargetAngle:eval
 * @text Target Angle
 * @desc What is the target angle you wish to rotate the picture?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ScreenShake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TextPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TextPopupShow
 * @text Text Popup: Show Text
 * @desc Adds text to a text popup window to briefly appear.
 * Multiple text popups will be queued.
 *
 * @arg text:json
 * @text Text
 * @type note
 * @desc Write the text that you want to appear here.
 * You may use text codes.
 * @default "Insert message here."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"false","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","BattleTest":"","BTestItems:eval":"true","BTestWeapons:eval":"true","BTestArmors:eval":"true","BTestAddedQuantity:num":"90","ShiftR_Toggle:eval":"true","ShiftT_Toggle:eval":"true","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Pictures":"","AntiZoomPictures:eval":"true","PictureContainers":"","DetachBattlePictureContainer:eval":"false","DetachMapPictureContainer:eval":"false","Misc":"","AnimationMirrorOffset:eval":"false","AutoStretch:str":"default","FontShadows:eval":"false","FontSmoothing:eval":"true","FontWidthFix:eval":"true","KeyItemProtect:eval":"true","MapNameTextCode:eval":"true","ModernControls:eval":"true","MvAnimationRate:num":"4","NewGameCommonEventAll:num":"0","NoTileShadows:eval":"false","PixelateImageRendering:eval":"false","RequireFocus:eval":"false","ShortcutScripts:eval":"true","SmartEventCollisionPriority:eval":"true","SubfolderParse:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * Some battle systems REQUIRE their specific plugins!
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Maps":"","AutoScrollLockX:eval":"true","AutoScrollLockY:eval":"true","DisplayLockX:num":"0.15625","DisplayLockY:num":"0.00000","Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4","ScrollBar":"","ShowScrollBar:eval":"true","BarThickness:num":"2","BarOffset:num":"+2","BarBodyColor:str":"0","OffBarColor:str":"7","OffBarOpacity:num":"128","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","TextPopup":"","DurationPerChat:num":"1.5","MinDuration:num":"90","MaxDuration:num":"300"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomBetween(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param CtrlQuickLoad:eval
 * @text CTRL + n: Quick Load
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc CTRL + a number from 1 to 9 will yield a quick load of
 * that safe file. Does not count auto saves.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param ShiftR_Toggle:eval
 * @text Shift+R: Recover All
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + R will refill the whole party's HP and MP and status.
 * @default true
 *
 * @param ShiftT_Toggle:eval
 * @text Shift+T: Full TP
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + T will refill the whole party's TP.
 * @default true
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Finish:str
 * @text Finish Entry
 * @parent ButtonAssist
 * @desc Text used to describe finish entry.
 * @default Finish
 * 
 * @param PageChange:str
 * @text Page Change
 * @parent ButtonAssist
 * @desc Text used to describe character page changing.
 * @default Page
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 * 
 * @param BlurStrength:num
 * @text Blur Strength
 * @desc Strength used for menu background snapshots.
 * Default: 8. Higher is stronger. Lower is weaker.
 * @default 8
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SplitEscape:eval
 * @text Split "Escape"
 * @parent General
 * @type boolean
 * @on Split
 * @off Don't
 * @desc "Split" makes separate instances of "Cancel" and "Menu".
 * "Don't" will consolidate both into "Escape".
 * @default false
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
 *
 */
/* ----------------------------------------------------------------------------
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
 * @text Background Type
 * @parent OptionsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Affects for most windows in-game.
 * @default true
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param StateIconsNonFrame:eval
 * @text State Icons Non-Frame
 * @parent UIArea
 * @type boolean
 * @on Non-Frame
 * @off Normal
 * @desc Replace sprite frame system for non-frame.
 * Better for any instances where icons are zoomed.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param CorrectSkinBleeding:eval
 * @text Correct Skin Bleed
 * @parent WindowDefaults
 * @type boolean
 * @on Correct
 * @off Don't Correct
 * @desc Corrects window skin bleeding bug when used with higher
 * screen resolutions?
 * @default true
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36. Avoid using odd numbers.
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param ScrollBar
 * @text Scroll Bar
 *
 * @param ShowScrollBar:eval
 * @text Show Scroll Bar?
 * @parent ScrollBar
 * @type boolean
 * @on Show Scroll Bar
 * @off Don't Show
 * @desc Show the scroll bar for scrollable windows?
 * @default true
 *
 * @param BarThickness:num
 * @text Thickness
 * @parent ScrollBar
 * @type number
 * @min 1
 * @desc How thick do you want the scroll bar to be?
 * @default 2
 *
 * @param BarOffset:num
 * @text Offset
 * @parent ScrollBar
 * @desc How much do you want to offset the scroll bar by?
 * @default +2
 *
 * @param BarBodyColor:str
 * @text Bar Body Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param OffBarColor:str
 * @text Off Bar Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param OffBarOpacity:num
 * @text Off Bar Opacity
 * @parent ScrollBar
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value do you want the off bar opacity
 * to be? Use a number between 0 and 255.
 * @default 128
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No Backgrounds
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 *
 * @param TextPopup
 * @text Text Popup Window
 *
 * @param DurationPerChat:num
 * @text Duration Per Text
 * @parent TextPopup
 * @desc What is the increase in duration per text character?
 * @default 1.5
 *
 * @param MinDuration:num
 * @text Minimum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Minimum duration for window to stay on the screen.
 * @default 90
 *
 * @param MaxDuration:num
 * @text Maximum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Maximum duration for window to stay on the screen.
 * @default 300
 * 
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Maps
 * 
 * @param AutoScrollLockX:eval
 * @text Scroll Lock Small X?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock X scrolling if the map is too small?
 * @default true
 * 
 * @param AutoScrollLockY:eval
 * @text Scroll Lock Small Y?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock Y scrolling if the map is too small?
 * @default true
 * 
 * @param DisplayLockX:num
 * @text Locked Display X?
 * @parent Maps
 * @desc What display X value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.15625
 * 
 * @param DisplayLockY:num
 * @text Locked Display Y?
 * @parent Maps
 * @desc What display Y value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.00000
 * 
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

const _0x1a3244=_0x4d19;(function(_0x1faf9f,_0xc6a0dd){const _0x414fc1=_0x4d19,_0x200eee=_0x1faf9f();while(!![]){try{const _0x37e11f=parseInt(_0x414fc1(0x5df))/0x1+parseInt(_0x414fc1(0x835))/0x2*(-parseInt(_0x414fc1(0x521))/0x3)+-parseInt(_0x414fc1(0x180))/0x4+parseInt(_0x414fc1(0x918))/0x5*(parseInt(_0x414fc1(0x20b))/0x6)+-parseInt(_0x414fc1(0x8ac))/0x7+parseInt(_0x414fc1(0x190))/0x8+parseInt(_0x414fc1(0x560))/0x9*(parseInt(_0x414fc1(0x939))/0xa);if(_0x37e11f===_0xc6a0dd)break;else _0x200eee['push'](_0x200eee['shift']());}catch(_0x173354){_0x200eee['push'](_0x200eee['shift']());}}}(_0x2f97,0x4987f));var label=_0x1a3244(0x38a),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x1a3244(0x4ee)](function(_0x2d894e){const _0x394a9d=_0x1a3244;return _0x2d894e[_0x394a9d(0x93f)]&&_0x2d894e['description'][_0x394a9d(0x56f)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x1a3244(0x644)]=function(_0xa2f6a9,_0x403a98){const _0x5427d9=_0x1a3244;for(const _0x336b76 in _0x403a98){if(_0x336b76[_0x5427d9(0x90f)](/(.*):(.*)/i)){const _0x3bc0b9=String(RegExp['$1']),_0x1278ea=String(RegExp['$2'])[_0x5427d9(0x5c4)]()['trim']();let _0x552dca,_0x560bbd,_0x38d3d9;switch(_0x1278ea){case _0x5427d9(0x532):_0x552dca=_0x403a98[_0x336b76]!==''?Number(_0x403a98[_0x336b76]):0x0;break;case _0x5427d9(0x60c):_0x560bbd=_0x403a98[_0x336b76]!==''?JSON['parse'](_0x403a98[_0x336b76]):[],_0x552dca=_0x560bbd[_0x5427d9(0x72d)](_0x4ecdea=>Number(_0x4ecdea));break;case'EVAL':_0x552dca=_0x403a98[_0x336b76]!==''?eval(_0x403a98[_0x336b76]):null;break;case'ARRAYEVAL':_0x560bbd=_0x403a98[_0x336b76]!==''?JSON[_0x5427d9(0x545)](_0x403a98[_0x336b76]):[],_0x552dca=_0x560bbd[_0x5427d9(0x72d)](_0x10b13b=>eval(_0x10b13b));break;case _0x5427d9(0x1da):_0x552dca=_0x403a98[_0x336b76]!==''?JSON[_0x5427d9(0x545)](_0x403a98[_0x336b76]):'';break;case _0x5427d9(0x937):_0x560bbd=_0x403a98[_0x336b76]!==''?JSON[_0x5427d9(0x545)](_0x403a98[_0x336b76]):[],_0x552dca=_0x560bbd[_0x5427d9(0x72d)](_0x290807=>JSON[_0x5427d9(0x545)](_0x290807));break;case'FUNC':_0x552dca=_0x403a98[_0x336b76]!==''?new Function(JSON[_0x5427d9(0x545)](_0x403a98[_0x336b76])):new Function(_0x5427d9(0x7b1));break;case _0x5427d9(0x906):_0x560bbd=_0x403a98[_0x336b76]!==''?JSON['parse'](_0x403a98[_0x336b76]):[],_0x552dca=_0x560bbd[_0x5427d9(0x72d)](_0x390619=>new Function(JSON[_0x5427d9(0x545)](_0x390619)));break;case'STR':_0x552dca=_0x403a98[_0x336b76]!==''?String(_0x403a98[_0x336b76]):'';break;case _0x5427d9(0x833):_0x560bbd=_0x403a98[_0x336b76]!==''?JSON[_0x5427d9(0x545)](_0x403a98[_0x336b76]):[],_0x552dca=_0x560bbd[_0x5427d9(0x72d)](_0x43590b=>String(_0x43590b));break;case'STRUCT':_0x38d3d9=_0x403a98[_0x336b76]!==''?JSON[_0x5427d9(0x545)](_0x403a98[_0x336b76]):{},_0xa2f6a9[_0x3bc0b9]={},VisuMZ[_0x5427d9(0x644)](_0xa2f6a9[_0x3bc0b9],_0x38d3d9);continue;case _0x5427d9(0x555):_0x560bbd=_0x403a98[_0x336b76]!==''?JSON[_0x5427d9(0x545)](_0x403a98[_0x336b76]):[],_0x552dca=_0x560bbd[_0x5427d9(0x72d)](_0x296145=>VisuMZ['ConvertParams']({},JSON[_0x5427d9(0x545)](_0x296145)));break;default:continue;}_0xa2f6a9[_0x3bc0b9]=_0x552dca;}}return _0xa2f6a9;},VisuMZ['CoreEngine'][_0x1a3244(0x799)]=SceneManager['exit'],SceneManager[_0x1a3244(0x208)]=function(){const _0xb8c5c2=_0x1a3244;VisuMZ[_0xb8c5c2(0x38a)][_0xb8c5c2(0x799)]['call'](this);if(Utils['RPGMAKER_VERSION']>=_0xb8c5c2(0x946)){if(typeof nw===_0xb8c5c2(0x4b1))nw[_0xb8c5c2(0x82d)][_0xb8c5c2(0x2fb)]();}},(_0x2a0717=>{const _0x324b50=_0x1a3244,_0x2008b0=_0x2a0717[_0x324b50(0x17f)];for(const _0x5c7e95 of dependencies){if(!Imported[_0x5c7e95]){alert(_0x324b50(0x8b3)[_0x324b50(0x1ad)](_0x2008b0,_0x5c7e95)),SceneManager[_0x324b50(0x208)]();break;}}const _0x28310e=_0x2a0717[_0x324b50(0x217)];if(_0x28310e[_0x324b50(0x90f)](/\[Version[ ](.*?)\]/i)){const _0x551b53=Number(RegExp['$1']);_0x551b53!==VisuMZ[label][_0x324b50(0x5ba)]&&(alert(_0x324b50(0x852)[_0x324b50(0x1ad)](_0x2008b0,_0x551b53)),SceneManager[_0x324b50(0x208)]());}if(_0x28310e[_0x324b50(0x90f)](/\[Tier[ ](\d+)\]/i)){const _0x352701=Number(RegExp['$1']);_0x352701<tier?(alert(_0x324b50(0x4c5)[_0x324b50(0x1ad)](_0x2008b0,_0x352701,tier)),SceneManager[_0x324b50(0x208)]()):tier=Math[_0x324b50(0x51f)](_0x352701,tier);}VisuMZ[_0x324b50(0x644)](VisuMZ[label][_0x324b50(0x927)],_0x2a0717[_0x324b50(0x41a)]);})(pluginData),((()=>{const _0x2a51b6=_0x1a3244;if(VisuMZ[_0x2a51b6(0x38a)][_0x2a51b6(0x927)][_0x2a51b6(0x83d)][_0x2a51b6(0x241)]??!![])for(const _0x52f192 in $plugins){const _0x1c11b8=$plugins[_0x52f192];_0x1c11b8[_0x2a51b6(0x17f)][_0x2a51b6(0x90f)](/(.*)\/(.*)/i)&&(_0x1c11b8[_0x2a51b6(0x17f)]=String(RegExp['$2'][_0x2a51b6(0x797)]()));}})()),PluginManager[_0x1a3244(0x8e4)](pluginData['name'],_0x1a3244(0x4d1),_0x522ba0=>{const _0x15cf93=_0x1a3244;if(!SceneManager[_0x15cf93(0x79b)])return;if(!SceneManager[_0x15cf93(0x79b)][_0x15cf93(0x245)])return;VisuMZ[_0x15cf93(0x644)](_0x522ba0,_0x522ba0);const _0x2731d4=Math[_0x15cf93(0x6e5)](_0x522ba0['pointX']),_0x460d7c=Math[_0x15cf93(0x6e5)](_0x522ba0[_0x15cf93(0x512)]);$gameTemp['requestPointAnimation'](_0x2731d4,_0x460d7c,_0x522ba0[_0x15cf93(0x62d)],_0x522ba0[_0x15cf93(0x7c6)],_0x522ba0[_0x15cf93(0x455)]);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],'AudioChangeBgmVolume',_0x57ff7d=>{const _0x50b60e=_0x1a3244;VisuMZ[_0x50b60e(0x644)](_0x57ff7d,_0x57ff7d);const _0x59ecd1=Math['round'](_0x57ff7d[_0x50b60e(0x894)])['clamp'](0x0,0x64),_0x51e6c0=AudioManager[_0x50b60e(0x5ce)];_0x51e6c0&&(_0x51e6c0[_0x50b60e(0x894)]=_0x59ecd1,_0x51e6c0[_0x50b60e(0x827)]=AudioManager['_bgmBuffer'][_0x50b60e(0x934)](),AudioManager[_0x50b60e(0x192)](_0x51e6c0),AudioManager[_0x50b60e(0x7c2)](_0x51e6c0,_0x51e6c0[_0x50b60e(0x827)]),AudioManager['_bgmBuffer'][_0x50b60e(0x4e5)](_0x51e6c0['pos']));}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],'AudioChangeBgmPitch',_0x11c4e4=>{const _0x5950af=_0x1a3244;VisuMZ['ConvertParams'](_0x11c4e4,_0x11c4e4);const _0x557927=Math[_0x5950af(0x6e5)](_0x11c4e4[_0x5950af(0x6f9)])['clamp'](0x32,0x96),_0x220862=AudioManager[_0x5950af(0x5ce)];_0x220862&&(_0x220862[_0x5950af(0x6f9)]=_0x557927,_0x220862['pos']=AudioManager[_0x5950af(0x547)][_0x5950af(0x934)](),AudioManager[_0x5950af(0x192)](_0x220862),AudioManager[_0x5950af(0x7c2)](_0x220862,_0x220862[_0x5950af(0x827)]),AudioManager[_0x5950af(0x547)][_0x5950af(0x4e5)](_0x220862[_0x5950af(0x827)]));}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],'AudioChangeBgmPan',_0x32f385=>{const _0x232224=_0x1a3244;VisuMZ['ConvertParams'](_0x32f385,_0x32f385);const _0x40e257=Math[_0x232224(0x6e5)](_0x32f385[_0x232224(0x791)])[_0x232224(0x277)](-0x64,0x64),_0x16e94a=AudioManager[_0x232224(0x5ce)];_0x16e94a&&(_0x16e94a[_0x232224(0x791)]=_0x40e257,_0x16e94a[_0x232224(0x827)]=AudioManager['_bgmBuffer'][_0x232224(0x934)](),AudioManager['updateBgmParameters'](_0x16e94a),AudioManager[_0x232224(0x7c2)](_0x16e94a,_0x16e94a['pos']),AudioManager[_0x232224(0x547)][_0x232224(0x4e5)](_0x16e94a[_0x232224(0x827)]));}),PluginManager[_0x1a3244(0x8e4)](pluginData['name'],_0x1a3244(0x32e),_0x5b5c8a=>{const _0x36e298=_0x1a3244;VisuMZ[_0x36e298(0x644)](_0x5b5c8a,_0x5b5c8a);const _0x2cc82a=Math[_0x36e298(0x6e5)](_0x5b5c8a['volume'])[_0x36e298(0x277)](0x0,0x64),_0x2f7de4=AudioManager[_0x36e298(0x71d)];_0x2f7de4&&(_0x2f7de4[_0x36e298(0x894)]=_0x2cc82a,_0x2f7de4[_0x36e298(0x827)]=AudioManager[_0x36e298(0x4f6)]['seek'](),AudioManager[_0x36e298(0x2b5)](_0x2f7de4),AudioManager[_0x36e298(0x89d)](_0x2f7de4,_0x2f7de4[_0x36e298(0x827)]),AudioManager[_0x36e298(0x4f6)][_0x36e298(0x4e5)](_0x2f7de4[_0x36e298(0x827)]));}),PluginManager[_0x1a3244(0x8e4)](pluginData['name'],_0x1a3244(0x88c),_0x1178c0=>{const _0x282559=_0x1a3244;VisuMZ['ConvertParams'](_0x1178c0,_0x1178c0);const _0x706e6c=Math[_0x282559(0x6e5)](_0x1178c0[_0x282559(0x6f9)])['clamp'](0x32,0x96),_0x1dc2e7=AudioManager[_0x282559(0x71d)];_0x1dc2e7&&(_0x1dc2e7[_0x282559(0x6f9)]=_0x706e6c,_0x1dc2e7[_0x282559(0x827)]=AudioManager[_0x282559(0x4f6)][_0x282559(0x934)](),AudioManager['updateBgsParameters'](_0x1dc2e7),AudioManager[_0x282559(0x89d)](_0x1dc2e7,_0x1dc2e7[_0x282559(0x827)]),AudioManager[_0x282559(0x4f6)][_0x282559(0x4e5)](_0x1dc2e7[_0x282559(0x827)]));}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x352),_0x291d15=>{const _0x1c7f91=_0x1a3244;VisuMZ[_0x1c7f91(0x644)](_0x291d15,_0x291d15);const _0x37d632=Math[_0x1c7f91(0x6e5)](_0x291d15[_0x1c7f91(0x791)])[_0x1c7f91(0x277)](-0x64,0x64),_0x563bfc=AudioManager[_0x1c7f91(0x71d)];_0x563bfc&&(_0x563bfc[_0x1c7f91(0x791)]=_0x37d632,_0x563bfc['pos']=AudioManager[_0x1c7f91(0x4f6)][_0x1c7f91(0x934)](),AudioManager[_0x1c7f91(0x2b5)](_0x563bfc),AudioManager[_0x1c7f91(0x89d)](_0x563bfc,_0x563bfc[_0x1c7f91(0x827)]),AudioManager[_0x1c7f91(0x4f6)][_0x1c7f91(0x4e5)](_0x563bfc[_0x1c7f91(0x827)]));}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x6d5),_0x6364ca=>{const _0x34d98c=_0x1a3244;if(!$gameTemp[_0x34d98c(0x2ff)]())return;const _0xf88312=Input[_0x34d98c(0x860)]();console['log'](_0xf88312);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x27a),_0x51dad7=>{const _0x3528e1=_0x1a3244;if(!$gameTemp['isPlaytest']())return;if(!Utils[_0x3528e1(0x746)]())return;SceneManager[_0x3528e1(0x79b)]['_active']=![],VisuMZ[_0x3528e1(0x38a)][_0x3528e1(0x84c)]();}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x3fa),_0x393005=>{const _0x28cf5e=_0x1a3244;if(!$gameTemp[_0x28cf5e(0x2ff)]())return;if(!Utils['isNwjs']())return;SceneManager[_0x28cf5e(0x79b)][_0x28cf5e(0x74e)]=![],VisuMZ[_0x28cf5e(0x38a)][_0x28cf5e(0x4ef)]();}),PluginManager['registerCommand'](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x88f),_0x48da17=>{const _0x5628fe=_0x1a3244;if(!$gameTemp['isPlaytest']())return;if(!Utils[_0x5628fe(0x746)]())return;if(!$gameMap)return;if($gameMap[_0x5628fe(0x64c)]()<=0x0)return;VisuMZ['ConvertParams'](_0x48da17,_0x48da17);const _0x12ef79=_0x5628fe(0x36c)[_0x5628fe(0x1ad)]($gameMap[_0x5628fe(0x64c)]()[_0x5628fe(0x604)](0x3)),_0x201e76=VisuMZ[_0x5628fe(0x38a)][_0x5628fe(0x7dd)]($gameMap[_0x5628fe(0x64c)]());VisuMZ['CoreEngine'][_0x5628fe(0x359)](_0x201e76,_0x12ef79,!![]);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x299),_0x1872b7=>{const _0x622239=_0x1a3244;if(!$gameTemp['isPlaytest']())return;if(!Utils[_0x622239(0x746)]())return;if(!$gameParty[_0x622239(0x875)]())return;VisuMZ[_0x622239(0x644)](_0x1872b7,_0x1872b7);const _0x23ec4a=_0x622239(0x4a7)[_0x622239(0x1ad)]($gameTroop['_troopId'][_0x622239(0x604)](0x4)),_0x40d654=VisuMZ[_0x622239(0x38a)]['ExtractStrFromTroop']($gameTroop['_troopId']);VisuMZ['CoreEngine'][_0x622239(0x359)](_0x40d654,_0x23ec4a,!![]);}),VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x359)]=function(_0x1222ca,_0x4bf595,_0x2557bb){const _0x2bac07=_0x1a3244,_0x5927d9=require('fs');let _0x1ab439=_0x2bac07(0x4e4)[_0x2bac07(0x1ad)](_0x4bf595||'0');_0x5927d9['writeFile'](_0x1ab439,_0x1222ca,_0xfa3dd5=>{const _0x5b2eef=_0x2bac07;if(_0xfa3dd5)throw err;else _0x2557bb&&alert(_0x5b2eef(0x85f)[_0x5b2eef(0x1ad)](_0x1ab439));});},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x84c)]=function(){const _0x4a7d48=_0x1a3244,_0x58eafe=[];for(const _0x9fd58 of $dataMapInfos){if(!_0x9fd58)continue;_0x58eafe[_0x4a7d48(0x27f)](_0x9fd58['id']);}const _0x10ab7f=_0x58eafe[_0x4a7d48(0x753)]*0x64+Math[_0x4a7d48(0x2bb)](0x64);alert('Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)'[_0x4a7d48(0x1ad)](_0x10ab7f)),this[_0x4a7d48(0x633)]=[],this[_0x4a7d48(0x1f4)]=$dataMap;for(const _0x1475f7 of _0x58eafe){VisuMZ[_0x4a7d48(0x38a)]['loadMapData'](_0x1475f7);}setTimeout(VisuMZ['CoreEngine'][_0x4a7d48(0x1aa)][_0x4a7d48(0x2e8)](this),_0x10ab7f);},VisuMZ['CoreEngine'][_0x1a3244(0x635)]=function(_0x13a48d){const _0x34cabb=_0x1a3244,_0x155358=_0x34cabb(0x416)[_0x34cabb(0x1ad)](_0x13a48d[_0x34cabb(0x604)](0x3)),_0x43e3b2=new XMLHttpRequest(),_0x53be0a=_0x34cabb(0x215)+_0x155358;_0x43e3b2['open']('GET',_0x53be0a),_0x43e3b2['overrideMimeType'](_0x34cabb(0x76c)),_0x43e3b2[_0x34cabb(0x84e)]=()=>this[_0x34cabb(0x48e)](_0x43e3b2,_0x13a48d,_0x155358,_0x53be0a),_0x43e3b2[_0x34cabb(0x90d)]=()=>DataManager[_0x34cabb(0x55c)](_0x34cabb(0x8b2),_0x155358,_0x53be0a),_0x43e3b2[_0x34cabb(0x327)]();},VisuMZ['CoreEngine'][_0x1a3244(0x48e)]=function(_0x1e2b29,_0xd12a23,_0x45bc0c,_0xd5a69c){const _0x20a9da=_0x1a3244;$dataMap=JSON[_0x20a9da(0x545)](_0x1e2b29['responseText']),DataManager['onLoad']($dataMap),this[_0x20a9da(0x633)][_0xd12a23]=VisuMZ[_0x20a9da(0x38a)][_0x20a9da(0x7dd)](_0xd12a23),$dataMap=this['_currentMap'];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x1aa)]=function(){const _0x314dac=_0x1a3244,_0x2289ea='AllMaps';this[_0x314dac(0x633)][_0x314dac(0x6aa)](undefined)[_0x314dac(0x6aa)]('')[_0x314dac(0x6aa)](null);const _0x19e035=this[_0x314dac(0x633)][_0x314dac(0x6a8)]('\x0a\x0a\x0a\x0a\x0a')['trim']();VisuMZ[_0x314dac(0x38a)][_0x314dac(0x359)](_0x19e035,_0x2289ea,!![]),SceneManager[_0x314dac(0x79b)][_0x314dac(0x74e)]=!![];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x7dd)]=function(_0x597f3d){const _0x3ead28=_0x1a3244;if(!$dataMap)return'';let _0x988db9='█'[_0x3ead28(0x646)](0x46)+'\x0a\x0a',_0x7e8de6='═'[_0x3ead28(0x646)](0x46)+'\x0a\x0a',_0x4a5667='';this[_0x3ead28(0x72f)]=0x0;for(const _0x12b4fe of $dataMap[_0x3ead28(0x947)]){if(!_0x12b4fe)continue;let _0x558880=_0x12b4fe['id'],_0x117845=_0x12b4fe[_0x3ead28(0x17f)],_0x2dc8a3=_0x12b4fe[_0x3ead28(0x504)];for(const _0x4fb188 of _0x2dc8a3){const _0x1182e1=_0x2dc8a3[_0x3ead28(0x514)](_0x4fb188)+0x1;let _0x37c905=_0x7e8de6+'《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a',_0x505ab6=VisuMZ['CoreEngine'][_0x3ead28(0x7f4)](_0x4fb188[_0x3ead28(0x29a)]);if(_0x505ab6[_0x3ead28(0x753)]>0x0){if(_0x4a5667[_0x3ead28(0x753)]>0x0)_0x4a5667+=_0x7e8de6+'\x0a\x0a\x0a\x0a\x0a';else{const _0x4dbe95=$dataMapInfos[_0x597f3d][_0x3ead28(0x17f)];_0x4a5667+=_0x988db9+_0x3ead28(0x29c)[_0x3ead28(0x1ad)](_0x597f3d,_0x4dbe95||_0x3ead28(0x5bb))+_0x988db9;}_0x4a5667+=_0x37c905[_0x3ead28(0x1ad)](_0x558880,_0x117845,_0x1182e1,_0x505ab6);}}}return _0x4a5667['length']>0x0&&(_0x4a5667+=_0x7e8de6),_0x4a5667;},VisuMZ['CoreEngine'][_0x1a3244(0x4ef)]=function(){const _0x4ec9fc=_0x1a3244,_0x43076e=$dataTroops['length']*0xa+Math['randomInt'](0xa);alert('Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)'[_0x4ec9fc(0x1ad)](_0x43076e));const _0x334c63=[];for(const _0x46dc35 of $dataTroops){if(!_0x46dc35)continue;const _0x5a35ab=_0x46dc35['id'];_0x334c63[_0x5a35ab]=VisuMZ[_0x4ec9fc(0x38a)][_0x4ec9fc(0x69e)](_0x5a35ab);}setTimeout(VisuMZ[_0x4ec9fc(0x38a)][_0x4ec9fc(0x256)]['bind'](this,_0x334c63),_0x43076e);},VisuMZ[_0x1a3244(0x38a)]['ExtractStrFromTroop']=function(_0x410632){const _0x4bec97=_0x1a3244;if(!$dataTroops[_0x410632])return'';let _0x1b0bc0='█'['repeat'](0x46)+'\x0a\x0a',_0x43a90c='═'[_0x4bec97(0x646)](0x46)+'\x0a\x0a',_0x5d115c='';this[_0x4bec97(0x72f)]=0x0;const _0x24f07b=$dataTroops[_0x410632];let _0x31b6c5=_0x24f07b[_0x4bec97(0x504)];for(const _0x48cd68 of _0x31b6c5){const _0x514781=_0x31b6c5['indexOf'](_0x48cd68)+0x1;let _0x54419b=_0x43a90c+_0x4bec97(0x2fe),_0x5ec4e3=VisuMZ['CoreEngine'][_0x4bec97(0x7f4)](_0x48cd68[_0x4bec97(0x29a)]);_0x5ec4e3[_0x4bec97(0x753)]>0x0&&(_0x5d115c[_0x4bec97(0x753)]>0x0?_0x5d115c+=_0x43a90c+_0x4bec97(0x387):_0x5d115c+=_0x1b0bc0+_0x4bec97(0x4b0)[_0x4bec97(0x1ad)](_0x410632,_0x24f07b[_0x4bec97(0x17f)]||_0x4bec97(0x5bb))+_0x1b0bc0,_0x5d115c+=_0x54419b[_0x4bec97(0x1ad)](_0x514781,_0x5ec4e3));}return _0x5d115c['length']>0x0&&(_0x5d115c+=_0x43a90c),_0x5d115c;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x256)]=function(_0xd8d7b6){const _0xa6f0a7=_0x1a3244,_0x505708='AllTroops';_0xd8d7b6[_0xa6f0a7(0x6aa)](undefined)['remove']('')[_0xa6f0a7(0x6aa)](null);const _0x1c03d9=_0xd8d7b6['join'](_0xa6f0a7(0x387))['trim']();VisuMZ['CoreEngine'][_0xa6f0a7(0x359)](_0x1c03d9,_0x505708,!![]),SceneManager[_0xa6f0a7(0x79b)][_0xa6f0a7(0x74e)]=!![];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x7f4)]=function(_0x20c68f){const _0x2a4107=_0x1a3244;let _0x45e806='\x0a'+'─'[_0x2a4107(0x646)](0x46)+'\x0a',_0x260178='\x0a'+'┄'[_0x2a4107(0x646)](0x46)+'\x0a',_0x130da3='';for(const _0x1911e5 of _0x20c68f){if(!_0x1911e5)continue;if(_0x1911e5[_0x2a4107(0x7b3)]===0x65)_0x130da3+=_0x45e806+'\x0a',_0x130da3+=_0x2a4107(0x552),_0x1911e5[_0x2a4107(0x41a)][0x4]!==''&&_0x1911e5[_0x2a4107(0x41a)][0x4]!==undefined&&(_0x130da3+=_0x2a4107(0x376)[_0x2a4107(0x1ad)](_0x1911e5[_0x2a4107(0x41a)][0x4]));else{if(_0x1911e5[_0x2a4107(0x7b3)]===0x191)_0x130da3+=_0x2a4107(0x2bf)['format'](_0x1911e5[_0x2a4107(0x41a)][0x0]);else{if(_0x1911e5[_0x2a4107(0x7b3)]===0x192)_0x130da3+=_0x45e806,_0x130da3+=_0x2a4107(0x8cf)[_0x2a4107(0x1ad)](_0x260178,_0x1911e5[_0x2a4107(0x41a)][0x0]+0x1,_0x1911e5[_0x2a4107(0x41a)][0x1]);else{if(_0x1911e5[_0x2a4107(0x7b3)]===0x193)_0x130da3+=_0x45e806,_0x130da3+=_0x2a4107(0x414)[_0x2a4107(0x1ad)](_0x260178);else{if(_0x1911e5[_0x2a4107(0x7b3)]===0x194)_0x130da3+=_0x45e806,_0x130da3+=_0x2a4107(0x657)[_0x2a4107(0x1ad)](_0x260178);else{if(_0x1911e5['code']===0x69)_0x130da3+=_0x45e806+'\x0a',_0x130da3+=_0x2a4107(0x907);else{if(_0x1911e5['code']===0x6c)_0x130da3+=_0x45e806+'\x0a',_0x130da3+='》Comment《\x0a%1\x0a'[_0x2a4107(0x1ad)](_0x1911e5['parameters'][0x0]);else{if(_0x1911e5['code']===0x198)_0x130da3+=_0x2a4107(0x2bf)['format'](_0x1911e5['parameters'][0x0]);else{if(_0x1911e5[_0x2a4107(0x7b3)]===0x75){const _0x415142=$dataCommonEvents[_0x1911e5['parameters'][0x0]];if(_0x415142&&this[_0x2a4107(0x72f)]<=0xa){this['_commonEventLayers']++;let _0x5842cc=VisuMZ['CoreEngine'][_0x2a4107(0x7f4)](_0x415142['list']);_0x5842cc[_0x2a4107(0x753)]>0x0&&(_0x130da3+=_0x45e806,_0x130da3+=_0x260178,_0x130da3+='〘Common\x20Event\x20%1:\x20%2〙\x20Start'['format'](_0x415142['id'],_0x415142[_0x2a4107(0x17f)]),_0x130da3+=_0x260178,_0x130da3+=_0x5842cc,_0x130da3+=_0x260178,_0x130da3+='〘Common\x20Event\x20%1:\x20%2〙\x20End'[_0x2a4107(0x1ad)](_0x415142['id'],_0x415142[_0x2a4107(0x17f)]),_0x130da3+=_0x260178),this[_0x2a4107(0x72f)]--;}}}}}}}}}}}return _0x130da3[_0x2a4107(0x753)]>0x0&&(_0x130da3+=_0x45e806),_0x130da3;},PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],'OpenURL',_0x4e70f1=>{const _0x2f5065=_0x1a3244;VisuMZ[_0x2f5065(0x644)](_0x4e70f1,_0x4e70f1);const _0x58c31c=_0x4e70f1[_0x2f5065(0x770)];VisuMZ['openURL'](_0x58c31c);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x8cc),_0x31f22b=>{const _0x102f22=_0x1a3244;VisuMZ[_0x102f22(0x644)](_0x31f22b,_0x31f22b);const _0x412ab4=_0x31f22b[_0x102f22(0x255)]||0x0;$gameParty[_0x102f22(0x94e)](_0x412ab4);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x4ec),_0x5057fe=>{const _0x16b630=_0x1a3244;if(!SceneManager[_0x16b630(0x7ee)]())return;VisuMZ[_0x16b630(0x644)](_0x5057fe,_0x5057fe);const _0xc1d0be=_0x5057fe[_0x16b630(0x6dd)];SceneManager['_scene'][_0x16b630(0x836)](_0xc1d0be);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x8f0),_0x2b3d2b=>{const _0x3fc7c7=_0x1a3244;if(!$gameTemp['isPlaytest']())return;if(!Utils[_0x3fc7c7(0x746)]())return;VisuMZ[_0x3fc7c7(0x644)](_0x2b3d2b,_0x2b3d2b);const _0x59b0fc=_0x2b3d2b[_0x3fc7c7(0x2ed)]||0x1;$gameTemp[_0x3fc7c7(0x4d5)]=_0x59b0fc;}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x23f),_0x16a046=>{const _0x25dc6e=_0x1a3244;VisuMZ['ConvertParams'](_0x16a046,_0x16a046);const _0x1df61c=_0x16a046[_0x25dc6e(0x384)]||0x1,_0x3869f4=_0x16a046[_0x25dc6e(0x478)]||_0x25dc6e(0x846),_0x2c3c05=$gameScreen[_0x25dc6e(0x920)](_0x1df61c);_0x2c3c05&&_0x2c3c05[_0x25dc6e(0x5b2)](_0x3869f4);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x5d0),_0x2a3d60=>{const _0x38f215=_0x1a3244;for(let _0x214baa=0x1;_0x214baa<=0x64;_0x214baa++){$gameScreen[_0x38f215(0x8a5)](_0x214baa);}}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x7ca),_0x59b147=>{const _0x1db754=_0x1a3244;VisuMZ[_0x1db754(0x644)](_0x59b147,_0x59b147);const _0x308812=Math[_0x1db754(0x3d0)](_0x59b147[_0x1db754(0x637)],_0x59b147['EndingID']),_0x65985c=Math['max'](_0x59b147['StartID'],_0x59b147[_0x1db754(0x4cf)]);for(let _0x211b75=_0x308812;_0x211b75<=_0x65985c;_0x211b75++){$gameScreen[_0x1db754(0x8a5)](_0x211b75);}}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x4d7),_0x2776b9=>{const _0x137b5e=_0x1a3244;VisuMZ[_0x137b5e(0x644)](_0x2776b9,_0x2776b9);const _0x4a713f=Math[_0x137b5e(0x6e5)](_0x2776b9['PictureID'])[_0x137b5e(0x277)](0x1,0x64),_0x3ed9d8=-Number(_0x2776b9['AdjustAngle']||0x0),_0x2308c9=Math[_0x137b5e(0x51f)](_0x2776b9[_0x137b5e(0x84f)]||0x0,0x0),_0x147a71=_0x2776b9[_0x137b5e(0x478)]||_0x137b5e(0x846),_0x11c989=_0x2776b9[_0x137b5e(0x1bb)],_0x2446eb=$gameScreen['picture'](_0x4a713f);if(!_0x2446eb)return;_0x2446eb[_0x137b5e(0x4f1)](_0x3ed9d8,_0x2308c9,_0x147a71);if(_0x11c989){const _0x27431e=$gameTemp['getLastPluginCommandInterpreter']();if(_0x27431e)_0x27431e[_0x137b5e(0x5a2)](_0x2308c9);}}),PluginManager['registerCommand'](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x597),_0x512613=>{const _0x322fa6=_0x1a3244;VisuMZ['ConvertParams'](_0x512613,_0x512613);const _0x3967e1=Math[_0x322fa6(0x6e5)](_0x512613['PictureID'])['clamp'](0x1,0x64),_0x2ff719=-Number(_0x512613['TargetAngle']||0x0),_0x52c9f5=Math[_0x322fa6(0x51f)](_0x512613[_0x322fa6(0x84f)]||0x0,0x0),_0x37a9ae=_0x512613[_0x322fa6(0x478)]||_0x322fa6(0x846),_0x425b49=_0x512613[_0x322fa6(0x1bb)],_0x323739=$gameScreen[_0x322fa6(0x920)](_0x3967e1);if(!_0x323739)return;_0x323739[_0x322fa6(0x749)](_0x2ff719,_0x52c9f5,_0x37a9ae);if(_0x425b49){const _0x4e8384=$gameTemp['getLastPluginCommandInterpreter']();if(_0x4e8384)_0x4e8384[_0x322fa6(0x5a2)](_0x52c9f5);}}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],'PictureShowIcon',_0x150a1f=>{const _0x47d99a=_0x1a3244;VisuMZ['ConvertParams'](_0x150a1f,_0x150a1f);const _0x4cb194=Math['round'](_0x150a1f[_0x47d99a(0x2ed)])['clamp'](0x1,0x64),_0x187605=_0x150a1f['Settings'],_0x3ffab3=_0x187605['Origin'][_0x47d99a(0x277)](0x0,0x1),_0x10a574=Math[_0x47d99a(0x6e5)](_0x187605['PositionX']||0x0),_0x350531=Math[_0x47d99a(0x6e5)](_0x187605[_0x47d99a(0x73a)]||0x0),_0x14fbdf=Math[_0x47d99a(0x6e5)](_0x187605[_0x47d99a(0x363)]||0x0),_0x19d8ab=Math[_0x47d99a(0x6e5)](_0x187605['ScaleY']||0x0),_0x2eb21c=Math[_0x47d99a(0x6e5)](_0x187605[_0x47d99a(0x853)])[_0x47d99a(0x277)](0x0,0xff),_0xe76140=_0x187605[_0x47d99a(0x3a6)],_0x48b23a=_0x47d99a(0x86e),_0x50f05b=_0x150a1f[_0x47d99a(0x91b)]?_0x47d99a(0x91b):_0x47d99a(0x40b),_0x44a0c0=_0x48b23a[_0x47d99a(0x1ad)](_0x150a1f['IconIndex'],_0x50f05b);$gameScreen[_0x47d99a(0x1fd)](_0x4cb194,_0x44a0c0,_0x3ffab3,_0x10a574,_0x350531,_0x14fbdf,_0x19d8ab,_0x2eb21c,_0xe76140);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x782),_0xa0c66d=>{const _0x5c9a60=_0x1a3244;VisuMZ[_0x5c9a60(0x644)](_0xa0c66d,_0xa0c66d);const _0x1892f2=_0xa0c66d[_0x5c9a60(0x226)]||_0x5c9a60(0x596),_0x2d0a8c=_0xa0c66d[_0x5c9a60(0x428)][_0x5c9a60(0x277)](0x1,0x9),_0x5376c6=_0xa0c66d[_0x5c9a60(0x944)]['clamp'](0x1,0x9),_0xc7401f=_0xa0c66d['Duration']||0x1,_0x23ac35=_0xa0c66d[_0x5c9a60(0x1bb)];$gameScreen['setCoreEngineScreenShakeStyle'](_0x1892f2),$gameScreen['startShake'](_0x2d0a8c,_0x5376c6,_0xc7401f);if(_0x23ac35){const _0x25386e=$gameTemp[_0x5c9a60(0x65e)]();if(_0x25386e)_0x25386e['wait'](_0xc7401f);}}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],'SwitchRandomizeOne',_0x16fc05=>{const _0x263ce3=_0x1a3244;if($gameParty[_0x263ce3(0x875)]())return;VisuMZ['ConvertParams'](_0x16fc05,_0x16fc05);const _0x124012=_0x16fc05[_0x263ce3(0x609)],_0x38f48c=(_0x16fc05[_0x263ce3(0x4a3)]||0x0)/0x64;for(const _0x3c22f9 of _0x124012){const _0x3df89d=Math[_0x263ce3(0x596)]()<=_0x38f48c;$gameSwitches['setValue'](_0x3c22f9,_0x3df89d);}}),PluginManager['registerCommand'](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x3c9),_0x366171=>{const _0x3761da=_0x1a3244;if($gameParty[_0x3761da(0x875)]())return;VisuMZ['ConvertParams'](_0x366171,_0x366171);const _0xd0489b=Math[_0x3761da(0x3d0)](_0x366171['StartID'],_0x366171['EndingID']),_0x411f77=Math[_0x3761da(0x51f)](_0x366171[_0x3761da(0x637)],_0x366171[_0x3761da(0x4cf)]),_0x2bf918=(_0x366171['Chance']||0x0)/0x64;for(let _0x293485=_0xd0489b;_0x293485<=_0x411f77;_0x293485++){const _0x206c74=Math[_0x3761da(0x596)]()<=_0x2bf918;$gameSwitches[_0x3761da(0x7e5)](_0x293485,_0x206c74);}}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x4f4),_0x1f6820=>{const _0x18f3a2=_0x1a3244;if($gameParty['inBattle']())return;VisuMZ[_0x18f3a2(0x644)](_0x1f6820,_0x1f6820);const _0x6b1f2d=_0x1f6820[_0x18f3a2(0x609)];for(const _0x5f16c9 of _0x6b1f2d){const _0x5a9fcb=$gameSwitches[_0x18f3a2(0x255)](_0x5f16c9);$gameSwitches['setValue'](_0x5f16c9,!_0x5a9fcb);}}),PluginManager['registerCommand'](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x884),_0x2840fc=>{const _0x94d30f=_0x1a3244;if($gameParty[_0x94d30f(0x875)]())return;VisuMZ[_0x94d30f(0x644)](_0x2840fc,_0x2840fc);const _0x29d3b0=Math[_0x94d30f(0x3d0)](_0x2840fc['StartID'],_0x2840fc['EndingID']),_0xd25940=Math[_0x94d30f(0x51f)](_0x2840fc[_0x94d30f(0x637)],_0x2840fc[_0x94d30f(0x4cf)]);for(let _0x310075=_0x29d3b0;_0x310075<=_0xd25940;_0x310075++){const _0x943428=$gameSwitches['value'](_0x310075);$gameSwitches[_0x94d30f(0x7e5)](_0x310075,!_0x943428);}}),PluginManager[_0x1a3244(0x8e4)](pluginData['name'],_0x1a3244(0x2c5),_0x46ff6c=>{const _0x2435b4=_0x1a3244;VisuMZ[_0x2435b4(0x644)](_0x46ff6c,_0x46ff6c);const _0x11b42d=_0x46ff6c['option']||0x1;$gameSystem[_0x2435b4(0x675)](_0x11b42d);}),PluginManager['registerCommand'](pluginData['name'],_0x1a3244(0x1e6),_0x568cce=>{const _0x2807e2=_0x1a3244;if($gameParty[_0x2807e2(0x875)]())return;VisuMZ[_0x2807e2(0x644)](_0x568cce,_0x568cce);const _0x18a411=_0x568cce[_0x2807e2(0x3ad)];if(_0x18a411[_0x2807e2(0x90f)](/Front/i))$gameSystem['setSideView'](![]);else _0x18a411[_0x2807e2(0x90f)](/Side/i)?$gameSystem[_0x2807e2(0x27d)](!![]):$gameSystem[_0x2807e2(0x27d)](!$gameSystem[_0x2807e2(0x1ff)]());}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x1d1),_0x2578e6=>{const _0x32ed8b=_0x1a3244;if($gameParty[_0x32ed8b(0x875)]())return;VisuMZ[_0x32ed8b(0x644)](_0x2578e6,_0x2578e6);const _0x320561=[_0x32ed8b(0x878),'bgs','me','se'];for(const _0x28e7c4 of _0x320561){const _0x90059a=_0x2578e6[_0x28e7c4],_0xe1878c=_0x32ed8b(0x5e7)[_0x32ed8b(0x1ad)](_0x28e7c4);for(const _0x3d68f5 of _0x90059a){AudioManager['createBuffer'](_0xe1878c,_0x3d68f5);}}}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x209),_0x4019c4=>{const _0x300a8f=_0x1a3244;if($gameParty[_0x300a8f(0x875)]())return;VisuMZ['ConvertParams'](_0x4019c4,_0x4019c4);const _0x18089d=['animations','battlebacks1','battlebacks2',_0x300a8f(0x3b4),_0x300a8f(0x293),'faces','parallaxes','pictures',_0x300a8f(0x70c),_0x300a8f(0x662),_0x300a8f(0x519),_0x300a8f(0x8dc),_0x300a8f(0x42b),'titles2'];for(const _0x5e6e0b of _0x18089d){const _0x5882f8=_0x4019c4[_0x5e6e0b],_0x285e57=_0x300a8f(0x723)[_0x300a8f(0x1ad)](_0x5e6e0b);for(const _0x4533b2 of _0x5882f8){ImageManager[_0x300a8f(0x248)](_0x285e57,_0x4533b2);}}}),PluginManager['registerCommand'](pluginData[_0x1a3244(0x17f)],'SystemSetBattleSystem',_0x276fc4=>{const _0x5ec197=_0x1a3244;if($gameParty[_0x5ec197(0x875)]())return;VisuMZ[_0x5ec197(0x644)](_0x276fc4,_0x276fc4);const _0x3cac5b=_0x276fc4[_0x5ec197(0x3ad)][_0x5ec197(0x5c4)]()[_0x5ec197(0x797)](),_0x37eba5=VisuMZ[_0x5ec197(0x38a)][_0x5ec197(0x28f)](_0x3cac5b);$gameSystem['setBattleSystem'](_0x37eba5);}),VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x28f)]=function(_0x2bb867){const _0x5575e6=_0x1a3244;_0x2bb867=_0x2bb867||_0x5575e6(0x378),_0x2bb867=String(_0x2bb867)['toUpperCase']()[_0x5575e6(0x797)]();switch(_0x2bb867){case'DTB':return 0x0;case _0x5575e6(0x931):Imported[_0x5575e6(0x220)]&&(ConfigManager['atbActive']=!![]);return 0x1;case _0x5575e6(0x722):Imported[_0x5575e6(0x220)]&&(ConfigManager[_0x5575e6(0x449)]=![]);return 0x2;case _0x5575e6(0x790):if(Imported[_0x5575e6(0x339)])return _0x5575e6(0x790);break;case'STB':if(Imported[_0x5575e6(0x4de)])return _0x5575e6(0x3f9);break;case _0x5575e6(0x3fe):if(Imported[_0x5575e6(0x26d)])return'BTB';break;case _0x5575e6(0x1c8):if(Imported[_0x5575e6(0x6c8)])return _0x5575e6(0x1c8);break;case _0x5575e6(0x4c7):if(Imported['VisuMZ_2_BattleSystemOTB'])return'OTB';break;case _0x5575e6(0x40f):if(Imported['VisuMZ_2_BattleSystemETB'])return _0x5575e6(0x40f);break;case _0x5575e6(0x858):if(Imported['VisuMZ_2_BattleSystemPTB'])return _0x5575e6(0x858);break;}return $dataSystem[_0x5575e6(0x8a0)];},PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x4dd),_0x1d559d=>{const _0x30a3ad=_0x1a3244;VisuMZ[_0x30a3ad(0x644)](_0x1d559d,_0x1d559d);const _0x4cc9cb=_0x1d559d[_0x30a3ad(0x3ad)]||0x1;$gameSystem[_0x30a3ad(0x69c)](_0x4cc9cb);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x73f),_0xcc4aa8=>{const _0x46cd19=_0x1a3244;VisuMZ['ConvertParams'](_0xcc4aa8,_0xcc4aa8);const _0x14de3c=_0xcc4aa8[_0x46cd19(0x6d1)]||'';$textPopup(_0x14de3c);}),PluginManager['registerCommand'](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x94d),_0x274248=>{const _0x38ba34=_0x1a3244;VisuMZ[_0x38ba34(0x644)](_0x274248,_0x274248);const _0x1d5dfc=_0x274248['id']||0x1,_0x54261a=_0x274248[_0x38ba34(0x2a0)],_0x5ee447=_0x274248[_0x38ba34(0x39e)]||0x0;let _0x14fe37=$gameVariables[_0x38ba34(0x255)](_0x1d5dfc)||0x0;switch(_0x54261a){case'=':_0x14fe37=_0x5ee447;break;case'+':_0x14fe37+=_0x5ee447;break;case'-':_0x14fe37-=_0x5ee447;break;case'*':_0x14fe37*=_0x5ee447;break;case'/':_0x14fe37/=_0x5ee447;break;case'%':_0x14fe37%=_0x5ee447;break;}_0x14fe37=_0x14fe37||0x0,$gameVariables['setValue'](_0x1d5dfc,_0x14fe37);}),PluginManager[_0x1a3244(0x8e4)](pluginData[_0x1a3244(0x17f)],_0x1a3244(0x62b),_0x586873=>{const _0x31362f=_0x1a3244;VisuMZ[_0x31362f(0x644)](_0x586873,_0x586873);const _0x36aad1=_0x586873['id']()||0x1,_0x226a20=_0x586873[_0x31362f(0x2a0)],_0x5576ac=_0x586873[_0x31362f(0x39e)]()||0x0;let _0x337a66=$gameVariables[_0x31362f(0x255)](_0x36aad1)||0x0;switch(_0x226a20){case'=':_0x337a66=_0x5576ac;break;case'+':_0x337a66+=_0x5576ac;break;case'-':_0x337a66-=_0x5576ac;break;case'*':_0x337a66*=_0x5576ac;break;case'/':_0x337a66/=_0x5576ac;break;case'%':_0x337a66%=_0x5576ac;break;}_0x337a66=_0x337a66||0x0,$gameVariables[_0x31362f(0x7e5)](_0x36aad1,_0x337a66);}),VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x323)]=Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x357)],Scene_Boot[_0x1a3244(0x44d)]['onDatabaseLoaded']=function(){const _0x45deaa=_0x1a3244;VisuMZ[_0x45deaa(0x38a)]['Scene_Boot_onDatabaseLoaded'][_0x45deaa(0x38c)](this),this[_0x45deaa(0x66b)](),this[_0x45deaa(0x6ad)](),this[_0x45deaa(0x410)](),this[_0x45deaa(0x423)](),this[_0x45deaa(0x668)](),this[_0x45deaa(0x702)](),VisuMZ[_0x45deaa(0x64a)]();},VisuMZ[_0x1a3244(0x38a)]['RegExp']={},Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x66b)]=function(){const _0x29631f=_0x1a3244,_0x566253=[_0x29631f(0x543),'MAXMP',_0x29631f(0x821),'DEF',_0x29631f(0x769),'MDF',_0x29631f(0x7aa),'LUK'],_0x15e285=['HIT',_0x29631f(0x842),_0x29631f(0x613),_0x29631f(0x183),_0x29631f(0x1f0),'MRF',_0x29631f(0x706),_0x29631f(0x6e9),_0x29631f(0x614),_0x29631f(0x82a)],_0x4cb16b=['TGR',_0x29631f(0x489),'REC',_0x29631f(0x427),'MCR','TCR',_0x29631f(0x59f),_0x29631f(0x218),_0x29631f(0x5ae),'EXR'],_0x2f7a2c=[_0x566253,_0x15e285,_0x4cb16b],_0x551e2f=['Plus','Plus1','Plus2',_0x29631f(0x5af),'Rate','Rate1',_0x29631f(0x902),'Flat',_0x29631f(0x3b9),'Flat2'];for(const _0x5f5063 of _0x2f7a2c){let _0x133551='';if(_0x5f5063===_0x566253)_0x133551=_0x29631f(0x862);if(_0x5f5063===_0x15e285)_0x133551=_0x29631f(0x8a2);if(_0x5f5063===_0x4cb16b)_0x133551='sparam';for(const _0x3db008 of _0x551e2f){let _0x4466fc=_0x29631f(0x17c)['format'](_0x133551,_0x3db008);VisuMZ[_0x29631f(0x38a)][_0x29631f(0x25f)][_0x4466fc]=[],VisuMZ[_0x29631f(0x38a)]['RegExp'][_0x4466fc+'JS']=[];let _0x33670b=_0x29631f(0x22e);if([_0x29631f(0x6e1),_0x29631f(0x640)]['includes'](_0x3db008))_0x33670b+='([\x5c+\x5c-]\x5cd+)>';else{if([_0x29631f(0x5a3),'Flat1'][_0x29631f(0x56f)](_0x3db008))_0x33670b+=_0x29631f(0x93d);else{if(['Plus2','Flat2'][_0x29631f(0x56f)](_0x3db008))_0x33670b+=_0x29631f(0x7a3);else{if(_0x3db008==='Max')_0x33670b+=_0x29631f(0x278);else{if(_0x3db008===_0x29631f(0x252))_0x33670b+='(\x5cd+)([%％])>';else _0x3db008===_0x29631f(0x902)&&(_0x33670b+=_0x29631f(0x7fe));}}}}for(const _0x3405fd of _0x5f5063){let _0x2d83f2=_0x3db008[_0x29631f(0x845)](/[\d+]/g,'')[_0x29631f(0x5c4)]();const _0x7f8a55=_0x33670b[_0x29631f(0x1ad)](_0x3405fd,_0x2d83f2);VisuMZ[_0x29631f(0x38a)][_0x29631f(0x25f)][_0x4466fc][_0x29631f(0x27f)](new RegExp(_0x7f8a55,'i'));const _0x2194fe=_0x29631f(0x49a)[_0x29631f(0x1ad)](_0x3405fd,_0x2d83f2);VisuMZ[_0x29631f(0x38a)][_0x29631f(0x25f)][_0x4466fc+'JS'][_0x29631f(0x27f)](new RegExp(_0x2194fe,'i'));}}}},Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x6ad)]=function(){const _0x4c45e0=_0x1a3244;if(VisuMZ[_0x4c45e0(0x64a)])return;},Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x410)]=function(){const _0x3b5bad=_0x1a3244,_0x3dd4fe=VisuMZ['CoreEngine']['Settings'];_0x3dd4fe[_0x3b5bad(0x83d)][_0x3b5bad(0x1d2)]&&VisuMZ['ShowDevTools'](!![]);_0x3dd4fe[_0x3b5bad(0x83d)][_0x3b5bad(0x2fc)]&&(Input[_0x3b5bad(0x375)][0x23]='end',Input[_0x3b5bad(0x375)][0x24]=_0x3b5bad(0x761));if(_0x3dd4fe[_0x3b5bad(0x3a1)]){const _0x2352f3=_0x3dd4fe['ButtonAssist'];_0x2352f3[_0x3b5bad(0x36a)]=_0x2352f3[_0x3b5bad(0x36a)]||'\x5c}❪SHIFT❫\x5c{',_0x2352f3[_0x3b5bad(0x6cf)]=_0x2352f3[_0x3b5bad(0x6cf)]||_0x3b5bad(0x358);}_0x3dd4fe['KeyboardInput'][_0x3b5bad(0x19d)]&&(Input[_0x3b5bad(0x375)][0x57]='up',Input[_0x3b5bad(0x375)][0x41]=_0x3b5bad(0x394),Input['keyMapper'][0x53]=_0x3b5bad(0x2ad),Input['keyMapper'][0x44]=_0x3b5bad(0x60d),Input['keyMapper'][0x45]='pagedown'),_0x3dd4fe['KeyboardInput'][_0x3b5bad(0x1b5)]&&(Input[_0x3b5bad(0x375)][0x52]=_0x3b5bad(0x606)),_0x3dd4fe['Param']['DisplayedParams']=_0x3dd4fe[_0x3b5bad(0x381)][_0x3b5bad(0x80e)][_0x3b5bad(0x72d)](_0x34e1f1=>_0x34e1f1['toUpperCase']()[_0x3b5bad(0x797)]()),_0x3dd4fe[_0x3b5bad(0x381)][_0x3b5bad(0x575)]=_0x3dd4fe[_0x3b5bad(0x381)][_0x3b5bad(0x575)][_0x3b5bad(0x72d)](_0x30d1bf=>_0x30d1bf[_0x3b5bad(0x5c4)]()[_0x3b5bad(0x797)]()),_0x3dd4fe[_0x3b5bad(0x83d)][_0x3b5bad(0x263)]=_0x3dd4fe[_0x3b5bad(0x83d)][_0x3b5bad(0x263)]??!![],_0x3dd4fe[_0x3b5bad(0x83d)][_0x3b5bad(0x58f)]=_0x3dd4fe[_0x3b5bad(0x83d)]['ShiftT_Toggle']??!![];},Scene_Boot[_0x1a3244(0x44d)]['process_VisuMZ_CoreEngine_Functions']=function(){const _0x1cbd15=_0x1a3244;this[_0x1cbd15(0x685)]();},Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x685)]=function(){const _0x38410a=_0x1a3244,_0x5e0c70=VisuMZ[_0x38410a(0x38a)]['Settings'][_0x38410a(0x8a3)];for(const _0x510deb of _0x5e0c70){const _0x469a3f=_0x510deb[_0x38410a(0x2a1)][_0x38410a(0x845)](/[ ]/g,''),_0x2dbee4=_0x510deb['CodeJS'];VisuMZ[_0x38410a(0x38a)][_0x38410a(0x5b4)](_0x469a3f,_0x2dbee4);}},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x5b4)]=function(_0x1700f8,_0x326b55){const _0xdbe42f=_0x1a3244;if(!!window[_0x1700f8]){if($gameTemp[_0xdbe42f(0x2ff)]())console[_0xdbe42f(0x607)]('WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function'[_0xdbe42f(0x1ad)](_0x1700f8));}const _0x1fb940=_0xdbe42f(0x50a)['format'](_0x1700f8,_0x326b55);window[_0x1700f8]=new Function(_0x1fb940);},Scene_Boot[_0x1a3244(0x44d)]['process_VisuMZ_CoreEngine_CustomParameters']=function(){const _0x4ff715=_0x1a3244,_0x315fa2=VisuMZ[_0x4ff715(0x38a)][_0x4ff715(0x927)]['CustomParam'];if(!_0x315fa2)return;for(const _0x36bd29 of _0x315fa2){if(!_0x36bd29)continue;VisuMZ[_0x4ff715(0x38a)][_0x4ff715(0x395)](_0x36bd29);}},VisuMZ['CoreEngine'][_0x1a3244(0x451)]={},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x2f9)]={},VisuMZ[_0x1a3244(0x38a)]['CustomParamType']={},VisuMZ[_0x1a3244(0x38a)]['CustomParamAbb']={},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x395)]=function(_0x126b4b){const _0x3cf5de=_0x1a3244,_0x1be45e=_0x126b4b[_0x3cf5de(0x567)],_0xa4bba8=_0x126b4b[_0x3cf5de(0x8f7)],_0x5e4a08=_0x126b4b['Icon'],_0x453a0b=_0x126b4b[_0x3cf5de(0x226)],_0x570c02=new Function(_0x126b4b[_0x3cf5de(0x5d4)]);VisuMZ[_0x3cf5de(0x38a)][_0x3cf5de(0x451)][_0x1be45e[_0x3cf5de(0x5c4)]()[_0x3cf5de(0x797)]()]=_0xa4bba8,VisuMZ[_0x3cf5de(0x38a)][_0x3cf5de(0x2f9)][_0x1be45e['toUpperCase']()['trim']()]=_0x5e4a08,VisuMZ[_0x3cf5de(0x38a)][_0x3cf5de(0x62a)][_0x1be45e['toUpperCase']()[_0x3cf5de(0x797)]()]=_0x453a0b,VisuMZ['CoreEngine'][_0x3cf5de(0x2ce)][_0x1be45e['toUpperCase']()['trim']()]=_0x1be45e,Object['defineProperty'](Game_BattlerBase[_0x3cf5de(0x44d)],_0x1be45e,{'get'(){const _0xe334c1=_0x3cf5de,_0xf9100d=_0x570c02[_0xe334c1(0x38c)](this);return _0x453a0b===_0xe334c1(0x1a7)?Math[_0xe334c1(0x6e5)](_0xf9100d):_0xf9100d;}});},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x309)]={},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x7e7)]={},Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x702)]=function(){const _0x454162=_0x1a3244,_0x33e97c=VisuMZ[_0x454162(0x38a)][_0x454162(0x927)]['ControllerButtons'];for(const _0x286c79 of _0x33e97c){const _0x185b67=(_0x286c79[_0x454162(0x533)]||'')['toLowerCase']()[_0x454162(0x797)](),_0x2ab99=(_0x286c79[_0x454162(0x689)]||'')['toLowerCase']()[_0x454162(0x797)]();VisuMZ[_0x454162(0x38a)]['ControllerButtons'][_0x185b67]=_0x286c79,VisuMZ[_0x454162(0x38a)][_0x454162(0x7e7)][_0x2ab99]=_0x185b67;}},VisuMZ['ParseAllNotetags']=function(){const _0x2c1df3=_0x1a3244;for(const _0x45f1b4 of $dataActors){if(_0x45f1b4)VisuMZ[_0x2c1df3(0x17e)](_0x45f1b4);}for(const _0x37a4a9 of $dataClasses){if(_0x37a4a9)VisuMZ[_0x2c1df3(0x297)](_0x37a4a9);}for(const _0x4bb6af of $dataSkills){if(_0x4bb6af)VisuMZ[_0x2c1df3(0x6e0)](_0x4bb6af);}for(const _0x4faceb of $dataItems){if(_0x4faceb)VisuMZ[_0x2c1df3(0x674)](_0x4faceb);}for(const _0x1c602a of $dataWeapons){if(_0x1c602a)VisuMZ[_0x2c1df3(0x8cb)](_0x1c602a);}for(const _0x2fd769 of $dataArmors){if(_0x2fd769)VisuMZ[_0x2c1df3(0x57a)](_0x2fd769);}for(const _0xcd208d of $dataEnemies){if(_0xcd208d)VisuMZ[_0x2c1df3(0x7b9)](_0xcd208d);}for(const _0xf81964 of $dataStates){if(_0xf81964)VisuMZ[_0x2c1df3(0x79c)](_0xf81964);}for(const _0x482da4 of $dataTilesets){if(_0x482da4)VisuMZ[_0x2c1df3(0x4cb)](_0x482da4);}},VisuMZ['ParseActorNotetags']=function(_0x1f47c9){},VisuMZ[_0x1a3244(0x297)]=function(_0x2b51ee){},VisuMZ[_0x1a3244(0x6e0)]=function(_0x5ba6ba){},VisuMZ[_0x1a3244(0x674)]=function(_0x3fe403){},VisuMZ[_0x1a3244(0x8cb)]=function(_0x2e73f5){},VisuMZ['ParseArmorNotetags']=function(_0x1004b0){},VisuMZ[_0x1a3244(0x7b9)]=function(_0x3809a6){},VisuMZ[_0x1a3244(0x79c)]=function(_0x28c4ba){},VisuMZ[_0x1a3244(0x4cb)]=function(_0x1bc732){},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x17e)]=VisuMZ[_0x1a3244(0x17e)],VisuMZ[_0x1a3244(0x17e)]=function(_0x42c269){const _0x3c0527=_0x1a3244;VisuMZ[_0x3c0527(0x38a)]['ParseActorNotetags'][_0x3c0527(0x38c)](this,_0x42c269);const _0x6c8a9f=_0x42c269['note'];if(_0x6c8a9f['match'](/<MAX LEVEL:[ ](\d+)>/i)){_0x42c269[_0x3c0527(0x7b4)]=Number(RegExp['$1']);if(_0x42c269[_0x3c0527(0x7b4)]===0x0)_0x42c269[_0x3c0527(0x7b4)]=Number[_0x3c0527(0x819)];}_0x6c8a9f[_0x3c0527(0x90f)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x42c269[_0x3c0527(0x639)]=Math[_0x3c0527(0x3d0)](Number(RegExp['$1']),_0x42c269[_0x3c0527(0x7b4)]));},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x297)]=VisuMZ[_0x1a3244(0x297)],VisuMZ[_0x1a3244(0x297)]=function(_0x2f26c7){const _0x37272e=_0x1a3244;VisuMZ[_0x37272e(0x38a)][_0x37272e(0x297)][_0x37272e(0x38c)](this,_0x2f26c7);if(_0x2f26c7[_0x37272e(0x80b)])for(const _0x23b845 of _0x2f26c7[_0x37272e(0x80b)]){_0x23b845[_0x37272e(0x8e0)][_0x37272e(0x90f)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x23b845['level']=Math[_0x37272e(0x51f)](Number(RegExp['$1']),0x1));}},VisuMZ['CoreEngine'][_0x1a3244(0x7b9)]=VisuMZ[_0x1a3244(0x7b9)],VisuMZ[_0x1a3244(0x7b9)]=function(_0x7d72f1){const _0x3d081a=_0x1a3244;VisuMZ[_0x3d081a(0x38a)][_0x3d081a(0x7b9)][_0x3d081a(0x38c)](this,_0x7d72f1),_0x7d72f1[_0x3d081a(0x569)]=0x1;const _0x107015=_0x7d72f1[_0x3d081a(0x8e0)];if(_0x107015['match'](/<LEVEL:[ ](\d+)>/i))_0x7d72f1['level']=Number(RegExp['$1']);if(_0x107015['match'](/<MAXHP:[ ](\d+)>/i))_0x7d72f1[_0x3d081a(0x602)][0x0]=Number(RegExp['$1']);if(_0x107015[_0x3d081a(0x90f)](/<MAXMP:[ ](\d+)>/i))_0x7d72f1[_0x3d081a(0x602)][0x1]=Number(RegExp['$1']);if(_0x107015[_0x3d081a(0x90f)](/<ATK:[ ](\d+)>/i))_0x7d72f1['params'][0x2]=Number(RegExp['$1']);if(_0x107015['match'](/<DEF:[ ](\d+)>/i))_0x7d72f1[_0x3d081a(0x602)][0x3]=Number(RegExp['$1']);if(_0x107015[_0x3d081a(0x90f)](/<MAT:[ ](\d+)>/i))_0x7d72f1[_0x3d081a(0x602)][0x4]=Number(RegExp['$1']);if(_0x107015[_0x3d081a(0x90f)](/<MDF:[ ](\d+)>/i))_0x7d72f1['params'][0x5]=Number(RegExp['$1']);if(_0x107015[_0x3d081a(0x90f)](/<AGI:[ ](\d+)>/i))_0x7d72f1[_0x3d081a(0x602)][0x6]=Number(RegExp['$1']);if(_0x107015['match'](/<LUK:[ ](\d+)>/i))_0x7d72f1[_0x3d081a(0x602)][0x7]=Number(RegExp['$1']);if(_0x107015[_0x3d081a(0x90f)](/<EXP:[ ](\d+)>/i))_0x7d72f1['exp']=Number(RegExp['$1']);if(_0x107015[_0x3d081a(0x90f)](/<GOLD:[ ](\d+)>/i))_0x7d72f1[_0x3d081a(0x2c0)]=Number(RegExp['$1']);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x553)]=Graphics[_0x1a3244(0x812)],Graphics['_defaultStretchMode']=function(){const _0x149e7e=_0x1a3244;switch(VisuMZ[_0x149e7e(0x38a)][_0x149e7e(0x927)]['QoL'][_0x149e7e(0x841)]){case _0x149e7e(0x235):return!![];case _0x149e7e(0x389):return![];default:return VisuMZ[_0x149e7e(0x38a)]['Graphics_defaultStretchMode'][_0x149e7e(0x38c)](this);}},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x3cc)]=Graphics[_0x1a3244(0x540)],Graphics['printError']=function(_0x55a79a,_0x3c492c,_0x24b2b3=null){const _0x54a792=_0x1a3244;VisuMZ[_0x54a792(0x38a)][_0x54a792(0x3cc)][_0x54a792(0x38c)](this,_0x55a79a,_0x3c492c,_0x24b2b3),VisuMZ[_0x54a792(0x63f)](![]);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x6a7)]=Graphics[_0x1a3244(0x1a1)],Graphics['_centerElement']=function(_0x1f8323){const _0x1cc51b=_0x1a3244;VisuMZ['CoreEngine'][_0x1cc51b(0x6a7)][_0x1cc51b(0x38c)](this,_0x1f8323),this[_0x1cc51b(0x7a0)](_0x1f8323);},Graphics[_0x1a3244(0x7a0)]=function(_0x4383c2){const _0x30c1b3=_0x1a3244;VisuMZ[_0x30c1b3(0x38a)][_0x30c1b3(0x927)]['QoL'][_0x30c1b3(0x330)]&&(_0x4383c2[_0x30c1b3(0x1ef)][_0x30c1b3(0x6fd)]='none');VisuMZ[_0x30c1b3(0x38a)][_0x30c1b3(0x927)][_0x30c1b3(0x83d)][_0x30c1b3(0x6e8)]&&(_0x4383c2['style'][_0x30c1b3(0x7e1)]=_0x30c1b3(0x732));const _0x2ab6fd=Math[_0x30c1b3(0x51f)](0x0,Math[_0x30c1b3(0x312)](_0x4383c2[_0x30c1b3(0x397)]*this[_0x30c1b3(0x39f)])),_0xddc8b9=Math[_0x30c1b3(0x51f)](0x0,Math[_0x30c1b3(0x312)](_0x4383c2['height']*this[_0x30c1b3(0x39f)]));_0x4383c2['style']['width']=_0x2ab6fd+'px',_0x4383c2[_0x30c1b3(0x1ef)][_0x30c1b3(0x583)]=_0xddc8b9+'px';},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x8aa)]=Bitmap[_0x1a3244(0x44d)]['initialize'],Bitmap['prototype'][_0x1a3244(0x292)]=function(_0x409c56,_0x546ebb){const _0x2af24d=_0x1a3244;VisuMZ['CoreEngine']['Bitmap_initialize'][_0x2af24d(0x38c)](this,_0x409c56,_0x546ebb),this['_smooth']=!(VisuMZ[_0x2af24d(0x38a)]['Settings'][_0x2af24d(0x83d)]['PixelateImageRendering']??!![]);},Bitmap['prototype'][_0x1a3244(0x8bb)]=function(){const _0xddd621=_0x1a3244;this[_0xddd621(0x204)]=!![];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x4e0)]=Sprite['prototype'][_0x1a3244(0x44c)],Sprite[_0x1a3244(0x44d)]['destroy']=function(){const _0x1b34f9=_0x1a3244;if(this[_0x1b34f9(0x88e)])VisuMZ[_0x1b34f9(0x38a)][_0x1b34f9(0x4e0)][_0x1b34f9(0x38c)](this);this[_0x1b34f9(0x487)]();},Sprite[_0x1a3244(0x44d)][_0x1a3244(0x487)]=function(){const _0x252e03=_0x1a3244;if(!this[_0x252e03(0x3f5)])return;if(!this['bitmap']['_customModified'])return;this[_0x252e03(0x3f5)][_0x252e03(0x892)]&&!this[_0x252e03(0x611)][_0x252e03(0x892)][_0x252e03(0x8f9)]&&this[_0x252e03(0x3f5)]['destroy']();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x6c3)]=Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x829)],Bitmap[_0x1a3244(0x44d)]['resize']=function(_0x3650ef,_0x4f5f2b){const _0x154fc9=_0x1a3244;VisuMZ[_0x154fc9(0x38a)][_0x154fc9(0x6c3)][_0x154fc9(0x38c)](this,_0x3650ef,_0x4f5f2b),this['markCoreEngineModified']();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x60a)]=Bitmap[_0x1a3244(0x44d)]['blt'],Bitmap['prototype']['blt']=function(_0x3dda4a,_0x97c32a,_0x2045bf,_0x40a78b,_0x308438,_0x381f13,_0x4b0437,_0x255508,_0x596af6){const _0x362791=_0x1a3244;_0x97c32a=Math[_0x362791(0x6e5)](_0x97c32a),_0x2045bf=Math[_0x362791(0x6e5)](_0x2045bf),_0x40a78b=Math[_0x362791(0x6e5)](_0x40a78b),_0x308438=Math[_0x362791(0x6e5)](_0x308438),_0x381f13=Math[_0x362791(0x6e5)](_0x381f13),_0x4b0437=Math[_0x362791(0x6e5)](_0x4b0437),VisuMZ[_0x362791(0x38a)][_0x362791(0x60a)]['call'](this,_0x3dda4a,_0x97c32a,_0x2045bf,_0x40a78b,_0x308438,_0x381f13,_0x4b0437,_0x255508,_0x596af6),this['markCoreEngineModified']();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x481)]=Bitmap[_0x1a3244(0x44d)]['clearRect'],Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x87f)]=function(_0x22fe84,_0x202a97,_0x587e01,_0x2d125a){const _0x5f140d=_0x1a3244;VisuMZ['CoreEngine'][_0x5f140d(0x481)][_0x5f140d(0x38c)](this,_0x22fe84,_0x202a97,_0x587e01,_0x2d125a),this[_0x5f140d(0x8bb)]();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x721)]=Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x7be)],Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x7be)]=function(_0x15435f,_0x331ea0,_0x4aa554,_0x942345,_0x47bdc8){const _0x443996=_0x1a3244;VisuMZ[_0x443996(0x38a)][_0x443996(0x721)][_0x443996(0x38c)](this,_0x15435f,_0x331ea0,_0x4aa554,_0x942345,_0x47bdc8),this['markCoreEngineModified']();},VisuMZ['CoreEngine'][_0x1a3244(0x8c5)]=Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x742)],Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x742)]=function(_0x18a6c2,_0x476e8d,_0x4f93f9,_0x1fe026,_0x14e322){const _0x23630b=_0x1a3244;VisuMZ[_0x23630b(0x38a)][_0x23630b(0x8c5)][_0x23630b(0x38c)](this,_0x18a6c2,_0x476e8d,_0x4f93f9,_0x1fe026,_0x14e322),this['markCoreEngineModified']();},VisuMZ[_0x1a3244(0x38a)]['Bitmap_gradientFillRect']=Bitmap[_0x1a3244(0x44d)]['gradientFillRect'],Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x923)]=function(_0x3f26f6,_0x142727,_0x568c37,_0x3c3a69,_0x2a8872,_0x19f92c,_0x2c797a){const _0x1da112=_0x1a3244;VisuMZ[_0x1da112(0x38a)][_0x1da112(0x485)][_0x1da112(0x38c)](this,_0x3f26f6,_0x142727,_0x568c37,_0x3c3a69,_0x2a8872,_0x19f92c,_0x2c797a),this['markCoreEngineModified']();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x3c7)]=Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x365)],Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x365)]=function(_0xc89dd7,_0x11c4cb,_0x43a0ff,_0x2585f3){const _0xe289d6=_0x1a3244;_0xc89dd7=Math[_0xe289d6(0x6e5)](_0xc89dd7),_0x11c4cb=Math[_0xe289d6(0x6e5)](_0x11c4cb),_0x43a0ff=Math[_0xe289d6(0x6e5)](_0x43a0ff),VisuMZ[_0xe289d6(0x38a)]['Bitmap_drawCircle'][_0xe289d6(0x38c)](this,_0xc89dd7,_0x11c4cb,_0x43a0ff,_0x2585f3),this[_0xe289d6(0x8bb)]();},VisuMZ['CoreEngine'][_0x1a3244(0x5ab)]=Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x439)],Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x439)]=function(_0x4e036a){const _0x102bbe=_0x1a3244;return Math[_0x102bbe(0x4a2)](VisuMZ[_0x102bbe(0x38a)]['Bitmap_measureTextWidth'][_0x102bbe(0x38c)](this,_0x4e036a));},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x536)]=Bitmap['prototype'][_0x1a3244(0x419)],Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x419)]=function(_0x1e4464,_0xb9e84c,_0x22eec0,_0x21da8f,_0x1f06c4,_0x1c5977){const _0x2b8ebc=_0x1a3244;_0xb9e84c=Math['round'](_0xb9e84c),_0x22eec0=Math[_0x2b8ebc(0x6e5)](_0x22eec0),_0x21da8f=Math['ceil'](_0x21da8f),_0x1f06c4=Math['ceil'](_0x1f06c4),VisuMZ[_0x2b8ebc(0x38a)]['Bitmap_drawText'][_0x2b8ebc(0x38c)](this,_0x1e4464,_0xb9e84c,_0x22eec0,_0x21da8f,_0x1f06c4,_0x1c5977),this['markCoreEngineModified']();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x3b2)]=Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x3b7)],Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x3b7)]=function(_0x2f6967,_0x53e4cf,_0x503ab6,_0x22f47f){const _0x4b933e=_0x1a3244;VisuMZ['CoreEngine']['Settings'][_0x4b933e(0x83d)][_0x4b933e(0x5c6)]?this[_0x4b933e(0x755)](_0x2f6967,_0x53e4cf,_0x503ab6,_0x22f47f):VisuMZ[_0x4b933e(0x38a)][_0x4b933e(0x3b2)][_0x4b933e(0x38c)](this,_0x2f6967,_0x53e4cf,_0x503ab6,_0x22f47f);},Bitmap['prototype'][_0x1a3244(0x755)]=function(_0x575690,_0xf38c1f,_0x1b7f78,_0x20a4a4){const _0x3de373=_0x1a3244,_0x5f5c13=this[_0x3de373(0x2c9)];_0x5f5c13[_0x3de373(0x76a)]=this[_0x3de373(0x857)],_0x5f5c13['fillText'](_0x575690,_0xf38c1f+0x2,_0x1b7f78+0x2,_0x20a4a4);},VisuMZ['CoreEngine']['Input_clear']=Input[_0x1a3244(0x222)],Input[_0x1a3244(0x222)]=function(){const _0x54dd93=_0x1a3244;VisuMZ[_0x54dd93(0x38a)][_0x54dd93(0x6af)][_0x54dd93(0x38c)](this),this[_0x54dd93(0x62f)]=undefined,this[_0x54dd93(0x3f8)]=undefined,this[_0x54dd93(0x409)]=Input[_0x54dd93(0x42d)];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x3bd)]=Input[_0x1a3244(0x46a)],Input[_0x1a3244(0x46a)]=function(){const _0x30e938=_0x1a3244;VisuMZ[_0x30e938(0x38a)][_0x30e938(0x3bd)][_0x30e938(0x38c)](this);if(this[_0x30e938(0x409)])this[_0x30e938(0x409)]--;},VisuMZ['CoreEngine'][_0x1a3244(0x344)]=Input['_pollGamepads'],Input['_pollGamepads']=function(){const _0x56f153=_0x1a3244;if(this[_0x56f153(0x409)])return;VisuMZ[_0x56f153(0x38a)]['Input_pollGamepads'][_0x56f153(0x38c)](this);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x669)]=Input[_0x1a3244(0x74c)],Input['_setupEventHandlers']=function(){const _0x58e523=_0x1a3244;VisuMZ[_0x58e523(0x38a)][_0x58e523(0x669)][_0x58e523(0x38c)](this),document[_0x58e523(0x4bf)]('keypress',this[_0x58e523(0x22d)][_0x58e523(0x2e8)](this));},VisuMZ['CoreEngine'][_0x1a3244(0x20e)]=Input[_0x1a3244(0x3d5)],Input[_0x1a3244(0x3d5)]=function(_0x430c47){const _0x34e341=_0x1a3244;this[_0x34e341(0x3f8)]=_0x430c47[_0x34e341(0x774)],VisuMZ[_0x34e341(0x38a)][_0x34e341(0x20e)][_0x34e341(0x38c)](this,_0x430c47),this[_0x34e341(0x31d)](null);},Input[_0x1a3244(0x22d)]=function(_0x5076cb){const _0x1785c6=_0x1a3244;this[_0x1785c6(0x933)](_0x5076cb);},Input[_0x1a3244(0x933)]=function(_0x1f8579){const _0xefc05e=_0x1a3244;this[_0xefc05e(0x3f8)]=_0x1f8579[_0xefc05e(0x774)];let _0x3f595f=String[_0xefc05e(0x81b)](_0x1f8579[_0xefc05e(0x360)]);this['_inputString']===undefined?this[_0xefc05e(0x62f)]=_0x3f595f:this[_0xefc05e(0x62f)]+=_0x3f595f;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x37c)]=Input[_0x1a3244(0x29b)],Input[_0x1a3244(0x29b)]=function(_0x3e667d){const _0x3d3db7=_0x1a3244;if(_0x3e667d===0x8)return![];return VisuMZ['CoreEngine'][_0x3d3db7(0x37c)][_0x3d3db7(0x38c)](this,_0x3e667d);},Input[_0x1a3244(0x73c)]=function(_0x42511f){const _0x2e273d=_0x1a3244;if(_0x42511f['match'](/backspace/i))return this[_0x2e273d(0x3f8)]===0x8;if(_0x42511f[_0x2e273d(0x90f)](/enter/i))return this[_0x2e273d(0x3f8)]===0xd;if(_0x42511f[_0x2e273d(0x90f)](/escape/i))return this[_0x2e273d(0x3f8)]===0x1b;},Input[_0x1a3244(0x5cd)]=function(){const _0x361418=_0x1a3244;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39][_0x361418(0x541)](this['_inputSpecialKeyCode']);},Input['isArrowPressed']=function(){return[0x25,0x26,0x27,0x28]['contains'](this['_inputSpecialKeyCode']);},Input[_0x1a3244(0x7e9)]=function(){const _0x36744a=_0x1a3244;if(navigator[_0x36744a(0x8c0)]){const _0x136d3f=navigator[_0x36744a(0x8c0)]();if(_0x136d3f)for(const _0x39a4f0 of _0x136d3f){if(_0x39a4f0&&_0x39a4f0[_0x36744a(0x3f0)])return!![];}}return![];},Input['isGamepadTriggered']=function(){const _0x2686cf=_0x1a3244;if(navigator[_0x2686cf(0x8c0)]){const _0x2e2b9b=navigator[_0x2686cf(0x8c0)]();if(_0x2e2b9b)for(const _0x29064f of _0x2e2b9b){if(_0x29064f&&_0x29064f[_0x2686cf(0x3f0)]){if(this['isGamepadButtonPressed'](_0x29064f))return!![];if(this[_0x2686cf(0x7ae)](_0x29064f))return!![];}}}return![];},Input[_0x1a3244(0x8c2)]=function(_0x39cb17){const _0xfc42d0=_0x1a3244,_0x13b3b3=_0x39cb17['buttons'];for(let _0x164628=0x0;_0x164628<_0x13b3b3['length'];_0x164628++){if(_0x13b3b3[_0x164628][_0xfc42d0(0x396)])return!![];}return![];},Input[_0x1a3244(0x7ae)]=function(_0x3b7b96){const _0x135c63=_0x3b7b96['axes'],_0xec79f5=0.5;if(_0x135c63[0x0]<-_0xec79f5)return!![];if(_0x135c63[0x0]>_0xec79f5)return!![];if(_0x135c63[0x1]<-_0xec79f5)return!![];if(_0x135c63[0x1]>_0xec79f5)return!![];return![];},Input[_0x1a3244(0x7b0)]=function(){const _0x5ce888=_0x1a3244;return this[_0x5ce888(0x25c)]||null;},Input[_0x1a3244(0x31d)]=function(_0x23f562){this['_lastGamepad']=_0x23f562;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x4ae)]=Input['_updateGamepadState'],Input[_0x1a3244(0x89c)]=function(_0x38ceeb){const _0x55f8ce=_0x1a3244;VisuMZ[_0x55f8ce(0x38a)]['Input_updateGamepadState'][_0x55f8ce(0x38c)](this,_0x38ceeb),(this[_0x55f8ce(0x8c2)](_0x38ceeb)||this[_0x55f8ce(0x7ae)](_0x38ceeb))&&this['setLastGamepadUsed'](_0x38ceeb);},Input[_0x1a3244(0x860)]=function(){const _0x510f86=_0x1a3244;return this['_lastGamepad']?this['_lastGamepad']['id']:_0x510f86(0x623);},VisuMZ[_0x1a3244(0x38a)]['Tilemap_addShadow']=Tilemap[_0x1a3244(0x44d)][_0x1a3244(0x305)],Tilemap['prototype'][_0x1a3244(0x305)]=function(_0x38e31f,_0x440a48,_0x1f2967,_0x2759f0){const _0x8cac69=_0x1a3244;if($gameMap&&$gameMap[_0x8cac69(0x480)]())return;VisuMZ[_0x8cac69(0x38a)][_0x8cac69(0x57e)]['call'](this,_0x38e31f,_0x440a48,_0x1f2967,_0x2759f0);},Tilemap['Renderer']['prototype'][_0x1a3244(0x453)]=function(){const _0x3f2223=_0x1a3244;this[_0x3f2223(0x887)]();for(let _0x1295ab=0x0;_0x1295ab<Tilemap[_0x3f2223(0x3b8)][_0x3f2223(0x78f)];_0x1295ab++){const _0x175b4e=new PIXI[(_0x3f2223(0x6e3))]();_0x175b4e[_0x3f2223(0x943)](0x800,0x800),VisuMZ[_0x3f2223(0x38a)]['Settings'][_0x3f2223(0x83d)][_0x3f2223(0x6e8)]&&(_0x175b4e['scaleMode']=PIXI['SCALE_MODES']['NEAREST']),this[_0x3f2223(0x57f)][_0x3f2223(0x27f)](_0x175b4e);}},WindowLayer[_0x1a3244(0x44d)]['isMaskingEnabled']=function(){const _0x2677e6=_0x1a3244;return SceneManager&&SceneManager[_0x2677e6(0x79b)]?SceneManager[_0x2677e6(0x79b)][_0x2677e6(0x3aa)]():!![];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x788)]=WindowLayer[_0x1a3244(0x44d)][_0x1a3244(0x5b8)],WindowLayer['prototype']['render']=function render(_0x27361f){const _0x2d64f4=_0x1a3244;this['isMaskingEnabled']()?VisuMZ[_0x2d64f4(0x38a)]['WindowLayer_render'][_0x2d64f4(0x38c)](this,_0x27361f):this[_0x2d64f4(0x51d)](_0x27361f);},WindowLayer[_0x1a3244(0x44d)][_0x1a3244(0x51d)]=function render(_0x55dd9e){const _0x20180a=_0x1a3244;if(!this[_0x20180a(0x8fc)])return;const _0x50c7f1=new PIXI[(_0x20180a(0x3cf))](),_0x5a094a=_0x55dd9e['gl'],_0xea83d=this[_0x20180a(0x64f)]['clone']();_0x55dd9e['framebuffer']['forceStencil'](),_0x50c7f1[_0x20180a(0x7af)]=this[_0x20180a(0x7af)],_0x55dd9e[_0x20180a(0x601)][_0x20180a(0x4f9)](),_0x5a094a[_0x20180a(0x86d)](_0x5a094a['STENCIL_TEST']);while(_0xea83d[_0x20180a(0x753)]>0x0){const _0x396252=_0xea83d[_0x20180a(0x4e9)]();_0x396252['_isWindow']&&_0x396252[_0x20180a(0x8fc)]&&_0x396252[_0x20180a(0x2e0)]>0x0&&(_0x5a094a['stencilFunc'](_0x5a094a[_0x20180a(0x6f8)],0x0,~0x0),_0x5a094a[_0x20180a(0x58e)](_0x5a094a[_0x20180a(0x43b)],_0x5a094a[_0x20180a(0x43b)],_0x5a094a['KEEP']),_0x396252[_0x20180a(0x5b8)](_0x55dd9e),_0x55dd9e[_0x20180a(0x601)]['flush'](),_0x50c7f1['clear'](),_0x5a094a[_0x20180a(0x77a)](_0x5a094a[_0x20180a(0x19c)],0x1,~0x0),_0x5a094a[_0x20180a(0x58e)](_0x5a094a[_0x20180a(0x7f1)],_0x5a094a[_0x20180a(0x7f1)],_0x5a094a['REPLACE']),_0x5a094a[_0x20180a(0x802)](_0x5a094a[_0x20180a(0x4ce)],_0x5a094a[_0x20180a(0x71a)]),_0x50c7f1[_0x20180a(0x5b8)](_0x55dd9e),_0x55dd9e[_0x20180a(0x601)][_0x20180a(0x4f9)](),_0x5a094a['blendFunc'](_0x5a094a['ONE'],_0x5a094a['ONE_MINUS_SRC_ALPHA']));}_0x5a094a[_0x20180a(0x775)](_0x5a094a[_0x20180a(0x24d)]),_0x5a094a[_0x20180a(0x222)](_0x5a094a[_0x20180a(0x517)]),_0x5a094a[_0x20180a(0x8df)](0x0),_0x55dd9e['batch']['flush']();for(const _0x2c03d7 of this[_0x20180a(0x64f)]){!_0x2c03d7[_0x20180a(0x8b4)]&&_0x2c03d7[_0x20180a(0x8fc)]&&_0x2c03d7[_0x20180a(0x5b8)](_0x55dd9e);}_0x55dd9e[_0x20180a(0x601)]['flush']();},DataManager[_0x1a3244(0x2aa)]=function(_0x44892d){const _0x5bdae8=_0x1a3244;return this[_0x5bdae8(0x4fa)](_0x44892d)&&_0x44892d[_0x5bdae8(0x5eb)]===0x2;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x1d8)]=DataManager['setupNewGame'],DataManager[_0x1a3244(0x8f1)]=function(){const _0x587eb3=_0x1a3244;VisuMZ[_0x587eb3(0x38a)][_0x587eb3(0x1d8)]['call'](this),this[_0x587eb3(0x7a4)](),this['reserveNewGameCommonEvent']();},DataManager[_0x1a3244(0x7a4)]=function(){const _0x5dce01=_0x1a3244;if($gameTemp['isPlaytest']()){const _0x314675=VisuMZ[_0x5dce01(0x38a)][_0x5dce01(0x927)][_0x5dce01(0x83d)][_0x5dce01(0x7ea)];if(_0x314675>0x0)$gameTemp[_0x5dce01(0x881)](_0x314675);}},DataManager[_0x1a3244(0x683)]=function(){const _0x500f7d=_0x1a3244,_0x38bc37=VisuMZ[_0x500f7d(0x38a)][_0x500f7d(0x927)][_0x500f7d(0x83d)][_0x500f7d(0x3cb)]||0x0;if(_0x38bc37>0x0)$gameTemp['reserveCommonEvent'](_0x38bc37);},DataManager[_0x1a3244(0x1dc)]=function(_0x3bd103){const _0xb72f08=_0x1a3244,_0x442d7e=$dataTroops[_0x3bd103];if(!_0x442d7e)return'';let _0x47c640='';_0x47c640+=_0x442d7e[_0xb72f08(0x17f)];for(const _0x2419a3 of _0x442d7e['pages']){for(const _0x158e64 of _0x2419a3['list']){[0x6c,0x198]['includes'](_0x158e64[_0xb72f08(0x7b3)])&&(_0x47c640+='\x0a',_0x47c640+=_0x158e64[_0xb72f08(0x41a)][0x0]);}}return _0x47c640;};(VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)]['QoL'][_0x1a3244(0x44e)]??!![])&&($scene=null,VisuMZ['CoreEngine']['Scene_Base_create']=Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x712)],Scene_Base['prototype'][_0x1a3244(0x712)]=function(){const _0x3518df=_0x1a3244;VisuMZ[_0x3518df(0x38a)][_0x3518df(0x30d)][_0x3518df(0x38c)](this),$scene=this;},$spriteset=null,VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x548)]=Scene_Map[_0x1a3244(0x44d)]['createSpriteset'],Scene_Map[_0x1a3244(0x44d)]['createSpriteset']=function(){const _0x19693e=_0x1a3244;VisuMZ[_0x19693e(0x38a)][_0x19693e(0x548)][_0x19693e(0x38c)](this),$spriteset=this[_0x19693e(0x245)];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x2a6)]=Scene_Battle['prototype'][_0x1a3244(0x35e)],Scene_Battle[_0x1a3244(0x44d)][_0x1a3244(0x35e)]=function(){const _0x3d57f7=_0x1a3244;VisuMZ[_0x3d57f7(0x38a)][_0x3d57f7(0x2a6)][_0x3d57f7(0x38c)](this),$spriteset=this[_0x3d57f7(0x245)];},VisuMZ[_0x1a3244(0x38a)]['Scene_Base_terminate']=Scene_Base[_0x1a3244(0x44d)]['terminate'],Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x7ce)]=function(){const _0x32df1c=_0x1a3244;VisuMZ[_0x32df1c(0x38a)]['Scene_Base_terminate'][_0x32df1c(0x38c)](this),$spriteset=null,$subject=null,$targets=null,$target=null;},$subject=null,$targets=null,$target=null,VisuMZ['CoreEngine'][_0x1a3244(0x1b1)]=BattleManager[_0x1a3244(0x46a)],BattleManager['update']=function(_0x31ab40){const _0x1c629a=_0x1a3244;VisuMZ[_0x1c629a(0x38a)][_0x1c629a(0x1b1)][_0x1c629a(0x38c)](this,_0x31ab40),$subject=this[_0x1c629a(0x1e2)],$targets=this[_0x1c629a(0x748)],$target=this[_0x1c629a(0x671)]||this[_0x1c629a(0x748)][0x0];},$event=null,VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x925)]=Game_Event[_0x1a3244(0x44d)][_0x1a3244(0x4f3)],Game_Event[_0x1a3244(0x44d)]['start']=function(){const _0x4be33d=_0x1a3244;VisuMZ['CoreEngine'][_0x4be33d(0x925)]['call'](this),$event=this;},VisuMZ['CoreEngine'][_0x1a3244(0x758)]=Scene_Map['prototype'][_0x1a3244(0x46a)],Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x46a)]=function(){VisuMZ['CoreEngine']['Scene_Map_update']['call'](this),$gameMap['updateCurrentEvent']();},Game_Map[_0x1a3244(0x44d)]['updateCurrentEvent']=function(){const _0x41e809=_0x1a3244;!this[_0x41e809(0x590)]()&&$event!==null&&($event=null);},$commonEvent=function(_0x46eb9b){const _0x196649=_0x1a3244;if($gameTemp)$gameTemp[_0x196649(0x881)](_0x46eb9b);},$onceParallel=function(_0x523bb9,_0xb60d20){const _0x2a6e53=_0x1a3244;if(SceneManager[_0x2a6e53(0x7ee)]())$scene[_0x2a6e53(0x836)](_0x523bb9,_0xb60d20);else{if(SceneManager['isSceneBattle']()){if(Imported[_0x2a6e53(0x258)])$scene['playOnceParallelInterpreter'](_0x523bb9);else $gameTemp&&$gameTemp[_0x2a6e53(0x2ff)]()&&alert(_0x2a6e53(0x4ac));}else $gameTemp&&$gameTemp[_0x2a6e53(0x2ff)]()&&alert(_0x2a6e53(0x898));}});;StorageManager[_0x1a3244(0x55b)]=function(_0xe74bad){return new Promise((_0x319e98,_0x590744)=>{const _0x136cbc=_0x4d19;try{const _0x2b1afc=pako[_0x136cbc(0x52c)](_0xe74bad,{'to':_0x136cbc(0x2ea),'level':0x1});if(_0x2b1afc[_0x136cbc(0x753)]>=0xc350){}_0x319e98(_0x2b1afc);}catch(_0x5ad332){_0x590744(_0x5ad332);}});},TextManager[_0x1a3244(0x65f)]=['','','',_0x1a3244(0x1ba),'','','HELP','',_0x1a3244(0x83f),_0x1a3244(0x8ef),'','',_0x1a3244(0x57d),'ENTER',_0x1a3244(0x1b9),'',_0x1a3244(0x772),_0x1a3244(0x35f),_0x1a3244(0x5f3),_0x1a3244(0x18c),_0x1a3244(0x492),_0x1a3244(0x7eb),_0x1a3244(0x36e),'JUNJA',_0x1a3244(0x78d),_0x1a3244(0x92e),'',_0x1a3244(0x303),_0x1a3244(0x506),_0x1a3244(0x5f6),_0x1a3244(0x647),_0x1a3244(0x603),_0x1a3244(0x31a),'PGUP',_0x1a3244(0x55e),_0x1a3244(0x38b),_0x1a3244(0x76b),_0x1a3244(0x653),'UP','RIGHT','DOWN',_0x1a3244(0x251),'PRINT','EXECUTE','PRINTSCREEN',_0x1a3244(0x42e),_0x1a3244(0x8f4),'','0','1','2','3','4','5','6','7','8','9',_0x1a3244(0x7b2),_0x1a3244(0x490),_0x1a3244(0x4ff),_0x1a3244(0x90e),_0x1a3244(0x2ec),'QUESTION_MARK','AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',_0x1a3244(0x3c5),'',_0x1a3244(0x1a2),'',_0x1a3244(0x242),_0x1a3244(0x7bc),_0x1a3244(0x7bb),_0x1a3244(0x3dc),'NUMPAD3','NUMPAD4','NUMPAD5','NUMPAD6',_0x1a3244(0x572),_0x1a3244(0x620),_0x1a3244(0x571),_0x1a3244(0x871),_0x1a3244(0x7ed),_0x1a3244(0x5f4),_0x1a3244(0x45a),_0x1a3244(0x3b6),_0x1a3244(0x3a4),'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12',_0x1a3244(0x6c1),'F14','F15',_0x1a3244(0x807),_0x1a3244(0x421),_0x1a3244(0x41c),'F19',_0x1a3244(0x837),'F21',_0x1a3244(0x6f6),_0x1a3244(0x660),_0x1a3244(0x6be),'','','','','','','','',_0x1a3244(0x5de),_0x1a3244(0x941),_0x1a3244(0x1b4),'WIN_OEM_FJ_MASSHOU','WIN_OEM_FJ_TOUROKU',_0x1a3244(0x5e4),'WIN_OEM_FJ_ROYA','','','','','','','','','',_0x1a3244(0x448),'EXCLAMATION','DOUBLE_QUOTE','HASH',_0x1a3244(0x557),_0x1a3244(0x6ba),_0x1a3244(0x5d9),'UNDERSCORE',_0x1a3244(0x1cf),'CLOSE_PAREN','ASTERISK',_0x1a3244(0x3d8),'PIPE',_0x1a3244(0x72e),_0x1a3244(0x229),_0x1a3244(0x743),_0x1a3244(0x6ce),'','','','',_0x1a3244(0x320),_0x1a3244(0x454),_0x1a3244(0x617),'','',_0x1a3244(0x490),'EQUALS',_0x1a3244(0x6ea),'MINUS',_0x1a3244(0x37b),'SLASH',_0x1a3244(0x889),'','','','','','','','','','','','','','','','','','','','','','','','','','','OPEN_BRACKET',_0x1a3244(0x484),_0x1a3244(0x417),_0x1a3244(0x22c),'',_0x1a3244(0x705),_0x1a3244(0x701),'',_0x1a3244(0x70a),_0x1a3244(0x6d8),'',_0x1a3244(0x8c8),'','',_0x1a3244(0x6fe),_0x1a3244(0x23e),_0x1a3244(0x1d0),_0x1a3244(0x5d8),'WIN_OEM_PA3',_0x1a3244(0x63a),_0x1a3244(0x848),_0x1a3244(0x77b),_0x1a3244(0x550),_0x1a3244(0x20c),_0x1a3244(0x482),_0x1a3244(0x61e),'WIN_OEM_BACKTAB','ATTN',_0x1a3244(0x4a1),'EXSEL',_0x1a3244(0x5e2),_0x1a3244(0x766),_0x1a3244(0x2e6),'',_0x1a3244(0x321),_0x1a3244(0x734),''],TextManager['buttonAssistOk']=VisuMZ['CoreEngine']['Settings'][_0x1a3244(0x3a1)][_0x1a3244(0x7d1)],TextManager[_0x1a3244(0x8f8)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x3a1)][_0x1a3244(0x55d)],TextManager['buttonAssistSwitch']=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x3a1)]['SwitchActorText'],VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x67b)]=TextManager[_0x1a3244(0x862)],TextManager[_0x1a3244(0x862)]=function(_0x43be3a){const _0xb76e5e=_0x1a3244;return typeof _0x43be3a===_0xb76e5e(0x30b)?VisuMZ[_0xb76e5e(0x38a)][_0xb76e5e(0x67b)][_0xb76e5e(0x38c)](this,_0x43be3a):this[_0xb76e5e(0x2bc)](_0x43be3a);},TextManager[_0x1a3244(0x2bc)]=function(_0x2d9384){const _0x35edb1=_0x1a3244;_0x2d9384=String(_0x2d9384||'')[_0x35edb1(0x5c4)]();const _0x46f54c=VisuMZ[_0x35edb1(0x38a)][_0x35edb1(0x927)][_0x35edb1(0x381)];if(_0x2d9384==='MAXHP')return $dataSystem[_0x35edb1(0x54e)][_0x35edb1(0x602)][0x0];if(_0x2d9384==='MAXMP')return $dataSystem['terms']['params'][0x1];if(_0x2d9384===_0x35edb1(0x821))return $dataSystem[_0x35edb1(0x54e)][_0x35edb1(0x602)][0x2];if(_0x2d9384===_0x35edb1(0x8da))return $dataSystem['terms']['params'][0x3];if(_0x2d9384===_0x35edb1(0x769))return $dataSystem[_0x35edb1(0x54e)][_0x35edb1(0x602)][0x4];if(_0x2d9384===_0x35edb1(0x31c))return $dataSystem[_0x35edb1(0x54e)][_0x35edb1(0x602)][0x5];if(_0x2d9384==='AGI')return $dataSystem['terms']['params'][0x6];if(_0x2d9384===_0x35edb1(0x885))return $dataSystem[_0x35edb1(0x54e)][_0x35edb1(0x602)][0x7];if(_0x2d9384==='HIT')return _0x46f54c['XParamVocab0'];if(_0x2d9384===_0x35edb1(0x842))return _0x46f54c['XParamVocab1'];if(_0x2d9384===_0x35edb1(0x613))return _0x46f54c['XParamVocab2'];if(_0x2d9384===_0x35edb1(0x183))return _0x46f54c['XParamVocab3'];if(_0x2d9384==='MEV')return _0x46f54c['XParamVocab4'];if(_0x2d9384===_0x35edb1(0x289))return _0x46f54c[_0x35edb1(0x622)];if(_0x2d9384===_0x35edb1(0x706))return _0x46f54c[_0x35edb1(0x932)];if(_0x2d9384===_0x35edb1(0x6e9))return _0x46f54c[_0x35edb1(0x178)];if(_0x2d9384===_0x35edb1(0x614))return _0x46f54c[_0x35edb1(0x32f)];if(_0x2d9384===_0x35edb1(0x82a))return _0x46f54c[_0x35edb1(0x3d4)];if(_0x2d9384===_0x35edb1(0x2d8))return _0x46f54c[_0x35edb1(0x3ca)];if(_0x2d9384===_0x35edb1(0x489))return _0x46f54c['SParamVocab1'];if(_0x2d9384==='REC')return _0x46f54c[_0x35edb1(0x34f)];if(_0x2d9384===_0x35edb1(0x427))return _0x46f54c[_0x35edb1(0x808)];if(_0x2d9384==='MCR')return _0x46f54c[_0x35edb1(0x1cc)];if(_0x2d9384==='TCR')return _0x46f54c[_0x35edb1(0x1c0)];if(_0x2d9384==='PDR')return _0x46f54c[_0x35edb1(0x491)];if(_0x2d9384===_0x35edb1(0x218))return _0x46f54c['SParamVocab7'];if(_0x2d9384===_0x35edb1(0x5ae))return _0x46f54c[_0x35edb1(0x3ba)];if(_0x2d9384===_0x35edb1(0x1c3))return _0x46f54c[_0x35edb1(0x3d1)];if(VisuMZ[_0x35edb1(0x38a)]['CustomParamNames'][_0x2d9384])return VisuMZ[_0x35edb1(0x38a)][_0x35edb1(0x451)][_0x2d9384];return'';},TextManager[_0x1a3244(0x201)]=function(_0x569405){const _0x37ad1a=_0x1a3244,_0xee48fe=Input['getLastUsedGamepadType']();return _0xee48fe===_0x37ad1a(0x623)?this[_0x37ad1a(0x1cb)](_0x569405):this[_0x37ad1a(0x570)](_0xee48fe,_0x569405);},TextManager[_0x1a3244(0x1cb)]=function(_0x24afee){const _0x53b97c=_0x1a3244,_0x5277c4=VisuMZ['CoreEngine'][_0x53b97c(0x927)][_0x53b97c(0x3a1)][_0x53b97c(0x2cf)];if(!_0x5277c4){if(_0x24afee===_0x53b97c(0x83e))_0x24afee=_0x53b97c(0x336);if(_0x24afee===_0x53b97c(0x586))_0x24afee=_0x53b97c(0x336);}let _0x17e668=[];for(let _0x2577cb in Input[_0x53b97c(0x375)]){_0x2577cb=Number(_0x2577cb);if(_0x2577cb>=0x60&&_0x2577cb<=0x69)continue;if([0x12,0x20][_0x53b97c(0x56f)](_0x2577cb))continue;_0x24afee===Input[_0x53b97c(0x375)][_0x2577cb]&&_0x17e668[_0x53b97c(0x27f)](_0x2577cb);}for(let _0x2425f3=0x0;_0x2425f3<_0x17e668['length'];_0x2425f3++){_0x17e668[_0x2425f3]=TextManager[_0x53b97c(0x65f)][_0x17e668[_0x2425f3]];}return this[_0x53b97c(0x282)](_0x17e668);},TextManager[_0x1a3244(0x282)]=function(_0x1b0fe3){const _0x115c3b=_0x1a3244,_0x58dec=VisuMZ[_0x115c3b(0x38a)]['Settings']['ButtonAssist'],_0x328ed6=_0x58dec[_0x115c3b(0x832)],_0x458294=_0x1b0fe3[_0x115c3b(0x1bf)](),_0x121d28=_0x115c3b(0x661)['format'](_0x458294);return _0x58dec[_0x121d28]?_0x58dec[_0x121d28]:_0x328ed6[_0x115c3b(0x1ad)](_0x458294);},TextManager['getInputMultiButtonStrings']=function(_0x3c7589,_0x358dc1){const _0x4889b2=_0x1a3244,_0x1b7a5c=VisuMZ[_0x4889b2(0x38a)][_0x4889b2(0x927)][_0x4889b2(0x3a1)],_0x560ce0=_0x1b7a5c['MultiKeyFmt'],_0x1a4c1f=this[_0x4889b2(0x201)](_0x3c7589),_0x35c169=this[_0x4889b2(0x201)](_0x358dc1);return _0x560ce0['format'](_0x1a4c1f,_0x35c169);},TextManager[_0x1a3244(0x570)]=function(_0x43fe20,_0x5d27f5){const _0x3a7def=_0x1a3244,_0x26489e=_0x43fe20[_0x3a7def(0x6ef)]()[_0x3a7def(0x797)](),_0x488f06=VisuMZ['CoreEngine'][_0x3a7def(0x309)][_0x26489e];if(!_0x488f06)return this[_0x3a7def(0x268)](_0x43fe20,_0x5d27f5);return _0x488f06[_0x5d27f5]||this['getKeyboardInputButtonString'](_0x43fe20,_0x5d27f5);},TextManager['getControllerInputButtonMatch']=function(_0x151d9f,_0x45c6eb){const _0x20e5e9=_0x1a3244,_0x582112=_0x151d9f['toLowerCase']()[_0x20e5e9(0x797)]();for(const _0xf3dd83 in VisuMZ[_0x20e5e9(0x38a)]['ControllerMatches']){if(_0x582112[_0x20e5e9(0x56f)](_0xf3dd83)){const _0x5c8569=VisuMZ[_0x20e5e9(0x38a)]['ControllerMatches'][_0xf3dd83],_0x435ed2=VisuMZ['CoreEngine'][_0x20e5e9(0x309)][_0x5c8569];return _0x435ed2[_0x45c6eb]||this[_0x20e5e9(0x1cb)](_0x45c6eb);}}return this[_0x20e5e9(0x1cb)](_0x45c6eb);},VisuMZ['CoreEngine']['ColorManager_loadWindowskin']=ColorManager['loadWindowskin'],ColorManager[_0x1a3244(0x4a8)]=function(){const _0x374465=_0x1a3244;VisuMZ[_0x374465(0x38a)][_0x374465(0x629)][_0x374465(0x38c)](this),this[_0x374465(0x7e6)]=this[_0x374465(0x7e6)]||{};},ColorManager[_0x1a3244(0x7e8)]=function(_0x1fe15d,_0x31030e){const _0x3eaae0=_0x1a3244;return _0x31030e=String(_0x31030e),this['_colorCache']=this[_0x3eaae0(0x7e6)]||{},_0x31030e[_0x3eaae0(0x90f)](/#(.*)/i)?this[_0x3eaae0(0x7e6)][_0x1fe15d]=_0x3eaae0(0x6b7)['format'](String(RegExp['$1'])):this[_0x3eaae0(0x7e6)][_0x1fe15d]=this[_0x3eaae0(0x6d7)](Number(_0x31030e)),this[_0x3eaae0(0x7e6)][_0x1fe15d];},ColorManager[_0x1a3244(0x3df)]=function(_0x878db8){const _0x4a3673=_0x1a3244;return _0x878db8=String(_0x878db8),_0x878db8[_0x4a3673(0x90f)](/#(.*)/i)?_0x4a3673(0x6b7)['format'](String(RegExp['$1'])):this[_0x4a3673(0x6d7)](Number(_0x878db8));},ColorManager['clearCachedKeys']=function(){const _0x22f42d=_0x1a3244;this[_0x22f42d(0x7e6)]={};},ColorManager['normalColor']=function(){const _0x4dc85e=_0x1a3244,_0x530d64=_0x4dc85e(0x6c2);this['_colorCache']=this['_colorCache']||{};if(this[_0x4dc85e(0x7e6)][_0x530d64])return this[_0x4dc85e(0x7e6)][_0x530d64];const _0x1f5b5f=VisuMZ[_0x4dc85e(0x38a)][_0x4dc85e(0x927)][_0x4dc85e(0x2df)][_0x4dc85e(0x760)];return this[_0x4dc85e(0x7e8)](_0x530d64,_0x1f5b5f);},ColorManager[_0x1a3244(0x7d7)]=function(){const _0x50aff9=_0x1a3244,_0x22d52d=_0x50aff9(0x4f8);this[_0x50aff9(0x7e6)]=this[_0x50aff9(0x7e6)]||{};if(this['_colorCache'][_0x22d52d])return this[_0x50aff9(0x7e6)][_0x22d52d];const _0x8af411=VisuMZ['CoreEngine'][_0x50aff9(0x927)]['Color'][_0x50aff9(0x44f)];return this[_0x50aff9(0x7e8)](_0x22d52d,_0x8af411);},ColorManager[_0x1a3244(0x383)]=function(){const _0xb81eb=_0x1a3244,_0x2f24fb=_0xb81eb(0x729);this[_0xb81eb(0x7e6)]=this['_colorCache']||{};if(this[_0xb81eb(0x7e6)][_0x2f24fb])return this[_0xb81eb(0x7e6)][_0x2f24fb];const _0xafdd39=VisuMZ[_0xb81eb(0x38a)][_0xb81eb(0x927)]['Color'][_0xb81eb(0x535)];return this[_0xb81eb(0x7e8)](_0x2f24fb,_0xafdd39);},ColorManager[_0x1a3244(0x89b)]=function(){const _0x580c96=_0x1a3244,_0x339e31=_0x580c96(0x382);this['_colorCache']=this[_0x580c96(0x7e6)]||{};if(this['_colorCache'][_0x339e31])return this[_0x580c96(0x7e6)][_0x339e31];const _0x40a3d5=VisuMZ[_0x580c96(0x38a)][_0x580c96(0x927)]['Color'][_0x580c96(0x79d)];return this[_0x580c96(0x7e8)](_0x339e31,_0x40a3d5);},ColorManager[_0x1a3244(0x695)]=function(){const _0x510135=_0x1a3244,_0x4853da=_0x510135(0x2f6);this[_0x510135(0x7e6)]=this['_colorCache']||{};if(this[_0x510135(0x7e6)][_0x4853da])return this['_colorCache'][_0x4853da];const _0x2bac77=VisuMZ[_0x510135(0x38a)][_0x510135(0x927)]['Color']['ColorGaugeBack'];return this['getColorDataFromPluginParameters'](_0x4853da,_0x2bac77);},ColorManager[_0x1a3244(0x2c3)]=function(){const _0x5468f5=_0x1a3244,_0x4d18eb=_0x5468f5(0x447);this['_colorCache']=this['_colorCache']||{};if(this[_0x5468f5(0x7e6)][_0x4d18eb])return this[_0x5468f5(0x7e6)][_0x4d18eb];const _0x5740d3=VisuMZ[_0x5468f5(0x38a)][_0x5468f5(0x927)][_0x5468f5(0x2df)][_0x5468f5(0x88b)];return this['getColorDataFromPluginParameters'](_0x4d18eb,_0x5740d3);},ColorManager[_0x1a3244(0x4d8)]=function(){const _0x43c942=_0x1a3244,_0x358624='_stored_hpGaugeColor2';this[_0x43c942(0x7e6)]=this[_0x43c942(0x7e6)]||{};if(this['_colorCache'][_0x358624])return this[_0x43c942(0x7e6)][_0x358624];const _0x178bca=VisuMZ['CoreEngine'][_0x43c942(0x927)][_0x43c942(0x2df)][_0x43c942(0x1b6)];return this['getColorDataFromPluginParameters'](_0x358624,_0x178bca);},ColorManager[_0x1a3244(0x81d)]=function(){const _0x253e35=_0x1a3244,_0x3e7845=_0x253e35(0x8d8);this[_0x253e35(0x7e6)]=this['_colorCache']||{};if(this[_0x253e35(0x7e6)][_0x3e7845])return this[_0x253e35(0x7e6)][_0x3e7845];const _0x562d45=VisuMZ[_0x253e35(0x38a)][_0x253e35(0x927)]['Color'][_0x253e35(0x6f0)];return this['getColorDataFromPluginParameters'](_0x3e7845,_0x562d45);},ColorManager[_0x1a3244(0x21f)]=function(){const _0x4e4614=_0x1a3244,_0x5cab28=_0x4e4614(0x4ab);this[_0x4e4614(0x7e6)]=this[_0x4e4614(0x7e6)]||{};if(this[_0x4e4614(0x7e6)][_0x5cab28])return this[_0x4e4614(0x7e6)][_0x5cab28];const _0x16ee83=VisuMZ['CoreEngine']['Settings'][_0x4e4614(0x2df)]['ColorMPGauge2'];return this[_0x4e4614(0x7e8)](_0x5cab28,_0x16ee83);},ColorManager['mpCostColor']=function(){const _0x3b5dcb=_0x1a3244,_0x586b17=_0x3b5dcb(0x8c6);this[_0x3b5dcb(0x7e6)]=this['_colorCache']||{};if(this[_0x3b5dcb(0x7e6)][_0x586b17])return this['_colorCache'][_0x586b17];const _0x1fb430=VisuMZ[_0x3b5dcb(0x38a)][_0x3b5dcb(0x927)][_0x3b5dcb(0x2df)][_0x3b5dcb(0x1e5)];return this[_0x3b5dcb(0x7e8)](_0x586b17,_0x1fb430);},ColorManager[_0x1a3244(0x3f4)]=function(){const _0x369e1f=_0x1a3244,_0x2410fd=_0x369e1f(0x865);this[_0x369e1f(0x7e6)]=this[_0x369e1f(0x7e6)]||{};if(this[_0x369e1f(0x7e6)][_0x2410fd])return this['_colorCache'][_0x2410fd];const _0x5545d8=VisuMZ[_0x369e1f(0x38a)][_0x369e1f(0x927)]['Color']['ColorPowerUp'];return this[_0x369e1f(0x7e8)](_0x2410fd,_0x5545d8);},ColorManager['powerDownColor']=function(){const _0x464066=_0x1a3244,_0x2fc176=_0x464066(0x211);this['_colorCache']=this[_0x464066(0x7e6)]||{};if(this['_colorCache'][_0x2fc176])return this[_0x464066(0x7e6)][_0x2fc176];const _0x29aa3c=VisuMZ[_0x464066(0x38a)][_0x464066(0x927)]['Color'][_0x464066(0x32c)];return this[_0x464066(0x7e8)](_0x2fc176,_0x29aa3c);},ColorManager[_0x1a3244(0x33e)]=function(){const _0x2fbbc3=_0x1a3244,_0x1fdd17=_0x2fbbc3(0x4dc);this['_colorCache']=this['_colorCache']||{};if(this[_0x2fbbc3(0x7e6)][_0x1fdd17])return this[_0x2fbbc3(0x7e6)][_0x1fdd17];const _0x557b6e=VisuMZ['CoreEngine']['Settings'][_0x2fbbc3(0x2df)][_0x2fbbc3(0x3c3)];return this[_0x2fbbc3(0x7e8)](_0x1fdd17,_0x557b6e);},ColorManager[_0x1a3244(0x764)]=function(){const _0x3e6dd0=_0x1a3244,_0x36dcad=_0x3e6dd0(0x1cd);this[_0x3e6dd0(0x7e6)]=this[_0x3e6dd0(0x7e6)]||{};if(this[_0x3e6dd0(0x7e6)][_0x36dcad])return this[_0x3e6dd0(0x7e6)][_0x36dcad];const _0x310a2e=VisuMZ[_0x3e6dd0(0x38a)][_0x3e6dd0(0x927)][_0x3e6dd0(0x2df)][_0x3e6dd0(0x576)];return this[_0x3e6dd0(0x7e8)](_0x36dcad,_0x310a2e);},ColorManager[_0x1a3244(0x3cd)]=function(){const _0x559496=_0x1a3244,_0x44c399=_0x559496(0x1fe);this[_0x559496(0x7e6)]=this['_colorCache']||{};if(this['_colorCache'][_0x44c399])return this[_0x559496(0x7e6)][_0x44c399];const _0x28151d=VisuMZ[_0x559496(0x38a)][_0x559496(0x927)][_0x559496(0x2df)][_0x559496(0x850)];return this[_0x559496(0x7e8)](_0x44c399,_0x28151d);},ColorManager[_0x1a3244(0x714)]=function(){const _0x2877d2=_0x1a3244,_0x4f147a=_0x2877d2(0x32d);this[_0x2877d2(0x7e6)]=this[_0x2877d2(0x7e6)]||{};if(this[_0x2877d2(0x7e6)][_0x4f147a])return this[_0x2877d2(0x7e6)][_0x4f147a];const _0x2c7394=VisuMZ[_0x2877d2(0x38a)]['Settings']['Color'][_0x2877d2(0x505)];return this['getColorDataFromPluginParameters'](_0x4f147a,_0x2c7394);},ColorManager['tpCostColor']=function(){const _0x3e74eb=_0x1a3244,_0x1eb9a4=_0x3e74eb(0x2eb);this[_0x3e74eb(0x7e6)]=this[_0x3e74eb(0x7e6)]||{};if(this[_0x3e74eb(0x7e6)][_0x1eb9a4])return this[_0x3e74eb(0x7e6)][_0x1eb9a4];const _0x4edd99=VisuMZ['CoreEngine'][_0x3e74eb(0x927)][_0x3e74eb(0x2df)][_0x3e74eb(0x18f)];return this[_0x3e74eb(0x7e8)](_0x1eb9a4,_0x4edd99);},ColorManager[_0x1a3244(0x509)]=function(){const _0x5610e0=_0x1a3244,_0x11fb5d=_0x5610e0(0x638);this[_0x5610e0(0x7e6)]=this[_0x5610e0(0x7e6)]||{};if(this[_0x5610e0(0x7e6)][_0x11fb5d])return this[_0x5610e0(0x7e6)][_0x11fb5d];const _0x482d78=VisuMZ['CoreEngine']['Settings'][_0x5610e0(0x2df)][_0x5610e0(0x18f)];return this[_0x5610e0(0x7e8)](_0x11fb5d,_0x482d78);},ColorManager[_0x1a3244(0x39b)]=function(){const _0x56ad87=_0x1a3244,_0x1d6c20='_stored_expGaugeColor1';this[_0x56ad87(0x7e6)]=this[_0x56ad87(0x7e6)]||{};if(this[_0x56ad87(0x7e6)][_0x1d6c20])return this[_0x56ad87(0x7e6)][_0x1d6c20];const _0x275586=VisuMZ['CoreEngine'][_0x56ad87(0x927)][_0x56ad87(0x2df)]['ColorExpGauge1'];return this[_0x56ad87(0x7e8)](_0x1d6c20,_0x275586);},ColorManager['expGaugeColor2']=function(){const _0x555256=_0x1a3244,_0x90c2fd='_stored_expGaugeColor2';this[_0x555256(0x7e6)]=this[_0x555256(0x7e6)]||{};if(this[_0x555256(0x7e6)][_0x90c2fd])return this[_0x555256(0x7e6)][_0x90c2fd];const _0x33b23b=VisuMZ['CoreEngine']['Settings'][_0x555256(0x2df)][_0x555256(0x8bc)];return this[_0x555256(0x7e8)](_0x90c2fd,_0x33b23b);},ColorManager[_0x1a3244(0x813)]=function(){const _0x4c7e22=_0x1a3244,_0x130ee1='_stored_maxLvGaugeColor1';this[_0x4c7e22(0x7e6)]=this[_0x4c7e22(0x7e6)]||{};if(this[_0x4c7e22(0x7e6)][_0x130ee1])return this['_colorCache'][_0x130ee1];const _0x51ca05=VisuMZ[_0x4c7e22(0x38a)][_0x4c7e22(0x927)][_0x4c7e22(0x2df)]['ColorMaxLvGauge1'];return this[_0x4c7e22(0x7e8)](_0x130ee1,_0x51ca05);},ColorManager[_0x1a3244(0x8d3)]=function(){const _0x960e20=_0x1a3244,_0x56e875=_0x960e20(0x311);this[_0x960e20(0x7e6)]=this[_0x960e20(0x7e6)]||{};if(this['_colorCache'][_0x56e875])return this['_colorCache'][_0x56e875];const _0x284b94=VisuMZ[_0x960e20(0x38a)][_0x960e20(0x927)][_0x960e20(0x2df)][_0x960e20(0x530)];return this[_0x960e20(0x7e8)](_0x56e875,_0x284b94);},ColorManager[_0x1a3244(0x8b8)]=function(_0x3897da){const _0x412ecc=_0x1a3244;return VisuMZ['CoreEngine'][_0x412ecc(0x927)][_0x412ecc(0x2df)]['ActorHPColor'][_0x412ecc(0x38c)](this,_0x3897da);},ColorManager[_0x1a3244(0x7c1)]=function(_0x3d07f1){const _0x2ac4d1=_0x1a3244;return VisuMZ[_0x2ac4d1(0x38a)][_0x2ac4d1(0x927)]['Color'][_0x2ac4d1(0x5ec)][_0x2ac4d1(0x38c)](this,_0x3d07f1);},ColorManager[_0x1a3244(0x3c0)]=function(_0x5ea59a){const _0x45987f=_0x1a3244;return VisuMZ['CoreEngine'][_0x45987f(0x927)][_0x45987f(0x2df)][_0x45987f(0x8ad)][_0x45987f(0x38c)](this,_0x5ea59a);},ColorManager[_0x1a3244(0x38e)]=function(_0x1d1516){const _0xff882c=_0x1a3244;return VisuMZ[_0xff882c(0x38a)][_0xff882c(0x927)]['Color'][_0xff882c(0x1fc)]['call'](this,_0x1d1516);},ColorManager[_0x1a3244(0x7da)]=function(_0x2c22cc){const _0x6bda36=_0x1a3244;return VisuMZ[_0x6bda36(0x38a)][_0x6bda36(0x927)]['Color'][_0x6bda36(0x4e7)][_0x6bda36(0x38c)](this,_0x2c22cc);},ColorManager[_0x1a3244(0x857)]=function(){const _0x5f46dc=_0x1a3244;return VisuMZ[_0x5f46dc(0x38a)][_0x5f46dc(0x927)][_0x5f46dc(0x2df)][_0x5f46dc(0x5aa)];},ColorManager[_0x1a3244(0x476)]=function(){const _0x5caa29=_0x1a3244;return VisuMZ[_0x5caa29(0x38a)]['Settings'][_0x5caa29(0x2df)][_0x5caa29(0x29e)]||_0x5caa29(0x762);},ColorManager['outlineColorGauge']=function(){const _0x1aafdc=_0x1a3244;return VisuMZ[_0x1aafdc(0x38a)]['Settings'][_0x1aafdc(0x2df)][_0x1aafdc(0x867)]||'rgba(0,\x200,\x200,\x201.0)';},ColorManager['dimColor1']=function(){const _0x52173a=_0x1a3244;return VisuMZ[_0x52173a(0x38a)][_0x52173a(0x927)][_0x52173a(0x2df)][_0x52173a(0x310)];},ColorManager[_0x1a3244(0x5be)]=function(){const _0x1a4c59=_0x1a3244;return VisuMZ[_0x1a4c59(0x38a)][_0x1a4c59(0x927)][_0x1a4c59(0x2df)][_0x1a4c59(0x75d)];},ColorManager['itemBackColor1']=function(){const _0xd646bc=_0x1a3244;return VisuMZ[_0xd646bc(0x38a)][_0xd646bc(0x927)][_0xd646bc(0x2df)][_0xd646bc(0x8c7)];},ColorManager[_0x1a3244(0x418)]=function(){const _0x354a9e=_0x1a3244;return VisuMZ[_0x354a9e(0x38a)][_0x354a9e(0x927)][_0x354a9e(0x2df)]['ItemBackColor2'];},SceneManager[_0x1a3244(0x6e4)]=[],SceneManager['isSceneBattle']=function(){const _0xaa375e=_0x1a3244;return this['_scene']&&this['_scene'][_0xaa375e(0x561)]===Scene_Battle;},SceneManager[_0x1a3244(0x7ee)]=function(){const _0x3e35c3=_0x1a3244;return this['_scene']&&this[_0x3e35c3(0x79b)][_0x3e35c3(0x561)]===Scene_Map;},SceneManager[_0x1a3244(0x1f3)]=function(){const _0x1cd461=_0x1a3244;return this['_scene']&&this[_0x1cd461(0x79b)]instanceof Scene_Map;},VisuMZ[_0x1a3244(0x38a)]['SceneManager_initialize']=SceneManager[_0x1a3244(0x292)],SceneManager[_0x1a3244(0x292)]=function(){const _0x3a2357=_0x1a3244;VisuMZ[_0x3a2357(0x38a)][_0x3a2357(0x6a9)][_0x3a2357(0x38c)](this),this['initVisuMZCoreEngine']();},VisuMZ['CoreEngine'][_0x1a3244(0x1b0)]=SceneManager['onKeyDown'],SceneManager[_0x1a3244(0x24f)]=function(_0x4bf8e4){const _0x39e60c=_0x1a3244;if($gameTemp)this[_0x39e60c(0x2d7)](_0x4bf8e4);VisuMZ['CoreEngine']['SceneManager_onKeyDown'][_0x39e60c(0x38c)](this,_0x4bf8e4);},SceneManager[_0x1a3244(0x2d7)]=function(_0x31d447){const _0x324786=_0x1a3244;if(!_0x31d447['ctrlKey']&&!_0x31d447[_0x324786(0x90c)])switch(_0x31d447[_0x324786(0x774)]){case 0x52:this['playTestShiftR']();break;case 0x54:this[_0x324786(0x72b)]();break;case 0x75:this[_0x324786(0x8c9)]();break;case 0x76:if(Input[_0x324786(0x733)](_0x324786(0x4e9))||Input[_0x324786(0x733)](_0x324786(0x329)))return;this[_0x324786(0x91c)]();break;}else{if(_0x31d447[_0x324786(0x911)]){let _0x290a4a=_0x31d447[_0x324786(0x774)];if(_0x290a4a>=0x31&&_0x290a4a<=0x39){const _0x2255f8=_0x290a4a-0x30;return SceneManager[_0x324786(0x650)](_0x2255f8);}else{if(_0x290a4a>=0x61&&_0x290a4a<=0x69){const _0x291f7f=_0x290a4a-0x60;return SceneManager[_0x324786(0x650)](_0x291f7f);}}}}},SceneManager[_0x1a3244(0x8c9)]=function(){const _0x5ee1f=_0x1a3244;if($gameTemp[_0x5ee1f(0x2ff)]()&&VisuMZ[_0x5ee1f(0x38a)][_0x5ee1f(0x927)][_0x5ee1f(0x83d)][_0x5ee1f(0x703)]){ConfigManager[_0x5ee1f(0x1df)]!==0x0?(ConfigManager[_0x5ee1f(0x686)]=0x0,ConfigManager[_0x5ee1f(0x4c6)]=0x0,ConfigManager['meVolume']=0x0,ConfigManager[_0x5ee1f(0x1df)]=0x0):(ConfigManager[_0x5ee1f(0x686)]=0x64,ConfigManager['bgsVolume']=0x64,ConfigManager[_0x5ee1f(0x266)]=0x64,ConfigManager[_0x5ee1f(0x1df)]=0x64);ConfigManager[_0x5ee1f(0x628)]();if(this[_0x5ee1f(0x79b)][_0x5ee1f(0x561)]===Scene_Options){if(this[_0x5ee1f(0x79b)]['_optionsWindow'])this[_0x5ee1f(0x79b)][_0x5ee1f(0x2ee)][_0x5ee1f(0x4c4)]();if(this[_0x5ee1f(0x79b)]['_listWindow'])this[_0x5ee1f(0x79b)][_0x5ee1f(0x811)][_0x5ee1f(0x4c4)]();}}},SceneManager['playTestF7']=function(){const _0x5539d2=_0x1a3244;$gameTemp[_0x5539d2(0x2ff)]()&&VisuMZ[_0x5539d2(0x38a)][_0x5539d2(0x927)]['QoL'][_0x5539d2(0x8a1)]&&($gameTemp['_playTestFastMode']=!$gameTemp[_0x5539d2(0x377)]);},SceneManager[_0x1a3244(0x8d5)]=function(){const _0x242c81=_0x1a3244;if(!VisuMZ['CoreEngine'][_0x242c81(0x927)][_0x242c81(0x83d)][_0x242c81(0x263)])return;if(!$gameTemp[_0x242c81(0x2ff)]())return;if(!SceneManager[_0x242c81(0x593)]())return;if(!Input[_0x242c81(0x733)]('shift'))return;for(const _0x19c696 of $gameParty[_0x242c81(0x1db)]()){if(!_0x19c696)continue;_0x19c696[_0x242c81(0x86a)]();}},SceneManager[_0x1a3244(0x72b)]=function(){const _0x3d1f33=_0x1a3244;if(!VisuMZ[_0x3d1f33(0x38a)][_0x3d1f33(0x927)][_0x3d1f33(0x83d)]['ShiftT_Toggle'])return;if(!$gameTemp[_0x3d1f33(0x2ff)]())return;if(!SceneManager[_0x3d1f33(0x593)]())return;if(!Input[_0x3d1f33(0x733)](_0x3d1f33(0x4e9)))return;for(const _0x45208f of $gameParty[_0x3d1f33(0x1db)]()){if(!_0x45208f)continue;_0x45208f['gainSilentTp'](_0x45208f[_0x3d1f33(0x46e)]());}},SceneManager[_0x1a3244(0x650)]=function(_0x20ba0e){const _0x384722=_0x1a3244;if(!$gameTemp[_0x384722(0x2ff)]())return;if(!DataManager[_0x384722(0x1d7)](_0x20ba0e))return;if(!(VisuMZ[_0x384722(0x38a)][_0x384722(0x927)][_0x384722(0x83d)][_0x384722(0x5b7)]??!![]))return;this[_0x384722(0x27f)](Scene_QuickLoad),this[_0x384722(0x274)](_0x20ba0e);},SceneManager[_0x1a3244(0x816)]=function(){const _0x3d2aa2=_0x1a3244;this['_sideButtonLayout']=![],this[_0x3d2aa2(0x824)]=!VisuMZ[_0x3d2aa2(0x38a)][_0x3d2aa2(0x927)]['UI']['ShowButtons'];},SceneManager[_0x1a3244(0x900)]=function(_0xb26dde){const _0xe0ecb=_0x1a3244;VisuMZ['CoreEngine'][_0xe0ecb(0x927)]['UI'][_0xe0ecb(0x8fa)]&&(this[_0xe0ecb(0x337)]=_0xb26dde);},SceneManager[_0x1a3244(0x727)]=function(){const _0x2d449f=_0x1a3244;return this[_0x2d449f(0x337)];},SceneManager[_0x1a3244(0x40d)]=function(){const _0x41df7c=_0x1a3244;return this[_0x41df7c(0x824)];},SceneManager[_0x1a3244(0x1ae)]=function(){const _0x20b353=_0x1a3244;return this['areButtonsHidden']()||this[_0x20b353(0x727)]();},VisuMZ[_0x1a3244(0x38a)]['SceneManager_isGameActive']=SceneManager[_0x1a3244(0x3e0)],SceneManager[_0x1a3244(0x3e0)]=function(){const _0x490ef8=_0x1a3244;return VisuMZ[_0x490ef8(0x38a)][_0x490ef8(0x927)][_0x490ef8(0x83d)][_0x490ef8(0x42a)]?VisuMZ[_0x490ef8(0x38a)][_0x490ef8(0x237)][_0x490ef8(0x38c)](this):!![];},SceneManager[_0x1a3244(0x402)]=function(_0x3f29c7){const _0x501186=_0x1a3244;if(_0x3f29c7 instanceof Error)this[_0x501186(0x7cd)](_0x3f29c7);else _0x3f29c7 instanceof Array&&_0x3f29c7[0x0]==='LoadError'?this[_0x501186(0x307)](_0x3f29c7):this[_0x501186(0x642)](_0x3f29c7);this[_0x501186(0x63b)]();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x876)]=BattleManager[_0x1a3244(0x20a)],BattleManager[_0x1a3244(0x20a)]=function(){const _0x4b5232=_0x1a3244;return VisuMZ[_0x4b5232(0x38a)]['Settings']['QoL']['EscapeAlways']?this[_0x4b5232(0x608)]():VisuMZ[_0x4b5232(0x38a)][_0x4b5232(0x876)][_0x4b5232(0x38c)](this);},BattleManager[_0x1a3244(0x608)]=function(){const _0x40dd57=_0x1a3244;return $gameParty[_0x40dd57(0x17d)](),SoundManager[_0x40dd57(0x45d)](),this[_0x40dd57(0x6f5)](),!![];},BattleManager[_0x1a3244(0x67c)]=function(){const _0x1551e7=_0x1a3244;return $gameSystem[_0x1551e7(0x767)]()>=0x1;},BattleManager[_0x1a3244(0x6b9)]=function(){const _0x12a0dc=_0x1a3244;return $gameSystem[_0x12a0dc(0x767)]()===0x1;},VisuMZ['CoreEngine'][_0x1a3244(0x1b7)]=Game_Temp[_0x1a3244(0x44d)]['initialize'],Game_Temp[_0x1a3244(0x44d)][_0x1a3244(0x292)]=function(){const _0x4dcb06=_0x1a3244;VisuMZ[_0x4dcb06(0x38a)][_0x4dcb06(0x1b7)]['call'](this),this['forceOutOfPlaytest'](),this[_0x4dcb06(0x8a6)](),this[_0x4dcb06(0x186)]();},Game_Temp[_0x1a3244(0x44d)]['forceOutOfPlaytest']=function(){const _0x1fdbf9=_0x1a3244;VisuMZ[_0x1fdbf9(0x38a)]['Settings']['QoL'][_0x1fdbf9(0x5fa)]&&(this['_isPlaytest']=![]);},Game_Temp['prototype'][_0x1a3244(0x34a)]=function(_0x5df45d){this['_lastPluginCommandInterpreter']=_0x5df45d;},Game_Temp[_0x1a3244(0x44d)][_0x1a3244(0x65e)]=function(){const _0x34ca88=_0x1a3244;return this[_0x34ca88(0x778)];},Game_Temp[_0x1a3244(0x44d)][_0x1a3244(0x77f)]=function(){const _0x3da240=_0x1a3244;this[_0x3da240(0x8de)]=undefined,this['_forcedBattleSys']=undefined,this['_forcedBattleGridSystem']=undefined;},Game_Temp[_0x1a3244(0x44d)][_0x1a3244(0x28e)]=function(_0x2680c8){const _0x123d34=_0x1a3244;$gameMap&&$dataMap&&$dataMap['note']&&this[_0x123d34(0x949)]($dataMap[_0x123d34(0x8e0)]);const _0x2dd010=$dataTroops[_0x2680c8];if(_0x2dd010){let _0x315efc=DataManager[_0x123d34(0x1dc)](_0x2dd010['id']);this[_0x123d34(0x949)](_0x315efc);}},Game_Temp[_0x1a3244(0x44d)][_0x1a3244(0x949)]=function(_0x116fb0){const _0x5e3266=_0x1a3244;if(!_0x116fb0)return;if(_0x116fb0[_0x5e3266(0x90f)](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))this['_forcedTroopView']='FV';else{if(_0x116fb0[_0x5e3266(0x90f)](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i))this[_0x5e3266(0x8de)]='SV';else{if(_0x116fb0['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x56994f=String(RegExp['$1']);if(_0x56994f[_0x5e3266(0x90f)](/(?:FRONTVIEW|FRONT VIEW|FV)/i))this[_0x5e3266(0x8de)]='FV';else _0x56994f['match'](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this[_0x5e3266(0x8de)]='SV');}}}if(_0x116fb0[_0x5e3266(0x90f)](/<(?:DTB)>/i))this[_0x5e3266(0x610)]=0x0;else{if(_0x116fb0['match'](/<(?:TPB|ATB)[ ]ACTIVE>/i))this[_0x5e3266(0x610)]=0x1;else{if(_0x116fb0['match'](/<(?:TPB|ATB)[ ]WAIT>/i))this[_0x5e3266(0x610)]=0x2;else{if(_0x116fb0[_0x5e3266(0x90f)](/<(?:TPB|ATB)>/i))this['_forcedBattleSys']=0x2;else{if(_0x116fb0['match'](/<(?:CTB)>/i))Imported[_0x5e3266(0x339)]&&(this['_forcedBattleSys']=_0x5e3266(0x790));else{if(_0x116fb0[_0x5e3266(0x90f)](/<(?:STB)>/i))Imported[_0x5e3266(0x4de)]&&(this[_0x5e3266(0x610)]=_0x5e3266(0x3f9));else{if(_0x116fb0['match'](/<(?:BTB)>/i))Imported[_0x5e3266(0x26d)]&&(this['_forcedBattleSys']=_0x5e3266(0x3fe));else{if(_0x116fb0[_0x5e3266(0x90f)](/<(?:FTB)>/i))Imported[_0x5e3266(0x6c8)]&&(this['_forcedBattleSys']=_0x5e3266(0x1c8));else{if(_0x116fb0[_0x5e3266(0x90f)](/<(?:OTB)>/i))Imported[_0x5e3266(0x709)]&&(this[_0x5e3266(0x610)]=_0x5e3266(0x4c7));else{if(_0x116fb0['match'](/<(?:ETB)>/i))Imported[_0x5e3266(0x8e1)]&&(this[_0x5e3266(0x610)]=_0x5e3266(0x40f));else{if(_0x116fb0['match'](/<(?:PTB)>/i))Imported[_0x5e3266(0x3d6)]&&(this[_0x5e3266(0x610)]='PTB');else{if(_0x116fb0['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x43499a=String(RegExp['$1']);if(_0x43499a[_0x5e3266(0x90f)](/DTB/i))this[_0x5e3266(0x610)]=0x0;else{if(_0x43499a['match'](/(?:TPB|ATB)[ ]ACTIVE/i))this[_0x5e3266(0x610)]=0x1;else{if(_0x43499a[_0x5e3266(0x90f)](/(?:TPB|ATB)[ ]WAIT/i))this['_forcedBattleSys']=0x2;else{if(_0x43499a[_0x5e3266(0x90f)](/CTB/i))Imported[_0x5e3266(0x339)]&&(this[_0x5e3266(0x610)]='CTB');else{if(_0x43499a[_0x5e3266(0x90f)](/STB/i))Imported[_0x5e3266(0x4de)]&&(this[_0x5e3266(0x610)]='STB');else{if(_0x43499a[_0x5e3266(0x90f)](/BTB/i))Imported['VisuMZ_2_BattleSystemBTB']&&(this[_0x5e3266(0x610)]=_0x5e3266(0x3fe));else{if(_0x43499a[_0x5e3266(0x90f)](/FTB/i))Imported['VisuMZ_2_BattleSystemFTB']&&(this[_0x5e3266(0x610)]=_0x5e3266(0x1c8));else{if(_0x43499a[_0x5e3266(0x90f)](/OTB/i))Imported[_0x5e3266(0x709)]&&(this[_0x5e3266(0x610)]=_0x5e3266(0x4c7));else{if(_0x43499a[_0x5e3266(0x90f)](/ETB/i))Imported['VisuMZ_2_BattleSystemETB']&&(this['_forcedBattleSys']=_0x5e3266(0x40f));else _0x43499a[_0x5e3266(0x90f)](/PTB/i)&&(Imported[_0x5e3266(0x3d6)]&&(this[_0x5e3266(0x610)]='PTB'));}}}}}}}}}}}}}}}}}}}}if(_0x116fb0[_0x5e3266(0x90f)](/<(?:|BATTLE )GRID>/i))this[_0x5e3266(0x905)]=!![];else _0x116fb0['match'](/<NO (?:|BATTLE )GRID>/i)&&(this[_0x5e3266(0x905)]=![]);},Game_Temp[_0x1a3244(0x44d)][_0x1a3244(0x8a6)]=function(){const _0xe6958d=_0x1a3244;this[_0xe6958d(0x913)]=[];},Game_Temp[_0x1a3244(0x44d)][_0x1a3244(0x682)]=function(_0x838195,_0x542abe,_0x17cf7b,_0x1b0be8){const _0x13c01d=_0x1a3244;if(!this[_0x13c01d(0x4b5)]())return;_0x17cf7b=_0x17cf7b||![],_0x1b0be8=_0x1b0be8||![];if($dataAnimations[_0x542abe]){const _0x45da22={'targets':_0x838195,'animationId':_0x542abe,'mirror':_0x17cf7b,'mute':_0x1b0be8};this[_0x13c01d(0x913)][_0x13c01d(0x27f)](_0x45da22);for(const _0x53eef9 of _0x838195){_0x53eef9['startAnimation']&&_0x53eef9['startAnimation']();}}},Game_Temp[_0x1a3244(0x44d)]['showFauxAnimations']=function(){return!![];},Game_Temp[_0x1a3244(0x44d)]['retrieveFauxAnimation']=function(){const _0x5a3634=_0x1a3244;return this['_fauxAnimationQueue'][_0x5a3634(0x4e9)]();},Game_Temp[_0x1a3244(0x44d)][_0x1a3244(0x186)]=function(){this['_pointAnimationQueue']=[];},Game_Temp[_0x1a3244(0x44d)]['requestPointAnimation']=function(_0x4697e8,_0x1a2592,_0x4574c6,_0x4ea969,_0x3c82c9){const _0x2db776=_0x1a3244;if(!this[_0x2db776(0x92a)]())return;_0x4ea969=_0x4ea969||![],_0x3c82c9=_0x3c82c9||![];if($dataAnimations[_0x4574c6]){const _0x2ee7e3={'x':_0x4697e8,'y':_0x1a2592,'animationId':_0x4574c6,'mirror':_0x4ea969,'mute':_0x3c82c9};this[_0x2db776(0x78c)][_0x2db776(0x27f)](_0x2ee7e3);}},Game_Temp['prototype']['showPointAnimations']=function(){return!![];},Game_Temp[_0x1a3244(0x44d)]['retrievePointAnimation']=function(){const _0x70caca=_0x1a3244;return this[_0x70caca(0x78c)][_0x70caca(0x4e9)]();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x65a)]=Game_System['prototype'][_0x1a3244(0x292)],Game_System[_0x1a3244(0x44d)]['initialize']=function(){const _0x89e19a=_0x1a3244;VisuMZ['CoreEngine'][_0x89e19a(0x65a)][_0x89e19a(0x38c)](this),this[_0x89e19a(0x88a)]();},Game_System[_0x1a3244(0x44d)][_0x1a3244(0x88a)]=function(){const _0x282fd9=_0x1a3244;this[_0x282fd9(0x693)]={'SideView':$dataSystem[_0x282fd9(0x5f5)],'BattleSystem':this[_0x282fd9(0x681)](),'FontSize':$dataSystem[_0x282fd9(0x236)][_0x282fd9(0x699)],'Padding':0xc};},Game_System[_0x1a3244(0x44d)][_0x1a3244(0x1ff)]=function(){const _0x59332b=_0x1a3244;if($gameTemp[_0x59332b(0x8de)]==='SV')return!![];else{if($gameTemp['_forcedTroopView']==='FV')return![];}if(this['_CoreEngineSettings']===undefined)this[_0x59332b(0x88a)]();if(this[_0x59332b(0x693)][_0x59332b(0x3ac)]===undefined)this[_0x59332b(0x88a)]();return this[_0x59332b(0x693)][_0x59332b(0x3ac)];},Game_System[_0x1a3244(0x44d)][_0x1a3244(0x27d)]=function(_0x25aace){const _0x3ac129=_0x1a3244;if(this[_0x3ac129(0x693)]===undefined)this[_0x3ac129(0x88a)]();if(this[_0x3ac129(0x693)][_0x3ac129(0x3ac)]===undefined)this[_0x3ac129(0x88a)]();this[_0x3ac129(0x693)][_0x3ac129(0x3ac)]=_0x25aace;},Game_System['prototype'][_0x1a3244(0x698)]=function(){const _0x1852f9=_0x1a3244;if(this['_CoreEngineSettings']===undefined)this[_0x1852f9(0x88a)]();this[_0x1852f9(0x693)][_0x1852f9(0x46c)]=this[_0x1852f9(0x681)]();},Game_System[_0x1a3244(0x44d)]['initialBattleSystem']=function(){const _0x36a5e6=_0x1a3244,_0x46c1aa=(VisuMZ[_0x36a5e6(0x38a)][_0x36a5e6(0x927)][_0x36a5e6(0x46c)]||_0x36a5e6(0x378))[_0x36a5e6(0x5c4)]()[_0x36a5e6(0x797)]();return VisuMZ['CoreEngine'][_0x36a5e6(0x28f)](_0x46c1aa);},Game_System[_0x1a3244(0x44d)][_0x1a3244(0x767)]=function(){const _0x559bac=_0x1a3244;if($gameTemp[_0x559bac(0x610)]!==undefined)return $gameTemp['_forcedBattleSys'];if(this[_0x559bac(0x693)]===undefined)this['initCoreEngine']();if(this[_0x559bac(0x693)][_0x559bac(0x46c)]===undefined)this[_0x559bac(0x698)]();return this[_0x559bac(0x693)][_0x559bac(0x46c)];},Game_System['prototype']['setBattleSystem']=function(_0x339b34){const _0x1f4de1=_0x1a3244;if(this[_0x1f4de1(0x693)]===undefined)this['initCoreEngine']();if(this[_0x1f4de1(0x693)][_0x1f4de1(0x46c)]===undefined)this[_0x1f4de1(0x698)]();this[_0x1f4de1(0x693)][_0x1f4de1(0x46c)]=_0x339b34;},Game_System[_0x1a3244(0x44d)]['mainFontSize']=function(){const _0x17eb3a=_0x1a3244;if(this[_0x17eb3a(0x693)]===undefined)this[_0x17eb3a(0x88a)]();if(this[_0x17eb3a(0x693)][_0x17eb3a(0x3f3)]===undefined)this[_0x17eb3a(0x88a)]();return this[_0x17eb3a(0x693)][_0x17eb3a(0x3f3)];},Game_System[_0x1a3244(0x44d)][_0x1a3244(0x675)]=function(_0x2f8bce){const _0x3ef873=_0x1a3244;if(this[_0x3ef873(0x693)]===undefined)this['initCoreEngine']();if(this['_CoreEngineSettings'][_0x3ef873(0x56a)]===undefined)this[_0x3ef873(0x88a)]();this[_0x3ef873(0x693)][_0x3ef873(0x3f3)]=_0x2f8bce;},Game_System[_0x1a3244(0x44d)][_0x1a3244(0x20f)]=function(){const _0x2b4482=_0x1a3244;if(this[_0x2b4482(0x693)]===undefined)this['initCoreEngine']();if(this[_0x2b4482(0x693)][_0x2b4482(0x1a8)]===undefined)this['initCoreEngine']();return this[_0x2b4482(0x693)][_0x2b4482(0x1a8)];},Game_System[_0x1a3244(0x44d)][_0x1a3244(0x69c)]=function(_0x5034c0){const _0x216914=_0x1a3244;if(this[_0x216914(0x693)]===undefined)this[_0x216914(0x88a)]();if(this[_0x216914(0x693)]['TimeProgress']===undefined)this[_0x216914(0x88a)]();this[_0x216914(0x693)][_0x216914(0x1a8)]=_0x5034c0;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x7e4)]=Game_Screen[_0x1a3244(0x44d)]['initialize'],Game_Screen[_0x1a3244(0x44d)][_0x1a3244(0x292)]=function(){const _0x114711=_0x1a3244;VisuMZ[_0x114711(0x38a)][_0x114711(0x7e4)][_0x114711(0x38c)](this),this[_0x114711(0x4ad)]();},Game_Screen[_0x1a3244(0x44d)][_0x1a3244(0x4ad)]=function(){const _0x32a97e=_0x1a3244,_0x53cc65=VisuMZ[_0x32a97e(0x38a)][_0x32a97e(0x927)]['ScreenShake'];this[_0x32a97e(0x273)]=_0x53cc65?.[_0x32a97e(0x3ef)]||'random';},Game_Screen[_0x1a3244(0x44d)][_0x1a3244(0x2d2)]=function(){const _0x19a28e=_0x1a3244;if(this[_0x19a28e(0x273)]===undefined)this['initCoreEngineScreenShake']();return this[_0x19a28e(0x273)];},Game_Screen[_0x1a3244(0x44d)][_0x1a3244(0x75e)]=function(_0x4ac1c3){const _0x4e86f7=_0x1a3244;if(this[_0x4e86f7(0x273)]===undefined)this[_0x4e86f7(0x4ad)]();this[_0x4e86f7(0x273)]=_0x4ac1c3[_0x4e86f7(0x6ef)]()[_0x4e86f7(0x797)]();},Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x68f)]=function(){const _0x3136b2=_0x1a3244;if($gameParty['inBattle']())return![];return this[_0x3136b2(0x1ec)]()&&this[_0x3136b2(0x1ec)]()[_0x3136b2(0x522)](0x0)==='!';},Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x1ec)]=function(){const _0x3185bb=_0x1a3244;return this[_0x3185bb(0x37a)][_0x3185bb(0x28d)]('/')['pop']();},VisuMZ[_0x1a3244(0x38a)]['Game_Picture_x']=Game_Picture[_0x1a3244(0x44d)]['x'],Game_Picture['prototype']['x']=function(){const _0x353945=_0x1a3244;return this[_0x353945(0x68f)]()?this[_0x353945(0x70e)]():VisuMZ['CoreEngine'][_0x353945(0x7ab)][_0x353945(0x38c)](this);},Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x70e)]=function(){const _0x1489b7=_0x1a3244,_0xc7852c=$gameMap[_0x1489b7(0x621)]()*$gameMap[_0x1489b7(0x895)]();return(this['_x']-_0xc7852c)*$gameScreen[_0x1489b7(0x362)]();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x2ae)]=Game_Picture[_0x1a3244(0x44d)]['y'],Game_Picture[_0x1a3244(0x44d)]['y']=function(){const _0x23f489=_0x1a3244;return this[_0x23f489(0x68f)]()?this[_0x23f489(0x7e0)]():VisuMZ[_0x23f489(0x38a)]['Game_Picture_y'][_0x23f489(0x38c)](this);},Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x7e0)]=function(){const _0x628de9=_0x1a3244,_0x8145d3=$gameMap[_0x628de9(0x35c)]()*$gameMap['tileHeight']();return(this['_y']-_0x8145d3)*$gameScreen[_0x628de9(0x362)]();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x72a)]=Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x370)],Game_Picture['prototype'][_0x1a3244(0x370)]=function(){const _0x3306f0=_0x1a3244;let _0x9cb02d=VisuMZ[_0x3306f0(0x38a)][_0x3306f0(0x72a)]['call'](this);return this[_0x3306f0(0x68f)]()&&(_0x9cb02d*=$gameScreen['zoomScale']()),_0x9cb02d;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x42f)]=Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x891)],Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x891)]=function(){const _0x26b87e=_0x1a3244;let _0x34d3ef=VisuMZ[_0x26b87e(0x38a)]['Game_Picture_scaleY'][_0x26b87e(0x38c)](this);return this[_0x26b87e(0x68f)]()&&(_0x34d3ef*=$gameScreen['zoomScale']()),_0x34d3ef;},Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x5b2)]=function(_0x436912){const _0x492308=_0x1a3244;this[_0x492308(0x76d)]=_0x436912;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x25e)]=Game_Picture['prototype'][_0x1a3244(0x8ff)],Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x8ff)]=function(_0x1d3931){const _0xfa287c=_0x1a3244;return this[_0xfa287c(0x76d)]=this['_coreEasingType']||0x0,[0x0,0x1,0x2,0x3]['includes'](this[_0xfa287c(0x76d)])?VisuMZ[_0xfa287c(0x38a)][_0xfa287c(0x25e)][_0xfa287c(0x38c)](this,_0x1d3931):VisuMZ[_0xfa287c(0x239)](_0x1d3931,this['_coreEasingType']);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x2c4)]=Game_Picture['prototype'][_0x1a3244(0x7b8)],Game_Picture[_0x1a3244(0x44d)]['initRotation']=function(){const _0x4651f3=_0x1a3244;VisuMZ[_0x4651f3(0x38a)][_0x4651f3(0x2c4)][_0x4651f3(0x38c)](this),this[_0x4651f3(0x899)]();},Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x899)]=function(){const _0x5eb031=_0x1a3244;this[_0x5eb031(0x5c5)]={'current':0x0,'target':0x0,'duration':0x0,'wholeDuration':0x0,'easingType':'Linear'};},VisuMZ['CoreEngine']['Game_Picture_angle']=Game_Picture['prototype'][_0x1a3244(0x45f)],Game_Picture['prototype'][_0x1a3244(0x45f)]=function(){const _0x418d87=_0x1a3244;let _0x1ebffb=VisuMZ[_0x418d87(0x38a)]['Game_Picture_angle'][_0x418d87(0x38c)](this);return _0x1ebffb+=this[_0x418d87(0x5c8)](),_0x1ebffb;},Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x5c8)]=function(){const _0x24dc6a=_0x1a3244;if(this['_anglePlus']===undefined)this[_0x24dc6a(0x899)]();return this[_0x24dc6a(0x5c5)][_0x24dc6a(0x6b1)]||0x0;},Game_Picture['prototype'][_0x1a3244(0x749)]=function(_0x490643,_0xa17cba,_0x16eb66){const _0x12c92a=_0x1a3244;if(this[_0x12c92a(0x5c5)]===undefined)this[_0x12c92a(0x899)]();this[_0x12c92a(0x5c5)][_0x12c92a(0x39c)]=_0x490643||0x0,this[_0x12c92a(0x5c5)]['duration']=_0xa17cba||0x0,this['_anglePlus'][_0x12c92a(0x804)]=_0xa17cba||0x0,this['_anglePlus'][_0x12c92a(0x478)]=_0x16eb66||'Linear',_0xa17cba<=0x0&&(this['_anglePlus'][_0x12c92a(0x6b1)]=this['_anglePlus']['target']);},Game_Picture['prototype'][_0x1a3244(0x4f1)]=function(_0x3375d9,_0x249a66,_0x1b279a){const _0x26d732=_0x1a3244;if(this[_0x26d732(0x5c5)]===undefined)this[_0x26d732(0x899)]();this[_0x26d732(0x5c5)]['target']+=_0x3375d9||0x0,this[_0x26d732(0x5c5)][_0x26d732(0x6fa)]=_0x249a66||0x0,this[_0x26d732(0x5c5)][_0x26d732(0x804)]=_0x249a66||0x0,this[_0x26d732(0x5c5)]['easingType']=_0x1b279a||_0x26d732(0x846),_0x249a66<=0x0&&(this[_0x26d732(0x5c5)][_0x26d732(0x6b1)]=this['_anglePlus']['target']);},VisuMZ['CoreEngine'][_0x1a3244(0x446)]=Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x1e7)],Game_Picture[_0x1a3244(0x44d)]['updateRotation']=function(){const _0x3c68c2=_0x1a3244;VisuMZ['CoreEngine'][_0x3c68c2(0x446)][_0x3c68c2(0x38c)](this),this[_0x3c68c2(0x704)]();},Game_Picture[_0x1a3244(0x44d)]['updateAnglePlus']=function(){const _0x4261ff=_0x1a3244;if(this['_anglePlus']===undefined)this[_0x4261ff(0x899)]();const _0xf03ae=this[_0x4261ff(0x5c5)];if(_0xf03ae[_0x4261ff(0x6fa)]<=0x0)return;_0xf03ae[_0x4261ff(0x6b1)]=this['applyEasingAnglePlus'](_0xf03ae[_0x4261ff(0x6b1)],_0xf03ae['target']),_0xf03ae['duration']--,_0xf03ae[_0x4261ff(0x6fa)]<=0x0&&(_0xf03ae[_0x4261ff(0x6b1)]=_0xf03ae[_0x4261ff(0x39c)]);},Game_Picture['prototype'][_0x1a3244(0x922)]=function(_0x28e0f8,_0x56ee5c){const _0x3835b5=_0x1a3244,_0x503985=this[_0x3835b5(0x5c5)],_0x15afce=_0x503985[_0x3835b5(0x478)],_0x59b274=_0x503985[_0x3835b5(0x6fa)],_0xfd7790=_0x503985[_0x3835b5(0x804)],_0x30e182=VisuMZ[_0x3835b5(0x239)]((_0xfd7790-_0x59b274)/_0xfd7790,_0x15afce),_0x48a01c=VisuMZ[_0x3835b5(0x239)]((_0xfd7790-_0x59b274+0x1)/_0xfd7790,_0x15afce),_0x1e56fd=(_0x28e0f8-_0x56ee5c*_0x30e182)/(0x1-_0x30e182);return _0x1e56fd+(_0x56ee5c-_0x1e56fd)*_0x48a01c;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x8f6)]=Game_Action[_0x1a3244(0x44d)]['itemHit'],Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x3e2)]=function(_0x1657ee){const _0x38b7da=_0x1a3244;return VisuMZ[_0x38b7da(0x38a)]['Settings'][_0x38b7da(0x83d)]['ImprovedAccuracySystem']?this[_0x38b7da(0x3f6)](_0x1657ee):VisuMZ[_0x38b7da(0x38a)][_0x38b7da(0x8f6)]['call'](this,_0x1657ee);},Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x3f6)]=function(_0x56d991){const _0x1ee075=_0x1a3244,_0x4dac48=this[_0x1ee075(0x792)](_0x56d991),_0x3de6b3=this[_0x1ee075(0x717)](_0x56d991),_0x1f44e2=this[_0x1ee075(0x234)](_0x56d991);return _0x4dac48*(_0x3de6b3-_0x1f44e2);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x914)]=Game_Action[_0x1a3244(0x44d)]['itemEva'],Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x897)]=function(_0x425ce7){const _0x114d0b=_0x1a3244;return VisuMZ[_0x114d0b(0x38a)]['Settings'][_0x114d0b(0x83d)][_0x114d0b(0x94c)]?0x0:VisuMZ['CoreEngine'][_0x114d0b(0x914)][_0x114d0b(0x38c)](this,_0x425ce7);},Game_Action[_0x1a3244(0x44d)]['itemSuccessRate']=function(_0x40c7c6){const _0x94827b=_0x1a3244;return this[_0x94827b(0x68c)]()[_0x94827b(0x587)]*0.01;},Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x717)]=function(_0x256137){const _0x56015f=_0x1a3244;if(VisuMZ['CoreEngine'][_0x56015f(0x927)][_0x56015f(0x83d)][_0x56015f(0x86f)]&&this[_0x56015f(0x4fa)]())return 0x1;return this['isPhysical']()?VisuMZ['CoreEngine'][_0x56015f(0x927)][_0x56015f(0x83d)][_0x56015f(0x86f)]&&this[_0x56015f(0x17a)]()['isActor']()?this[_0x56015f(0x17a)]()[_0x56015f(0x3fc)]+0.05:this[_0x56015f(0x17a)]()['hit']:0x1;},Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x234)]=function(_0x38822c){const _0x2d2507=_0x1a3244;if(this[_0x2d2507(0x17a)]()[_0x2d2507(0x350)]()===_0x38822c['isActor']())return 0x0;if(this[_0x2d2507(0x41b)]())return VisuMZ['CoreEngine'][_0x2d2507(0x927)]['QoL']['AccuracyBoost']&&_0x38822c['isEnemy']()?_0x38822c[_0x2d2507(0x46f)]-0.05:_0x38822c[_0x2d2507(0x46f)];else return this['isMagical']()?_0x38822c[_0x2d2507(0x619)]:0x0;},VisuMZ['CoreEngine'][_0x1a3244(0x6c0)]=Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x85d)],Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x85d)]=function(_0x4b0a0f){const _0x6ad5b7=_0x1a3244;VisuMZ[_0x6ad5b7(0x38a)][_0x6ad5b7(0x6c0)][_0x6ad5b7(0x38c)](this,_0x4b0a0f);if(VisuMZ[_0x6ad5b7(0x38a)][_0x6ad5b7(0x927)][_0x6ad5b7(0x83d)][_0x6ad5b7(0x94c)])return;const _0x101c24=_0x4b0a0f[_0x6ad5b7(0x30e)]();_0x101c24['missed']&&(0x1-this[_0x6ad5b7(0x897)](_0x4b0a0f)>this['itemHit'](_0x4b0a0f)&&(_0x101c24['missed']=![],_0x101c24[_0x6ad5b7(0x6d3)]=!![]));},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x28a)]=Game_BattlerBase['prototype']['initMembers'],Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x7e3)]=function(){const _0x4e6940=_0x1a3244;this[_0x4e6940(0x6a6)]={},VisuMZ[_0x4e6940(0x38a)][_0x4e6940(0x28a)]['call'](this);},VisuMZ['CoreEngine'][_0x1a3244(0x456)]=Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x4c4)],Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x4c4)]=function(){const _0x3e6e68=_0x1a3244;this[_0x3e6e68(0x6a6)]={},VisuMZ['CoreEngine'][_0x3e6e68(0x456)][_0x3e6e68(0x38c)](this);},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x8e6)]=function(_0x1aabf6){const _0x42cd0e=_0x1a3244;return this[_0x42cd0e(0x6a6)]=this['_cache']||{},this[_0x42cd0e(0x6a6)][_0x1aabf6]!==undefined;},Game_BattlerBase['prototype'][_0x1a3244(0x777)]=function(_0x1c6891){const _0x1dddbd=_0x1a3244,_0x501e20=(_0x5768ed,_0x284278)=>{const _0x168550=_0x4d19;if(!_0x284278)return _0x5768ed;if(_0x284278[_0x168550(0x8e0)][_0x168550(0x90f)](VisuMZ['CoreEngine']['RegExp'][_0x168550(0x777)][_0x1c6891])){var _0x501c8b=Number(RegExp['$1']);_0x5768ed+=_0x501c8b;}if(_0x284278[_0x168550(0x8e0)][_0x168550(0x90f)](VisuMZ[_0x168550(0x38a)][_0x168550(0x25f)][_0x168550(0x75f)][_0x1c6891])){var _0x29ab86=String(RegExp['$1']);try{_0x5768ed+=eval(_0x29ab86);}catch(_0x876b19){if($gameTemp['isPlaytest']())console[_0x168550(0x607)](_0x876b19);}}return _0x5768ed;};return this[_0x1dddbd(0x5f8)]()[_0x1dddbd(0x60b)](_0x501e20,this[_0x1dddbd(0x354)][_0x1c6891]);},Game_BattlerBase[_0x1a3244(0x44d)]['paramMax']=function(_0x257d10){const _0x5bfe6a=_0x1a3244;var _0x52152e=_0x5bfe6a(0x353)+(this[_0x5bfe6a(0x350)]()?_0x5bfe6a(0x4db):_0x5bfe6a(0x5fc))+_0x5bfe6a(0x909)+_0x257d10;if(this[_0x5bfe6a(0x8e6)](_0x52152e))return this['_cache'][_0x52152e];this[_0x5bfe6a(0x6a6)][_0x52152e]=eval(VisuMZ[_0x5bfe6a(0x38a)][_0x5bfe6a(0x927)][_0x5bfe6a(0x381)][_0x52152e]);const _0x5f186a=(_0x531bad,_0x1fef4e)=>{const _0x4e7c8d=_0x5bfe6a;if(!_0x1fef4e)return _0x531bad;if(_0x1fef4e['note'][_0x4e7c8d(0x90f)](VisuMZ['CoreEngine']['RegExp'][_0x4e7c8d(0x1d4)][_0x257d10])){var _0x120db3=Number(RegExp['$1']);if(_0x120db3===0x0)_0x120db3=Number['MAX_SAFE_INTEGER'];_0x531bad=Math['max'](_0x531bad,_0x120db3);}if(_0x1fef4e[_0x4e7c8d(0x8e0)][_0x4e7c8d(0x90f)](VisuMZ['CoreEngine'][_0x4e7c8d(0x25f)]['paramMaxJS'][_0x257d10])){var _0xee4b8=String(RegExp['$1']);try{_0x531bad=Math[_0x4e7c8d(0x51f)](_0x531bad,Number(eval(_0xee4b8)));}catch(_0xb0b57b){if($gameTemp[_0x4e7c8d(0x2ff)]())console[_0x4e7c8d(0x607)](_0xb0b57b);}}return _0x531bad;};if(this[_0x5bfe6a(0x6a6)][_0x52152e]===0x0)this[_0x5bfe6a(0x6a6)][_0x52152e]=Number[_0x5bfe6a(0x819)];return this[_0x5bfe6a(0x6a6)][_0x52152e]=this['traitObjects']()[_0x5bfe6a(0x60b)](_0x5f186a,this['_cache'][_0x52152e]),this[_0x5bfe6a(0x6a6)][_0x52152e];},Game_BattlerBase[_0x1a3244(0x44d)]['paramRate']=function(_0x185104){const _0x3cab87=_0x1a3244,_0x3ed1fd=this[_0x3cab87(0x6d0)](Game_BattlerBase[_0x3cab87(0x7d9)],_0x185104),_0x4fae69=(_0x48d6bf,_0x22beae)=>{const _0x3fd013=_0x3cab87;if(!_0x22beae)return _0x48d6bf;if(_0x22beae[_0x3fd013(0x8e0)][_0x3fd013(0x90f)](VisuMZ[_0x3fd013(0x38a)][_0x3fd013(0x25f)]['paramRate1'][_0x185104])){var _0x486465=Number(RegExp['$1'])/0x64;_0x48d6bf*=_0x486465;}if(_0x22beae['note'][_0x3fd013(0x90f)](VisuMZ['CoreEngine']['RegExp'][_0x3fd013(0x8dd)][_0x185104])){var _0x486465=Number(RegExp['$1']);_0x48d6bf*=_0x486465;}if(_0x22beae[_0x3fd013(0x8e0)][_0x3fd013(0x90f)](VisuMZ[_0x3fd013(0x38a)]['RegExp'][_0x3fd013(0x53e)][_0x185104])){var _0x220315=String(RegExp['$1']);try{_0x48d6bf*=eval(_0x220315);}catch(_0x6318ad){if($gameTemp['isPlaytest']())console[_0x3fd013(0x607)](_0x6318ad);}}return _0x48d6bf;};return this[_0x3cab87(0x5f8)]()[_0x3cab87(0x60b)](_0x4fae69,_0x3ed1fd);},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x254)]=function(_0x48e818){const _0x525972=_0x1a3244,_0x31c065=(_0x19cb72,_0x488c48)=>{const _0x547cd8=_0x4d19;if(!_0x488c48)return _0x19cb72;if(_0x488c48[_0x547cd8(0x8e0)][_0x547cd8(0x90f)](VisuMZ[_0x547cd8(0x38a)][_0x547cd8(0x25f)][_0x547cd8(0x716)][_0x48e818])){var _0x19c9e2=Number(RegExp['$1']);_0x19cb72+=_0x19c9e2;}if(_0x488c48[_0x547cd8(0x8e0)][_0x547cd8(0x90f)](VisuMZ[_0x547cd8(0x38a)]['RegExp'][_0x547cd8(0x496)][_0x48e818])){var _0x1ce03d=String(RegExp['$1']);try{_0x19cb72+=eval(_0x1ce03d);}catch(_0x460e4d){if($gameTemp['isPlaytest']())console[_0x547cd8(0x607)](_0x460e4d);}}return _0x19cb72;};return this['traitObjects']()[_0x525972(0x60b)](_0x31c065,0x0);},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x862)]=function(_0x19e79c){const _0x5ccb27=_0x1a3244;let _0x3b2df3=_0x5ccb27(0x862)+_0x19e79c+_0x5ccb27(0x4a9);if(this['checkCacheKey'](_0x3b2df3))return this['_cache'][_0x3b2df3];return this[_0x5ccb27(0x6a6)][_0x3b2df3]=Math['round'](VisuMZ[_0x5ccb27(0x38a)][_0x5ccb27(0x927)][_0x5ccb27(0x381)][_0x5ccb27(0x612)][_0x5ccb27(0x38c)](this,_0x19e79c)),this['_cache'][_0x3b2df3];},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x80d)]=function(_0x5ab57b){const _0x28a5a8=_0x1a3244,_0x175eb4=(_0x23531a,_0x1be2e2)=>{const _0xb870f9=_0x4d19;if(!_0x1be2e2)return _0x23531a;if(_0x1be2e2[_0xb870f9(0x8e0)][_0xb870f9(0x90f)](VisuMZ['CoreEngine'][_0xb870f9(0x25f)][_0xb870f9(0x302)][_0x5ab57b])){var _0x84f2e5=Number(RegExp['$1'])/0x64;_0x23531a+=_0x84f2e5;}if(_0x1be2e2[_0xb870f9(0x8e0)][_0xb870f9(0x90f)](VisuMZ['CoreEngine'][_0xb870f9(0x25f)]['xparamPlus2'][_0x5ab57b])){var _0x84f2e5=Number(RegExp['$1']);_0x23531a+=_0x84f2e5;}if(_0x1be2e2[_0xb870f9(0x8e0)]['match'](VisuMZ['CoreEngine'][_0xb870f9(0x25f)][_0xb870f9(0x771)][_0x5ab57b])){var _0x25dea4=String(RegExp['$1']);try{_0x23531a+=eval(_0x25dea4);}catch(_0x1f8d2c){if($gameTemp['isPlaytest']())console['log'](_0x1f8d2c);}}return _0x23531a;};return this['traitObjects']()[_0x28a5a8(0x60b)](_0x175eb4,0x0);},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x800)]=function(_0x1ea029){const _0x2692bf=_0x1a3244,_0x50e75b=(_0x45afff,_0x4542e3)=>{const _0x528ce5=_0x4d19;if(!_0x4542e3)return _0x45afff;if(_0x4542e3[_0x528ce5(0x8e0)][_0x528ce5(0x90f)](VisuMZ['CoreEngine'][_0x528ce5(0x25f)][_0x528ce5(0x471)][_0x1ea029])){var _0x1ec492=Number(RegExp['$1'])/0x64;_0x45afff*=_0x1ec492;}if(_0x4542e3[_0x528ce5(0x8e0)][_0x528ce5(0x90f)](VisuMZ[_0x528ce5(0x38a)]['RegExp'][_0x528ce5(0x4ba)][_0x1ea029])){var _0x1ec492=Number(RegExp['$1']);_0x45afff*=_0x1ec492;}if(_0x4542e3[_0x528ce5(0x8e0)]['match'](VisuMZ[_0x528ce5(0x38a)][_0x528ce5(0x25f)][_0x528ce5(0x752)][_0x1ea029])){var _0x227221=String(RegExp['$1']);try{_0x45afff*=eval(_0x227221);}catch(_0x32d4d4){if($gameTemp[_0x528ce5(0x2ff)]())console[_0x528ce5(0x607)](_0x32d4d4);}}return _0x45afff;};return this[_0x2692bf(0x5f8)]()[_0x2692bf(0x60b)](_0x50e75b,0x1);},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x2a5)]=function(_0x1742f8){const _0x2a4108=_0x1a3244,_0x289cc9=(_0x19ae33,_0x26cabe)=>{const _0x289217=_0x4d19;if(!_0x26cabe)return _0x19ae33;if(_0x26cabe[_0x289217(0x8e0)][_0x289217(0x90f)](VisuMZ['CoreEngine'][_0x289217(0x25f)][_0x289217(0x191)][_0x1742f8])){var _0x20f15e=Number(RegExp['$1'])/0x64;_0x19ae33+=_0x20f15e;}if(_0x26cabe['note'][_0x289217(0x90f)](VisuMZ[_0x289217(0x38a)][_0x289217(0x25f)][_0x289217(0x38f)][_0x1742f8])){var _0x20f15e=Number(RegExp['$1']);_0x19ae33+=_0x20f15e;}if(_0x26cabe[_0x289217(0x8e0)][_0x289217(0x90f)](VisuMZ[_0x289217(0x38a)][_0x289217(0x25f)][_0x289217(0x8c1)][_0x1742f8])){var _0x170d5c=String(RegExp['$1']);try{_0x19ae33+=eval(_0x170d5c);}catch(_0x2c5677){if($gameTemp[_0x289217(0x2ff)]())console[_0x289217(0x607)](_0x2c5677);}}return _0x19ae33;};return this[_0x2a4108(0x5f8)]()[_0x2a4108(0x60b)](_0x289cc9,0x0);},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x8a2)]=function(_0x4aa0a5){const _0x1edebf=_0x1a3244;let _0x2d430c=_0x1edebf(0x8a2)+_0x4aa0a5+_0x1edebf(0x4a9);if(this[_0x1edebf(0x8e6)](_0x2d430c))return this[_0x1edebf(0x6a6)][_0x2d430c];return this[_0x1edebf(0x6a6)][_0x2d430c]=VisuMZ[_0x1edebf(0x38a)]['Settings'][_0x1edebf(0x381)][_0x1edebf(0x5d6)][_0x1edebf(0x38c)](this,_0x4aa0a5),this[_0x1edebf(0x6a6)][_0x2d430c];},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x2c6)]=function(_0x5f2b5d){const _0x164155=_0x1a3244,_0x14401e=(_0x47591b,_0x545e3c)=>{const _0x8b784a=_0x4d19;if(!_0x545e3c)return _0x47591b;if(_0x545e3c[_0x8b784a(0x8e0)]['match'](VisuMZ[_0x8b784a(0x38a)][_0x8b784a(0x25f)][_0x8b784a(0x745)][_0x5f2b5d])){var _0x158568=Number(RegExp['$1'])/0x64;_0x47591b+=_0x158568;}if(_0x545e3c[_0x8b784a(0x8e0)][_0x8b784a(0x90f)](VisuMZ[_0x8b784a(0x38a)][_0x8b784a(0x25f)][_0x8b784a(0x62e)][_0x5f2b5d])){var _0x158568=Number(RegExp['$1']);_0x47591b+=_0x158568;}if(_0x545e3c['note'][_0x8b784a(0x90f)](VisuMZ[_0x8b784a(0x38a)][_0x8b784a(0x25f)][_0x8b784a(0x930)][_0x5f2b5d])){var _0xadd27a=String(RegExp['$1']);try{_0x47591b+=eval(_0xadd27a);}catch(_0x9c04fc){if($gameTemp[_0x8b784a(0x2ff)]())console[_0x8b784a(0x607)](_0x9c04fc);}}return _0x47591b;};return this[_0x164155(0x5f8)]()['reduce'](_0x14401e,0x0);},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x730)]=function(_0x17340b){const _0x7b7ff=(_0x3c34f7,_0x1f9ff4)=>{const _0x11f731=_0x4d19;if(!_0x1f9ff4)return _0x3c34f7;if(_0x1f9ff4[_0x11f731(0x8e0)]['match'](VisuMZ[_0x11f731(0x38a)][_0x11f731(0x25f)]['sparamRate1'][_0x17340b])){var _0x29bc92=Number(RegExp['$1'])/0x64;_0x3c34f7*=_0x29bc92;}if(_0x1f9ff4['note']['match'](VisuMZ[_0x11f731(0x38a)]['RegExp'][_0x11f731(0x801)][_0x17340b])){var _0x29bc92=Number(RegExp['$1']);_0x3c34f7*=_0x29bc92;}if(_0x1f9ff4['note'][_0x11f731(0x90f)](VisuMZ[_0x11f731(0x38a)]['RegExp'][_0x11f731(0x672)][_0x17340b])){var _0x3e1d6c=String(RegExp['$1']);try{_0x3c34f7*=eval(_0x3e1d6c);}catch(_0x51e580){if($gameTemp[_0x11f731(0x2ff)]())console[_0x11f731(0x607)](_0x51e580);}}return _0x3c34f7;};return this['traitObjects']()['reduce'](_0x7b7ff,0x1);},Game_BattlerBase[_0x1a3244(0x44d)][_0x1a3244(0x726)]=function(_0x3b23ba){const _0x34492b=_0x1a3244,_0x142e1e=(_0x312dcd,_0x282af4)=>{const _0x48c6aa=_0x4d19;if(!_0x282af4)return _0x312dcd;if(_0x282af4['note']['match'](VisuMZ[_0x48c6aa(0x38a)][_0x48c6aa(0x25f)]['sparamFlat1'][_0x3b23ba])){var _0x93bac0=Number(RegExp['$1'])/0x64;_0x312dcd+=_0x93bac0;}if(_0x282af4[_0x48c6aa(0x8e0)][_0x48c6aa(0x90f)](VisuMZ[_0x48c6aa(0x38a)]['RegExp'][_0x48c6aa(0x246)][_0x3b23ba])){var _0x93bac0=Number(RegExp['$1']);_0x312dcd+=_0x93bac0;}if(_0x282af4[_0x48c6aa(0x8e0)][_0x48c6aa(0x90f)](VisuMZ[_0x48c6aa(0x38a)][_0x48c6aa(0x25f)][_0x48c6aa(0x618)][_0x3b23ba])){var _0x1fd2ba=String(RegExp['$1']);try{_0x312dcd+=eval(_0x1fd2ba);}catch(_0x179f69){if($gameTemp[_0x48c6aa(0x2ff)]())console['log'](_0x179f69);}}return _0x312dcd;};return this[_0x34492b(0x5f8)]()[_0x34492b(0x60b)](_0x142e1e,0x0);},Game_BattlerBase[_0x1a3244(0x44d)]['sparam']=function(_0x4e3a43){const _0x417c19=_0x1a3244;let _0x3ded9b=_0x417c19(0x2b1)+_0x4e3a43+_0x417c19(0x4a9);if(this[_0x417c19(0x8e6)](_0x3ded9b))return this['_cache'][_0x3ded9b];return this[_0x417c19(0x6a6)][_0x3ded9b]=VisuMZ[_0x417c19(0x38a)][_0x417c19(0x927)]['Param'][_0x417c19(0x516)][_0x417c19(0x38c)](this,_0x4e3a43),this[_0x417c19(0x6a6)][_0x3ded9b];},Game_BattlerBase['prototype'][_0x1a3244(0x577)]=function(_0x4b19d3,_0x26430e){const _0x553141=_0x1a3244;if(typeof paramId===_0x553141(0x30b))return this['param'](_0x4b19d3);_0x4b19d3=String(_0x4b19d3||'')['toUpperCase']();if(_0x4b19d3==='MAXHP')return this['param'](0x0);if(_0x4b19d3===_0x553141(0x3ed))return this[_0x553141(0x862)](0x1);if(_0x4b19d3===_0x553141(0x821))return this['param'](0x2);if(_0x4b19d3===_0x553141(0x8da))return this['param'](0x3);if(_0x4b19d3===_0x553141(0x769))return this['param'](0x4);if(_0x4b19d3===_0x553141(0x31c))return this[_0x553141(0x862)](0x5);if(_0x4b19d3==='AGI')return this['param'](0x6);if(_0x4b19d3===_0x553141(0x885))return this['param'](0x7);if(_0x4b19d3===_0x553141(0x38d))return _0x26430e?String(Math[_0x553141(0x6e5)](this['xparam'](0x0)*0x64))+'%':this[_0x553141(0x8a2)](0x0);if(_0x4b19d3===_0x553141(0x842))return _0x26430e?String(Math[_0x553141(0x6e5)](this['xparam'](0x1)*0x64))+'%':this['xparam'](0x1);if(_0x4b19d3===_0x553141(0x613))return _0x26430e?String(Math['round'](this[_0x553141(0x8a2)](0x2)*0x64))+'%':this[_0x553141(0x8a2)](0x2);if(_0x4b19d3===_0x553141(0x183))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x8a2)](0x3)*0x64))+'%':this[_0x553141(0x8a2)](0x3);if(_0x4b19d3===_0x553141(0x1f0))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x8a2)](0x4)*0x64))+'%':this[_0x553141(0x8a2)](0x4);if(_0x4b19d3===_0x553141(0x289))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x8a2)](0x5)*0x64))+'%':this[_0x553141(0x8a2)](0x5);if(_0x4b19d3==='CNT')return _0x26430e?String(Math['round'](this['xparam'](0x6)*0x64))+'%':this['xparam'](0x6);if(_0x4b19d3===_0x553141(0x6e9))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x8a2)](0x7)*0x64))+'%':this[_0x553141(0x8a2)](0x7);if(_0x4b19d3==='MRG')return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x8a2)](0x8)*0x64))+'%':this[_0x553141(0x8a2)](0x8);if(_0x4b19d3===_0x553141(0x82a))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x8a2)](0x9)*0x64))+'%':this[_0x553141(0x8a2)](0x9);if(_0x4b19d3==='TGR')return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x2b1)](0x0)*0x64))+'%':this[_0x553141(0x2b1)](0x0);if(_0x4b19d3===_0x553141(0x489))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x2b1)](0x1)*0x64))+'%':this['sparam'](0x1);if(_0x4b19d3===_0x553141(0x5e5))return _0x26430e?String(Math[_0x553141(0x6e5)](this['sparam'](0x2)*0x64))+'%':this[_0x553141(0x2b1)](0x2);if(_0x4b19d3===_0x553141(0x427))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x2b1)](0x3)*0x64))+'%':this[_0x553141(0x2b1)](0x3);if(_0x4b19d3===_0x553141(0x8bd))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x2b1)](0x4)*0x64))+'%':this[_0x553141(0x2b1)](0x4);if(_0x4b19d3===_0x553141(0x4b8))return _0x26430e?String(Math['round'](this['sparam'](0x5)*0x64))+'%':this[_0x553141(0x2b1)](0x5);if(_0x4b19d3===_0x553141(0x59f))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x2b1)](0x6)*0x64))+'%':this[_0x553141(0x2b1)](0x6);if(_0x4b19d3===_0x553141(0x218))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x2b1)](0x7)*0x64))+'%':this['sparam'](0x7);if(_0x4b19d3===_0x553141(0x5ae))return _0x26430e?String(Math[_0x553141(0x6e5)](this[_0x553141(0x2b1)](0x8)*0x64))+'%':this['sparam'](0x8);if(_0x4b19d3===_0x553141(0x1c3))return _0x26430e?String(Math[_0x553141(0x6e5)](this['sparam'](0x9)*0x64))+'%':this[_0x553141(0x2b1)](0x9);if(VisuMZ['CoreEngine'][_0x553141(0x2ce)][_0x4b19d3]){const _0x25c763=VisuMZ[_0x553141(0x38a)][_0x553141(0x2ce)][_0x4b19d3],_0x3b6391=this[_0x25c763];return VisuMZ['CoreEngine'][_0x553141(0x62a)][_0x4b19d3]==='integer'?_0x3b6391:_0x26430e?String(Math[_0x553141(0x6e5)](_0x3b6391*0x64))+'%':_0x3b6391;}return'';},Game_BattlerBase['prototype']['isDying']=function(){const _0x57fa02=_0x1a3244;return this['isAlive']()&&this[_0x57fa02(0x7bf)]<this[_0x57fa02(0x84b)]*VisuMZ[_0x57fa02(0x38a)][_0x57fa02(0x927)][_0x57fa02(0x381)][_0x57fa02(0x563)];},Game_Battler[_0x1a3244(0x44d)][_0x1a3244(0x605)]=function(){const _0x30ac39=_0x1a3244;SoundManager[_0x30ac39(0x5c2)](),this['requestMotion'](_0x30ac39(0x5ff));},VisuMZ[_0x1a3244(0x38a)]['Game_Actor_paramBase']=Game_Actor['prototype'][_0x1a3244(0x1a0)],Game_Actor['prototype'][_0x1a3244(0x1a0)]=function(_0x1da8ba){const _0x59cc90=_0x1a3244;if(this[_0x59cc90(0x569)]>0x63)return this[_0x59cc90(0x68b)](_0x1da8ba);return VisuMZ[_0x59cc90(0x38a)]['Game_Actor_paramBase'][_0x59cc90(0x38c)](this,_0x1da8ba);},Game_Actor[_0x1a3244(0x44d)][_0x1a3244(0x68b)]=function(_0x454df5){const _0x18ebfb=_0x1a3244,_0x24c604=this['currentClass']()[_0x18ebfb(0x602)][_0x454df5][0x63],_0x328b28=this[_0x18ebfb(0x8a4)]()[_0x18ebfb(0x602)][_0x454df5][0x62];return _0x24c604+(_0x24c604-_0x328b28)*(this[_0x18ebfb(0x569)]-0x63);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x51e)]=Game_Actor[_0x1a3244(0x44d)][_0x1a3244(0x779)],Game_Actor['prototype'][_0x1a3244(0x779)]=function(_0x530504,_0x1e808c){const _0x4a8c0d=_0x1a3244;$gameTemp[_0x4a8c0d(0x342)]=!![],VisuMZ[_0x4a8c0d(0x38a)][_0x4a8c0d(0x51e)][_0x4a8c0d(0x38c)](this,_0x530504,_0x1e808c),$gameTemp[_0x4a8c0d(0x342)]=undefined;},VisuMZ['CoreEngine']['Game_Actor_levelUp']=Game_Actor[_0x1a3244(0x44d)][_0x1a3244(0x54d)],Game_Actor[_0x1a3244(0x44d)][_0x1a3244(0x54d)]=function(){const _0x26a23c=_0x1a3244;VisuMZ[_0x26a23c(0x38a)]['Game_Actor_levelUp'][_0x26a23c(0x38c)](this);if(!$gameTemp[_0x26a23c(0x342)])this[_0x26a23c(0x260)]();},Game_Actor[_0x1a3244(0x44d)][_0x1a3244(0x260)]=function(){const _0x2317ad=_0x1a3244;this[_0x2317ad(0x6a6)]={};if(VisuMZ[_0x2317ad(0x38a)][_0x2317ad(0x927)][_0x2317ad(0x83d)][_0x2317ad(0x2c7)])this[_0x2317ad(0x7bf)]=this['mhp'];if(VisuMZ[_0x2317ad(0x38a)][_0x2317ad(0x927)][_0x2317ad(0x83d)][_0x2317ad(0x5d3)])this[_0x2317ad(0x5a9)]=this[_0x2317ad(0x2f0)];},Game_Actor['prototype'][_0x1a3244(0x7a9)]=function(){const _0xc57b6a=_0x1a3244;if(this[_0xc57b6a(0x7a1)]())return 0x1;const _0x6d33b5=this[_0xc57b6a(0x2dd)]()-this['currentLevelExp'](),_0x5b2f2d=this[_0xc57b6a(0x483)]()-this['currentLevelExp']();return(_0x5b2f2d/_0x6d33b5)[_0xc57b6a(0x277)](0x0,0x1);},Game_Actor[_0x1a3244(0x44d)][_0x1a3244(0x5f8)]=function(){const _0x76db31=_0x1a3244,_0x1a4eee=Game_Battler[_0x76db31(0x44d)][_0x76db31(0x5f8)][_0x76db31(0x38c)](this);for(const _0x49ca9b of this[_0x76db31(0x81f)]()){_0x49ca9b&&_0x1a4eee[_0x76db31(0x27f)](_0x49ca9b);}return _0x1a4eee[_0x76db31(0x27f)](this[_0x76db31(0x8a4)](),this['actor']()),_0x1a4eee;},Object[_0x1a3244(0x6cc)](Game_Enemy[_0x1a3244(0x44d)],_0x1a3244(0x569),{'get':function(){const _0x5459b8=_0x1a3244;return this[_0x5459b8(0x2af)]();},'configurable':!![]}),Game_Enemy[_0x1a3244(0x44d)][_0x1a3244(0x2af)]=function(){return this['enemy']()['level'];},Game_Enemy[_0x1a3244(0x44d)]['moveRelativeToResolutionChange']=function(){const _0x3cecae=_0x1a3244;!this[_0x3cecae(0x3e5)]&&(this[_0x3cecae(0x272)]+=Math[_0x3cecae(0x6e5)]((Graphics['height']-0x270)/0x2),this[_0x3cecae(0x272)]-=Math[_0x3cecae(0x312)]((Graphics[_0x3cecae(0x583)]-Graphics[_0x3cecae(0x694)])/0x2),$gameSystem[_0x3cecae(0x1ff)]()?this[_0x3cecae(0x1a6)]-=Math[_0x3cecae(0x312)]((Graphics[_0x3cecae(0x397)]-Graphics[_0x3cecae(0x7a7)])/0x2):this['_screenX']+=Math[_0x3cecae(0x6e5)]((Graphics[_0x3cecae(0x7a7)]-0x330)/0x2)),this[_0x3cecae(0x3e5)]=!![];},Game_Party[_0x1a3244(0x44d)][_0x1a3244(0x794)]=function(){const _0x22a53e=_0x1a3244;return VisuMZ[_0x22a53e(0x38a)][_0x22a53e(0x927)][_0x22a53e(0x82c)][_0x22a53e(0x4c2)];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x7c5)]=Game_Party[_0x1a3244(0x44d)][_0x1a3244(0x2f8)],Game_Party[_0x1a3244(0x44d)][_0x1a3244(0x2f8)]=function(_0x4dd210){const _0x55b5ad=_0x1a3244;if(VisuMZ[_0x55b5ad(0x38a)][_0x55b5ad(0x927)][_0x55b5ad(0x83d)][_0x55b5ad(0x5f9)]&&DataManager['isKeyItem'](_0x4dd210))return;VisuMZ[_0x55b5ad(0x38a)][_0x55b5ad(0x7c5)][_0x55b5ad(0x38c)](this,_0x4dd210);},Game_Party[_0x1a3244(0x44d)][_0x1a3244(0x71b)]=function(){const _0xb1ca4f=_0x1a3244,_0x15c10a=VisuMZ[_0xb1ca4f(0x38a)][_0xb1ca4f(0x927)]['QoL'],_0x49035c=_0x15c10a[_0xb1ca4f(0x1a5)]??0x63;let _0x4d7bf6=[];(_0x15c10a[_0xb1ca4f(0x632)]??!![])&&(_0x4d7bf6=_0x4d7bf6['concat']($dataItems));(_0x15c10a[_0xb1ca4f(0x2a9)]??!![])&&(_0x4d7bf6=_0x4d7bf6[_0xb1ca4f(0x443)]($dataWeapons));(_0x15c10a['BTestArmors']??!![])&&(_0x4d7bf6=_0x4d7bf6[_0xb1ca4f(0x443)]($dataArmors));for(const _0x333d1f of _0x4d7bf6){if(!_0x333d1f)continue;if(_0x333d1f[_0xb1ca4f(0x17f)]['trim']()<=0x0)continue;if(_0x333d1f[_0xb1ca4f(0x17f)][_0xb1ca4f(0x90f)](/-----/i))continue;this['gainItem'](_0x333d1f,_0x49035c);}},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x559)]=Game_Troop[_0x1a3244(0x44d)][_0x1a3244(0x31f)],Game_Troop[_0x1a3244(0x44d)][_0x1a3244(0x31f)]=function(_0x545877){const _0x1617fd=_0x1a3244;$gameTemp[_0x1617fd(0x77f)](),$gameTemp[_0x1617fd(0x28e)](_0x545877),VisuMZ[_0x1617fd(0x38a)][_0x1617fd(0x559)][_0x1617fd(0x38c)](this,_0x545877);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x4f5)]=Game_Map['prototype'][_0x1a3244(0x31f)],Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x31f)]=function(_0xaa64bf){const _0x789234=_0x1a3244;VisuMZ['CoreEngine'][_0x789234(0x4f5)][_0x789234(0x38c)](this,_0xaa64bf),this[_0x789234(0x6e6)](),this[_0x789234(0x8fd)](_0xaa64bf),this[_0x789234(0x2ca)]();},Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x8fd)]=function(){const _0x18661d=_0x1a3244;this['_hideTileShadows']=VisuMZ[_0x18661d(0x38a)][_0x18661d(0x927)]['QoL']['NoTileShadows']||![];const _0x19f7c9=VisuMZ[_0x18661d(0x38a)]['Settings']['ScreenResolution'],_0x1beaac=$dataMap?$dataMap[_0x18661d(0x8e0)]||'':'';if(_0x1beaac['match'](/<SHOW TILE SHADOWS>/i))this['_hideTileShadows']=![];else _0x1beaac[_0x18661d(0x90f)](/<HIDE TILE SHADOWS>/i)&&(this[_0x18661d(0x655)]=!![]);if(_0x1beaac[_0x18661d(0x90f)](/<SCROLL LOCK X>/i))this[_0x18661d(0x2c1)]()[_0x18661d(0x645)]=!![],this[_0x18661d(0x2c1)]()[_0x18661d(0x621)]=_0x19f7c9[_0x18661d(0x66a)];else _0x1beaac[_0x18661d(0x90f)](/<SCROLL LOCK X: (.*?)>/i)&&(this[_0x18661d(0x2c1)]()[_0x18661d(0x645)]=!![],this[_0x18661d(0x2c1)]()[_0x18661d(0x621)]=Number(RegExp['$1']));if(_0x1beaac[_0x18661d(0x90f)](/<SCROLL LOCK Y>/i))this[_0x18661d(0x2c1)]()[_0x18661d(0x3bf)]=!![],this[_0x18661d(0x2c1)]()[_0x18661d(0x35c)]=_0x19f7c9[_0x18661d(0x54b)];else _0x1beaac[_0x18661d(0x90f)](/<SCROLL LOCK Y: (.*?)>/i)&&(this[_0x18661d(0x2c1)]()[_0x18661d(0x3bf)]=!![],this['centerCameraCheckData']()['displayY']=Number(RegExp['$1']));},Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x480)]=function(){const _0x57cb9c=_0x1a3244;if(this[_0x57cb9c(0x655)]===undefined)this[_0x57cb9c(0x8fd)]();return this[_0x57cb9c(0x655)];},Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x6e6)]=function(){const _0x5d9a01=_0x1a3244,_0x5087e6=VisuMZ[_0x5d9a01(0x38a)]['Settings'][_0x5d9a01(0x528)];this['_centerCameraCheck']={'centerX':![],'centerY':![],'displayX':0x0,'displayY':0x0};if(_0x5087e6[_0x5d9a01(0x3a0)]){const _0x19af5f=Graphics[_0x5d9a01(0x397)]/this[_0x5d9a01(0x895)]();_0x19af5f%0x1!==0x0&&Math[_0x5d9a01(0x4a2)](_0x19af5f)===this[_0x5d9a01(0x397)]()&&!this[_0x5d9a01(0x666)]()&&(this[_0x5d9a01(0x3c6)]['centerX']=!![],this['_centerCameraCheck']['displayX']=_0x5087e6[_0x5d9a01(0x66a)]||0x0);}if(_0x5087e6['AutoScrollLockY']){const _0x4bf9c7=Graphics[_0x5d9a01(0x583)]/this[_0x5d9a01(0x910)]();_0x4bf9c7%0x1!==0x0&&Math[_0x5d9a01(0x4a2)](_0x4bf9c7)===this[_0x5d9a01(0x583)]()&&!this[_0x5d9a01(0x90a)]()&&(this[_0x5d9a01(0x3c6)][_0x5d9a01(0x3bf)]=!![],this[_0x5d9a01(0x3c6)][_0x5d9a01(0x35c)]=_0x5087e6[_0x5d9a01(0x54b)]||0x0);}$gameScreen[_0x5d9a01(0x362)]()===0x1&&(this[_0x5d9a01(0x2c1)]()[_0x5d9a01(0x645)]&&(this[_0x5d9a01(0x935)]=this[_0x5d9a01(0x2c1)]()[_0x5d9a01(0x621)]),this['centerCameraCheckData']()[_0x5d9a01(0x3bf)]&&(this[_0x5d9a01(0x426)]=this['centerCameraCheckData']()[_0x5d9a01(0x35c)]));},VisuMZ[_0x1a3244(0x38a)]['Game_Map_setDisplayPos']=Game_Map[_0x1a3244(0x44d)]['setDisplayPos'],Game_Map['prototype']['setDisplayPos']=function(_0x3244bb,_0x308e5a){const _0x2de755=_0x1a3244;VisuMZ[_0x2de755(0x38a)][_0x2de755(0x63d)][_0x2de755(0x38c)](this,_0x3244bb,_0x308e5a),$gameScreen['zoomScale']()===0x1&&(!this['isLoopHorizontal']()&&this[_0x2de755(0x2c1)]()[_0x2de755(0x645)]&&(this[_0x2de755(0x935)]=this[_0x2de755(0x2c1)]()[_0x2de755(0x621)]),!this[_0x2de755(0x90a)]()&&this['centerCameraCheckData']()[_0x2de755(0x3bf)]&&(this[_0x2de755(0x426)]=this[_0x2de755(0x2c1)]()[_0x2de755(0x35c)]));},Game_Map[_0x1a3244(0x44d)]['centerCameraCheckData']=function(){const _0x226c63=_0x1a3244;if(this[_0x226c63(0x3c6)]===undefined)this[_0x226c63(0x6e6)]();return this['_centerCameraCheck'];},VisuMZ['CoreEngine'][_0x1a3244(0x6ac)]=Game_Map['prototype'][_0x1a3244(0x379)],Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x379)]=function(_0x5b2a96){const _0x55559e=_0x1a3244;if(this[_0x55559e(0x2c1)]()[_0x55559e(0x3bf)]&&$gameScreen[_0x55559e(0x362)]()===0x1){this[_0x55559e(0x426)]=this['centerCameraCheckData']()[_0x55559e(0x35c)];return;}VisuMZ[_0x55559e(0x38a)][_0x55559e(0x6ac)][_0x55559e(0x38c)](this,_0x5b2a96);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x879)]=Game_Map[_0x1a3244(0x44d)]['scrollLeft'],Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x59d)]=function(_0x1f8ed3){const _0x2c6775=_0x1a3244;if(this[_0x2c6775(0x2c1)]()[_0x2c6775(0x645)]&&$gameScreen['zoomScale']()===0x1){this[_0x2c6775(0x935)]=this[_0x2c6775(0x2c1)]()[_0x2c6775(0x621)];return;}VisuMZ['CoreEngine']['Game_Map_scrollLeft']['call'](this,_0x1f8ed3);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x406)]=Game_Map[_0x1a3244(0x44d)]['scrollRight'],Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x53f)]=function(_0x5ea30d){const _0x2a1b65=_0x1a3244;if(this['centerCameraCheckData']()['centerX']&&$gameScreen[_0x2a1b65(0x362)]()===0x1){this[_0x2a1b65(0x935)]=this['centerCameraCheckData']()[_0x2a1b65(0x621)];return;}VisuMZ['CoreEngine'][_0x2a1b65(0x406)][_0x2a1b65(0x38c)](this,_0x5ea30d);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x90b)]=Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x2e1)],Game_Map[_0x1a3244(0x44d)]['scrollUp']=function(_0x5df3a9){const _0x11095e=_0x1a3244;if(this['centerCameraCheckData']()[_0x11095e(0x3bf)]&&$gameScreen[_0x11095e(0x362)]()===0x1){this[_0x11095e(0x426)]=this[_0x11095e(0x2c1)]()[_0x11095e(0x35c)];return;}VisuMZ[_0x11095e(0x38a)][_0x11095e(0x90b)][_0x11095e(0x38c)](this,_0x5df3a9);},Game_Map[_0x1a3244(0x44d)]['setupTileExtendTerrainTags']=function(){const _0x45ae76=_0x1a3244;this[_0x45ae76(0x4fe)]={};const _0x187304=this[_0x45ae76(0x8f2)]();if(!_0x187304)return{};const _0xe6765d=_0x187304[_0x45ae76(0x8e0)]||'',_0x432725=/<(?:TALLER|EXT|EXTEND|RAISE)[ ]BY[ ](\d+):[ ](.*)>/gi;let _0x211d82={};const _0xca596a=_0xe6765d[_0x45ae76(0x90f)](_0x432725);if(_0xca596a)for(const _0x1409ff of _0xca596a){_0x1409ff[_0x45ae76(0x90f)](_0x432725);const _0x20f05e=Number(RegExp['$1'])[_0x45ae76(0x277)](0x1,0x10),_0x51909f=String(RegExp['$2'])[_0x45ae76(0x28d)](',')[_0x45ae76(0x72d)](_0x23e511=>Number(_0x23e511)[_0x45ae76(0x277)](0x1,0x7));for(const _0x546400 of _0x51909f){_0x211d82[_0x546400]=_0x20f05e;}}this[_0x45ae76(0x4fe)]=_0x211d82;},Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x3e6)]=function(){const _0x3eb30f=_0x1a3244;if(this[_0x3eb30f(0x4fe)]===undefined)this['setupTileExtendTerrainTags']();return this['_tileExtendTerrainTags'];},Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x6b2)]=function(_0x4b026d){const _0x1acec8=_0x1a3244;if(_0x4b026d>=0x400)return![];const _0x40d965=$gameMap[_0x1acec8(0x3e6)]();if(Object[_0x1acec8(0x822)](_0x40d965)[_0x1acec8(0x753)]<=0x0)return![];const _0xd2fdd8=this[_0x1acec8(0x54a)](),_0x461331=_0xd2fdd8[_0x4b026d]>>0xc,_0x8b946a=_0x40d965[_0x461331]||0x0;return _0x8b946a>0x0;},Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x7b5)]=function(){const _0x1b2f5b=_0x1a3244,_0x1f9672=this[_0x1b2f5b(0x3e6)]();if(Object[_0x1b2f5b(0x822)](_0x1f9672)[_0x1b2f5b(0x753)]<=0x0)return;$spriteset&&($spriteset['removeTileExtendSprites']&&$spriteset['removeTileExtendSprites'](),$spriteset[_0x1b2f5b(0x91e)]&&$spriteset[_0x1b2f5b(0x91e)]());},VisuMZ['CoreEngine'][_0x1a3244(0x707)]=Game_Character['prototype']['processMoveCommand'],Game_Character[_0x1a3244(0x44d)][_0x1a3244(0x2b3)]=function(_0x113163){const _0x5901d1=_0x1a3244;try{VisuMZ[_0x5901d1(0x38a)]['Game_Character_processMoveCommand']['call'](this,_0x113163);}catch(_0x5ab884){if($gameTemp['isPlaytest']())console[_0x5901d1(0x607)](_0x5ab884);}},Game_Player[_0x1a3244(0x44d)][_0x1a3244(0x5cb)]=function(){const _0x306f64=_0x1a3244,_0x4fe113=$gameMap[_0x306f64(0x385)]();this[_0x306f64(0x828)]=Math[_0x306f64(0x2bb)](_0x4fe113)+Math[_0x306f64(0x2bb)](_0x4fe113)+this['encounterStepsMinimum']();},Game_Player[_0x1a3244(0x44d)]['encounterStepsMinimum']=function(){const _0x4edb78=_0x1a3244;return $dataMap&&$dataMap['note']&&$dataMap[_0x4edb78(0x8e0)][_0x4edb78(0x90f)](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i)?Number(RegExp['$1']):VisuMZ[_0x4edb78(0x38a)][_0x4edb78(0x927)][_0x4edb78(0x83d)][_0x4edb78(0x773)];},VisuMZ[_0x1a3244(0x38a)]['Game_Event_isCollidedWithEvents']=Game_Event[_0x1a3244(0x44d)][_0x1a3244(0x4bd)],Game_Event['prototype'][_0x1a3244(0x4bd)]=function(_0x2a7284,_0x478bb4){const _0x4d6ebb=_0x1a3244;return this[_0x4d6ebb(0x831)]()?this['checkSmartEventCollision'](_0x2a7284,_0x478bb4):VisuMZ['CoreEngine']['Game_Event_isCollidedWithEvents'][_0x4d6ebb(0x38c)](this,_0x2a7284,_0x478bb4);},Game_Event[_0x1a3244(0x44d)][_0x1a3244(0x831)]=function(){const _0x711674=_0x1a3244;return VisuMZ['CoreEngine'][_0x711674(0x927)][_0x711674(0x83d)][_0x711674(0x1f7)];},Game_Event[_0x1a3244(0x44d)][_0x1a3244(0x6e2)]=function(_0x4bfcd6,_0x2122f6){const _0xc6f3ba=_0x1a3244;if(!this[_0xc6f3ba(0x747)]())return![];else{const _0x5d183b=$gameMap[_0xc6f3ba(0x7de)](_0x4bfcd6,_0x2122f6)['filter'](_0x3452=>_0x3452[_0xc6f3ba(0x747)]());return _0x5d183b[_0xc6f3ba(0x753)]>0x0;}},VisuMZ['CoreEngine'][_0x1a3244(0x916)]=Game_Interpreter['prototype'][_0x1a3244(0x4aa)],Game_Interpreter[_0x1a3244(0x44d)][_0x1a3244(0x4aa)]=function(_0x25f732){const _0x21b12d=_0x1a3244,_0x41d84e=this[_0x21b12d(0x2a4)]();return _0x41d84e[_0x21b12d(0x90f)](/\/\/[ ]SCRIPT[ ]CALL/i)?this[_0x21b12d(0x2e2)](_0x41d84e):VisuMZ[_0x21b12d(0x38a)]['Game_Interpreter_command105'][_0x21b12d(0x38c)](this,_0x25f732);},Game_Interpreter[_0x1a3244(0x44d)][_0x1a3244(0x2a4)]=function(){const _0x1b42db=_0x1a3244;let _0x734e31='',_0x27eaed=this[_0x1b42db(0x4b2)]+0x1;while(this[_0x1b42db(0x184)][_0x27eaed]&&this['_list'][_0x27eaed][_0x1b42db(0x7b3)]===0x195){_0x734e31+=this[_0x1b42db(0x184)][_0x27eaed]['parameters'][0x0]+'\x0a',_0x27eaed++;}return _0x734e31;},Game_Interpreter['prototype'][_0x1a3244(0x2e2)]=function(_0x2d857c){const _0x5817e8=_0x1a3244;try{eval(_0x2d857c);}catch(_0x3ec1f8){$gameTemp[_0x5817e8(0x2ff)]()&&(console['log'](_0x5817e8(0x2e3)),console[_0x5817e8(0x607)](_0x3ec1f8));}return!![];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x313)]=Game_Interpreter[_0x1a3244(0x44d)][_0x1a3244(0x253)],Game_Interpreter['prototype'][_0x1a3244(0x253)]=function(_0x1810e7){const _0x5f1914=_0x1a3244;try{VisuMZ[_0x5f1914(0x38a)]['Game_Interpreter_command111'][_0x5f1914(0x38c)](this,_0x1810e7);}catch(_0xd9c31c){$gameTemp[_0x5f1914(0x2ff)]()&&(console[_0x5f1914(0x607)](_0x5f1914(0x7e2)),console[_0x5f1914(0x607)](_0xd9c31c)),this['skipBranch']();}return!![];},VisuMZ[_0x1a3244(0x38a)]['Game_Interpreter_command122']=Game_Interpreter[_0x1a3244(0x44d)][_0x1a3244(0x5a6)],Game_Interpreter['prototype'][_0x1a3244(0x5a6)]=function(_0xe9b496){const _0x2b84f6=_0x1a3244;try{VisuMZ[_0x2b84f6(0x38a)]['Game_Interpreter_command122'][_0x2b84f6(0x38c)](this,_0xe9b496);}catch(_0x1c0e81){$gameTemp[_0x2b84f6(0x2ff)]()&&(console['log'](_0x2b84f6(0x5b0)),console['log'](_0x1c0e81));}return!![];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x49b)]=Game_Interpreter[_0x1a3244(0x44d)][_0x1a3244(0x467)],Game_Interpreter[_0x1a3244(0x44d)]['command355']=function(){const _0x38540b=_0x1a3244;try{VisuMZ[_0x38540b(0x38a)]['Game_Interpreter_command355']['call'](this);}catch(_0x19f075){$gameTemp[_0x38540b(0x2ff)]()&&(console[_0x38540b(0x607)](_0x38540b(0x1fa)),console[_0x38540b(0x607)](_0x19f075));}return!![];},VisuMZ['CoreEngine'][_0x1a3244(0x343)]=Game_Interpreter[_0x1a3244(0x44d)][_0x1a3244(0x27e)],Game_Interpreter[_0x1a3244(0x44d)][_0x1a3244(0x27e)]=function(_0x45b658){const _0x502cb4=_0x1a3244;return $gameTemp[_0x502cb4(0x34a)](this),VisuMZ[_0x502cb4(0x38a)][_0x502cb4(0x343)][_0x502cb4(0x38c)](this,_0x45b658);},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x468)]=function(){const _0x3323c4=_0x1a3244;return VisuMZ[_0x3323c4(0x38a)][_0x3323c4(0x927)]['UI'][_0x3323c4(0x551)];},Scene_Base['prototype'][_0x1a3244(0x7c7)]=function(){const _0x5e07dd=_0x1a3244;return VisuMZ[_0x5e07dd(0x38a)]['Settings']['UI'][_0x5e07dd(0x34b)];},Scene_Base[_0x1a3244(0x44d)]['isBottomButtonMode']=function(){const _0x9891e5=_0x1a3244;return VisuMZ[_0x9891e5(0x38a)][_0x9891e5(0x927)]['UI'][_0x9891e5(0x48a)];},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x6d4)]=function(){const _0x33b016=_0x1a3244;return VisuMZ[_0x33b016(0x38a)][_0x33b016(0x927)]['UI'][_0x33b016(0x912)];},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x225)]=function(){const _0x3727bf=_0x1a3244;return VisuMZ['CoreEngine'][_0x3727bf(0x927)]['UI']['CommandWidth'];},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x2db)]=function(){const _0x13f504=_0x1a3244;return VisuMZ[_0x13f504(0x38a)][_0x13f504(0x927)]['UI'][_0x13f504(0x3e8)];},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x3aa)]=function(){const _0x16365d=_0x1a3244;return VisuMZ[_0x16365d(0x38a)][_0x16365d(0x927)][_0x16365d(0x919)][_0x16365d(0x5e1)];},VisuMZ[_0x1a3244(0x38a)]['Scene_Base_createWindowLayer']=Scene_Base['prototype'][_0x1a3244(0x3e4)],Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x3e4)]=function(){const _0x5d8b96=_0x1a3244;VisuMZ['CoreEngine'][_0x5d8b96(0x6dc)][_0x5d8b96(0x38c)](this),this[_0x5d8b96(0x8b5)](),this['createTextPopupWindow'](),this[_0x5d8b96(0x1a9)]['x']=Math[_0x5d8b96(0x6e5)](this[_0x5d8b96(0x1a9)]['x']),this[_0x5d8b96(0x1a9)]['y']=Math[_0x5d8b96(0x6e5)](this[_0x5d8b96(0x1a9)]['y']);},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x8b5)]=function(){},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x85e)]=function(){const _0x3a187d=_0x1a3244;this[_0x3a187d(0x3a3)]=new Window_TextPopup(),this[_0x3a187d(0x658)](this[_0x3a187d(0x3a3)]);},$textPopup=function(_0x3603c7){const _0x5c3588=_0x1a3244,_0x1e7af9=SceneManager[_0x5c3588(0x79b)]['_textPopupWindow'];_0x1e7af9&&_0x1e7af9[_0x5c3588(0x83a)](_0x3603c7);},Scene_Base[_0x1a3244(0x44d)]['buttonAssistKey1']=function(){const _0x16c000=_0x1a3244;return TextManager[_0x16c000(0x92f)]('pageup',_0x16c000(0x398));},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x1c4)]=function(){const _0x15b8b8=_0x1a3244;return TextManager[_0x15b8b8(0x201)]('tab');},Scene_Base['prototype']['buttonAssistKey3']=function(){const _0x13c71c=_0x1a3244;return TextManager[_0x13c71c(0x201)](_0x13c71c(0x4e9));},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x6df)]=function(){const _0x25d13a=_0x1a3244;return TextManager[_0x25d13a(0x201)]('ok');},Scene_Base[_0x1a3244(0x44d)]['buttonAssistKey5']=function(){const _0x1a4bb1=_0x1a3244;return TextManager[_0x1a4bb1(0x201)]('cancel');},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x3c1)]=function(){const _0x179066=_0x1a3244;return this[_0x179066(0x41d)]&&this[_0x179066(0x41d)][_0x179066(0x8fc)]?TextManager[_0x179066(0x3b1)]:'';},Scene_Base[_0x1a3244(0x44d)]['buttonAssistText2']=function(){return'';},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x5bd)]=function(){return'';},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x5ed)]=function(){const _0x14457e=_0x1a3244;return TextManager[_0x14457e(0x928)];},Scene_Base['prototype'][_0x1a3244(0x47b)]=function(){const _0x5c03f2=_0x1a3244;return TextManager[_0x5c03f2(0x8f8)];},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x322)]=function(){return 0x0;},Scene_Base['prototype'][_0x1a3244(0x634)]=function(){return 0x0;},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x1ed)]=function(){return 0x0;},Scene_Base[_0x1a3244(0x44d)]['buttonAssistOffset4']=function(){return 0x0;},Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x8e3)]=function(){return 0x0;},VisuMZ[_0x1a3244(0x38a)]['Scene_Boot_loadSystemImages']=Scene_Boot['prototype'][_0x1a3244(0x680)],Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x680)]=function(){const _0x210d80=_0x1a3244;VisuMZ[_0x210d80(0x38a)][_0x210d80(0x86c)]['call'](this),this[_0x210d80(0x1d6)]();},Scene_Boot['prototype'][_0x1a3244(0x1d6)]=function(){const _0x2fdc55=_0x1a3244,_0x332cb3=[_0x2fdc55(0x687),_0x2fdc55(0x269),'battlebacks2',_0x2fdc55(0x3b4),_0x2fdc55(0x293),'faces',_0x2fdc55(0x3ff),'pictures','sv_actors',_0x2fdc55(0x662),_0x2fdc55(0x519),_0x2fdc55(0x8dc),_0x2fdc55(0x42b),_0x2fdc55(0x2b6)];for(const _0x25586e of _0x332cb3){const _0x550e66=VisuMZ['CoreEngine'][_0x2fdc55(0x927)][_0x2fdc55(0x1be)][_0x25586e],_0xb1c91e=_0x2fdc55(0x723)['format'](_0x25586e);for(const _0x95b0df of _0x550e66){ImageManager['loadBitmap'](_0xb1c91e,_0x95b0df);}}},VisuMZ['CoreEngine'][_0x1a3244(0x405)]=Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x334)],Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x334)]=function(){const _0x54ab15=_0x1a3244;Utils[_0x54ab15(0x8b9)](_0x54ab15(0x803))&&VisuMZ[_0x54ab15(0x38a)][_0x54ab15(0x927)]['QoL'][_0x54ab15(0x88d)]?this[_0x54ab15(0x713)]():VisuMZ[_0x54ab15(0x38a)][_0x54ab15(0x405)][_0x54ab15(0x38c)](this);},Scene_Boot['prototype'][_0x1a3244(0x713)]=function(){const _0xe26985=_0x1a3244;this[_0xe26985(0x1c7)](),DataManager[_0xe26985(0x8f1)](),SceneManager[_0xe26985(0x25d)](Scene_Map);},Scene_Boot['prototype'][_0x1a3244(0x942)]=function(){const _0x395106=_0x1a3244,_0x58a3c4=$dataSystem[_0x395106(0x236)]['uiAreaWidth'],_0x102f16=$dataSystem[_0x395106(0x236)]['uiAreaHeight'],_0x97ccda=VisuMZ[_0x395106(0x38a)][_0x395106(0x927)]['UI']['BoxMargin'];Graphics[_0x395106(0x7a7)]=_0x58a3c4-_0x97ccda*0x2,Graphics[_0x395106(0x694)]=_0x102f16-_0x97ccda*0x2,this['determineSideButtonLayoutValid']();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x24c)]=Scene_Boot['prototype'][_0x1a3244(0x205)],Scene_Boot[_0x1a3244(0x44d)]['updateDocumentTitle']=function(){const _0x360857=_0x1a3244;this[_0x360857(0x317)]()?this[_0x360857(0x585)]():VisuMZ[_0x360857(0x38a)][_0x360857(0x24c)][_0x360857(0x38c)](this);},Scene_Boot[_0x1a3244(0x44d)]['isFullDocumentTitle']=function(){const _0x1a439d=_0x1a3244;if(Scene_Title[_0x1a439d(0x7ef)]==='')return![];if(Scene_Title['subtitle']===_0x1a439d(0x546))return![];if(Scene_Title[_0x1a439d(0x5ba)]==='')return![];if(Scene_Title[_0x1a439d(0x5ba)]==='0.00')return![];return!![];},Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x585)]=function(){const _0x29ad27=_0x1a3244,_0x306e78=$dataSystem[_0x29ad27(0x8a7)],_0x98a640=Scene_Title['subtitle']||'',_0x1cc71d=Scene_Title[_0x29ad27(0x5ba)]||'',_0xb656fb=VisuMZ[_0x29ad27(0x38a)][_0x29ad27(0x927)][_0x29ad27(0x7d5)][_0x29ad27(0x223)]['DocumentTitleFmt'],_0x335268=_0xb656fb[_0x29ad27(0x1ad)](_0x306e78,_0x98a640,_0x1cc71d);document['title']=_0x335268;},Scene_Boot[_0x1a3244(0x44d)][_0x1a3244(0x3d7)]=function(){const _0xdc9ecd=_0x1a3244;if(VisuMZ[_0xdc9ecd(0x38a)]['Settings']['UI']['SideButtons']){const _0x53b608=Graphics['width']-Graphics[_0xdc9ecd(0x7a7)]-VisuMZ[_0xdc9ecd(0x38a)]['Settings']['UI'][_0xdc9ecd(0x7a5)]*0x2,_0x19b29c=Sprite_Button[_0xdc9ecd(0x44d)][_0xdc9ecd(0x4ca)][_0xdc9ecd(0x38c)](this)*0x4;if(_0x53b608>=_0x19b29c)SceneManager['setSideButtonLayout'](!![]);}},Scene_Title[_0x1a3244(0x7ef)]=VisuMZ['CoreEngine'][_0x1a3244(0x927)][_0x1a3244(0x7d5)][_0x1a3244(0x223)][_0x1a3244(0x546)],Scene_Title[_0x1a3244(0x5ba)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x7d5)][_0x1a3244(0x223)][_0x1a3244(0x271)],Scene_Title[_0x1a3244(0x7b7)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x4b3)],VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x595)]=Scene_Title[_0x1a3244(0x44d)][_0x1a3244(0x331)],Scene_Title[_0x1a3244(0x44d)][_0x1a3244(0x331)]=function(){const _0x4d0c7a=_0x1a3244;VisuMZ['CoreEngine'][_0x4d0c7a(0x927)][_0x4d0c7a(0x7d5)]['Title'][_0x4d0c7a(0x331)]['call'](this);if(Scene_Title['subtitle']!==''&&Scene_Title[_0x4d0c7a(0x7ef)]!=='Subtitle')this[_0x4d0c7a(0x463)]();if(Scene_Title[_0x4d0c7a(0x5ba)]!==''&&Scene_Title[_0x4d0c7a(0x5ba)]!=='0.00')this[_0x4d0c7a(0x630)]();},Scene_Title[_0x1a3244(0x44d)][_0x1a3244(0x463)]=function(){const _0x18ee83=_0x1a3244;VisuMZ[_0x18ee83(0x38a)]['Settings'][_0x18ee83(0x7d5)][_0x18ee83(0x223)][_0x18ee83(0x463)]['call'](this);},Scene_Title[_0x1a3244(0x44d)][_0x1a3244(0x630)]=function(){const _0xff8652=_0x1a3244;VisuMZ[_0xff8652(0x38a)][_0xff8652(0x927)][_0xff8652(0x7d5)]['Title'][_0xff8652(0x630)][_0xff8652(0x38c)](this);},Scene_Title[_0x1a3244(0x44d)]['createCommandWindow']=function(){const _0x213e04=_0x1a3244;this[_0x213e04(0x736)]();const _0x436e9b=$dataSystem[_0x213e04(0x43a)]['background'],_0x16a92c=this[_0x213e04(0x6f1)]();this[_0x213e04(0x4ed)]=new Window_TitleCommand(_0x16a92c),this[_0x213e04(0x4ed)][_0x213e04(0x849)](_0x436e9b);const _0xd53114=this[_0x213e04(0x6f1)]();this[_0x213e04(0x4ed)][_0x213e04(0x4fc)](_0xd53114['x'],_0xd53114['y'],_0xd53114[_0x213e04(0x397)],_0xd53114[_0x213e04(0x583)]),this[_0x213e04(0x4ed)][_0x213e04(0x641)](),this[_0x213e04(0x4ed)][_0x213e04(0x4c4)](),this['_commandWindow'][_0x213e04(0x8c3)](),this[_0x213e04(0x625)](this[_0x213e04(0x4ed)]);},Scene_Title['prototype'][_0x1a3244(0x224)]=function(){const _0x3d2cfa=_0x1a3244;return this[_0x3d2cfa(0x4ed)]?this[_0x3d2cfa(0x4ed)]['maxItems']():VisuMZ['CoreEngine']['Settings'][_0x3d2cfa(0x1bd)][_0x3d2cfa(0x753)];},Scene_Title[_0x1a3244(0x44d)][_0x1a3244(0x6f1)]=function(){const _0xf377ff=_0x1a3244;return VisuMZ[_0xf377ff(0x38a)]['Settings'][_0xf377ff(0x7d5)][_0xf377ff(0x223)][_0xf377ff(0x386)][_0xf377ff(0x38c)](this);},Scene_Title[_0x1a3244(0x44d)]['createTitleButtons']=function(){const _0x112963=_0x1a3244;for(const _0x452e7e of Scene_Title[_0x112963(0x7b7)]){const _0x27b02d=new Sprite_TitlePictureButton(_0x452e7e);this[_0x112963(0x658)](_0x27b02d);}},VisuMZ['CoreEngine'][_0x1a3244(0x80a)]=Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x292)],Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x292)]=function(){const _0x489248=_0x1a3244;VisuMZ[_0x489248(0x38a)][_0x489248(0x80a)][_0x489248(0x38c)](this),$gameTemp[_0x489248(0x77f)](),this['clearOnceParallelInterpreters']();},VisuMZ[_0x1a3244(0x38a)]['Scene_Map_updateMainMultiply']=Scene_Map[_0x1a3244(0x44d)]['updateMainMultiply'],Scene_Map['prototype'][_0x1a3244(0x1e8)]=function(){const _0x3bbacc=_0x1a3244;VisuMZ[_0x3bbacc(0x38a)]['Scene_Map_updateMainMultiply'][_0x3bbacc(0x38c)](this),$gameTemp[_0x3bbacc(0x377)]&&!$gameMessage[_0x3bbacc(0x495)]()&&(this[_0x3bbacc(0x4a4)](),SceneManager[_0x3bbacc(0x29d)]());},Scene_Map[_0x1a3244(0x44d)]['terminate']=function(){const _0x396d2f=_0x1a3244;Scene_Message[_0x396d2f(0x44d)][_0x396d2f(0x7ce)][_0x396d2f(0x38c)](this),!SceneManager[_0x396d2f(0x5c7)](Scene_Battle)&&(this[_0x396d2f(0x245)][_0x396d2f(0x46a)](),this[_0x396d2f(0x53c)][_0x396d2f(0x7ba)](),this[_0x396d2f(0x1a9)]['visible']=![],SceneManager[_0x396d2f(0x3fb)]()),$gameScreen[_0x396d2f(0x5c1)](),this[_0x396d2f(0x48f)]();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x8d4)]=Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x796)],Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x796)]=function(){const _0x355919=_0x1a3244;VisuMZ['CoreEngine']['Scene_Map_createMenuButton']['call'](this),SceneManager[_0x355919(0x727)]()&&this[_0x355919(0x2c8)]();},Scene_Map[_0x1a3244(0x44d)]['moveMenuButtonSideButtonLayout']=function(){const _0x1cf75d=_0x1a3244;this['_menuButton']['x']=Graphics[_0x1cf75d(0x7a7)]+0x4;},VisuMZ['CoreEngine'][_0x1a3244(0x5cf)]=Scene_Map['prototype']['updateScene'],Scene_Map[_0x1a3244(0x44d)]['updateScene']=function(){const _0x32784c=_0x1a3244;VisuMZ['CoreEngine'][_0x32784c(0x5cf)][_0x32784c(0x38c)](this),this[_0x32784c(0x26a)]();},Scene_Map['prototype'][_0x1a3244(0x26a)]=function(){const _0x3c823e=_0x1a3244;Input[_0x3c823e(0x472)](_0x3c823e(0x606))&&(ConfigManager[_0x3c823e(0x216)]=!ConfigManager[_0x3c823e(0x216)],ConfigManager[_0x3c823e(0x628)]());},VisuMZ['CoreEngine'][_0x1a3244(0x5ca)]=Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x4a4)],Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x4a4)]=function(){const _0xc67ca1=_0x1a3244;VisuMZ[_0xc67ca1(0x38a)]['Scene_Map_updateMain'][_0xc67ca1(0x38c)](this),this['updateOnceParallelInterpreters']();},Scene_Map['prototype'][_0x1a3244(0x48f)]=function(){const _0x10931b=_0x1a3244;this[_0x10931b(0x7d2)]=[];},Scene_Map['prototype'][_0x1a3244(0x4d9)]=function(){const _0x53c9f1=_0x1a3244;if(!this['_onceParallelInterpreters'])return;for(const _0x275640 of this[_0x53c9f1(0x7d2)]){_0x275640&&_0x275640[_0x53c9f1(0x46a)]();}},Scene_Map['prototype'][_0x1a3244(0x836)]=function(_0x41ee58,_0x1af9ec){const _0x2315c7=$dataCommonEvents[_0x41ee58];if(!_0x2315c7)return;const _0x4e3a80=new Game_OnceParallelInterpreter();this['addOnceParallelInterpreter'](_0x4e3a80),_0x4e3a80['setCommonEvent'](_0x41ee58),_0x4e3a80['setEvent'](_0x1af9ec);},Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x486)]=function(_0x175b9){const _0x594d53=_0x1a3244;this['_onceParallelInterpreters']=this[_0x594d53(0x7d2)]||[],this['_onceParallelInterpreters'][_0x594d53(0x27f)](_0x175b9);},Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x34e)]=function(_0x266505){const _0x3203c3=_0x1a3244;this['_onceParallelInterpreters']=this[_0x3203c3(0x7d2)]||[],this['_onceParallelInterpreters'][_0x3203c3(0x6aa)](_0x266505);};function Game_OnceParallelInterpreter(){this['initialize'](...arguments);}Game_OnceParallelInterpreter[_0x1a3244(0x44d)]=Object[_0x1a3244(0x712)](Game_Interpreter[_0x1a3244(0x44d)]),Game_OnceParallelInterpreter[_0x1a3244(0x44d)][_0x1a3244(0x561)]=Game_OnceParallelInterpreter,Game_OnceParallelInterpreter[_0x1a3244(0x44d)][_0x1a3244(0x4f7)]=function(_0x54a2ed){const _0x5bb94b=_0x1a3244,_0x3696ee=$dataCommonEvents[_0x54a2ed];_0x3696ee?this['setup'](_0x3696ee[_0x5bb94b(0x29a)],0x0):this[_0x5bb94b(0x7ce)]();},Game_OnceParallelInterpreter[_0x1a3244(0x44d)][_0x1a3244(0x77c)]=function(_0x27a27a){const _0x2258b9=_0x1a3244;this[_0x2258b9(0x529)]=_0x27a27a||0x0;},Game_OnceParallelInterpreter[_0x1a3244(0x44d)][_0x1a3244(0x7ce)]=function(){const _0x4c49c1=_0x1a3244;if(!SceneManager[_0x4c49c1(0x7ee)]())return;SceneManager[_0x4c49c1(0x79b)][_0x4c49c1(0x34e)](this),Game_Interpreter[_0x4c49c1(0x44d)][_0x4c49c1(0x7ce)][_0x4c49c1(0x38c)](this);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x316)]=Scene_MenuBase['prototype'][_0x1a3244(0x67a)],Scene_MenuBase[_0x1a3244(0x44d)]['helpAreaTop']=function(){const _0x3cca10=_0x1a3244;let _0x51b39d=0x0;return SceneManager['areButtonsOutsideMainUI']()?_0x51b39d=this[_0x3cca10(0x5f1)]():_0x51b39d=VisuMZ[_0x3cca10(0x38a)][_0x3cca10(0x316)][_0x3cca10(0x38c)](this),_0x51b39d;},Scene_MenuBase[_0x1a3244(0x44d)]['helpAreaTopSideButtonLayout']=function(){const _0x350ef6=_0x1a3244;return this['isBottomHelpMode']()?this[_0x350ef6(0x1ca)]():0x0;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x643)]=Scene_MenuBase['prototype']['mainAreaTop'],Scene_MenuBase[_0x1a3244(0x44d)]['mainAreaTop']=function(){const _0x53e8ec=_0x1a3244;return SceneManager[_0x53e8ec(0x1ae)]()?this['mainAreaTopSideButtonLayout']():VisuMZ[_0x53e8ec(0x38a)][_0x53e8ec(0x643)]['call'](this);},Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x25a)]=function(){const _0x553b20=_0x1a3244;if(!this[_0x553b20(0x7c7)]())return this[_0x553b20(0x26c)]();else return this[_0x553b20(0x3a8)]()&&this[_0x553b20(0x830)]()===_0x553b20(0x926)?Window_ButtonAssist[_0x553b20(0x44d)][_0x553b20(0x55f)]():0x0;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x6ab)]=Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x940)],Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x940)]=function(){const _0xec28a3=_0x1a3244;let _0x3d6cc9=0x0;return SceneManager['areButtonsOutsideMainUI']()?_0x3d6cc9=this[_0xec28a3(0x76e)]():_0x3d6cc9=VisuMZ[_0xec28a3(0x38a)][_0xec28a3(0x6ab)][_0xec28a3(0x38c)](this),this[_0xec28a3(0x3a8)]()&&this['getButtonAssistLocation']()!=='button'&&(_0x3d6cc9-=Window_ButtonAssist[_0xec28a3(0x44d)][_0xec28a3(0x55f)]()),_0x3d6cc9;},Scene_MenuBase['prototype'][_0x1a3244(0x76e)]=function(){const _0x224021=_0x1a3244;return Graphics[_0x224021(0x694)]-this[_0x224021(0x5db)]();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x8b0)]=Scene_MenuBase[_0x1a3244(0x44d)]['createBackground'],Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x7cc)]=function(){const _0x2418af=_0x1a3244,_0x3ec50a=VisuMZ[_0x2418af(0x38a)][_0x2418af(0x927)][_0x2418af(0x7d4)][_0x2418af(0x52e)]??0x8;this[_0x2418af(0x43f)]=new PIXI[(_0x2418af(0x564))]['BlurFilter'](_0x3ec50a),this[_0x2418af(0x731)]=new Sprite(),this['_backgroundSprite'][_0x2418af(0x3f5)]=SceneManager[_0x2418af(0x8fb)](),this[_0x2418af(0x731)][_0x2418af(0x564)]=[this[_0x2418af(0x43f)]],this[_0x2418af(0x658)](this[_0x2418af(0x731)]),this['setBackgroundOpacity'](0xc0),this[_0x2418af(0x719)](this[_0x2418af(0x877)]()),this[_0x2418af(0x4a5)]();},Scene_MenuBase['prototype'][_0x1a3244(0x877)]=function(){const _0x45f618=_0x1a3244,_0x385192=String(this[_0x45f618(0x561)][_0x45f618(0x17f)]),_0x43e58e=this[_0x45f618(0x5f0)](_0x385192);return _0x43e58e?_0x43e58e[_0x45f618(0x49f)]:0xc0;},Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x4a5)]=function(){const _0x425f07=_0x1a3244,_0x5f3184=String(this[_0x425f07(0x561)][_0x425f07(0x17f)]),_0x605f62=this[_0x425f07(0x5f0)](_0x5f3184);_0x605f62&&(_0x605f62[_0x425f07(0x267)]!==''||_0x605f62[_0x425f07(0x280)]!=='')&&(this[_0x425f07(0x364)]=new Sprite(ImageManager[_0x425f07(0x8be)](_0x605f62['BgFilename1'])),this[_0x425f07(0x1ab)]=new Sprite(ImageManager[_0x425f07(0x240)](_0x605f62['BgFilename2'])),this[_0x425f07(0x658)](this[_0x425f07(0x364)]),this[_0x425f07(0x658)](this[_0x425f07(0x1ab)]),this['_backSprite1']['bitmap'][_0x425f07(0x21d)](this[_0x425f07(0x399)][_0x425f07(0x2e8)](this,this[_0x425f07(0x364)])),this[_0x425f07(0x1ab)][_0x425f07(0x3f5)][_0x425f07(0x21d)](this[_0x425f07(0x399)][_0x425f07(0x2e8)](this,this[_0x425f07(0x1ab)])));},Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x5f0)]=function(_0x45aecb){const _0x388e11=_0x1a3244;return VisuMZ[_0x388e11(0x38a)][_0x388e11(0x927)]['MenuBg'][_0x45aecb]||VisuMZ['CoreEngine']['Settings'][_0x388e11(0x7d4)]['Scene_Unlisted'];},Scene_MenuBase[_0x1a3244(0x44d)]['adjustSprite']=function(_0x34b662){const _0x359640=_0x1a3244;this[_0x359640(0x6de)](_0x34b662),this['centerSprite'](_0x34b662);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x23b)]=Scene_MenuBase['prototype'][_0x1a3244(0x678)],Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x678)]=function(){const _0x423c60=_0x1a3244;VisuMZ[_0x423c60(0x38a)][_0x423c60(0x23b)][_0x423c60(0x38c)](this),SceneManager[_0x423c60(0x727)]()&&this[_0x423c60(0x515)]();},Scene_MenuBase[_0x1a3244(0x44d)]['moveCancelButtonSideButtonLayout']=function(){this['_cancelButton']['x']=Graphics['boxWidth']+0x4;},VisuMZ['CoreEngine'][_0x1a3244(0x91f)]=Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x36d)],Scene_MenuBase['prototype'][_0x1a3244(0x36d)]=function(){const _0x154d1a=_0x1a3244;VisuMZ['CoreEngine'][_0x154d1a(0x91f)][_0x154d1a(0x38c)](this),SceneManager[_0x154d1a(0x727)]()&&this[_0x154d1a(0x1f5)]();},Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x1f5)]=function(){const _0x1ae44d=_0x1a3244;this[_0x1ae44d(0x41d)]['x']=-0x1*(this['_pageupButton'][_0x1ae44d(0x397)]+this[_0x1ae44d(0x929)][_0x1ae44d(0x397)]+0x8),this[_0x1ae44d(0x929)]['x']=-0x1*(this['_pagedownButton']['width']+0x4);},Scene_MenuBase['prototype'][_0x1a3244(0x3a8)]=function(){const _0x334b6f=_0x1a3244;return VisuMZ[_0x334b6f(0x38a)][_0x334b6f(0x927)][_0x334b6f(0x3a1)][_0x334b6f(0x594)];},Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x830)]=function(){const _0x3d97bf=_0x1a3244;return SceneManager['isSideButtonLayout']()||SceneManager[_0x3d97bf(0x40d)]()?VisuMZ[_0x3d97bf(0x38a)][_0x3d97bf(0x927)][_0x3d97bf(0x3a1)][_0x3d97bf(0x6a0)]:_0x3d97bf(0x2b0);},Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x8b5)]=function(){const _0x4c1e8e=_0x1a3244;if(!this[_0x4c1e8e(0x3a8)]())return;const _0x100bd7=this[_0x4c1e8e(0x84a)]();this['_buttonAssistWindow']=new Window_ButtonAssist(_0x100bd7),this[_0x4c1e8e(0x625)](this[_0x4c1e8e(0x508)]);},Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x84a)]=function(){const _0x544530=_0x1a3244;return this[_0x544530(0x830)]()==='button'?this[_0x544530(0x554)]():this[_0x544530(0x915)]();},Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x554)]=function(){const _0x5808a2=_0x1a3244,_0x4103cf=ConfigManager[_0x5808a2(0x7cf)]?(Sprite_Button['prototype']['blockWidth']()+0x6)*0x2:0x0,_0x1c1eda=this['buttonY'](),_0x49225b=Graphics[_0x5808a2(0x7a7)]-_0x4103cf*0x2,_0x25592b=this['buttonAreaHeight']();return new Rectangle(_0x4103cf,_0x1c1eda,_0x49225b,_0x25592b);},Scene_MenuBase[_0x1a3244(0x44d)][_0x1a3244(0x915)]=function(){const _0xab56ed=_0x1a3244,_0x2729c1=Graphics[_0xab56ed(0x7a7)],_0x1e83d6=Window_ButtonAssist[_0xab56ed(0x44d)][_0xab56ed(0x55f)](),_0x123680=0x0;let _0x348a48=0x0;return this[_0xab56ed(0x830)]()===_0xab56ed(0x926)?_0x348a48=0x0:_0x348a48=Graphics[_0xab56ed(0x694)]-_0x1e83d6,new Rectangle(_0x123680,_0x348a48,_0x2729c1,_0x1e83d6);},Scene_Menu[_0x1a3244(0x7fa)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x7d5)][_0x1a3244(0x18a)],VisuMZ['CoreEngine'][_0x1a3244(0x61b)]=Scene_Menu['prototype'][_0x1a3244(0x712)],Scene_Menu[_0x1a3244(0x44d)]['create']=function(){const _0x5d11f1=_0x1a3244;VisuMZ[_0x5d11f1(0x38a)][_0x5d11f1(0x61b)][_0x5d11f1(0x38c)](this),this[_0x5d11f1(0x924)]();},Scene_Menu[_0x1a3244(0x44d)][_0x1a3244(0x924)]=function(){const _0x4bb8fe=_0x1a3244;this['_commandWindow']&&this['_commandWindow']['setBackgroundType'](Scene_Menu[_0x4bb8fe(0x7fa)][_0x4bb8fe(0x73d)]),this[_0x4bb8fe(0x3ee)]&&this[_0x4bb8fe(0x3ee)][_0x4bb8fe(0x849)](Scene_Menu[_0x4bb8fe(0x7fa)]['GoldBgType']),this[_0x4bb8fe(0x651)]&&this[_0x4bb8fe(0x651)][_0x4bb8fe(0x849)](Scene_Menu[_0x4bb8fe(0x7fa)][_0x4bb8fe(0x3bc)]);},Scene_Menu[_0x1a3244(0x44d)][_0x1a3244(0x6f1)]=function(){const _0x507d70=_0x1a3244;return Scene_Menu[_0x507d70(0x7fa)][_0x507d70(0x386)][_0x507d70(0x38c)](this);},Scene_Menu['prototype']['goldWindowRect']=function(){const _0x4682d2=_0x1a3244;return Scene_Menu[_0x4682d2(0x7fa)][_0x4682d2(0x80c)][_0x4682d2(0x38c)](this);},Scene_Menu[_0x1a3244(0x44d)]['statusWindowRect']=function(){const _0x1f5ce0=_0x1a3244;return Scene_Menu[_0x1f5ce0(0x7fa)][_0x1f5ce0(0x6c4)][_0x1f5ce0(0x38c)](this);},Scene_Item[_0x1a3244(0x7fa)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x7d5)]['ItemMenu'],VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x49e)]=Scene_Item['prototype'][_0x1a3244(0x712)],Scene_Item[_0x1a3244(0x44d)][_0x1a3244(0x712)]=function(){const _0x537db4=_0x1a3244;VisuMZ[_0x537db4(0x38a)][_0x537db4(0x49e)]['call'](this),this[_0x537db4(0x924)]();},Scene_Item['prototype'][_0x1a3244(0x924)]=function(){const _0xe51eac=_0x1a3244;this[_0xe51eac(0x544)]&&this[_0xe51eac(0x544)][_0xe51eac(0x849)](Scene_Item['layoutSettings']['HelpBgType']),this[_0xe51eac(0x6eb)]&&this['_categoryWindow']['setBackgroundType'](Scene_Item['layoutSettings'][_0xe51eac(0x3a5)]),this['_itemWindow']&&this['_itemWindow']['setBackgroundType'](Scene_Item[_0xe51eac(0x7fa)][_0xe51eac(0x763)]),this[_0xe51eac(0x61c)]&&this[_0xe51eac(0x61c)][_0xe51eac(0x849)](Scene_Item[_0xe51eac(0x7fa)][_0xe51eac(0x2bd)]);},Scene_Item['prototype'][_0x1a3244(0x45e)]=function(){const _0xdf16ff=_0x1a3244;return Scene_Item['layoutSettings'][_0xdf16ff(0x741)][_0xdf16ff(0x38c)](this);},Scene_Item['prototype']['categoryWindowRect']=function(){const _0x29a6b5=_0x1a3244;return Scene_Item[_0x29a6b5(0x7fa)][_0x29a6b5(0x19e)]['call'](this);},Scene_Item[_0x1a3244(0x44d)][_0x1a3244(0x7f5)]=function(){const _0x40f77d=_0x1a3244;return Scene_Item[_0x40f77d(0x7fa)]['ItemRect'][_0x40f77d(0x38c)](this);},Scene_Item['prototype'][_0x1a3244(0x7f0)]=function(){const _0x27a44d=_0x1a3244;return Scene_Item['layoutSettings'][_0x27a44d(0x3a9)][_0x27a44d(0x38c)](this);},Scene_Skill[_0x1a3244(0x7fa)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x7d5)][_0x1a3244(0x673)],VisuMZ['CoreEngine'][_0x1a3244(0x28c)]=Scene_Skill[_0x1a3244(0x44d)][_0x1a3244(0x712)],Scene_Skill[_0x1a3244(0x44d)][_0x1a3244(0x712)]=function(){const _0x4a7cf8=_0x1a3244;VisuMZ['CoreEngine'][_0x4a7cf8(0x28c)][_0x4a7cf8(0x38c)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Skill[_0x1a3244(0x44d)]['setCoreEngineUpdateWindowBg']=function(){const _0x678d4b=_0x1a3244;this[_0x678d4b(0x544)]&&this[_0x678d4b(0x544)][_0x678d4b(0x849)](Scene_Skill[_0x678d4b(0x7fa)][_0x678d4b(0x94b)]),this[_0x678d4b(0x22b)]&&this[_0x678d4b(0x22b)][_0x678d4b(0x849)](Scene_Skill[_0x678d4b(0x7fa)][_0x678d4b(0x872)]),this[_0x678d4b(0x651)]&&this['_statusWindow'][_0x678d4b(0x849)](Scene_Skill[_0x678d4b(0x7fa)][_0x678d4b(0x3bc)]),this[_0x678d4b(0x5a4)]&&this[_0x678d4b(0x5a4)]['setBackgroundType'](Scene_Skill[_0x678d4b(0x7fa)][_0x678d4b(0x763)]),this[_0x678d4b(0x61c)]&&this[_0x678d4b(0x61c)][_0x678d4b(0x849)](Scene_Skill[_0x678d4b(0x7fa)]['ActorBgType']);},Scene_Skill[_0x1a3244(0x44d)][_0x1a3244(0x45e)]=function(){const _0x20b33c=_0x1a3244;return Scene_Skill[_0x20b33c(0x7fa)][_0x20b33c(0x741)][_0x20b33c(0x38c)](this);},Scene_Skill[_0x1a3244(0x44d)][_0x1a3244(0x921)]=function(){const _0x5def45=_0x1a3244;return Scene_Skill[_0x5def45(0x7fa)]['SkillTypeRect']['call'](this);},Scene_Skill[_0x1a3244(0x44d)][_0x1a3244(0x67f)]=function(){const _0x426b09=_0x1a3244;return Scene_Skill[_0x426b09(0x7fa)][_0x426b09(0x6c4)][_0x426b09(0x38c)](this);},Scene_Skill[_0x1a3244(0x44d)]['itemWindowRect']=function(){const _0x529586=_0x1a3244;return Scene_Skill['layoutSettings'][_0x529586(0x210)]['call'](this);},Scene_Skill[_0x1a3244(0x44d)][_0x1a3244(0x7f0)]=function(){const _0x2666de=_0x1a3244;return Scene_Skill[_0x2666de(0x7fa)][_0x2666de(0x3a9)][_0x2666de(0x38c)](this);},Scene_Equip[_0x1a3244(0x7fa)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)]['MenuLayout'][_0x1a3244(0x91a)],VisuMZ['CoreEngine'][_0x1a3244(0x735)]=Scene_Equip[_0x1a3244(0x44d)][_0x1a3244(0x712)],Scene_Equip['prototype'][_0x1a3244(0x712)]=function(){const _0x324e54=_0x1a3244;VisuMZ['CoreEngine'][_0x324e54(0x735)][_0x324e54(0x38c)](this),this[_0x324e54(0x924)]();},Scene_Equip[_0x1a3244(0x44d)]['setCoreEngineUpdateWindowBg']=function(){const _0x291d4d=_0x1a3244;this['_helpWindow']&&this[_0x291d4d(0x544)][_0x291d4d(0x849)](Scene_Equip[_0x291d4d(0x7fa)][_0x291d4d(0x94b)]),this[_0x291d4d(0x651)]&&this[_0x291d4d(0x651)][_0x291d4d(0x849)](Scene_Equip[_0x291d4d(0x7fa)]['StatusBgType']),this['_commandWindow']&&this[_0x291d4d(0x4ed)]['setBackgroundType'](Scene_Equip[_0x291d4d(0x7fa)][_0x291d4d(0x73d)]),this[_0x291d4d(0x7c4)]&&this[_0x291d4d(0x7c4)]['setBackgroundType'](Scene_Equip[_0x291d4d(0x7fa)][_0x291d4d(0x470)]),this[_0x291d4d(0x5a4)]&&this['_itemWindow'][_0x291d4d(0x849)](Scene_Equip[_0x291d4d(0x7fa)]['ItemBgType']);},Scene_Equip[_0x1a3244(0x44d)][_0x1a3244(0x45e)]=function(){const _0x44c704=_0x1a3244;return Scene_Equip[_0x44c704(0x7fa)][_0x44c704(0x741)][_0x44c704(0x38c)](this);},Scene_Equip[_0x1a3244(0x44d)]['statusWindowRect']=function(){const _0x14db1c=_0x1a3244;return Scene_Equip['layoutSettings']['StatusRect'][_0x14db1c(0x38c)](this);},Scene_Equip[_0x1a3244(0x44d)][_0x1a3244(0x6f1)]=function(){const _0x432462=_0x1a3244;return Scene_Equip['layoutSettings']['CommandRect'][_0x432462(0x38c)](this);},Scene_Equip['prototype'][_0x1a3244(0x78e)]=function(){const _0x4d1638=_0x1a3244;return Scene_Equip[_0x4d1638(0x7fa)][_0x4d1638(0x314)][_0x4d1638(0x38c)](this);},Scene_Equip[_0x1a3244(0x44d)]['itemWindowRect']=function(){const _0x57c29d=_0x1a3244;return Scene_Equip[_0x57c29d(0x7fa)][_0x57c29d(0x210)][_0x57c29d(0x38c)](this);},Scene_Status[_0x1a3244(0x7fa)]=VisuMZ['CoreEngine'][_0x1a3244(0x927)][_0x1a3244(0x7d5)][_0x1a3244(0x23c)],VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x2a3)]=Scene_Status[_0x1a3244(0x44d)]['create'],Scene_Status[_0x1a3244(0x44d)][_0x1a3244(0x712)]=function(){const _0x2a8efb=_0x1a3244;VisuMZ[_0x2a8efb(0x38a)][_0x2a8efb(0x2a3)][_0x2a8efb(0x38c)](this),this[_0x2a8efb(0x924)]();},Scene_Status[_0x1a3244(0x44d)][_0x1a3244(0x924)]=function(){const _0x4b241a=_0x1a3244;this[_0x4b241a(0x31b)]&&this[_0x4b241a(0x31b)][_0x4b241a(0x849)](Scene_Status[_0x4b241a(0x7fa)][_0x4b241a(0x4d6)]),this[_0x4b241a(0x651)]&&this[_0x4b241a(0x651)]['setBackgroundType'](Scene_Status[_0x4b241a(0x7fa)][_0x4b241a(0x3bc)]),this['_statusParamsWindow']&&this[_0x4b241a(0x58c)][_0x4b241a(0x849)](Scene_Status['layoutSettings'][_0x4b241a(0x2e9)]),this['_statusEquipWindow']&&this['_statusEquipWindow'][_0x4b241a(0x849)](Scene_Status[_0x4b241a(0x7fa)][_0x4b241a(0x94a)]);},Scene_Status['prototype']['profileWindowRect']=function(){const _0x2417ff=_0x1a3244;return Scene_Status[_0x2417ff(0x7fa)][_0x2417ff(0x3e7)]['call'](this);},Scene_Status['prototype'][_0x1a3244(0x67f)]=function(){const _0xd572d7=_0x1a3244;return Scene_Status[_0xd572d7(0x7fa)][_0xd572d7(0x6c4)][_0xd572d7(0x38c)](this);},Scene_Status['prototype'][_0x1a3244(0x5b5)]=function(){const _0x4f3a8c=_0x1a3244;return Scene_Status[_0x4f3a8c(0x7fa)][_0x4f3a8c(0x493)][_0x4f3a8c(0x38c)](this);},Scene_Status['prototype'][_0x1a3244(0x523)]=function(){const _0x3ca9ec=_0x1a3244;return Scene_Status[_0x3ca9ec(0x7fa)][_0x3ca9ec(0x5e9)]['call'](this);},Scene_Options[_0x1a3244(0x7fa)]=VisuMZ[_0x1a3244(0x38a)]['Settings'][_0x1a3244(0x7d5)][_0x1a3244(0x549)],VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x304)]=Scene_Options[_0x1a3244(0x44d)]['create'],Scene_Options[_0x1a3244(0x44d)][_0x1a3244(0x712)]=function(){const _0x4fdfed=_0x1a3244;VisuMZ[_0x4fdfed(0x38a)][_0x4fdfed(0x304)][_0x4fdfed(0x38c)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Options[_0x1a3244(0x44d)]['setCoreEngineUpdateWindowBg']=function(){const _0x1d71ea=_0x1a3244;this[_0x1d71ea(0x2ee)]&&this[_0x1d71ea(0x2ee)][_0x1d71ea(0x849)](Scene_Options[_0x1d71ea(0x7fa)]['OptionsBgType']);},Scene_Options[_0x1a3244(0x44d)]['optionsWindowRect']=function(){const _0x177e10=_0x1a3244;return Scene_Options['layoutSettings'][_0x177e10(0x8f5)][_0x177e10(0x38c)](this);},Scene_Save[_0x1a3244(0x7fa)]=VisuMZ['CoreEngine']['Settings'][_0x1a3244(0x7d5)][_0x1a3244(0x2fa)],Scene_Save['prototype'][_0x1a3244(0x712)]=function(){const _0x39d26f=_0x1a3244;Scene_File[_0x39d26f(0x44d)][_0x39d26f(0x712)]['call'](this),this[_0x39d26f(0x924)]();},Scene_Save['prototype']['setCoreEngineUpdateWindowBg']=function(){const _0x383e76=_0x1a3244;this[_0x383e76(0x544)]&&this[_0x383e76(0x544)]['setBackgroundType'](Scene_Save[_0x383e76(0x7fa)][_0x383e76(0x94b)]),this[_0x383e76(0x811)]&&this[_0x383e76(0x811)][_0x383e76(0x849)](Scene_Save[_0x383e76(0x7fa)][_0x383e76(0x834)]);},Scene_Save[_0x1a3244(0x44d)]['helpWindowRect']=function(){const _0x5b3eb2=_0x1a3244;return Scene_Save['layoutSettings']['HelpRect'][_0x5b3eb2(0x38c)](this);},Scene_Save['prototype']['listWindowRect']=function(){const _0x136952=_0x1a3244;return Scene_Save[_0x136952(0x7fa)][_0x136952(0x69f)][_0x136952(0x38c)](this);},Scene_Load['layoutSettings']=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)]['MenuLayout'][_0x1a3244(0x63e)],Scene_Load[_0x1a3244(0x44d)]['create']=function(){const _0x4af0dd=_0x1a3244;Scene_File[_0x4af0dd(0x44d)][_0x4af0dd(0x712)]['call'](this),this[_0x4af0dd(0x924)]();},Scene_Load[_0x1a3244(0x44d)][_0x1a3244(0x924)]=function(){const _0x8f8159=_0x1a3244;this['_helpWindow']&&this['_helpWindow'][_0x8f8159(0x849)](Scene_Load[_0x8f8159(0x7fa)][_0x8f8159(0x94b)]),this[_0x8f8159(0x811)]&&this[_0x8f8159(0x811)]['setBackgroundType'](Scene_Load[_0x8f8159(0x7fa)]['ListBgType']);},Scene_Load[_0x1a3244(0x44d)][_0x1a3244(0x45e)]=function(){const _0x4c3391=_0x1a3244;return Scene_Load[_0x4c3391(0x7fa)]['HelpRect'][_0x4c3391(0x38c)](this);},Scene_Load[_0x1a3244(0x44d)]['listWindowRect']=function(){const _0x3866cc=_0x1a3244;return Scene_Load['layoutSettings'][_0x3866cc(0x69f)][_0x3866cc(0x38c)](this);};function _0x4d19(_0xf81ed,_0x350273){const _0x2f9720=_0x2f97();return _0x4d19=function(_0x4d1956,_0x5ed715){_0x4d1956=_0x4d1956-0x177;let _0x22c37b=_0x2f9720[_0x4d1956];return _0x22c37b;},_0x4d19(_0xf81ed,_0x350273);}function Scene_QuickLoad(){const _0x35bd80=_0x1a3244;this[_0x35bd80(0x292)](...arguments);}Scene_QuickLoad['prototype']=Object[_0x1a3244(0x712)](Scene_Load[_0x1a3244(0x44d)]),Scene_QuickLoad[_0x1a3244(0x44d)][_0x1a3244(0x561)]=Scene_QuickLoad,Scene_QuickLoad['prototype'][_0x1a3244(0x292)]=function(){const _0x16dbad=_0x1a3244;Scene_Load[_0x16dbad(0x44d)]['initialize'][_0x16dbad(0x38c)](this);},Scene_QuickLoad[_0x1a3244(0x44d)][_0x1a3244(0x712)]=function(){const _0x594a60=_0x1a3244;this[_0x594a60(0x4cd)](this[_0x594a60(0x7db)]);},Scene_QuickLoad[_0x1a3244(0x44d)][_0x1a3244(0x79f)]=function(_0x54e016){const _0x275b82=_0x1a3244;this[_0x275b82(0x7db)]=_0x54e016;},Scene_QuickLoad[_0x1a3244(0x44d)]['start']=function(){const _0x42b5d0=_0x1a3244;Scene_MenuBase[_0x42b5d0(0x44d)][_0x42b5d0(0x4f3)][_0x42b5d0(0x38c)](this);},Scene_GameEnd[_0x1a3244(0x7fa)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)]['MenuLayout'][_0x1a3244(0x4af)],VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x697)]=Scene_GameEnd['prototype'][_0x1a3244(0x7cc)],Scene_GameEnd[_0x1a3244(0x44d)][_0x1a3244(0x7cc)]=function(){const _0x5ec330=_0x1a3244;Scene_MenuBase[_0x5ec330(0x44d)][_0x5ec330(0x7cc)]['call'](this);},Scene_GameEnd[_0x1a3244(0x44d)][_0x1a3244(0x789)]=function(){const _0x3c2801=_0x1a3244,_0x2f54c6=this[_0x3c2801(0x6f1)]();this[_0x3c2801(0x4ed)]=new Window_GameEnd(_0x2f54c6),this['_commandWindow'][_0x3c2801(0x720)](_0x3c2801(0x83e),this[_0x3c2801(0x72c)][_0x3c2801(0x2e8)](this)),this[_0x3c2801(0x625)](this[_0x3c2801(0x4ed)]),this[_0x3c2801(0x4ed)][_0x3c2801(0x849)](Scene_GameEnd[_0x3c2801(0x7fa)]['CommandBgType']);},Scene_GameEnd[_0x1a3244(0x44d)][_0x1a3244(0x6f1)]=function(){const _0x3deb4f=_0x1a3244;return Scene_GameEnd['layoutSettings'][_0x3deb4f(0x386)][_0x3deb4f(0x38c)](this);},Scene_Shop[_0x1a3244(0x7fa)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x7d5)]['ShopMenu'],VisuMZ['CoreEngine'][_0x1a3244(0x497)]=Scene_Shop[_0x1a3244(0x44d)][_0x1a3244(0x712)],Scene_Shop[_0x1a3244(0x44d)][_0x1a3244(0x712)]=function(){const _0xd1a072=_0x1a3244;VisuMZ[_0xd1a072(0x38a)][_0xd1a072(0x497)]['call'](this),this[_0xd1a072(0x924)]();},Scene_Shop[_0x1a3244(0x44d)][_0x1a3244(0x924)]=function(){const _0x5d6858=_0x1a3244;this[_0x5d6858(0x544)]&&this[_0x5d6858(0x544)][_0x5d6858(0x849)](Scene_Shop['layoutSettings'][_0x5d6858(0x94b)]),this[_0x5d6858(0x3ee)]&&this['_goldWindow'][_0x5d6858(0x849)](Scene_Shop[_0x5d6858(0x7fa)][_0x5d6858(0x318)]),this['_commandWindow']&&this[_0x5d6858(0x4ed)][_0x5d6858(0x849)](Scene_Shop['layoutSettings'][_0x5d6858(0x73d)]),this[_0x5d6858(0x3bb)]&&this['_dummyWindow'][_0x5d6858(0x849)](Scene_Shop[_0x5d6858(0x7fa)]['DummyBgType']),this[_0x5d6858(0x388)]&&this[_0x5d6858(0x388)]['setBackgroundType'](Scene_Shop['layoutSettings'][_0x5d6858(0x42c)]),this['_statusWindow']&&this['_statusWindow'][_0x5d6858(0x849)](Scene_Shop[_0x5d6858(0x7fa)]['StatusBgType']),this[_0x5d6858(0x5c3)]&&this[_0x5d6858(0x5c3)][_0x5d6858(0x849)](Scene_Shop[_0x5d6858(0x7fa)][_0x5d6858(0x474)]),this[_0x5d6858(0x6eb)]&&this[_0x5d6858(0x6eb)][_0x5d6858(0x849)](Scene_Shop['layoutSettings'][_0x5d6858(0x3a5)]),this[_0x5d6858(0x230)]&&this[_0x5d6858(0x230)][_0x5d6858(0x849)](Scene_Shop[_0x5d6858(0x7fa)][_0x5d6858(0x565)]);},Scene_Shop[_0x1a3244(0x44d)]['helpWindowRect']=function(){return Scene_Shop['layoutSettings']['HelpRect']['call'](this);},Scene_Shop[_0x1a3244(0x44d)][_0x1a3244(0x8c4)]=function(){const _0x106090=_0x1a3244;return Scene_Shop['layoutSettings'][_0x106090(0x80c)]['call'](this);},Scene_Shop[_0x1a3244(0x44d)]['commandWindowRect']=function(){const _0x64ebea=_0x1a3244;return Scene_Shop[_0x64ebea(0x7fa)][_0x64ebea(0x386)][_0x64ebea(0x38c)](this);},Scene_Shop['prototype'][_0x1a3244(0x6ff)]=function(){const _0x2fb239=_0x1a3244;return Scene_Shop['layoutSettings'][_0x2fb239(0x1f9)][_0x2fb239(0x38c)](this);},Scene_Shop[_0x1a3244(0x44d)]['numberWindowRect']=function(){const _0x421895=_0x1a3244;return Scene_Shop[_0x421895(0x7fa)][_0x421895(0x257)][_0x421895(0x38c)](this);},Scene_Shop[_0x1a3244(0x44d)]['statusWindowRect']=function(){const _0x34c4cb=_0x1a3244;return Scene_Shop['layoutSettings']['StatusRect'][_0x34c4cb(0x38c)](this);},Scene_Shop[_0x1a3244(0x44d)]['buyWindowRect']=function(){const _0x2fd187=_0x1a3244;return Scene_Shop[_0x2fd187(0x7fa)][_0x2fd187(0x50f)][_0x2fd187(0x38c)](this);},Scene_Shop[_0x1a3244(0x44d)][_0x1a3244(0x179)]=function(){const _0x38440a=_0x1a3244;return Scene_Shop['layoutSettings'][_0x38440a(0x19e)][_0x38440a(0x38c)](this);},Scene_Shop[_0x1a3244(0x44d)][_0x1a3244(0x6f3)]=function(){const _0x5e016b=_0x1a3244;return Scene_Shop[_0x5e016b(0x7fa)][_0x5e016b(0x64d)][_0x5e016b(0x38c)](this);},Scene_Name[_0x1a3244(0x7fa)]=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x7d5)][_0x1a3244(0x19b)],VisuMZ['CoreEngine']['Scene_Name_create']=Scene_Name[_0x1a3244(0x44d)]['create'],Scene_Name['prototype'][_0x1a3244(0x712)]=function(){const _0x541719=_0x1a3244;VisuMZ[_0x541719(0x38a)]['Scene_Name_create']['call'](this),this[_0x541719(0x924)]();},Scene_Name[_0x1a3244(0x44d)][_0x1a3244(0x924)]=function(){const _0x288177=_0x1a3244;this[_0x288177(0x444)]&&this['_editWindow'][_0x288177(0x849)](Scene_Name[_0x288177(0x7fa)][_0x288177(0x75c)]),this[_0x288177(0x740)]&&this[_0x288177(0x740)][_0x288177(0x849)](Scene_Name[_0x288177(0x7fa)][_0x288177(0x599)]);},Scene_Name['prototype']['helpAreaHeight']=function(){return 0x0;},Scene_Name[_0x1a3244(0x44d)][_0x1a3244(0x1af)]=function(){const _0x5ab15a=_0x1a3244;return Scene_Name[_0x5ab15a(0x7fa)][_0x5ab15a(0x2e4)][_0x5ab15a(0x38c)](this);},Scene_Name[_0x1a3244(0x44d)][_0x1a3244(0x276)]=function(){const _0x4b11c6=_0x1a3244;return Scene_Name[_0x4b11c6(0x7fa)][_0x4b11c6(0x945)]['call'](this);},Scene_Name[_0x1a3244(0x44d)]['EnableNameInput']=function(){const _0x48e2e9=_0x1a3244;if(!this[_0x48e2e9(0x740)])return![];return VisuMZ[_0x48e2e9(0x38a)][_0x48e2e9(0x927)][_0x48e2e9(0x784)]['EnableNameInput'];},Scene_Name[_0x1a3244(0x44d)][_0x1a3244(0x4fb)]=function(){const _0x14b705=_0x1a3244;if(this['EnableNameInput']()&&this[_0x14b705(0x740)][_0x14b705(0x64b)]!==_0x14b705(0x194))return TextManager['getInputMultiButtonStrings']('pageup',_0x14b705(0x398));return Scene_MenuBase[_0x14b705(0x44d)][_0x14b705(0x4fb)]['call'](this);},Scene_Name['prototype'][_0x1a3244(0x2d1)]=function(){const _0xdcda61=_0x1a3244;return this[_0xdcda61(0x855)]()?TextManager[_0xdcda61(0x201)]('tab'):Scene_MenuBase[_0xdcda61(0x44d)]['buttonAssistKey3'][_0xdcda61(0x38c)](this);},Scene_Name['prototype'][_0x1a3244(0x6df)]=function(){const _0xbe32c6=_0x1a3244;if(this['EnableNameInput']()&&this[_0xbe32c6(0x740)]['_mode']===_0xbe32c6(0x194))return TextManager['makeInputButtonString'](['ENTER']);return Scene_MenuBase[_0xbe32c6(0x44d)]['buttonAssistKey4']['call'](this);},Scene_Name[_0x1a3244(0x44d)][_0x1a3244(0x450)]=function(){const _0x230bc3=_0x1a3244;if(this[_0x230bc3(0x855)]()&&this[_0x230bc3(0x740)]['_mode']===_0x230bc3(0x194))return TextManager['makeInputButtonString'](['BKSP']);return Scene_MenuBase['prototype'][_0x230bc3(0x450)]['call'](this);},Scene_Name[_0x1a3244(0x44d)]['buttonAssistText1']=function(){const _0x4851b8=_0x1a3244;if(this[_0x4851b8(0x855)]()&&this[_0x4851b8(0x740)][_0x4851b8(0x64b)]!==_0x4851b8(0x194)){const _0x5ee6f9=VisuMZ[_0x4851b8(0x38a)][_0x4851b8(0x927)][_0x4851b8(0x784)];return _0x5ee6f9[_0x4851b8(0x1b8)]||_0x4851b8(0x1a4);}return Scene_MenuBase['prototype'][_0x4851b8(0x3c1)]['call'](this);},Scene_Name[_0x1a3244(0x44d)][_0x1a3244(0x5bd)]=function(){const _0xf60d4=_0x1a3244;if(this[_0xf60d4(0x855)]()){const _0x57c428=VisuMZ[_0xf60d4(0x38a)][_0xf60d4(0x927)][_0xf60d4(0x784)];return this[_0xf60d4(0x740)][_0xf60d4(0x64b)]===_0xf60d4(0x194)?_0x57c428['Keyboard']||_0xf60d4(0x623):_0x57c428['Manual']||_0xf60d4(0x4b4);}else return Scene_MenuBase[_0xf60d4(0x44d)]['buttonAssistText3'][_0xf60d4(0x38c)](this);},Scene_Name[_0x1a3244(0x44d)][_0x1a3244(0x5ed)]=function(){const _0x5d50c8=_0x1a3244;if(this[_0x5d50c8(0x855)]()){const _0x279c59=VisuMZ[_0x5d50c8(0x38a)][_0x5d50c8(0x927)][_0x5d50c8(0x784)];if(this['_inputWindow'][_0x5d50c8(0x64b)]===_0x5d50c8(0x194))return _0x279c59[_0x5d50c8(0x591)]||_0x5d50c8(0x591);}return Scene_MenuBase[_0x5d50c8(0x44d)][_0x5d50c8(0x5ed)][_0x5d50c8(0x38c)](this);},VisuMZ[_0x1a3244(0x38a)]['Scene_Name_onInputOk']=Scene_Name['prototype'][_0x1a3244(0x3eb)],Scene_Name['prototype'][_0x1a3244(0x3eb)]=function(){const _0x47d3d9=_0x1a3244;this[_0x47d3d9(0x264)]()?this[_0x47d3d9(0x78a)]():VisuMZ['CoreEngine'][_0x47d3d9(0x348)][_0x47d3d9(0x38c)](this);},Scene_Name['prototype']['doesNameContainBannedWords']=function(){const _0x323bf4=_0x1a3244,_0x1987f9=VisuMZ[_0x323bf4(0x38a)][_0x323bf4(0x927)][_0x323bf4(0x784)];if(!_0x1987f9)return![];const _0x3d19c4=_0x1987f9[_0x323bf4(0x896)];if(!_0x3d19c4)return![];const _0x32219d=this[_0x323bf4(0x444)]['name']()['toLowerCase']();for(const _0x438f67 of _0x3d19c4){if(_0x32219d[_0x323bf4(0x56f)](_0x438f67[_0x323bf4(0x6ef)]()))return!![];}return![];},Scene_Name[_0x1a3244(0x44d)]['onInputBannedWords']=function(){const _0x2712d8=_0x1a3244;SoundManager[_0x2712d8(0x332)]();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x776)]=Scene_Battle[_0x1a3244(0x44d)]['update'],Scene_Battle[_0x1a3244(0x44d)][_0x1a3244(0x46a)]=function(){const _0x3c23e9=_0x1a3244;VisuMZ[_0x3c23e9(0x38a)][_0x3c23e9(0x776)]['call'](this);if($gameTemp[_0x3c23e9(0x377)])this[_0x3c23e9(0x51b)]();},Scene_Battle['prototype'][_0x1a3244(0x51b)]=function(){const _0x2eae4d=_0x1a3244;!BattleManager[_0x2eae4d(0x8af)]()&&!this[_0x2eae4d(0x71f)]&&!$gameMessage[_0x2eae4d(0x495)]()&&(this[_0x2eae4d(0x71f)]=!![],this['update'](),SceneManager['updateEffekseer'](),this[_0x2eae4d(0x71f)]=![]);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x8ae)]=Scene_Battle[_0x1a3244(0x44d)][_0x1a3244(0x678)],Scene_Battle[_0x1a3244(0x44d)][_0x1a3244(0x678)]=function(){const _0x4dc882=_0x1a3244;VisuMZ['CoreEngine'][_0x4dc882(0x8ae)][_0x4dc882(0x38c)](this),SceneManager[_0x4dc882(0x727)]()&&this[_0x4dc882(0x18e)]();},Scene_Battle[_0x1a3244(0x44d)][_0x1a3244(0x18e)]=function(){const _0x109429=_0x1a3244;this[_0x109429(0x199)]['x']=Graphics['boxWidth']+0x4,this['isBottomButtonMode']()?this[_0x109429(0x199)]['y']=Graphics[_0x109429(0x694)]-this[_0x109429(0x2db)]():this[_0x109429(0x199)]['y']=0x0;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x436)]=Sprite_Button[_0x1a3244(0x44d)][_0x1a3244(0x292)],Sprite_Button[_0x1a3244(0x44d)][_0x1a3244(0x292)]=function(_0x3fbff3){const _0x598c79=_0x1a3244;VisuMZ[_0x598c79(0x38a)][_0x598c79(0x436)]['call'](this,_0x3fbff3),this[_0x598c79(0x739)]();},Sprite_Button[_0x1a3244(0x44d)][_0x1a3244(0x739)]=function(){const _0x3366f9=_0x1a3244,_0x1ef177=VisuMZ[_0x3366f9(0x38a)][_0x3366f9(0x927)]['UI'];this[_0x3366f9(0x5fe)]=![];switch(this[_0x3366f9(0x7ec)]){case _0x3366f9(0x83e):this[_0x3366f9(0x5fe)]=!_0x1ef177[_0x3366f9(0x473)];break;case _0x3366f9(0x1f1):case _0x3366f9(0x398):this['_isButtonHidden']=!_0x1ef177[_0x3366f9(0x212)];break;case'down':case'up':case _0x3366f9(0x430):case _0x3366f9(0x3ae):case'ok':this[_0x3366f9(0x5fe)]=!_0x1ef177['numberShowButton'];break;case _0x3366f9(0x586):this[_0x3366f9(0x5fe)]=!_0x1ef177['menuShowButton'];break;}},VisuMZ['CoreEngine'][_0x1a3244(0x47a)]=Sprite_Button[_0x1a3244(0x44d)][_0x1a3244(0x291)],Sprite_Button[_0x1a3244(0x44d)]['updateOpacity']=function(){const _0x35fed2=_0x1a3244;SceneManager[_0x35fed2(0x40d)]()||this[_0x35fed2(0x5fe)]?this['hideButtonFromView']():VisuMZ[_0x35fed2(0x38a)][_0x35fed2(0x47a)][_0x35fed2(0x38c)](this);},Sprite_Button['prototype']['hideButtonFromView']=function(){const _0x49c464=_0x1a3244;this['visible']=![],this[_0x49c464(0x648)]=0x0,this['x']=Graphics[_0x49c464(0x397)]*0xa,this['y']=Graphics[_0x49c464(0x583)]*0xa;},VisuMZ['CoreEngine'][_0x1a3244(0x366)]=Sprite_Battler[_0x1a3244(0x44d)][_0x1a3244(0x2a7)],Sprite_Battler[_0x1a3244(0x44d)][_0x1a3244(0x2a7)]=function(_0xb8d465,_0x4ece05,_0x2fd3bc){const _0x4cae57=_0x1a3244;(this[_0x4cae57(0x4d0)]!==_0xb8d465||this[_0x4cae57(0x724)]!==_0x4ece05)&&(this[_0x4cae57(0x380)](_0x4cae57(0x846)),this[_0x4cae57(0x51a)]=_0x2fd3bc),VisuMZ['CoreEngine'][_0x4cae57(0x366)][_0x4cae57(0x38c)](this,_0xb8d465,_0x4ece05,_0x2fd3bc);},Sprite_Battler[_0x1a3244(0x44d)][_0x1a3244(0x380)]=function(_0x48f36c){const _0x5734bc=_0x1a3244;this[_0x5734bc(0x431)]=_0x48f36c;},Sprite_Battler[_0x1a3244(0x44d)]['updateMove']=function(){const _0x457c8e=_0x1a3244;if(this['_movementDuration']<=0x0)return;const _0x13acd9=this['_movementDuration'],_0x969b05=this[_0x457c8e(0x51a)],_0x59c53c=this[_0x457c8e(0x431)];this[_0x457c8e(0x40e)]=this[_0x457c8e(0x26e)](this[_0x457c8e(0x40e)],this['_targetOffsetX'],_0x13acd9,_0x969b05,_0x59c53c),this[_0x457c8e(0x7c9)]=this[_0x457c8e(0x26e)](this['_offsetY'],this[_0x457c8e(0x724)],_0x13acd9,_0x969b05,_0x59c53c),this[_0x457c8e(0x584)]--;if(this[_0x457c8e(0x584)]<=0x0)this['onMoveEnd']();},Sprite_Battler[_0x1a3244(0x44d)][_0x1a3244(0x26e)]=function(_0x3155fe,_0x5d5983,_0x1892d9,_0x582cc8,_0x246532){const _0x3a648a=_0x1a3244,_0x82005=VisuMZ[_0x3a648a(0x239)]((_0x582cc8-_0x1892d9)/_0x582cc8,_0x246532||_0x3a648a(0x846)),_0x38a94d=VisuMZ[_0x3a648a(0x239)]((_0x582cc8-_0x1892d9+0x1)/_0x582cc8,_0x246532||_0x3a648a(0x846)),_0x46db8f=(_0x3155fe-_0x5d5983*_0x82005)/(0x1-_0x82005);return _0x46db8f+(_0x5d5983-_0x46db8f)*_0x38a94d;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x24b)]=Sprite_Actor[_0x1a3244(0x44d)]['setActorHome'],Sprite_Actor['prototype'][_0x1a3244(0x413)]=function(_0x4d6972){const _0x468052=_0x1a3244;VisuMZ[_0x468052(0x38a)][_0x468052(0x927)]['UI'][_0x468052(0x882)]?this[_0x468052(0x2ba)](_0x4d6972):VisuMZ[_0x468052(0x38a)]['Sprite_Actor_setActorHome'][_0x468052(0x38c)](this,_0x4d6972);},Sprite_Actor[_0x1a3244(0x44d)][_0x1a3244(0x2ba)]=function(_0x15727d){const _0x9c9c32=_0x1a3244;let _0x272ec2=Math[_0x9c9c32(0x6e5)](Graphics['width']/0x2+0xc0);_0x272ec2-=Math[_0x9c9c32(0x312)]((Graphics[_0x9c9c32(0x397)]-Graphics[_0x9c9c32(0x7a7)])/0x2),_0x272ec2+=_0x15727d*0x20;let _0x3602d5=Graphics[_0x9c9c32(0x583)]-0xc8-$gameParty[_0x9c9c32(0x652)]()*0x30;_0x3602d5-=Math[_0x9c9c32(0x312)]((Graphics[_0x9c9c32(0x583)]-Graphics[_0x9c9c32(0x694)])/0x2),_0x3602d5+=_0x15727d*0x30,this[_0x9c9c32(0x756)](_0x272ec2,_0x3602d5);},Sprite_Actor[_0x1a3244(0x44d)][_0x1a3244(0x2ef)]=function(){const _0x2d6554=_0x1a3244;this[_0x2d6554(0x2a7)](0x4b0,0x0,0x78);},Sprite_Animation['prototype'][_0x1a3244(0x826)]=function(_0x5e4853){const _0x51f03f=_0x1a3244;this[_0x51f03f(0x1d5)]=_0x5e4853;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x189)]=Sprite_Animation[_0x1a3244(0x44d)][_0x1a3244(0x52b)],Sprite_Animation[_0x1a3244(0x44d)][_0x1a3244(0x52b)]=function(){const _0x188537=_0x1a3244;if(this['_muteSound'])return;VisuMZ['CoreEngine'][_0x188537(0x189)][_0x188537(0x38c)](this);},VisuMZ['CoreEngine'][_0x1a3244(0x624)]=Sprite_Animation[_0x1a3244(0x44d)][_0x1a3244(0x7c8)],Sprite_Animation[_0x1a3244(0x44d)][_0x1a3244(0x7c8)]=function(_0x91ed02){const _0x3f9389=_0x1a3244;this[_0x3f9389(0x2cc)]()?this[_0x3f9389(0x6c7)](_0x91ed02):VisuMZ[_0x3f9389(0x38a)][_0x3f9389(0x624)]['call'](this,_0x91ed02);},Sprite_Animation[_0x1a3244(0x44d)]['isAnimationOffsetXMirrored']=function(){const _0x119b58=_0x1a3244;if(!this['_animation'])return![];const _0x26edba=this[_0x119b58(0x5b9)][_0x119b58(0x17f)]||'';if(_0x26edba[_0x119b58(0x90f)](/<MIRROR OFFSET X>/i))return!![];if(_0x26edba[_0x119b58(0x90f)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ[_0x119b58(0x38a)][_0x119b58(0x927)]['QoL'][_0x119b58(0x785)];},Sprite_Animation['prototype']['setViewportCoreEngineFix']=function(_0x3013ed){const _0x4766b8=_0x1a3244,_0x55dc88=this[_0x4766b8(0x6ca)],_0x4d1f8a=this[_0x4766b8(0x6ca)],_0x49a7c1=this[_0x4766b8(0x5b9)]['offsetX']*(this['_mirror']?-0x1:0x1)-_0x55dc88/0x2,_0x257b8b=this['_animation']['offsetY']-_0x4d1f8a/0x2,_0x27b1a0=this[_0x4766b8(0x43c)](_0x3013ed);_0x3013ed['gl'][_0x4766b8(0x87a)](_0x49a7c1+_0x27b1a0['x'],_0x257b8b+_0x27b1a0['y'],_0x55dc88,_0x4d1f8a);},Sprite_Animation[_0x1a3244(0x44d)][_0x1a3244(0x856)]=function(_0x180ba3){const _0x509eab=_0x1a3244;if(_0x180ba3[_0x509eab(0x440)]){}const _0x3261ec=this[_0x509eab(0x5b9)][_0x509eab(0x17f)];let _0x2ba917=_0x180ba3[_0x509eab(0x583)]*_0x180ba3[_0x509eab(0x7a8)]['y'],_0x17db77=0x0,_0x5d640a=-_0x2ba917/0x2;if(_0x3261ec[_0x509eab(0x90f)](/<(?:HEAD|HEADER|TOP)>/i))_0x5d640a=-_0x2ba917;if(_0x3261ec['match'](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x5d640a=0x0;if(this[_0x509eab(0x5b9)][_0x509eab(0x7ac)])_0x5d640a=0x0;if(_0x3261ec[_0x509eab(0x90f)](/<(?:LEFT)>/i))_0x17db77=-_0x180ba3['width']/0x2;if(_0x3261ec['match'](/<(?:RIGHT)>/i))_0x17db77=_0x180ba3[_0x509eab(0x397)]/0x2;_0x3261ec[_0x509eab(0x90f)](/<ANCHOR X:[ ](\d+\.?\d*)>/i)&&(_0x17db77=Number(RegExp['$1'])*_0x180ba3['width']);_0x3261ec[_0x509eab(0x90f)](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x5d640a=(0x1-Number(RegExp['$1']))*-_0x2ba917);_0x3261ec[_0x509eab(0x90f)](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x17db77=Number(RegExp['$1'])*_0x180ba3['width'],_0x5d640a=(0x1-Number(RegExp['$2']))*-_0x2ba917);if(_0x3261ec['match'](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x17db77+=Number(RegExp['$1']);if(_0x3261ec['match'](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x5d640a+=Number(RegExp['$1']);_0x3261ec[_0x509eab(0x90f)](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x17db77+=Number(RegExp['$1']),_0x5d640a+=Number(RegExp['$2']));const _0x2f65a8=new Point(_0x17db77,_0x5d640a);return _0x180ba3[_0x509eab(0x301)](),_0x180ba3[_0x509eab(0x592)][_0x509eab(0x503)](_0x2f65a8);},Sprite_AnimationMV[_0x1a3244(0x44d)][_0x1a3244(0x2a2)]=function(){const _0x26d518=_0x1a3244;this[_0x26d518(0x188)]=VisuMZ[_0x26d518(0x38a)]['Settings'][_0x26d518(0x83d)][_0x26d518(0x3de)]??0x4,this[_0x26d518(0x656)](),this[_0x26d518(0x188)]=this[_0x26d518(0x188)][_0x26d518(0x277)](0x1,0xa);},Sprite_AnimationMV[_0x1a3244(0x44d)][_0x1a3244(0x656)]=function(){const _0x3ec532=_0x1a3244;if(!this['_animation']);const _0x1eb8ad=this['_animation'][_0x3ec532(0x17f)]||'';_0x1eb8ad[_0x3ec532(0x90f)](/<RATE:[ ](\d+)>/i)&&(this['_rate']=(Number(RegExp['$1'])||0x1)[_0x3ec532(0x277)](0x1,0xa));},Sprite_AnimationMV[_0x1a3244(0x44d)]['setMute']=function(_0x4b419e){this['_muteSound']=_0x4b419e;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x2d5)]=Sprite_AnimationMV[_0x1a3244(0x44d)][_0x1a3244(0x751)],Sprite_AnimationMV[_0x1a3244(0x44d)][_0x1a3244(0x751)]=function(_0x234b15){const _0x61a728=_0x1a3244;this[_0x61a728(0x1d5)]&&(_0x234b15=JsonEx[_0x61a728(0x28b)](_0x234b15),_0x234b15['se']&&(_0x234b15['se'][_0x61a728(0x894)]=0x0)),VisuMZ[_0x61a728(0x38a)][_0x61a728(0x2d5)][_0x61a728(0x38c)](this,_0x234b15);},VisuMZ['CoreEngine']['Sprite_AnimationMV_updatePosition']=Sprite_AnimationMV['prototype'][_0x1a3244(0x498)],Sprite_AnimationMV[_0x1a3244(0x44d)][_0x1a3244(0x498)]=function(){const _0x3ebbcd=_0x1a3244;VisuMZ['CoreEngine'][_0x3ebbcd(0x66c)][_0x3ebbcd(0x38c)](this);if(this['_animation']['position']===0x3){if(this['x']===0x0)this['x']=Math['round'](Graphics[_0x3ebbcd(0x397)]/0x2);if(this['y']===0x0)this['y']=Math['round'](Graphics[_0x3ebbcd(0x583)]/0x2);}},Sprite_Damage[_0x1a3244(0x44d)]['createDigits']=function(_0x152e6c){const _0x287651=_0x1a3244;let _0x157fe5=Math[_0x287651(0x298)](_0x152e6c)[_0x287651(0x6ee)]();this[_0x287651(0x502)]()&&(_0x157fe5=VisuMZ[_0x287651(0x65d)](_0x157fe5));const _0x3f7e55=this['fontSize'](),_0x161cda=Math[_0x287651(0x312)](_0x3f7e55*0.75);for(let _0x42a451=0x0;_0x42a451<_0x157fe5[_0x287651(0x753)];_0x42a451++){const _0x5880a1=this[_0x287651(0x250)](_0x161cda,_0x3f7e55);_0x5880a1[_0x287651(0x3f5)]['drawText'](_0x157fe5[_0x42a451],0x0,0x0,_0x161cda,_0x3f7e55,_0x287651(0x37f)),_0x5880a1['x']=(_0x42a451-(_0x157fe5[_0x287651(0x753)]-0x1)/0x2)*_0x161cda,_0x5880a1['dy']=-_0x42a451;}},Sprite_Damage[_0x1a3244(0x44d)][_0x1a3244(0x502)]=function(){const _0x1c3887=_0x1a3244;return VisuMZ[_0x1c3887(0x38a)][_0x1c3887(0x927)][_0x1c3887(0x83d)]['DigitGroupingDamageSprites'];},Sprite_Damage[_0x1a3244(0x44d)][_0x1a3244(0x6d9)]=function(){const _0x3cf6fd=_0x1a3244;return ColorManager[_0x3cf6fd(0x476)]();},VisuMZ[_0x1a3244(0x38a)]['Sprite_Gauge_gaugeRate']=Sprite_Gauge[_0x1a3244(0x44d)][_0x1a3244(0x750)],Sprite_Gauge['prototype'][_0x1a3244(0x750)]=function(){const _0x35f745=_0x1a3244;return VisuMZ['CoreEngine'][_0x35f745(0x838)][_0x35f745(0x38c)](this)[_0x35f745(0x277)](0x0,0x1);},VisuMZ[_0x1a3244(0x38a)]['Sprite_Gauge_currentValue']=Sprite_Gauge['prototype'][_0x1a3244(0x49c)],Sprite_Gauge[_0x1a3244(0x44d)][_0x1a3244(0x49c)]=function(){const _0x5713af=_0x1a3244;let _0x52b169=VisuMZ[_0x5713af(0x38a)][_0x5713af(0x1c9)]['call'](this);return _0x52b169;},Sprite_Gauge[_0x1a3244(0x44d)][_0x1a3244(0x432)]=function(){const _0x31b998=_0x1a3244;let _0x2211a0=this[_0x31b998(0x49c)]();this[_0x31b998(0x502)]()&&(_0x2211a0=VisuMZ['GroupDigits'](_0x2211a0));const _0x377447=this[_0x31b998(0x49d)]()-0x1,_0x588789=this[_0x31b998(0x393)]?this['textHeight']():this[_0x31b998(0x938)]();this[_0x31b998(0x3b3)](),this['bitmap'][_0x31b998(0x419)](_0x2211a0,0x0,0x0,_0x377447,_0x588789,_0x31b998(0x60d));},Sprite_Gauge[_0x1a3244(0x44d)][_0x1a3244(0x7f3)]=function(){return 0x3;},Sprite_Gauge['prototype']['useDigitGrouping']=function(){const _0x4c2ad7=_0x1a3244;return VisuMZ[_0x4c2ad7(0x38a)]['Settings'][_0x4c2ad7(0x83d)][_0x4c2ad7(0x202)];},Sprite_Gauge[_0x1a3244(0x44d)][_0x1a3244(0x6d9)]=function(){return ColorManager['outlineColorGauge']();},Sprite_StateIcon['NON_FRAME']=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)]['UI']['StateIconsNonFrame']??!![],VisuMZ['CoreEngine'][_0x1a3244(0x75b)]=Sprite_StateIcon['prototype'][_0x1a3244(0x248)],Sprite_StateIcon[_0x1a3244(0x44d)][_0x1a3244(0x248)]=function(){const _0x45a90a=_0x1a3244;Sprite_StateIcon['NON_FRAME']?this[_0x45a90a(0x859)]():VisuMZ[_0x45a90a(0x38a)]['Sprite_StateIcon_loadBitmap'][_0x45a90a(0x38c)](this);},Sprite_StateIcon[_0x1a3244(0x44d)][_0x1a3244(0x859)]=function(){const _0x4bf706=_0x1a3244;this[_0x4bf706(0x3f5)]=new Bitmap(ImageManager[_0x4bf706(0x24a)],ImageManager[_0x4bf706(0x227)]),this[_0x4bf706(0x7d0)]=ImageManager[_0x4bf706(0x48d)](_0x4bf706(0x243));},VisuMZ['CoreEngine'][_0x1a3244(0x7df)]=Sprite_StateIcon[_0x1a3244(0x44d)]['updateFrame'],Sprite_StateIcon['prototype'][_0x1a3244(0x691)]=function(){const _0x185614=_0x1a3244;Sprite_StateIcon[_0x185614(0x2da)]?this[_0x185614(0x283)]():VisuMZ[_0x185614(0x38a)][_0x185614(0x7df)]['call'](this);},Sprite_StateIcon['prototype']['updateFrameCoreEngine']=function(){const _0x2c6dd8=_0x1a3244;if(this['_lastIconIndex']===this[_0x2c6dd8(0x4c1)])return;this[_0x2c6dd8(0x19a)]=this['_iconIndex'];const _0x2ec1a2=ImageManager[_0x2c6dd8(0x24a)],_0x4cb235=ImageManager['iconHeight'],_0x77ce31=this[_0x2c6dd8(0x4c1)]%0x10*_0x2ec1a2,_0x32914f=Math['floor'](this[_0x2c6dd8(0x4c1)]/0x10)*_0x4cb235,_0x132ef0=this[_0x2c6dd8(0x7d0)],_0xf48e1f=this[_0x2c6dd8(0x3f5)];_0xf48e1f['clear'](),_0xf48e1f[_0x2c6dd8(0x5a0)](_0x132ef0,_0x77ce31,_0x32914f,_0x2ec1a2,_0x4cb235,0x0,0x0,_0xf48e1f[_0x2c6dd8(0x397)],_0xf48e1f[_0x2c6dd8(0x583)]);},VisuMZ[_0x1a3244(0x38a)]['Sprite_Picture_loadBitmap']=Sprite_Picture[_0x1a3244(0x44d)][_0x1a3244(0x248)],Sprite_Picture[_0x1a3244(0x44d)]['loadBitmap']=function(){const _0x1f02de=_0x1a3244;this[_0x1f02de(0x3e9)]&&this['_pictureName'][_0x1f02de(0x90f)](/VisuMZ CoreEngine PictureIcon (\d+)/i)?this[_0x1f02de(0x5e8)](Number(RegExp['$1'])):VisuMZ[_0x1f02de(0x38a)]['Sprite_Picture_loadBitmap'][_0x1f02de(0x38c)](this);},Sprite_Picture[_0x1a3244(0x44d)]['loadIconBitmap']=function(_0x1dcc7b){const _0x14aca0=_0x1a3244,_0x4f29ca=ImageManager[_0x14aca0(0x24a)],_0x5e401a=ImageManager[_0x14aca0(0x227)],_0x24b842=this[_0x14aca0(0x3e9)][_0x14aca0(0x90f)](/SMOOTH/i);this[_0x14aca0(0x3f5)]=new Bitmap(_0x4f29ca,_0x5e401a);const _0x18135e=ImageManager[_0x14aca0(0x48d)]('IconSet'),_0x27ae5c=_0x1dcc7b%0x10*_0x4f29ca,_0x2ed121=Math[_0x14aca0(0x312)](_0x1dcc7b/0x10)*_0x5e401a;this[_0x14aca0(0x3f5)][_0x14aca0(0x2ac)]=_0x24b842,this['bitmap'][_0x14aca0(0x5a0)](_0x18135e,_0x27ae5c,_0x2ed121,_0x4f29ca,_0x5e401a,0x0,0x0,_0x4f29ca,_0x5e401a);};function Sprite_TitlePictureButton(){const _0x144327=_0x1a3244;this[_0x144327(0x292)](...arguments);}Sprite_TitlePictureButton['prototype']=Object[_0x1a3244(0x712)](Sprite_Clickable[_0x1a3244(0x44d)]),Sprite_TitlePictureButton['prototype'][_0x1a3244(0x561)]=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x1a3244(0x44d)][_0x1a3244(0x292)]=function(_0x1473a5){const _0x160882=_0x1a3244;Sprite_Clickable[_0x160882(0x44d)][_0x160882(0x292)]['call'](this),this[_0x160882(0x59c)]=_0x1473a5,this[_0x160882(0x46d)]=null,this[_0x160882(0x31f)]();},Sprite_TitlePictureButton[_0x1a3244(0x44d)][_0x1a3244(0x31f)]=function(){const _0x42b5e0=_0x1a3244;this['x']=Graphics['width'],this['y']=Graphics[_0x42b5e0(0x583)],this[_0x42b5e0(0x8fc)]=![],this['setupButtonImage']();},Sprite_TitlePictureButton['prototype'][_0x1a3244(0x8d9)]=function(){const _0x4bc194=_0x1a3244;this[_0x4bc194(0x3f5)]=ImageManager['loadPicture'](this[_0x4bc194(0x59c)]['PictureFilename']),this[_0x4bc194(0x3f5)]['addLoadListener'](this[_0x4bc194(0x8b7)]['bind'](this));},Sprite_TitlePictureButton[_0x1a3244(0x44d)][_0x1a3244(0x8b7)]=function(){const _0x580cc9=_0x1a3244;this[_0x580cc9(0x59c)]['OnLoadJS'][_0x580cc9(0x38c)](this),this[_0x580cc9(0x59c)][_0x580cc9(0x1d9)]['call'](this),this['setClickHandler'](this[_0x580cc9(0x59c)]['CallHandlerJS'][_0x580cc9(0x2e8)](this));},Sprite_TitlePictureButton['prototype'][_0x1a3244(0x46a)]=function(){const _0x29c81a=_0x1a3244;Sprite_Clickable[_0x29c81a(0x44d)][_0x29c81a(0x46a)]['call'](this),this[_0x29c81a(0x291)](),this[_0x29c81a(0x6a5)]();},Sprite_TitlePictureButton[_0x1a3244(0x44d)][_0x1a3244(0x468)]=function(){const _0x2d1ae2=_0x1a3244;return VisuMZ[_0x2d1ae2(0x38a)]['Settings']['MenuLayout']['Title'][_0x2d1ae2(0x74f)];},Sprite_TitlePictureButton[_0x1a3244(0x44d)][_0x1a3244(0x291)]=function(){const _0x35eb09=_0x1a3244;this[_0x35eb09(0x8d6)]||this['_hovered']?this[_0x35eb09(0x648)]=0xff:(this['opacity']+=this[_0x35eb09(0x8fc)]?this[_0x35eb09(0x468)]():-0x1*this['fadeSpeed'](),this[_0x35eb09(0x648)]=Math[_0x35eb09(0x3d0)](0xc0,this[_0x35eb09(0x648)]));},Sprite_TitlePictureButton['prototype']['setClickHandler']=function(_0x25ba06){const _0x2d12ef=_0x1a3244;this[_0x2d12ef(0x46d)]=_0x25ba06;},Sprite_TitlePictureButton[_0x1a3244(0x44d)][_0x1a3244(0x61f)]=function(){const _0x483e95=_0x1a3244;this['_clickHandler']&&this[_0x483e95(0x46d)]();};function Sprite_ExtendedTile(){const _0xe4371b=_0x1a3244;this[_0xe4371b(0x292)](...arguments);}Sprite_ExtendedTile['prototype']=Object[_0x1a3244(0x712)](Sprite['prototype']),Sprite_ExtendedTile[_0x1a3244(0x44d)][_0x1a3244(0x561)]=Sprite_ExtendedTile,Sprite_ExtendedTile[_0x1a3244(0x44d)][_0x1a3244(0x292)]=function(_0x43342a,_0x2fc3e3,_0x11b3af,_0x5ea480){const _0x32ba8e=_0x1a3244;this['_shiftY']=Game_CharacterBase[_0x32ba8e(0x326)]||-0x6,this[_0x32ba8e(0x588)]=_0x43342a,this[_0x32ba8e(0x32b)]=_0x2fc3e3,this[_0x32ba8e(0x59b)]=_0x11b3af,this[_0x32ba8e(0x627)]=_0x5ea480,Sprite[_0x32ba8e(0x44d)]['initialize']['call'](this),this[_0x32ba8e(0x34d)](),this[_0x32ba8e(0x93b)](),this['setTileFrame'](),this['update']();},Sprite_ExtendedTile[_0x1a3244(0x44d)]['createSubSprite']=function(){const _0x14601c=_0x1a3244;this[_0x14601c(0x66f)]=new Sprite(),this[_0x14601c(0x66f)][_0x14601c(0x7ad)]['x']=0.5,this['_tileSprite'][_0x14601c(0x7ad)]['y']=0x1,this[_0x14601c(0x66f)]['y']=-this[_0x14601c(0x22a)]+0x1,this[_0x14601c(0x658)](this[_0x14601c(0x66f)]);},Sprite_ExtendedTile['prototype'][_0x1a3244(0x93b)]=function(){const _0x114a0d=_0x1a3244,_0x43cbe0=$gameMap['tileset'](),_0x2b9415=0x5+Math['floor'](this['_tile']/0x100);this[_0x114a0d(0x66f)][_0x114a0d(0x3f5)]=ImageManager[_0x114a0d(0x531)](_0x43cbe0['tilesetNames'][_0x2b9415]);},Sprite_ExtendedTile[_0x1a3244(0x44d)][_0x1a3244(0x5d7)]=function(){const _0x3449a9=_0x1a3244,_0xa7eff4=this['_tile'],_0x3efa23=$gameMap[_0x3449a9(0x895)](),_0x1cb299=$gameMap[_0x3449a9(0x910)](),_0x154a89=(Math[_0x3449a9(0x312)](_0xa7eff4/0x80)%0x2*0x8+_0xa7eff4%0x8)*_0x3efa23,_0x4356e0=Math[_0x3449a9(0x312)](_0xa7eff4%0x100/0x8)%0x10*_0x1cb299,_0x3a095d=this[_0x3449a9(0x627)]*_0x1cb299;this[_0x3449a9(0x66f)][_0x3449a9(0x66e)](_0x154a89,_0x4356e0-_0x3a095d,_0x3efa23,_0x1cb299+_0x3a095d);},Sprite_ExtendedTile[_0x1a3244(0x44d)]['update']=function(){const _0x3a5555=_0x1a3244;Sprite['prototype']['update'][_0x3a5555(0x38c)](this),this[_0x3a5555(0x498)]();},Sprite_ExtendedTile[_0x1a3244(0x44d)][_0x1a3244(0x498)]=function(){const _0x4fea57=_0x1a3244,_0x4e9495=$gameMap['tileWidth'](),_0x33e1c6=$gameMap[_0x4fea57(0x910)](),_0x2d63aa=this[_0x4fea57(0x588)],_0x5af981=this[_0x4fea57(0x32b)];this['x']=Math[_0x4fea57(0x312)](($gameMap[_0x4fea57(0x2d9)](_0x2d63aa)+0.5)*_0x4e9495),this['y']=Math['floor'](($gameMap[_0x4fea57(0x578)](_0x5af981)+0x1)*_0x33e1c6)+this['_shiftY']-0x1;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x7f7)]=Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x292)],Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x292)]=function(){const _0x2fe671=_0x1a3244;VisuMZ[_0x2fe671(0x38a)][_0x2fe671(0x7f7)]['call'](this),this[_0x2fe671(0x37d)]();},Spriteset_Base['prototype'][_0x1a3244(0x37d)]=function(){const _0x3f9fbb=_0x1a3244;this['_fauxAnimationSprites']=[],this[_0x3f9fbb(0x207)]=[],this[_0x3f9fbb(0x288)]=this[_0x3f9fbb(0x7a8)]['x'],this[_0x3f9fbb(0x6c5)]=this[_0x3f9fbb(0x7a8)]['y'];},VisuMZ['CoreEngine'][_0x1a3244(0x328)]=Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x44c)],Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x44c)]=function(_0x4224b0){const _0xe03cd=_0x1a3244;this['removeAllFauxAnimations'](),this[_0xe03cd(0x507)](),VisuMZ[_0xe03cd(0x38a)][_0xe03cd(0x328)]['call'](this,_0x4224b0);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x85c)]=Spriteset_Base['prototype']['update'],Spriteset_Base['prototype']['update']=function(){const _0x517c67=_0x1a3244;VisuMZ[_0x517c67(0x38a)][_0x517c67(0x85c)][_0x517c67(0x38c)](this),this['updatePictureSettings'](),this[_0x517c67(0x35a)](),this[_0x517c67(0x4d2)](),this['updatePointAnimations']();},Spriteset_Base[_0x1a3244(0x44d)]['updatePictureSettings']=function(){},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x35a)]=function(){const _0x45f82b=_0x1a3244;if(!VisuMZ[_0x45f82b(0x38a)][_0x45f82b(0x927)][_0x45f82b(0x83d)][_0x45f82b(0x8eb)])return;if(this[_0x45f82b(0x288)]===this[_0x45f82b(0x7a8)]['x']&&this['_cacheScaleY']===this[_0x45f82b(0x7a8)]['y'])return;this[_0x45f82b(0x488)](),this[_0x45f82b(0x288)]=this['scale']['x'],this['_cacheScaleY']=this[_0x45f82b(0x7a8)]['y'];},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x488)]=function(){const _0x505f53=_0x1a3244;if(SceneManager[_0x505f53(0x7ee)]()&&Spriteset_Map[_0x505f53(0x805)])return;else{if(SceneManager['isSceneBattle']()&&Spriteset_Battle['DETACH_PICTURE_CONTAINER'])return;}this[_0x505f53(0x7a8)]['x']!==0x0&&(this[_0x505f53(0x369)]['scale']['x']=0x1/this[_0x505f53(0x7a8)]['x'],this[_0x505f53(0x369)]['x']=-(this['x']/this[_0x505f53(0x7a8)]['x'])),this[_0x505f53(0x7a8)]['y']!==0x0&&(this[_0x505f53(0x369)][_0x505f53(0x7a8)]['y']=0x1/this[_0x505f53(0x7a8)]['y'],this['_pictureContainer']['y']=-(this['y']/this[_0x505f53(0x7a8)]['y']));},VisuMZ['CoreEngine']['Spriteset_Base_updatePosition']=Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x498)],Spriteset_Base['prototype']['updatePosition']=function(){const _0x3f99f9=_0x1a3244;VisuMZ['CoreEngine'][_0x3f99f9(0x1e3)][_0x3f99f9(0x38c)](this),this[_0x3f99f9(0x4c9)]();},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x4c9)]=function(){const _0x2e4ee4=_0x1a3244;if(!$gameScreen)return;if($gameScreen[_0x2e4ee4(0x8d0)]<=0x0)return;this['x']-=Math[_0x2e4ee4(0x6e5)]($gameScreen['shake']());const _0x5c3723=$gameScreen['getCoreEngineScreenShakeStyle']();switch($gameScreen['getCoreEngineScreenShakeStyle']()){case'original':this[_0x2e4ee4(0x5b1)]();break;case _0x2e4ee4(0x57c):this[_0x2e4ee4(0x33d)]();break;case _0x2e4ee4(0x308):this[_0x2e4ee4(0x886)]();break;default:this[_0x2e4ee4(0x574)]();break;}},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x5b1)]=function(){const _0x55c3ca=_0x1a3244,_0x13fbf0=VisuMZ[_0x55c3ca(0x38a)][_0x55c3ca(0x927)][_0x55c3ca(0x782)];if(_0x13fbf0&&_0x13fbf0[_0x55c3ca(0x810)])return _0x13fbf0['originalJS']['call'](this);this['x']+=Math['round']($gameScreen[_0x55c3ca(0x696)]());},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x574)]=function(){const _0x2b81d5=_0x1a3244,_0x2e08a3=VisuMZ[_0x2b81d5(0x38a)][_0x2b81d5(0x927)][_0x2b81d5(0x782)];if(_0x2e08a3&&_0x2e08a3[_0x2b81d5(0x868)])return _0x2e08a3[_0x2b81d5(0x868)][_0x2b81d5(0x38c)](this);const _0x58cb67=$gameScreen['_shakePower']*0.75,_0x434284=$gameScreen['_shakeSpeed']*0.6,_0x50c102=$gameScreen[_0x2b81d5(0x8d0)];this['x']+=Math[_0x2b81d5(0x6e5)](Math[_0x2b81d5(0x2bb)](_0x58cb67)-Math[_0x2b81d5(0x2bb)](_0x434284))*(Math[_0x2b81d5(0x3d0)](_0x50c102,0x1e)*0.5),this['y']+=Math[_0x2b81d5(0x6e5)](Math['randomInt'](_0x58cb67)-Math[_0x2b81d5(0x2bb)](_0x434284))*(Math['min'](_0x50c102,0x1e)*0.5);},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x33d)]=function(){const _0x281dda=_0x1a3244,_0xc03efc=VisuMZ['CoreEngine'][_0x281dda(0x927)][_0x281dda(0x782)];if(_0xc03efc&&_0xc03efc['horzJS'])return _0xc03efc[_0x281dda(0x663)][_0x281dda(0x38c)](this);const _0x4dfaca=$gameScreen[_0x281dda(0x3a7)]*0.75,_0x4e2193=$gameScreen[_0x281dda(0x36b)]*0.6,_0x558c07=$gameScreen[_0x281dda(0x8d0)];this['x']+=Math[_0x281dda(0x6e5)](Math[_0x281dda(0x2bb)](_0x4dfaca)-Math[_0x281dda(0x2bb)](_0x4e2193))*(Math['min'](_0x558c07,0x1e)*0.5);},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x886)]=function(){const _0x550574=_0x1a3244,_0x54c7d7=VisuMZ[_0x550574(0x38a)]['Settings'][_0x550574(0x782)];if(_0x54c7d7&&_0x54c7d7[_0x550574(0x7f2)])return _0x54c7d7[_0x550574(0x7f2)]['call'](this);const _0x589997=$gameScreen[_0x550574(0x3a7)]*0.75,_0x3684ce=$gameScreen[_0x550574(0x36b)]*0.6,_0x59bb78=$gameScreen[_0x550574(0x8d0)];this['y']+=Math[_0x550574(0x6e5)](Math[_0x550574(0x2bb)](_0x589997)-Math[_0x550574(0x2bb)](_0x3684ce))*(Math[_0x550574(0x3d0)](_0x59bb78,0x1e)*0.5);},Spriteset_Base['prototype'][_0x1a3244(0x4d2)]=function(){const _0x4f2fdb=_0x1a3244;for(const _0x16fc4a of this[_0x4f2fdb(0x511)]){!_0x16fc4a['isPlaying']()&&this[_0x4f2fdb(0x890)](_0x16fc4a);}this[_0x4f2fdb(0x181)]();},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x181)]=function(){const _0x28892e=_0x1a3244;for(;;){const _0x2700c5=$gameTemp['retrieveFauxAnimation']();if(_0x2700c5)this[_0x28892e(0x534)](_0x2700c5);else break;}},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x534)]=function(_0x117233){const _0x24920d=_0x1a3244,_0x353686=$dataAnimations[_0x117233[_0x24920d(0x77d)]],_0x6785d0=_0x117233[_0x24920d(0x85b)],_0x5a0f07=_0x117233[_0x24920d(0x477)],_0x5a6791=_0x117233[_0x24920d(0x82b)];let _0xe4632d=this['animationBaseDelay']();const _0x29b4e0=this['animationNextDelay']();if(this[_0x24920d(0x31e)](_0x353686))for(const _0x376a23 of _0x6785d0){this[_0x24920d(0x6f7)]([_0x376a23],_0x353686,_0x5a0f07,_0xe4632d,_0x5a6791),_0xe4632d+=_0x29b4e0;}else this[_0x24920d(0x6f7)](_0x6785d0,_0x353686,_0x5a0f07,_0xe4632d,_0x5a6791);},Spriteset_Base['prototype'][_0x1a3244(0x579)]=function(_0x2f601f,_0x553ba0,_0x514721,_0x142cc3){const _0x2d3535=_0x1a3244,_0x8a24aa=this['isMVAnimation'](_0x553ba0),_0x1a0df8=new(_0x8a24aa?Sprite_AnimationMV:Sprite_Animation)(),_0x1dd1d4=this[_0x2d3535(0x424)](_0x2f601f),_0x30db88=this['animationBaseDelay'](),_0x5e99ae=_0x142cc3>_0x30db88?this[_0x2d3535(0x866)]():null;this[_0x2d3535(0x35b)](_0x2f601f[0x0])&&(_0x514721=!_0x514721),_0x1a0df8[_0x2d3535(0x3e1)]=_0x2f601f,_0x1a0df8['setup'](_0x1dd1d4,_0x553ba0,_0x514721,_0x142cc3,_0x5e99ae),this['addAnimationSpriteToContainer'](_0x1a0df8),this['_animationSprites'][_0x2d3535(0x27f)](_0x1a0df8);},Spriteset_Base['prototype']['createFauxAnimationSprite']=function(_0x12ad68,_0x192d99,_0x453dc0,_0x32494a,_0x5b6ecd){const _0x28fe07=_0x1a3244,_0x53b31a=this[_0x28fe07(0x8e7)](_0x192d99),_0x5b516f=new(_0x53b31a?Sprite_AnimationMV:Sprite_Animation)(),_0x30ec22=this[_0x28fe07(0x424)](_0x12ad68);this[_0x28fe07(0x35b)](_0x12ad68[0x0])&&(_0x453dc0=!_0x453dc0);_0x5b516f[_0x28fe07(0x3e1)]=_0x12ad68,_0x5b516f['setup'](_0x30ec22,_0x192d99,_0x453dc0,_0x32494a),_0x5b516f[_0x28fe07(0x826)](_0x5b6ecd),this[_0x28fe07(0x219)](_0x5b516f);if(this['_animationSprites'])this[_0x28fe07(0x3f2)][_0x28fe07(0x6aa)](_0x5b516f);this['_fauxAnimationSprites'][_0x28fe07(0x27f)](_0x5b516f);},Spriteset_Base[_0x1a3244(0x44d)]['addAnimationSpriteToContainer']=function(_0x5d0100){const _0x41d2e0=_0x1a3244;this['_effectsContainer'][_0x41d2e0(0x658)](_0x5d0100);},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x59a)]=function(_0x2f6629){const _0x3f48f1=_0x1a3244;this['_animationSprites']['remove'](_0x2f6629),this[_0x3f48f1(0x47d)](_0x2f6629);for(const _0x286f96 of _0x2f6629[_0x3f48f1(0x3e1)]){_0x286f96['endAnimation']&&_0x286f96[_0x3f48f1(0x197)]();}_0x2f6629[_0x3f48f1(0x44c)]();},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x890)]=function(_0x504483){const _0x4c6482=_0x1a3244;this['_fauxAnimationSprites'][_0x4c6482(0x6aa)](_0x504483),this[_0x4c6482(0x47d)](_0x504483);for(const _0x404578 of _0x504483[_0x4c6482(0x3e1)]){_0x404578['endAnimation']&&_0x404578[_0x4c6482(0x197)]();}_0x504483[_0x4c6482(0x44c)]();},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x47d)]=function(_0xf2165){const _0x1a3060=_0x1a3244;this[_0x1a3060(0x7f9)][_0x1a3060(0x3c2)](_0xf2165);},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x783)]=function(){const _0x3bf01d=_0x1a3244;for(const _0x117af6 of this[_0x3bf01d(0x511)]){this[_0x3bf01d(0x890)](_0x117af6);}},Spriteset_Base['prototype'][_0x1a3244(0x1e1)]=function(){const _0x18f5c9=_0x1a3244;return this[_0x18f5c9(0x511)][_0x18f5c9(0x753)]>0x0;},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x262)]=function(){const _0x4d7ff5=_0x1a3244;for(const _0x59a710 of this[_0x4d7ff5(0x207)]){!_0x59a710[_0x4d7ff5(0x711)]()&&this['removePointAnimation'](_0x59a710);}this['processPointAnimationRequests']();},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x67d)]=function(){const _0x20f549=_0x1a3244;for(;;){const _0x233ec3=$gameTemp[_0x20f549(0x4df)]();if(_0x233ec3)this['createPointAnimation'](_0x233ec3);else break;}},Spriteset_Base[_0x1a3244(0x44d)]['createPointAnimation']=function(_0x284bff){const _0x43764b=_0x1a3244,_0x47e28e=$dataAnimations[_0x284bff[_0x43764b(0x77d)]],_0x54754c=this[_0x43764b(0x538)](_0x284bff),_0x2a4578=_0x284bff[_0x43764b(0x477)],_0x1c5761=_0x284bff[_0x43764b(0x82b)];let _0x2942c5=this[_0x43764b(0x457)]();const _0x3b5088=this[_0x43764b(0x7fc)]();if(this[_0x43764b(0x31e)](_0x47e28e))for(const _0x1eea94 of _0x54754c){this[_0x43764b(0x19f)]([_0x1eea94],_0x47e28e,_0x2a4578,_0x2942c5,_0x1c5761),_0x2942c5+=_0x3b5088;}else this['createPointAnimationSprite'](_0x54754c,_0x47e28e,_0x2a4578,_0x2942c5,_0x1c5761);},Spriteset_Base[_0x1a3244(0x44d)]['createPointAnimationTargets']=function(_0x13654d){const _0x4483f3=_0x1a3244,_0x3a04ee=new Sprite_Clickable(),_0x346652=this[_0x4483f3(0x341)]();_0x3a04ee['x']=_0x13654d['x']-_0x346652['x'],_0x3a04ee['y']=_0x13654d['y']-_0x346652['y'],_0x3a04ee['z']=0x64;const _0x2a7511=this[_0x4483f3(0x341)]();return _0x2a7511[_0x4483f3(0x658)](_0x3a04ee),[_0x3a04ee];},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x341)]=function(){return this;},Spriteset_Map[_0x1a3244(0x44d)][_0x1a3244(0x341)]=function(){return this['_tilemap']||this;},Spriteset_Battle[_0x1a3244(0x44d)][_0x1a3244(0x341)]=function(){const _0x4768c2=_0x1a3244;return this[_0x4768c2(0x5ef)]||this;},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x19f)]=function(_0x573a51,_0x272726,_0x176dd1,_0x510ebd,_0x2e3a12){const _0x22ab6f=_0x1a3244,_0x2eb132=this[_0x22ab6f(0x8e7)](_0x272726),_0x5db698=new(_0x2eb132?Sprite_AnimationMV:Sprite_Animation)();_0x5db698[_0x22ab6f(0x3e1)]=_0x573a51,_0x5db698[_0x22ab6f(0x31f)](_0x573a51,_0x272726,_0x176dd1,_0x510ebd),_0x5db698[_0x22ab6f(0x826)](_0x2e3a12),this['addAnimationSpriteToContainer'](_0x5db698),this[_0x22ab6f(0x207)][_0x22ab6f(0x27f)](_0x5db698);},Spriteset_Base['prototype'][_0x1a3244(0x261)]=function(_0x2dd8a8){const _0x49c788=_0x1a3244;this[_0x49c788(0x207)]['remove'](_0x2dd8a8),this[_0x49c788(0x7f9)][_0x49c788(0x3c2)](_0x2dd8a8);for(const _0x49b460 of _0x2dd8a8['targetObjects']){_0x49b460[_0x49c788(0x197)]&&_0x49b460[_0x49c788(0x197)]();const _0x2d1c4e=this['getPointAnimationLayer']();if(_0x2d1c4e)_0x2d1c4e[_0x49c788(0x3c2)](_0x49b460);}_0x2dd8a8[_0x49c788(0x44c)]();},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x507)]=function(){const _0x2d6a4e=_0x1a3244;for(const _0x11f5f0 of this[_0x2d6a4e(0x207)]){this[_0x2d6a4e(0x261)](_0x11f5f0);}},Spriteset_Base[_0x1a3244(0x44d)][_0x1a3244(0x537)]=function(){const _0x52a776=_0x1a3244;return this[_0x52a776(0x207)][_0x52a776(0x753)]>0x0;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x798)]=Spriteset_Base[_0x1a3244(0x44d)]['isAnimationPlaying'],Spriteset_Base['prototype'][_0x1a3244(0x29f)]=function(){const _0x142b15=_0x1a3244;return VisuMZ[_0x142b15(0x38a)][_0x142b15(0x798)][_0x142b15(0x38c)](this)||this[_0x142b15(0x537)]();},Spriteset_Map[_0x1a3244(0x805)]=VisuMZ['CoreEngine'][_0x1a3244(0x927)][_0x1a3244(0x83d)][_0x1a3244(0x1de)]||![],VisuMZ[_0x1a3244(0x38a)]['Scene_Map_createSpriteset_detach']=Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x35e)],Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x35e)]=function(){const _0x5d6510=_0x1a3244;VisuMZ[_0x5d6510(0x38a)][_0x5d6510(0x44a)][_0x5d6510(0x38c)](this);if(!Spriteset_Map[_0x5d6510(0x805)])return;const _0x39c7fa=this[_0x5d6510(0x245)];if(!_0x39c7fa)return;this[_0x5d6510(0x369)]=_0x39c7fa[_0x5d6510(0x369)];if(!this[_0x5d6510(0x369)])return;this[_0x5d6510(0x658)](this[_0x5d6510(0x369)]);},VisuMZ['CoreEngine'][_0x1a3244(0x340)]=Spriteset_Map[_0x1a3244(0x44d)][_0x1a3244(0x2b7)],Spriteset_Map[_0x1a3244(0x44d)]['createTilemap']=function(){const _0x40a474=_0x1a3244;VisuMZ['CoreEngine'][_0x40a474(0x340)][_0x40a474(0x38c)](this),this[_0x40a474(0x91e)]();},Spriteset_Map['prototype'][_0x1a3244(0x91e)]=function(){const _0xaf50f=_0x1a3244,_0x464ba4=$gameMap[_0xaf50f(0x8f2)]();if(!_0x464ba4)return;const _0x3e6b84=$gameMap[_0xaf50f(0x3e6)]();if(Object['keys'](_0x3e6b84)[_0xaf50f(0x753)]<=0x0)return;const _0x3fea32=$gameMap['tilesetFlags']();this[_0xaf50f(0x71e)]=this[_0xaf50f(0x71e)]||[];for(let _0x3fe922=0x0;_0x3fe922<$gameMap[_0xaf50f(0x583)]();_0x3fe922++){for(let _0x4637d3=0x0;_0x4637d3<$gameMap[_0xaf50f(0x397)]();_0x4637d3++){for(const _0x56e469 of $gameMap[_0xaf50f(0x195)](_0x4637d3,_0x3fe922)){const _0x160a92=_0x3fea32[_0x56e469]>>0xc,_0x574aac=_0x3e6b84[_0x160a92]||0x0;if(_0x574aac<=0x0)continue;this[_0xaf50f(0x5c9)](_0x4637d3,_0x3fe922,_0x56e469,_0x574aac);}}}},Spriteset_Map[_0x1a3244(0x44d)][_0x1a3244(0x725)]=function(){const _0x24cfd7=_0x1a3244;this[_0x24cfd7(0x71e)]=this['_tileExtendSprites']||[];for(const _0x1b430c of this[_0x24cfd7(0x71e)]){this[_0x24cfd7(0x346)][_0x24cfd7(0x3c2)](_0x1b430c);}this['_tileExtendSprites']=[];},Spriteset_Map[_0x1a3244(0x44d)]['createExtendedTileSprite']=function(_0x4d7f37,_0x30beb4,_0x22c2b2,_0x358245){const _0x2d7b93=_0x1a3244,_0x1ca17b=new Sprite_ExtendedTile(_0x4d7f37,_0x30beb4,_0x22c2b2,_0x358245),_0x33637d=$gameMap['tilesetFlags']();_0x33637d[_0x22c2b2]&0x10?_0x1ca17b['z']=0x4:_0x1ca17b['z']=0x3,this[_0x2d7b93(0x346)][_0x2d7b93(0x658)](_0x1ca17b),this['_tileExtendSprites'][_0x2d7b93(0x27f)](_0x1ca17b);},VisuMZ['CoreEngine'][_0x1a3244(0x820)]=Tilemap[_0x1a3244(0x44d)]['_addSpotTile'],Tilemap[_0x1a3244(0x44d)][_0x1a3244(0x295)]=function(_0xcc9410,_0x5159ae,_0x3a338b){const _0x5bc560=_0x1a3244;if($gameMap[_0x5bc560(0x6b2)](_0xcc9410))return;VisuMZ[_0x5bc560(0x38a)][_0x5bc560(0x820)][_0x5bc560(0x38c)](this,_0xcc9410,_0x5159ae,_0x3a338b);},Spriteset_Battle['DETACH_PICTURE_CONTAINER']=VisuMZ[_0x1a3244(0x38a)]['Settings']['QoL']['DetachBattlePictureContainer']||![],VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x325)]=Scene_Battle[_0x1a3244(0x44d)][_0x1a3244(0x35e)],Scene_Battle[_0x1a3244(0x44d)][_0x1a3244(0x35e)]=function(){const _0x1282e4=_0x1a3244;VisuMZ[_0x1282e4(0x38a)]['Scene_Battle_createSpriteset_detach'][_0x1282e4(0x38c)](this);if(!Spriteset_Battle[_0x1282e4(0x805)])return;const _0x402c7b=this[_0x1282e4(0x245)];if(!_0x402c7b)return;this['_pictureContainer']=_0x402c7b[_0x1282e4(0x369)];if(!this[_0x1282e4(0x369)])return;this[_0x1282e4(0x658)](this[_0x1282e4(0x369)]);},Spriteset_Battle[_0x1a3244(0x44d)][_0x1a3244(0x7cc)]=function(){const _0x33b6b9=_0x1a3244;this[_0x33b6b9(0x43f)]=new PIXI[(_0x33b6b9(0x564))][(_0x33b6b9(0x27c))](clamp=!![]),this[_0x33b6b9(0x731)]=new Sprite(),this['_backgroundSprite'][_0x33b6b9(0x3f5)]=SceneManager[_0x33b6b9(0x8fb)](),this[_0x33b6b9(0x731)][_0x33b6b9(0x564)]=[this[_0x33b6b9(0x43f)]],this['_baseSprite']['addChild'](this[_0x33b6b9(0x731)]);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x7fb)]=Spriteset_Battle[_0x1a3244(0x44d)][_0x1a3244(0x40a)],Spriteset_Battle['prototype']['createEnemies']=function(){const _0x3b04c2=_0x1a3244;this[_0x3b04c2(0x92c)]()&&this[_0x3b04c2(0x52f)](),VisuMZ['CoreEngine'][_0x3b04c2(0x7fb)][_0x3b04c2(0x38c)](this);},Spriteset_Battle['prototype'][_0x1a3244(0x92c)]=function(){const _0x4b8d53=_0x1a3244,_0x572823=VisuMZ['CoreEngine'][_0x4b8d53(0x927)]['ScreenResolution'];if(!_0x572823)return![];if(Utils[_0x4b8d53(0x5e3)]>=_0x4b8d53(0x500)&&!_0x572823[_0x4b8d53(0x56b)])return![];return _0x572823[_0x4b8d53(0x5fb)];},Spriteset_Battle[_0x1a3244(0x44d)][_0x1a3244(0x52f)]=function(){const _0x2ccfa2=_0x1a3244;for(member of $gameTroop['members']()){member[_0x2ccfa2(0x8e5)]();}},VisuMZ['CoreEngine'][_0x1a3244(0x3af)]=Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x292)],Window_Base['prototype'][_0x1a3244(0x292)]=function(_0x5c98dd){const _0x32a7d2=_0x1a3244;_0x5c98dd['x']=Math[_0x32a7d2(0x6e5)](_0x5c98dd['x']),_0x5c98dd['y']=Math[_0x32a7d2(0x6e5)](_0x5c98dd['y']),_0x5c98dd['width']=Math[_0x32a7d2(0x6e5)](_0x5c98dd[_0x32a7d2(0x397)]),_0x5c98dd['height']=Math['round'](_0x5c98dd[_0x32a7d2(0x583)]),this[_0x32a7d2(0x1a3)](),VisuMZ[_0x32a7d2(0x38a)][_0x32a7d2(0x3af)][_0x32a7d2(0x38c)](this,_0x5c98dd),this[_0x32a7d2(0x499)]();},Window_Base['prototype'][_0x1a3244(0x1a3)]=function(){const _0x451bbb=_0x1a3244;this[_0x451bbb(0x85a)]=VisuMZ[_0x451bbb(0x38a)][_0x451bbb(0x927)]['QoL'][_0x451bbb(0x89e)],this[_0x451bbb(0x238)]=VisuMZ[_0x451bbb(0x38a)][_0x451bbb(0x927)][_0x451bbb(0x83d)][_0x451bbb(0x1dd)];},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x55f)]=function(){const _0x1c074b=_0x1a3244;return VisuMZ[_0x1c074b(0x38a)][_0x1c074b(0x927)][_0x1c074b(0x919)][_0x1c074b(0x6d6)];},Window_Base['prototype'][_0x1a3244(0x39a)]=function(){const _0x4e49a9=_0x1a3244;return VisuMZ[_0x4e49a9(0x38a)]['Settings'][_0x4e49a9(0x919)]['ItemPadding'];},Window_Base['prototype'][_0x1a3244(0x48b)]=function(){const _0x1a5fae=_0x1a3244;$gameSystem[_0x1a5fae(0x435)]?this[_0x1a5fae(0x8d7)]=$gameSystem['windowOpacity']():this[_0x1a5fae(0x8d7)]=VisuMZ[_0x1a5fae(0x38a)][_0x1a5fae(0x927)]['Window'][_0x1a5fae(0x43e)];},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x233)]=function(){const _0x42850c=_0x1a3244;return VisuMZ[_0x42850c(0x38a)]['Settings'][_0x42850c(0x919)][_0x42850c(0x5dc)];},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x6fc)]=function(){const _0x1f164f=_0x1a3244;return VisuMZ[_0x1f164f(0x38a)][_0x1f164f(0x927)][_0x1f164f(0x919)]['OpenSpeed'];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x371)]=Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x46a)],Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x46a)]=function(){const _0x303ee7=_0x1a3244;VisuMZ[_0x303ee7(0x38a)][_0x303ee7(0x371)][_0x303ee7(0x38c)](this),this[_0x303ee7(0x442)]();},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x5da)]=function(){const _0x28234=_0x1a3244;this['_opening']&&(this[_0x28234(0x2e0)]+=this[_0x28234(0x6fc)](),this[_0x28234(0x1e0)]()&&(this['_opening']=![]));},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x5e6)]=function(){const _0x48e08c=_0x1a3244;this['_closing']&&(this['openness']-=this['openingSpeed'](),this[_0x48e08c(0x1b3)]()&&(this['_closing']=![]));},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x6cb)]=Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x419)],Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x419)]=function(_0x55bd6e,_0x2dbc78,_0xb4959a,_0x5cd50d,_0x40739a){const _0x476dbd=_0x1a3244;if(this['useDigitGrouping']())_0x55bd6e=VisuMZ[_0x476dbd(0x65d)](_0x55bd6e);VisuMZ[_0x476dbd(0x38a)][_0x476dbd(0x6cb)][_0x476dbd(0x38c)](this,_0x55bd6e,_0x2dbc78,_0xb4959a,_0x5cd50d,_0x40739a);},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x502)]=function(){const _0x5b3059=_0x1a3244;return this[_0x5b3059(0x85a)];},VisuMZ['CoreEngine'][_0x1a3244(0x82e)]=Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x917)],Window_Base[_0x1a3244(0x44d)]['createTextState']=function(_0x55fc73,_0x379d99,_0x4a7f6e,_0x2a4b54){const _0x3d78ad=_0x1a3244;var _0xe499c9=VisuMZ[_0x3d78ad(0x38a)]['Window_Base_createTextState'][_0x3d78ad(0x38c)](this,_0x55fc73,_0x379d99,_0x4a7f6e,_0x2a4b54);if(this['useDigitGroupingEx']())_0xe499c9[_0x3d78ad(0x6d1)]=String(VisuMZ['GroupDigits'](_0xe499c9['text']))||'';return _0xe499c9;},Window_Base['prototype'][_0x1a3244(0x429)]=function(){return this['_digitGroupingEx'];},Window_Base[_0x1a3244(0x44d)]['enableDigitGrouping']=function(_0x2de20c){this['_digitGrouping']=_0x2de20c;},Window_Base[_0x1a3244(0x44d)]['enableDigitGroupingEx']=function(_0x57f0a1){this['_digitGroupingEx']=_0x57f0a1;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x823)]=Window_Base['prototype'][_0x1a3244(0x70f)],Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x70f)]=function(_0xfefa2b,_0xdfda31,_0x4b9885){const _0x28e6fe=_0x1a3244;_0xdfda31=Math[_0x28e6fe(0x6e5)](_0xdfda31),_0x4b9885=Math[_0x28e6fe(0x6e5)](_0x4b9885),VisuMZ['CoreEngine'][_0x28e6fe(0x823)][_0x28e6fe(0x38c)](this,_0xfefa2b,_0xdfda31,_0x4b9885);},VisuMZ['CoreEngine']['Window_Base_drawFace']=Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x41e)],Window_Base[_0x1a3244(0x44d)]['drawFace']=function(_0x35a7f3,_0x1039a5,_0x308ed2,_0x1d4cfb,_0x4b16fb,_0x37f7b7){const _0x834414=_0x1a3244;_0x4b16fb=_0x4b16fb||ImageManager[_0x834414(0x420)],_0x37f7b7=_0x37f7b7||ImageManager[_0x834414(0x74d)],_0x308ed2=Math['round'](_0x308ed2),_0x1d4cfb=Math['round'](_0x1d4cfb),_0x4b16fb=Math[_0x834414(0x6e5)](_0x4b16fb),_0x37f7b7=Math[_0x834414(0x6e5)](_0x37f7b7),VisuMZ[_0x834414(0x38a)]['Window_Base_drawFace'][_0x834414(0x38c)](this,_0x35a7f3,_0x1039a5,_0x308ed2,_0x1d4cfb,_0x4b16fb,_0x37f7b7);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x290)]=Window_Base[_0x1a3244(0x44d)]['drawCharacter'],Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x6b3)]=function(_0x906766,_0x371c81,_0x43e513,_0x40a676){const _0x426313=_0x1a3244;_0x43e513=Math[_0x426313(0x6e5)](_0x43e513),_0x40a676=Math[_0x426313(0x6e5)](_0x40a676),VisuMZ['CoreEngine']['Window_Base_drawCharacter']['call'](this,_0x906766,_0x371c81,_0x43e513,_0x40a676);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x3ea)]=Window_Selectable[_0x1a3244(0x44d)]['itemRect'],Window_Selectable[_0x1a3244(0x44d)]['itemRect']=function(_0x3403da){const _0x5ad350=_0x1a3244;let _0x1050fb=VisuMZ[_0x5ad350(0x38a)][_0x5ad350(0x3ea)][_0x5ad350(0x38c)](this,_0x3403da);return _0x1050fb['x']=Math[_0x5ad350(0x6e5)](_0x1050fb['x']),_0x1050fb['y']=Math[_0x5ad350(0x6e5)](_0x1050fb['y']),_0x1050fb[_0x5ad350(0x397)]=Math['round'](_0x1050fb[_0x5ad350(0x397)]),_0x1050fb[_0x5ad350(0x583)]=Math['round'](_0x1050fb[_0x5ad350(0x583)]),_0x1050fb;},VisuMZ[_0x1a3244(0x38a)]['Window_StatusBase_drawActorSimpleStatus']=Window_StatusBase[_0x1a3244(0x44d)][_0x1a3244(0x73e)],Window_StatusBase['prototype'][_0x1a3244(0x73e)]=function(_0x2e14ee,_0x41dd26,_0x233a27){const _0x46c3d1=_0x1a3244;_0x41dd26=Math[_0x46c3d1(0x6e5)](_0x41dd26),_0x233a27=Math[_0x46c3d1(0x6e5)](_0x233a27),VisuMZ[_0x46c3d1(0x38a)][_0x46c3d1(0x684)][_0x46c3d1(0x38c)](this,_0x2e14ee,_0x41dd26,_0x233a27);},Window_Base[_0x1a3244(0x44d)]['initCoreEasing']=function(){const _0x82a0ea=_0x1a3244;this['_coreEasing']={'duration':0x0,'wholeDuration':0x0,'type':_0x82a0ea(0x759),'targetX':this['x'],'targetY':this['y'],'targetScaleX':this[_0x82a0ea(0x7a8)]['x'],'targetScaleY':this['scale']['y'],'targetOpacity':this[_0x82a0ea(0x648)],'targetBackOpacity':this[_0x82a0ea(0x8d7)],'targetContentsOpacity':this[_0x82a0ea(0x4d3)]};},Window_Base[_0x1a3244(0x44d)]['updateCoreEasing']=function(){const _0xb8e480=_0x1a3244;if(!this[_0xb8e480(0x4e6)])return;if(this[_0xb8e480(0x4e6)][_0xb8e480(0x6fa)]<=0x0)return;this['x']=this[_0xb8e480(0x2de)](this['x'],this[_0xb8e480(0x4e6)][_0xb8e480(0x479)]),this['y']=this[_0xb8e480(0x2de)](this['y'],this[_0xb8e480(0x4e6)][_0xb8e480(0x391)]),this[_0xb8e480(0x7a8)]['x']=this['applyCoreEasing'](this[_0xb8e480(0x7a8)]['x'],this[_0xb8e480(0x4e6)][_0xb8e480(0x83c)]),this[_0xb8e480(0x7a8)]['y']=this[_0xb8e480(0x2de)](this['scale']['y'],this[_0xb8e480(0x4e6)][_0xb8e480(0x408)]),this[_0xb8e480(0x648)]=this['applyCoreEasing'](this['opacity'],this[_0xb8e480(0x4e6)]['targetOpacity']),this[_0xb8e480(0x8d7)]=this['applyCoreEasing'](this['backOpacity'],this['_coreEasing'][_0xb8e480(0x433)]),this['contentsOpacity']=this['applyCoreEasing'](this['contentsOpacity'],this['_coreEasing'][_0xb8e480(0x8cd)]),this['_coreEasing']['duration']--;},Window_Base[_0x1a3244(0x44d)]['applyCoreEasing']=function(_0x4c9e06,_0x3e694f){const _0x534144=_0x1a3244;if(!this[_0x534144(0x4e6)])return _0x3e694f;const _0x39939b=this[_0x534144(0x4e6)][_0x534144(0x6fa)],_0x5dc41d=this[_0x534144(0x4e6)][_0x534144(0x804)],_0x12ed58=this['calcCoreEasing']((_0x5dc41d-_0x39939b)/_0x5dc41d),_0x5be38d=this[_0x534144(0x556)]((_0x5dc41d-_0x39939b+0x1)/_0x5dc41d),_0x30087b=(_0x4c9e06-_0x3e694f*_0x12ed58)/(0x1-_0x12ed58);return _0x30087b+(_0x3e694f-_0x30087b)*_0x5be38d;},Window_Base['prototype']['calcCoreEasing']=function(_0x2e4b1b){const _0x175952=_0x1a3244;if(!this[_0x175952(0x4e6)])return _0x2e4b1b;return VisuMZ[_0x175952(0x239)](_0x2e4b1b,this[_0x175952(0x4e6)][_0x175952(0x6b0)]||_0x175952(0x759));},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x1d3)]=function(_0x3e935c,_0x288b02){const _0xf2b67b=_0x1a3244;if(!this['_coreEasing'])return;this['x']=this[_0xf2b67b(0x4e6)][_0xf2b67b(0x479)],this['y']=this[_0xf2b67b(0x4e6)][_0xf2b67b(0x391)],this[_0xf2b67b(0x7a8)]['x']=this[_0xf2b67b(0x4e6)]['targetScaleX'],this[_0xf2b67b(0x7a8)]['y']=this[_0xf2b67b(0x4e6)][_0xf2b67b(0x408)],this['opacity']=this['_coreEasing']['targetOpacity'],this[_0xf2b67b(0x8d7)]=this[_0xf2b67b(0x4e6)]['targetBackOpacity'],this[_0xf2b67b(0x4d3)]=this[_0xf2b67b(0x4e6)][_0xf2b67b(0x8cd)],this[_0xf2b67b(0x615)](_0x3e935c,_0x288b02,this['x'],this['y'],this[_0xf2b67b(0x7a8)]['x'],this['scale']['y'],this[_0xf2b67b(0x648)],this['backOpacity'],this[_0xf2b67b(0x4d3)]);},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x615)]=function(_0x334a5f,_0x5f285f,_0x8b06d9,_0x3b2bf4,_0x3029ed,_0x261168,_0x465a5d,_0x4348e7,_0x16e3d4){this['_coreEasing']={'duration':_0x334a5f,'wholeDuration':_0x334a5f,'type':_0x5f285f,'targetX':_0x8b06d9,'targetY':_0x3b2bf4,'targetScaleX':_0x3029ed,'targetScaleY':_0x261168,'targetOpacity':_0x465a5d,'targetBackOpacity':_0x4348e7,'targetContentsOpacity':_0x16e3d4};},Window_Base[_0x1a3244(0x44d)]['drawCurrencyValue']=function(_0x3f0400,_0x23c6f9,_0x4a8ece,_0x4aa0e3,_0x39195c){const _0x52492e=_0x1a3244;this[_0x52492e(0x1e9)](),this[_0x52492e(0x30c)][_0x52492e(0x699)]=VisuMZ[_0x52492e(0x38a)][_0x52492e(0x927)]['Gold'][_0x52492e(0x53d)];const _0x1b0e2e=VisuMZ[_0x52492e(0x38a)][_0x52492e(0x927)][_0x52492e(0x82c)][_0x52492e(0x814)];if(_0x1b0e2e>0x0&&_0x23c6f9===TextManager[_0x52492e(0x76f)]){const _0x2a2066=_0x4aa0e3+(this[_0x52492e(0x55f)]()-ImageManager[_0x52492e(0x227)])/0x2;this[_0x52492e(0x70f)](_0x1b0e2e,_0x4a8ece+(_0x39195c-ImageManager[_0x52492e(0x24a)]),_0x2a2066),_0x39195c-=ImageManager[_0x52492e(0x24a)]+0x4;}else this[_0x52492e(0x23d)](ColorManager[_0x52492e(0x7d7)]()),this[_0x52492e(0x419)](_0x23c6f9,_0x4a8ece,_0x4aa0e3,_0x39195c,_0x52492e(0x60d)),_0x39195c-=this['textWidth'](_0x23c6f9)+0x6;this[_0x52492e(0x1bc)]();const _0x331818=this[_0x52492e(0x73b)](this[_0x52492e(0x85a)]?VisuMZ[_0x52492e(0x65d)](_0x3f0400):_0x3f0400);_0x331818>_0x39195c?this[_0x52492e(0x419)](VisuMZ[_0x52492e(0x38a)][_0x52492e(0x927)]['Gold'][_0x52492e(0x333)],_0x4a8ece,_0x4aa0e3,_0x39195c,_0x52492e(0x60d)):this['drawText'](_0x3f0400,_0x4a8ece,_0x4aa0e3,_0x39195c,_0x52492e(0x60d)),this['resetFontSettings']();},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x6ed)]=function(_0x554955,_0x1c495a,_0x2710c4,_0x23dee2,_0x4eea74){const _0x4846f4=_0x1a3244,_0x3b2d66=ImageManager[_0x4846f4(0x48d)]('IconSet'),_0x317d63=ImageManager[_0x4846f4(0x24a)],_0x5e0435=ImageManager['iconHeight'],_0x54108b=_0x554955%0x10*_0x317d63,_0x4e9e68=Math['floor'](_0x554955/0x10)*_0x5e0435,_0x5c83b3=_0x23dee2,_0x5810ea=_0x23dee2;this[_0x4846f4(0x30c)][_0x4846f4(0x3ab)][_0x4846f4(0x465)]=_0x4eea74,this[_0x4846f4(0x30c)][_0x4846f4(0x5a0)](_0x3b2d66,_0x54108b,_0x4e9e68,_0x317d63,_0x5e0435,_0x1c495a,_0x2710c4,_0x5c83b3,_0x5810ea),this['contents'][_0x4846f4(0x3ab)][_0x4846f4(0x465)]=!![];},Window_Base[_0x1a3244(0x44d)]['drawGauge']=function(_0x405f4d,_0x3bb072,_0x51181f,_0x3b6e4f,_0x4aa4e3,_0x5bd6d1){const _0x56f819=_0x1a3244,_0x2a94d1=Math[_0x56f819(0x312)]((_0x51181f-0x2)*_0x3b6e4f),_0x4d86ce=Sprite_Gauge[_0x56f819(0x44d)][_0x56f819(0x3ce)]['call'](this),_0x113045=_0x3bb072+this[_0x56f819(0x55f)]()-_0x4d86ce-0x2;this['contents'][_0x56f819(0x7be)](_0x405f4d,_0x113045,_0x51181f,_0x4d86ce,ColorManager[_0x56f819(0x695)]()),this['contents'][_0x56f819(0x923)](_0x405f4d+0x1,_0x113045+0x1,_0x2a94d1,_0x4d86ce-0x2,_0x4aa4e3,_0x5bd6d1);},Window_Scrollable['SCROLLBAR']={'enabled':VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x919)][_0x1a3244(0x8db)]??!![],'thickness':VisuMZ['CoreEngine'][_0x1a3244(0x927)][_0x1a3244(0x919)][_0x1a3244(0x7c0)]??0x2,'offset':VisuMZ[_0x1a3244(0x38a)]['Settings'][_0x1a3244(0x919)][_0x1a3244(0x8e8)]??0x2,'bodyColor':VisuMZ['CoreEngine'][_0x1a3244(0x927)][_0x1a3244(0x919)][_0x1a3244(0x2b8)]??0x0,'offColor':VisuMZ[_0x1a3244(0x38a)]['Settings'][_0x1a3244(0x919)][_0x1a3244(0x94f)]??0x7,'offOpacity':VisuMZ['CoreEngine'][_0x1a3244(0x927)]['Window'][_0x1a3244(0x54f)]??0x80},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x66d)]=function(){const _0x4d379b=_0x1a3244;return Window_Scrollable['SCROLLBAR'][_0x4d379b(0x26b)]&&Window_Scrollable[_0x4d379b(0x2a8)][_0x4d379b(0x818)]>0x0;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x526)]=Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x641)],Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x641)]=function(){const _0x2430f6=_0x1a3244;VisuMZ[_0x2430f6(0x38a)][_0x2430f6(0x526)]['call'](this),this['createScrollBarSprites'](),this[_0x2430f6(0x7a2)](!![]),this[_0x2430f6(0x7a2)](![]);},Window_Base['prototype'][_0x1a3244(0x8f3)]=function(){const _0x5d85e6=_0x1a3244;if(!this['isScrollBarVisible']())return;if(this[_0x5d85e6(0x41f)]||this[_0x5d85e6(0x6a1)])return;this[_0x5d85e6(0x33a)]={'horz':null,'vert':null,'maxHorz':null,'maxVert':null},this[_0x5d85e6(0x41f)]=new Sprite(),this[_0x5d85e6(0x6a1)]=new Sprite(),this[_0x5d85e6(0x658)](this[_0x5d85e6(0x41f)]),this['addChild'](this[_0x5d85e6(0x6a1)]);},Window_Base['prototype'][_0x1a3244(0x7a2)]=function(_0x49d560){const _0x42af70=_0x1a3244,_0x2b8773=_0x49d560?this['_scrollBarHorz']:this[_0x42af70(0x6a1)];if(!_0x2b8773)return;const _0x2159c9=Window_Scrollable[_0x42af70(0x2a8)],_0x46f371=_0x2159c9[_0x42af70(0x818)],_0x3b2275=_0x49d560?this['innerWidth']-_0x46f371*0x2:_0x46f371,_0x289eb2=_0x49d560?_0x46f371:this[_0x42af70(0x281)]-_0x46f371*0x2;_0x2b8773[_0x42af70(0x3f5)]=new Bitmap(_0x3b2275,_0x289eb2),_0x2b8773[_0x42af70(0x66e)](0x0,0x0,_0x3b2275,_0x289eb2),this[_0x42af70(0x6bb)](_0x49d560);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x8fe)]=Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x636)],Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x636)]=function(){const _0x32c59d=_0x1a3244;VisuMZ[_0x32c59d(0x38a)][_0x32c59d(0x8fe)][_0x32c59d(0x38c)](this),this[_0x32c59d(0x7d8)]();},Window_Base['prototype'][_0x1a3244(0x7d8)]=function(){const _0x51b5cb=_0x1a3244,_0x36dc93=[this[_0x51b5cb(0x41f)],this['_scrollBarVert']];for(const _0x1c0c64 of _0x36dc93){if(_0x1c0c64&&_0x1c0c64[_0x51b5cb(0x3f5)])_0x1c0c64[_0x51b5cb(0x3f5)][_0x51b5cb(0x44c)]();}},VisuMZ['CoreEngine']['Window_Scrollable_update']=Window_Scrollable[_0x1a3244(0x44d)][_0x1a3244(0x46a)],Window_Scrollable[_0x1a3244(0x44d)][_0x1a3244(0x46a)]=function(){const _0x332e6c=_0x1a3244;VisuMZ[_0x332e6c(0x38a)][_0x332e6c(0x710)][_0x332e6c(0x38c)](this),this[_0x332e6c(0x48c)]();},Window_Scrollable[_0x1a3244(0x44d)][_0x1a3244(0x48c)]=function(){const _0x4bdee9=_0x1a3244;this[_0x4bdee9(0x34c)](),this[_0x4bdee9(0x1f8)](!![]),this[_0x4bdee9(0x1f8)](![]),this[_0x4bdee9(0x6bb)](!![]),this['updateScrollBarPosition'](![]);},Window_Scrollable[_0x1a3244(0x44d)]['updateScrollBarVisibility']=function(){const _0x3cfbeb=_0x1a3244,_0x228963=[this['_scrollBarHorz'],this[_0x3cfbeb(0x6a1)]];for(const _0x1ee841 of _0x228963){_0x1ee841&&(_0x1ee841[_0x3cfbeb(0x8fc)]=this[_0x3cfbeb(0x66d)]()&&this[_0x3cfbeb(0x1e0)]());}},Window_Scrollable['prototype']['checkScrollBarBitmap']=function(_0x444193){const _0x21e39d=_0x1a3244;if(!this[_0x21e39d(0x33a)])return;const _0x2ac4cf=this[_0x21e39d(0x182)](_0x444193),_0x575314=this[_0x21e39d(0x45c)](_0x444193),_0x112401=_0x444193?_0x21e39d(0x670):_0x21e39d(0x8ed),_0x193f91=_0x444193?_0x21e39d(0x7f6):'maxVert';(this[_0x21e39d(0x33a)][_0x112401]!==_0x2ac4cf||this[_0x21e39d(0x33a)][_0x193f91]!==_0x575314)&&(this[_0x21e39d(0x33a)][_0x112401]=_0x2ac4cf,this[_0x21e39d(0x33a)][_0x193f91]=_0x575314,this[_0x21e39d(0x53b)](_0x444193,_0x2ac4cf,_0x575314));},Window_Scrollable[_0x1a3244(0x44d)][_0x1a3244(0x182)]=function(_0x6ff552){const _0x1cc1d9=_0x1a3244;if(this['_allTextHeight']!==undefined)return _0x6ff552?this[_0x1cc1d9(0x501)]():this[_0x1cc1d9(0x452)]['y'];return _0x6ff552?this[_0x1cc1d9(0x501)]():this[_0x1cc1d9(0x24e)]();},Window_Scrollable[_0x1a3244(0x44d)]['maxScrollbar']=function(_0x468f16){const _0x147831=_0x1a3244;if(this[_0x147831(0x57b)]!==undefined)return _0x468f16?this[_0x147831(0x461)]():Math['max'](0x0,this[_0x147831(0x57b)]-this[_0x147831(0x281)]);return _0x468f16?this[_0x147831(0x461)]():this[_0x147831(0x75a)]();},Window_Scrollable[_0x1a3244(0x44d)]['scrollbarHeight']=function(){const _0x191041=_0x1a3244;if(this[_0x191041(0x57b)]!==undefined)return Math[_0x191041(0x51f)](0x0,this['_allTextHeight']);return this[_0x191041(0x349)]();},Window_Scrollable['prototype']['refreshScrollBarBitmap']=function(_0x5bc025,_0x16b642,_0x504e8c){const _0x22db10=_0x1a3244,_0x860e9a=_0x5bc025?this[_0x22db10(0x41f)]:this['_scrollBarVert'];if(!_0x860e9a)return;if(!_0x860e9a[_0x22db10(0x3f5)])return;const _0x710bf6=_0x860e9a[_0x22db10(0x3f5)];_0x710bf6[_0x22db10(0x222)]();if(_0x504e8c<=0x0)return;const _0x4891de=_0x5bc025?this[_0x22db10(0x6cd)]/this[_0x22db10(0x873)]():this['innerHeight']/this[_0x22db10(0x6b4)](),_0x1ec8cc=_0x5bc025?Math[_0x22db10(0x6e5)](_0x16b642*_0x4891de):0x0,_0xabe172=_0x5bc025?0x0:Math['round'](_0x16b642*_0x4891de),_0x5b5467=_0x5bc025?Math[_0x22db10(0x6e5)](_0x710bf6['width']*_0x4891de):_0x710bf6[_0x22db10(0x397)],_0x170b39=_0x5bc025?_0x710bf6[_0x22db10(0x583)]:Math['round'](_0x710bf6['height']*_0x4891de),_0x4a3c1a=Window_Scrollable[_0x22db10(0x2a8)],_0x23c735=ColorManager[_0x22db10(0x3df)](_0x4a3c1a['offColor']),_0x29d66c=ColorManager[_0x22db10(0x3df)](_0x4a3c1a[_0x22db10(0x6b5)]),_0x2f00c1=_0x4a3c1a[_0x22db10(0x68d)];_0x710bf6[_0x22db10(0x33b)]=_0x2f00c1,_0x710bf6[_0x22db10(0x445)](_0x23c735),_0x710bf6[_0x22db10(0x33b)]=0xff,_0x710bf6['fillRect'](_0x1ec8cc,_0xabe172,_0x5b5467,_0x170b39,_0x29d66c);},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x6bb)]=function(_0x26d8cc){const _0x98a063=_0x1a3244,_0x4b88b5=_0x26d8cc?this[_0x98a063(0x41f)]:this[_0x98a063(0x6a1)];if(!_0x4b88b5)return;const _0x14b01f=Window_Scrollable[_0x98a063(0x2a8)],_0x362218=_0x14b01f['thickness'],_0x1513ac=_0x14b01f[_0x98a063(0x2cb)];if(!_0x4b88b5[_0x98a063(0x7af)])return;_0x4b88b5['x']=this[_0x98a063(0x8e2)]+(_0x26d8cc?_0x362218:this[_0x98a063(0x6cd)]+_0x1513ac),_0x4b88b5['y']=this[_0x98a063(0x8e2)]+(_0x26d8cc?this[_0x98a063(0x281)]+_0x1513ac:_0x362218);},Window_Selectable[_0x1a3244(0x44d)][_0x1a3244(0x542)]=function(_0x426224){const _0x29fc65=_0x1a3244;let _0x15753c=this[_0x29fc65(0x58b)]();const _0x2b7b24=this['maxItems'](),_0x28b544=this['maxCols']();if(this['isUseModernControls']()&&(_0x15753c<_0x2b7b24||_0x426224&&_0x28b544===0x1)){_0x15753c+=_0x28b544;if(_0x15753c>=_0x2b7b24)_0x15753c=_0x2b7b24-0x1;this[_0x29fc65(0x4a6)](_0x15753c);}else!this[_0x29fc65(0x3e3)]()&&((_0x15753c<_0x2b7b24-_0x28b544||_0x426224&&_0x28b544===0x1)&&this[_0x29fc65(0x4a6)]((_0x15753c+_0x28b544)%_0x2b7b24));},VisuMZ[_0x1a3244(0x38a)]['Window_Selectable_cursorDown']=Window_Selectable['prototype'][_0x1a3244(0x542)],Window_Selectable[_0x1a3244(0x44d)]['cursorDown']=function(_0x59b7f1){const _0x5384d2=_0x1a3244;this[_0x5384d2(0x3e3)]()&&_0x59b7f1&&this[_0x5384d2(0x87e)]()===0x1&&this[_0x5384d2(0x58b)]()===this[_0x5384d2(0x825)]()-0x1?this['smoothSelect'](0x0):VisuMZ[_0x5384d2(0x38a)][_0x5384d2(0x3da)]['call'](this,_0x59b7f1);},Window_Selectable['prototype'][_0x1a3244(0x58a)]=function(_0x2fe4ee){const _0x2ad0cd=_0x1a3244;let _0x3a14a6=Math['max'](0x0,this[_0x2ad0cd(0x58b)]());const _0x3d2c33=this[_0x2ad0cd(0x825)](),_0x4d706c=this[_0x2ad0cd(0x87e)]();if(this[_0x2ad0cd(0x3e3)]()&&_0x3a14a6>0x0||_0x2fe4ee&&_0x4d706c===0x1){_0x3a14a6-=_0x4d706c;if(_0x3a14a6<=0x0)_0x3a14a6=0x0;this['smoothSelect'](_0x3a14a6);}else!this[_0x2ad0cd(0x3e3)]()&&((_0x3a14a6>=_0x4d706c||_0x2fe4ee&&_0x4d706c===0x1)&&this[_0x2ad0cd(0x4a6)]((_0x3a14a6-_0x4d706c+_0x3d2c33)%_0x3d2c33));},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x5ea)]=Window_Selectable[_0x1a3244(0x44d)]['cursorUp'],Window_Selectable[_0x1a3244(0x44d)][_0x1a3244(0x58a)]=function(_0x21f43d){const _0x59b34d=_0x1a3244;this[_0x59b34d(0x3e3)]()&&_0x21f43d&&this['maxCols']()===0x1&&this[_0x59b34d(0x58b)]()===0x0?this['smoothSelect'](this[_0x59b34d(0x825)]()-0x1):VisuMZ[_0x59b34d(0x38a)][_0x59b34d(0x5ea)][_0x59b34d(0x38c)](this,_0x21f43d);},Window_Selectable['prototype'][_0x1a3244(0x3e3)]=function(){const _0x434f7b=_0x1a3244;return VisuMZ[_0x434f7b(0x38a)][_0x434f7b(0x927)][_0x434f7b(0x83d)][_0x434f7b(0x2fc)];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x6b8)]=Window_Selectable[_0x1a3244(0x44d)][_0x1a3244(0x441)],Window_Selectable[_0x1a3244(0x44d)][_0x1a3244(0x441)]=function(){const _0xdd0a12=_0x1a3244;this['isUseModernControls']()?(this[_0xdd0a12(0x4bc)](),this['processCursorHomeEndTrigger']()):VisuMZ[_0xdd0a12(0x38a)][_0xdd0a12(0x6b8)][_0xdd0a12(0x38c)](this);},Window_Selectable[_0x1a3244(0x44d)][_0x1a3244(0x5e0)]=function(){return!![];},Window_Selectable[_0x1a3244(0x44d)]['processCursorMoveModernControls']=function(){const _0x156ac6=_0x1a3244;if(this['isCursorMovable']()){const _0x26da85=this[_0x156ac6(0x58b)]();Input[_0x156ac6(0x5d2)]('down')&&(Input[_0x156ac6(0x733)](_0x156ac6(0x4e9))&&this['allowShiftScrolling']()?this[_0x156ac6(0x5fd)]():this[_0x156ac6(0x542)](Input[_0x156ac6(0x472)]('down'))),Input[_0x156ac6(0x5d2)]('up')&&(Input[_0x156ac6(0x733)](_0x156ac6(0x4e9))&&this['allowShiftScrolling']()?this['cursorPageup']():this[_0x156ac6(0x58a)](Input[_0x156ac6(0x472)]('up'))),Input[_0x156ac6(0x5d2)]('right')&&this[_0x156ac6(0x649)](Input[_0x156ac6(0x472)](_0x156ac6(0x60d))),Input['isRepeated'](_0x156ac6(0x394))&&this[_0x156ac6(0x50e)](Input[_0x156ac6(0x472)](_0x156ac6(0x394))),!this[_0x156ac6(0x737)](_0x156ac6(0x398))&&Input[_0x156ac6(0x5d2)](_0x156ac6(0x398))&&this[_0x156ac6(0x5fd)](),!this[_0x156ac6(0x737)](_0x156ac6(0x1f1))&&Input['isRepeated']('pageup')&&this['cursorPageup'](),this[_0x156ac6(0x58b)]()!==_0x26da85&&this[_0x156ac6(0x70d)]();}},Window_Selectable['prototype'][_0x1a3244(0x676)]=function(){const _0x12fd98=_0x1a3244;if(this['isCursorMovable']()){const _0x32acbd=this[_0x12fd98(0x58b)]();Input[_0x12fd98(0x472)](_0x12fd98(0x761))&&this['smoothSelect'](Math[_0x12fd98(0x3d0)](this[_0x12fd98(0x58b)](),0x0)),Input[_0x12fd98(0x472)](_0x12fd98(0x566))&&this[_0x12fd98(0x4a6)](Math[_0x12fd98(0x51f)](this[_0x12fd98(0x58b)](),this['maxItems']()-0x1)),this['index']()!==_0x32acbd&&this[_0x12fd98(0x70d)]();}},VisuMZ['CoreEngine']['Window_Selectable_processTouch']=Window_Selectable[_0x1a3244(0x44d)]['processTouch'],Window_Selectable['prototype']['processTouch']=function(){const _0x262efb=_0x1a3244;this[_0x262efb(0x3e3)]()?this['processTouchModernControls']():VisuMZ[_0x262efb(0x38a)]['Window_Selectable_processTouch']['call'](this);},Window_Selectable[_0x1a3244(0x44d)][_0x1a3244(0x372)]=function(){const _0x17152b=_0x1a3244;VisuMZ[_0x17152b(0x38a)][_0x17152b(0x847)][_0x17152b(0x38c)](this);},Window_Selectable['prototype']['colSpacing']=function(){const _0x287c7b=_0x1a3244;return VisuMZ['CoreEngine'][_0x287c7b(0x927)][_0x287c7b(0x919)]['ColSpacing'];},Window_Selectable[_0x1a3244(0x44d)][_0x1a3244(0x44b)]=function(){const _0x4e6414=_0x1a3244;return VisuMZ['CoreEngine'][_0x4e6414(0x927)][_0x4e6414(0x919)][_0x4e6414(0x294)];},Window_Selectable['prototype']['itemHeight']=function(){const _0x9acd7e=_0x1a3244;return Window_Scrollable[_0x9acd7e(0x44d)][_0x9acd7e(0x6e7)][_0x9acd7e(0x38c)](this)+VisuMZ['CoreEngine'][_0x9acd7e(0x927)]['Window'][_0x9acd7e(0x232)];;},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x6bc)]=Window_Selectable[_0x1a3244(0x44d)][_0x1a3244(0x948)],Window_Selectable[_0x1a3244(0x44d)][_0x1a3244(0x948)]=function(_0x38bd59){const _0x1da183=_0x1a3244,_0x564a6a=VisuMZ[_0x1da183(0x38a)][_0x1da183(0x927)]['Window'];if(_0x564a6a[_0x1da183(0x69b)]===![])return;_0x564a6a[_0x1da183(0x51c)]?_0x564a6a[_0x1da183(0x51c)]['call'](this,_0x38bd59):VisuMZ['CoreEngine']['Window_Selectable_drawBackgroundRect'][_0x1da183(0x38c)](this,_0x38bd59);},VisuMZ['CoreEngine'][_0x1a3244(0x8ea)]=Window_Gold[_0x1a3244(0x44d)]['refresh'],Window_Gold[_0x1a3244(0x44d)][_0x1a3244(0x4c4)]=function(){const _0x5b8349=_0x1a3244;this['isItemStyle']()?this[_0x5b8349(0x5b3)]():VisuMZ[_0x5b8349(0x38a)][_0x5b8349(0x8ea)][_0x5b8349(0x38c)](this);},Window_Gold['prototype']['isItemStyle']=function(){const _0x243ff4=_0x1a3244;if(TextManager[_0x243ff4(0x76f)]!==this[_0x243ff4(0x76f)]())return![];return VisuMZ[_0x243ff4(0x38a)][_0x243ff4(0x927)][_0x243ff4(0x82c)][_0x243ff4(0x715)];},Window_Gold[_0x1a3244(0x44d)][_0x1a3244(0x5b3)]=function(){const _0x1e402e=_0x1a3244;this[_0x1e402e(0x1e9)](),this[_0x1e402e(0x30c)]['clear'](),this['contents'][_0x1e402e(0x699)]=VisuMZ['CoreEngine'][_0x1e402e(0x927)][_0x1e402e(0x82c)][_0x1e402e(0x53d)];const _0x397dca=VisuMZ[_0x1e402e(0x38a)]['Settings']['Gold'][_0x1e402e(0x814)],_0x2ba207=this[_0x1e402e(0x401)](0x0);if(_0x397dca>0x0){const _0x527398=_0x2ba207['y']+(this[_0x1e402e(0x55f)]()-ImageManager[_0x1e402e(0x227)])/0x2;this['drawIcon'](_0x397dca,_0x2ba207['x'],_0x527398);const _0x1e392c=ImageManager[_0x1e402e(0x24a)]+0x4;_0x2ba207['x']+=_0x1e392c,_0x2ba207['width']-=_0x1e392c;}this[_0x1e402e(0x23d)](ColorManager[_0x1e402e(0x7d7)]()),this[_0x1e402e(0x419)](this[_0x1e402e(0x76f)](),_0x2ba207['x'],_0x2ba207['y'],_0x2ba207[_0x1e402e(0x397)],_0x1e402e(0x394));const _0x4d5d1f=this[_0x1e402e(0x73b)](this[_0x1e402e(0x76f)]())+0x6;;_0x2ba207['x']+=_0x4d5d1f,_0x2ba207[_0x1e402e(0x397)]-=_0x4d5d1f,this[_0x1e402e(0x1bc)]();const _0x21f9ba=this[_0x1e402e(0x255)](),_0x169ca9=this['textWidth'](this[_0x1e402e(0x85a)]?VisuMZ[_0x1e402e(0x65d)](this['value']()):this[_0x1e402e(0x255)]());_0x169ca9>_0x2ba207[_0x1e402e(0x397)]?this[_0x1e402e(0x419)](VisuMZ[_0x1e402e(0x38a)][_0x1e402e(0x927)][_0x1e402e(0x82c)]['GoldOverlap'],_0x2ba207['x'],_0x2ba207['y'],_0x2ba207[_0x1e402e(0x397)],_0x1e402e(0x60d)):this[_0x1e402e(0x419)](this['value'](),_0x2ba207['x'],_0x2ba207['y'],_0x2ba207[_0x1e402e(0x397)],_0x1e402e(0x60d)),this[_0x1e402e(0x1e9)]();},Window_StatusBase['prototype'][_0x1a3244(0x3b0)]=function(_0x457bea,_0x562b62,_0x1d9adf,_0x30d755,_0x38ac67){const _0xba918=_0x1a3244;_0x30d755=String(_0x30d755||'')[_0xba918(0x5c4)]();if(VisuMZ[_0xba918(0x38a)][_0xba918(0x927)][_0xba918(0x381)][_0xba918(0x5ee)]){const _0x33708b=VisuMZ['GetParamIcon'](_0x30d755);_0x38ac67?(this[_0xba918(0x6ed)](_0x33708b,_0x457bea,_0x562b62,this['gaugeLineHeight']()),_0x1d9adf-=this[_0xba918(0x45b)]()+0x2,_0x457bea+=this[_0xba918(0x45b)]()+0x2):(this[_0xba918(0x70f)](_0x33708b,_0x457bea+0x2,_0x562b62+0x2),_0x1d9adf-=ImageManager[_0xba918(0x24a)]+0x4,_0x457bea+=ImageManager[_0xba918(0x24a)]+0x4);}const _0x1c4c85=TextManager[_0xba918(0x862)](_0x30d755);this[_0xba918(0x1e9)](),this[_0xba918(0x23d)](ColorManager[_0xba918(0x7d7)]()),_0x38ac67?(this[_0xba918(0x30c)][_0xba918(0x699)]=this[_0xba918(0x5cc)](),this[_0xba918(0x30c)]['drawText'](_0x1c4c85,_0x457bea,_0x562b62,_0x1d9adf,this[_0xba918(0x45b)](),_0xba918(0x394))):this[_0xba918(0x419)](_0x1c4c85,_0x457bea,_0x562b62,_0x1d9adf),this[_0xba918(0x1e9)]();},Window_StatusBase[_0x1a3244(0x44d)][_0x1a3244(0x5cc)]=function(){const _0x12b87e=_0x1a3244;return $gameSystem[_0x12b87e(0x26f)]()-0x8;},Window_StatusBase['prototype']['drawActorClass']=function(_0xaa5369,_0x45dd23,_0x24c346,_0x3f6211){const _0x99c2ea=_0x1a3244;_0x3f6211=_0x3f6211||0xa8,this[_0x99c2ea(0x1bc)]();if(VisuMZ[_0x99c2ea(0x38a)][_0x99c2ea(0x927)]['UI'][_0x99c2ea(0x285)])this['drawTextEx'](_0xaa5369['currentClass']()[_0x99c2ea(0x17f)],_0x45dd23,_0x24c346,_0x3f6211);else{const _0xd1573a=_0xaa5369['currentClass']()[_0x99c2ea(0x17f)][_0x99c2ea(0x845)](/\\I\[(\d+)\]/gi,'');this[_0x99c2ea(0x419)](_0xd1573a,_0x45dd23,_0x24c346,_0x3f6211);}},Window_StatusBase[_0x1a3244(0x44d)][_0x1a3244(0x908)]=function(_0x4bdd73,_0x41b3ad,_0x1171d9,_0x4f2d8f){const _0x57027f=_0x1a3244;_0x4f2d8f=_0x4f2d8f||0x10e,this[_0x57027f(0x1bc)]();if(VisuMZ[_0x57027f(0x38a)][_0x57027f(0x927)]['UI'][_0x57027f(0x84d)])this['drawTextEx'](_0x4bdd73[_0x57027f(0x7a6)](),_0x41b3ad,_0x1171d9,_0x4f2d8f);else{const _0x9e8ead=_0x4bdd73[_0x57027f(0x7a6)]()[_0x57027f(0x845)](/\\I\[(\d+)\]/gi,'');this[_0x57027f(0x419)](_0x4bdd73['nickname'](),_0x41b3ad,_0x1171d9,_0x4f2d8f);}},VisuMZ['CoreEngine']['Window_StatusBase_drawActorLevel']=Window_StatusBase[_0x1a3244(0x44d)][_0x1a3244(0x2b2)],Window_StatusBase['prototype'][_0x1a3244(0x2b2)]=function(_0x3ec2ab,_0x38ff06,_0x37d1bb){const _0x5a00b1=_0x1a3244;if(VisuMZ[_0x5a00b1(0x38a)]['Settings'][_0x5a00b1(0x381)]['ShowActorLevel']===![])return;if(this['isExpGaugeDrawn']())this[_0x5a00b1(0x854)](_0x3ec2ab,_0x38ff06,_0x37d1bb);VisuMZ[_0x5a00b1(0x38a)][_0x5a00b1(0x5bc)][_0x5a00b1(0x38c)](this,_0x3ec2ab,_0x38ff06,_0x37d1bb);},Window_StatusBase[_0x1a3244(0x44d)]['isExpGaugeDrawn']=function(){const _0x4d280d=_0x1a3244;return VisuMZ[_0x4d280d(0x38a)][_0x4d280d(0x927)]['UI'][_0x4d280d(0x54c)];},Window_StatusBase[_0x1a3244(0x44d)][_0x1a3244(0x854)]=function(_0x53b1d9,_0x29feb9,_0x15b667){const _0x2e90fe=_0x1a3244;if(!_0x53b1d9)return;if(!_0x53b1d9['isActor']())return;const _0x51e072=0x80,_0x32b0ad=_0x53b1d9[_0x2e90fe(0x7a9)]();let _0x3dfa97=ColorManager['expGaugeColor1'](),_0x599fec=ColorManager[_0x2e90fe(0x1c1)]();_0x32b0ad>=0x1&&(_0x3dfa97=ColorManager[_0x2e90fe(0x813)](),_0x599fec=ColorManager['maxLvGaugeColor2']()),this[_0x2e90fe(0x2f4)](_0x29feb9,_0x15b667,_0x51e072,_0x32b0ad,_0x3dfa97,_0x599fec);},Window_EquipStatus['prototype']['drawAllParams']=function(){const _0x1add31=_0x1a3244;let _0x5494c5=0x0;for(const _0x461cd3 of VisuMZ[_0x1add31(0x38a)][_0x1add31(0x927)][_0x1add31(0x381)]['DisplayedParams']){const _0x23ea6a=this['itemPadding'](),_0x43d410=this[_0x1add31(0x2d0)](_0x5494c5);this[_0x1add31(0x6f2)](_0x23ea6a,_0x43d410,_0x461cd3),_0x5494c5++;}},Window_EquipStatus['prototype']['drawParamName']=function(_0x1c1f39,_0x5d25f9,_0x12fe5c){const _0x17c7d4=_0x1a3244,_0x10132a=this[_0x17c7d4(0x4b9)]()-this['itemPadding']()*0x2;this['drawParamText'](_0x1c1f39,_0x5d25f9,_0x10132a,_0x12fe5c,![]);},Window_EquipStatus[_0x1a3244(0x44d)]['drawCurrentParam']=function(_0x2d971b,_0x3c50c5,_0x6fe788){const _0x27a166=_0x1a3244,_0x202195=this['paramWidth']();this['resetTextColor'](),this[_0x27a166(0x419)](this[_0x27a166(0x861)]['paramValueByName'](_0x6fe788,!![]),_0x2d971b,_0x3c50c5,_0x202195,'right');},Window_EquipStatus[_0x1a3244(0x44d)][_0x1a3244(0x55a)]=function(_0x439974,_0x48fa3d){const _0x8c9f29=_0x1a3244,_0x52b9fc=this['rightArrowWidth']();this[_0x8c9f29(0x23d)](ColorManager['systemColor']());const _0x487316=VisuMZ[_0x8c9f29(0x38a)][_0x8c9f29(0x927)]['UI'][_0x8c9f29(0x8bf)];this['drawText'](_0x487316,_0x439974,_0x48fa3d,_0x52b9fc,_0x8c9f29(0x37f));},Window_EquipStatus[_0x1a3244(0x44d)][_0x1a3244(0x2e5)]=function(_0x47850e,_0x124a16,_0x30d36a){const _0x39abac=_0x1a3244,_0x3e4cdf=this['paramWidth'](),_0x3a2756=this['_tempActor'][_0x39abac(0x577)](_0x30d36a),_0x44866a=_0x3a2756-this[_0x39abac(0x861)][_0x39abac(0x577)](_0x30d36a);this[_0x39abac(0x23d)](ColorManager[_0x39abac(0x38e)](_0x44866a)),this[_0x39abac(0x419)](this['_tempActor'][_0x39abac(0x577)](_0x30d36a,!![]),_0x47850e,_0x124a16,_0x3e4cdf,_0x39abac(0x60d));},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x4fd)]=Window_EquipItem['prototype'][_0x1a3244(0x347)],Window_EquipItem[_0x1a3244(0x44d)][_0x1a3244(0x347)]=function(_0x19e7d7){const _0x1f0695=_0x1a3244;return _0x19e7d7&&this['_actor']?this[_0x1f0695(0x861)][_0x1f0695(0x4ea)](_0x19e7d7):VisuMZ[_0x1f0695(0x38a)][_0x1f0695(0x4fd)][_0x1f0695(0x38c)](this,_0x19e7d7);},Window_StatusParams[_0x1a3244(0x44d)][_0x1a3244(0x825)]=function(){const _0x521be9=_0x1a3244;return VisuMZ[_0x521be9(0x38a)]['Settings']['Param'][_0x521be9(0x80e)][_0x521be9(0x753)];},Window_StatusParams[_0x1a3244(0x44d)]['drawItem']=function(_0x148d21){const _0x50d426=_0x1a3244,_0x4c80fc=this[_0x50d426(0x401)](_0x148d21),_0x4044dc=VisuMZ[_0x50d426(0x38a)][_0x50d426(0x927)][_0x50d426(0x381)][_0x50d426(0x80e)][_0x148d21],_0x8ab48c=TextManager['param'](_0x4044dc),_0x25ddfb=this[_0x50d426(0x861)][_0x50d426(0x577)](_0x4044dc,!![]);this[_0x50d426(0x3b0)](_0x4c80fc['x'],_0x4c80fc['y'],0xa0,_0x4044dc,![]),this['resetTextColor'](),this[_0x50d426(0x419)](_0x25ddfb,_0x4c80fc['x']+0xa0,_0x4c80fc['y'],0x3c,_0x50d426(0x60d));};if(VisuMZ['CoreEngine']['Settings'][_0x1a3244(0x784)]['EnableNameInput']){VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x784)][_0x1a3244(0x5ad)]&&(Window_NameInput[_0x1a3244(0x874)]=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20',_0x1a3244(0x1a4),'OK']);;VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x77e)]=Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x292)],Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x292)]=function(_0x4f6ac7){const _0x29a74e=_0x1a3244;this[_0x29a74e(0x64b)]=this[_0x29a74e(0x4da)](),VisuMZ[_0x29a74e(0x38a)][_0x29a74e(0x77e)][_0x29a74e(0x38c)](this,_0x4f6ac7),this['_mode']===_0x29a74e(0x2c2)?this['select'](0x0):(Input[_0x29a74e(0x222)](),this[_0x29a74e(0x2f1)]());},Window_NameInput[_0x1a3244(0x44d)]['defaultInputMode']=function(){const _0x2f5737=_0x1a3244;if(Input[_0x2f5737(0x7e9)]())return _0x2f5737(0x2c2);return VisuMZ[_0x2f5737(0x38a)]['Settings'][_0x2f5737(0x784)]['DefaultMode']||'keyboard';},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x5a7)]=Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x58d)],Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x58d)]=function(){const _0x1a0e1f=_0x1a3244;if(!this['isOpen']())return;if(!this[_0x1a0e1f(0x688)])return;if(this[_0x1a0e1f(0x64b)]===_0x1a0e1f(0x194)&&Input[_0x1a0e1f(0x677)]())this[_0x1a0e1f(0x319)]('default');else{if(Input[_0x1a0e1f(0x73c)](_0x1a0e1f(0x47c)))Input[_0x1a0e1f(0x222)](),this[_0x1a0e1f(0x2d3)]();else{if(Input['isTriggered'](_0x1a0e1f(0x3dd)))Input['clear'](),this['_mode']===_0x1a0e1f(0x194)?this[_0x1a0e1f(0x319)](_0x1a0e1f(0x2c2)):this[_0x1a0e1f(0x319)](_0x1a0e1f(0x194));else{if(this[_0x1a0e1f(0x64b)]===_0x1a0e1f(0x194))this['processKeyboardHandling']();else Input[_0x1a0e1f(0x73c)](_0x1a0e1f(0x336))?(Input[_0x1a0e1f(0x222)](),this[_0x1a0e1f(0x319)]('keyboard')):VisuMZ[_0x1a0e1f(0x38a)][_0x1a0e1f(0x5a7)]['call'](this);}}}},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x795)]=Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x6a5)],Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x6a5)]=function(){const _0x3b25bb=_0x1a3244;if(!this['isOpenAndActive']())return;if(this[_0x3b25bb(0x64b)]===_0x3b25bb(0x194)){if(TouchInput[_0x3b25bb(0x472)]()&&this[_0x3b25bb(0x335)]())this[_0x3b25bb(0x319)]('default');else TouchInput[_0x3b25bb(0x6d2)]()&&this['switchModes']('default');}else VisuMZ[_0x3b25bb(0x38a)][_0x3b25bb(0x795)][_0x3b25bb(0x38c)](this);},Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x47e)]=function(){const _0x210f1a=_0x1a3244;if(Input[_0x210f1a(0x73c)](_0x210f1a(0x4f0)))Input['clear'](),this[_0x210f1a(0x247)]();else{if(Input[_0x210f1a(0x62f)]!==undefined){let _0x501405=Input[_0x210f1a(0x62f)],_0x961189=_0x501405[_0x210f1a(0x753)];for(let _0x3548a6=0x0;_0x3548a6<_0x961189;++_0x3548a6){this[_0x210f1a(0x444)][_0x210f1a(0x8b6)](_0x501405[_0x3548a6])?SoundManager['playOk']():SoundManager[_0x210f1a(0x332)]();}Input[_0x210f1a(0x222)]();}}},Window_NameInput['prototype']['switchModes']=function(_0x4f8eb0){const _0x4ea28f=_0x1a3244;let _0x36e26c=this[_0x4ea28f(0x64b)];this[_0x4ea28f(0x64b)]=_0x4f8eb0,_0x36e26c!==this[_0x4ea28f(0x64b)]&&(this['refresh'](),SoundManager[_0x4ea28f(0x32a)](),this['_mode']===_0x4ea28f(0x2c2)?this[_0x4ea28f(0x5a1)](0x0):this['select'](-0x1));},VisuMZ[_0x1a3244(0x38a)]['Window_NameInput_cursorDown']=Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x542)],Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x542)]=function(_0x1db6c7){const _0x1ab07f=_0x1a3244;if(this['_mode']===_0x1ab07f(0x194)&&!Input[_0x1ab07f(0x89a)]())return;if(Input[_0x1ab07f(0x5cd)]())return;VisuMZ[_0x1ab07f(0x38a)][_0x1ab07f(0x562)][_0x1ab07f(0x38c)](this,_0x1db6c7),this['switchModes']('default');},VisuMZ[_0x1a3244(0x38a)]['Window_NameInput_cursorUp']=Window_NameInput['prototype'][_0x1a3244(0x58a)],Window_NameInput[_0x1a3244(0x44d)]['cursorUp']=function(_0x1bf413){const _0x41fbb1=_0x1a3244;if(this[_0x41fbb1(0x64b)]===_0x41fbb1(0x194)&&!Input[_0x41fbb1(0x89a)]())return;if(Input[_0x41fbb1(0x5cd)]())return;VisuMZ['CoreEngine'][_0x41fbb1(0x324)]['call'](this,_0x1bf413),this[_0x41fbb1(0x319)](_0x41fbb1(0x2c2));},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x5f2)]=Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x649)],Window_NameInput[_0x1a3244(0x44d)]['cursorRight']=function(_0x2444f9){const _0x4e9b8d=_0x1a3244;if(this['_mode']===_0x4e9b8d(0x194)&&!Input[_0x4e9b8d(0x89a)]())return;if(Input[_0x4e9b8d(0x5cd)]())return;VisuMZ[_0x4e9b8d(0x38a)][_0x4e9b8d(0x5f2)]['call'](this,_0x2444f9),this[_0x4e9b8d(0x319)]('default');},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x4b7)]=Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x50e)],Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x50e)]=function(_0xaa8608){const _0x4d8c99=_0x1a3244;if(this[_0x4d8c99(0x64b)]===_0x4d8c99(0x194)&&!Input[_0x4d8c99(0x89a)]())return;if(Input[_0x4d8c99(0x5cd)]())return;VisuMZ[_0x4d8c99(0x38a)][_0x4d8c99(0x4b7)][_0x4d8c99(0x38c)](this,_0xaa8608),this[_0x4d8c99(0x319)]('default');},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x4f2)]=Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x5fd)],Window_NameInput[_0x1a3244(0x44d)]['cursorPagedown']=function(){const _0x59f90a=_0x1a3244;if(this['_mode']==='keyboard')return;if(Input[_0x59f90a(0x5cd)]())return;VisuMZ[_0x59f90a(0x38a)]['Window_NameInput_cursorPagedown']['call'](this),this[_0x59f90a(0x319)]('default');},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x68e)]=Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x46b)],Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x46b)]=function(){const _0x21d3d2=_0x1a3244;if(this[_0x21d3d2(0x64b)]===_0x21d3d2(0x194))return;if(Input[_0x21d3d2(0x5cd)]())return;VisuMZ['CoreEngine']['Window_NameInput_cursorPageup'][_0x21d3d2(0x38c)](this),this['switchModes']('default');},VisuMZ[_0x1a3244(0x38a)]['Window_NameInput_refresh']=Window_NameInput[_0x1a3244(0x44d)][_0x1a3244(0x4c4)],Window_NameInput[_0x1a3244(0x44d)]['refresh']=function(){const _0xd39440=_0x1a3244;if(this['_mode']===_0xd39440(0x194)){this[_0xd39440(0x30c)][_0xd39440(0x222)](),this[_0xd39440(0x1ce)][_0xd39440(0x222)](),this['resetTextColor']();let _0x13f214=VisuMZ[_0xd39440(0x38a)][_0xd39440(0x927)][_0xd39440(0x784)][_0xd39440(0x780)]['split']('\x0a'),_0xa87796=_0x13f214[_0xd39440(0x753)],_0x3f7750=(this[_0xd39440(0x281)]-_0xa87796*this[_0xd39440(0x55f)]())/0x2;for(let _0x174cf9=0x0;_0x174cf9<_0xa87796;++_0x174cf9){let _0x577c63=_0x13f214[_0x174cf9],_0x5f140a=this[_0xd39440(0x193)](_0x577c63)[_0xd39440(0x397)],_0xb97abf=Math['floor']((this[_0xd39440(0x30c)][_0xd39440(0x397)]-_0x5f140a)/0x2);this['drawTextEx'](_0x577c63,_0xb97abf,_0x3f7750),_0x3f7750+=this[_0xd39440(0x55f)]();}}else VisuMZ[_0xd39440(0x38a)][_0xd39440(0x664)][_0xd39440(0x38c)](this);};};function _0x2f97(){const _0x1dcc99=['getLastGamepadUsed','return\x200','COLON','code','maxLevel','refreshSpritesetForExtendedTiles','waiting','pictureButtons','initRotation','ParseEnemyNotetags','hide','NUMPAD1','NUMPAD0','isClosing','fillRect','_hp','BarThickness','mpColor','playBgm','_refreshPauseSign','_slotWindow','Game_Party_consumeItem','Mirror','isBottomHelpMode','setViewport','_offsetY','PictureEraseRange','IconParam5','createBackground','catchNormalError','terminate','touchUI','_srcBitmap','OkText','_onceParallelInterpreters','setTargetAnchor','MenuBg','MenuLayout','INOUTQUINT','systemColor','destroyScrollBarBitmaps','TRAIT_PARAM','damageColor','_saveFileID','_dimmerSprite','ExtractStrFromMap','eventsXyNt','Sprite_StateIcon_updateFrame','yScrollLinkedOffset','image-rendering','Conditional\x20Branch\x20Script\x20Error','initMembers','Game_Screen_initialize','setValue','_colorCache','ControllerMatches','getColorDataFromPluginParameters','isGamepadConnected','NewGameCommonEvent','KANA','_buttonType','ADD','isSceneMap','subtitle','actorWindowRect','REPLACE','vertJS','valueOutlineWidth','ExtractStrFromList','itemWindowRect','maxHorz','Spriteset_Base_initialize','IconSParam7','_effectsContainer','layoutSettings','Spriteset_Battle_createEnemies','animationNextDelay','IconXParam2','(\x5cd+\x5c.?\x5cd+)>','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','xparamRate','sparamRate2','blendFunc','test','wholeDuration','DETACH_PICTURE_CONTAINER','INOUTEXPO','F16','SParamVocab3','isEventTest','Scene_Map_initialize','learnings','GoldRect','xparamPlus','DisplayedParams','framesMin','originalJS','_listWindow','_defaultStretchMode','maxLvGaugeColor1','GoldIcon','_timeDuration','initVisuMZCoreEngine','updateSmoothScroll','thickness','MAX_SAFE_INTEGER','buttonAssistText%1','fromCharCode','drawTextEx','mpGaugeColor1','Game_Picture_move','equips','Tilemap_addSpotTile','ATK','keys','Window_Base_drawIcon','_hideButtons','maxItems','setMute','pos','_encounterCount','resize','TRG','mute','Gold','App','Window_Base_createTextState','_height','getButtonAssistLocation','isSmartEventCollisionOn','KeyUnlisted','ARRAYSTR','ListBgType','2mjpaUs','playOnceParallelInterpreter','F20','Sprite_Gauge_gaugeRate','Window_TitleCommand_selectLast','addQueue','_textQueue','targetScaleX','QoL','cancel','BACKSPACE','font','AutoStretch','EVA','Game_Interpreter_updateWaitMode','IconSParam4','replace','Linear','Window_Selectable_processTouch','WIN_OEM_CUSEL','setBackgroundType','buttonAssistWindowRect','mhp','ExportStrFromAllMaps','TextCodeNicknames','onload','Duration','ColorTPGauge1','IconParam0','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Opacity','drawActorExpGauge','EnableNameInput','targetSpritePosition','outlineColor','PTB','loadBitmapCoreEngine','_digitGrouping','targets','Spriteset_Base_update','updateLastTarget','createTextPopupWindow','Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.','getLastUsedGamepadType','_actor','param','needsUpdate','setAttack','_stored_powerUpColor','lastAnimationSprite','OutlineColorGauge','randomJS','globalAlpha','recoverAll','IconXParam8','Scene_Boot_loadSystemImages','enable','VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2','AccuracyBoost','_pictureCoordinatesWindow','MULTIPLY','SkillTypeBgType','overallWidth','LATIN1','inBattle','BattleManager_processEscape','getBackgroundOpacity','bgm','Game_Map_scrollLeft','viewport','etypeId','INOUTQUART','DigitGroupingLocale','maxCols','clearRect','CorrectSkinBleeding','reserveCommonEvent','RepositionActors','makeCoreEngineCommandList','SwitchToggleRange','LUK','updatePositionCoreEngineShakeVert','_destroyInternalTextures','Scene_Base_terminateAnimationClearBugFix','BACK_QUOTE','initCoreEngine','ColorHPGauge1','AudioChangeBgsPitch','NewGameBoot','_texture','ExportCurMapText','removeFauxAnimation','scaleY','_baseTexture','OUTCUBIC','volume','tileWidth','BannedWords','itemEva','This\x20scene\x20cannot\x20utilize\x20a\x20Once\x20Parallel!','initRotationCoreEngine','isArrowPressed','deathColor','_updateGamepadState','playBgs','DigitGroupingStandardText','measureTextWidthNoRounding','battleSystem','F7key','xparam','jsQuickFunc','currentClass','erasePicture','createFauxAnimationQueue','gameTitle','playCursor','_refreshArrows','Bitmap_initialize','_text','3239607bQpmuH','ActorTPColor','Scene_Battle_createCancelButton','isInputting','Scene_MenuBase_createBackground','_makeFontNameText','$dataMap','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_isWindow','createButtonAssistWindow','add','onButtonImageLoad','hpColor','isOptionValid','drawBackground','markCoreEngineModified','ColorExpGauge2','MCR','loadTitle1','ParamArrow','getGamepads','xparamFlatJS','isGamepadButtonPressed','selectLast','goldWindowRect','Bitmap_strokeRect','_stored_mpCostColor','ItemBackColor1','WIN_ICO_CLEAR','playTestF6','_lastX','ParseWeaponNotetags','GoldChange','targetContentsOpacity','makeAutoBattleActions','%1〘Choice\x20%2〙\x20%3%1','_shakeDuration','_balloonQueue','_timerSprite','maxLvGaugeColor2','Scene_Map_createMenuButton','playTestShiftR','_pressed','backOpacity','_stored_mpGaugeColor1','setupButtonImage','DEF','ShowScrollBar','tilesets','paramRate2','_forcedTroopView','clearStencil','note','VisuMZ_2_BattleSystemETB','padding','buttonAssistOffset5','registerCommand','moveRelativeToResolutionChange','checkCacheKey','isMVAnimation','BarOffset','_clientArea','Window_Gold_refresh','AntiZoomPictures','toLocaleString','vert','inbounce','TAB','PictureCoordinatesMode','setupNewGame','tileset','createScrollBarSprites','DELETE','OptionsRect','Game_Action_itemHit','ParamName','buttonAssistCancel','destroyed','SideButtons','backgroundBitmap','visible','setupCoreEngine','Window_Base_destroyContents','calcEasing','setSideButtonLayout','OUTQUART','Rate2','windowRect','BattleManager_checkSubstitute','_forcedBattleGridSystem','ARRAYFUNC','〘Scrolling\x20Text〙\x0a','drawActorNickname','ParamMax','isLoopVertical','Game_Map_scrollUp','altKey','onerror','EQUALS','match','tileHeight','ctrlKey','RightMenus','_fauxAnimationQueue','Game_Action_itemEva','buttonAssistWindowSideRect','Game_Interpreter_command105','createTextState','5jwBzIN','Window','EquipMenu','Smooth','playTestF7','DurationPerChat','createTileExtendSprites','Scene_MenuBase_createPageButtons','picture','skillTypeWindowRect','applyEasingAnglePlus','gradientFillRect','setCoreEngineUpdateWindowBg','Game_Event_start','top','Settings','buttonAssistOk','_pagedownButton','showPointAnimations','INOUTQUAD','coreEngineRepositionEnemies','substring','HANJA','getInputMultiButtonStrings','sparamPlusJS','TPB\x20ACTIVE','XParamVocab6','_registerKeyInput','seek','_displayX','_width','ARRAYJSON','bitmapHeight','3671630BENuLJ','addCommand','loadTileBitmap','CallHandlerJS','([\x5c+\x5c-]\x5cd+)([%％])>','checkSubstitute','status','mainAreaHeight','SCROLL_LOCK','adjustBoxSize','setSize','Speed','InputRect','1.4.4','events','drawBackgroundRect','parseForcedGameTroopSettingsCoreEngine','StatusEquipBgType','HelpBgType','ImprovedAccuracySystem','VariableEvalReference','gainGold','OffBarColor','Game_Action_setAttack','XParamVocab7','categoryWindowRect','subject','_action','%1%2','performEscape','ParseActorNotetags','name','1832000iAJZam','processFauxAnimationRequests','scrollbar','CEV','_list','_targetY','createPointAnimationQueue','cos','_rate','Sprite_Animation_processSoundTimings','MainMenu','_startLoading','PAUSE','Game_Action_numRepeats','repositionCancelButtonSideButtonLayout','ColorTPCost','2318200BTkeWy','xparamFlat1','updateBgmParameters','textSizeEx','keyboard','layeredTiles','TextJS','endAnimation','INBACK','_cancelButton','_lastIconIndex','NameMenu','ALWAYS','WASD','CategoryRect','createPointAnimationSprite','paramBase','_centerElement','CONTEXT_MENU','initDigitGrouping','Page','BTestAddedQuantity','_screenX','integer','Padding','_windowLayer','exportAllMapStrings','_backSprite2','_scaleY','format','areButtonsOutsideMainUI','editWindowRect','SceneManager_onKeyDown','BattleManager_update','VIEWPORT','isClosed','WIN_OEM_FJ_JISHO','DashToggleR','ColorHPGauge2','Game_Temp_initialize','PageChange','ENTER_SPECIAL','CANCEL','Wait','resetTextColor','TitleCommandList','ImgLoad','pop','SParamVocab5','expGaugeColor2','useFontWidthFix','EXR','buttonAssistKey2','Window_NumberInput_processDigitChange','IconXParam4','checkPlayerLocation','FTB','Sprite_Gauge_currentValue','mainAreaBottom','getKeyboardInputButtonString','SParamVocab4','_stored_ctGaugeColor2','contentsBack','OPEN_PAREN','WIN_OEM_PA1','SystemLoadAudio','OpenConsole','anchorCoreEasing','paramMax','_muteSound','loadGameImagesCoreEngine','savefileInfo','DataManager_setupNewGame','PositionJS','JSON','members','createTroopNote','DigitGroupingExText','DetachMapPictureContainer','seVolume','isOpen','isFauxAnimationPlaying','_subject','Spriteset_Base_updatePosition','setSkill','ColorMPCost','SystemSetSideView','updateRotation','updateMainMultiply','resetFontSettings','createKeyJS','Untitled','onlyfilename','buttonAssistOffset3','IconXParam5','style','MEV','pageup','refreshDimmerBitmap','isInstanceOfSceneMap','_currentMap','movePageButtonSideButtonLayout','open','SmartEventCollisionPriority','checkScrollBarBitmap','DummyRect','Script\x20Call\x20Error','endAction','ParamChange','showPicture','_stored_tpGaugeColor1','isSideView','_onLoad','getInputButtonString','DigitGroupingGaugeSprites','setGuard','_customModified','updateDocumentTitle','platform','_pointAnimationSprites','exit','SystemLoadImages','processEscape','240900OAmzzz','WIN_OEM_COPY','outbounce','Input_onKeyDown','windowPadding','ItemRect','_stored_powerDownColor','pagedownShowButton','nw.gui','sin','data/','alwaysDash','description','MDR','addAnimationSpriteToContainer','PreserveNumbers','%1:\x20Exit\x20','IconXParam1','addLoadListener','MaxDuration','mpGaugeColor2','VisuMZ_1_OptionsCore','updatePadding','clear','Title','commandWindowRows','mainCommandWidth','Type','iconHeight','_targetOpacity','OPEN_CURLY_BRACKET','_shiftY','_skillTypeWindow','QUOTE','_onKeyPress','<%1\x20%2:[\x20]','State-%1-%2','_sellWindow','refreshActor','ItemHeight','translucentOpacity','targetEvaRate','stretch','advanced','SceneManager_isGameActive','_digitGroupingEx','ApplyEasing','_targetX','Scene_MenuBase_createCancelButton','StatusMenu','changeTextColor','WIN_OEM_JUMP','PictureEasingType','loadTitle2','SubfolderParse','SLEEP','IconSet','IconSParam5','_spriteset','sparamFlat2','onNameOk','loadBitmap','Enemy-%1-%2','iconWidth','Sprite_Actor_setActorHome','Scene_Boot_updateDocumentTitle','STENCIL_TEST','scrollY','onKeyDown','createChildSprite','SELECT','Rate1','command111','paramFlatBonus','value','exportAllTroopStrings','NumberRect','VisuMZ_1_BattleCore','INOUTBACK','mainAreaTopSideButtonLayout','alphabetic','_lastGamepad','goto','Game_Picture_calcEasing','RegExp','levelUpRecovery','removePointAnimation','updatePointAnimations','ShiftR_Toggle','doesNameContainBannedWords','dropItems','meVolume','BgFilename1','getControllerInputButtonMatch','battlebacks1','updateDashToggle','enabled','helpAreaBottom','VisuMZ_2_BattleSystemBTB','applyEasing','mainFontSize','Game_Picture_initBasic','Version','_screenY','_coreEngineShakeStyle','prepareNextScene','PRESERVCONVERSION(%1)','inputWindowRect','clamp','(\x5cd+)>','_opacity','ExportAllMapText','CommandList','BlurFilter','setSideView','command357','push','BgFilename2','innerHeight','makeInputButtonString','updateFrameCoreEngine','_colorTone','TextCodeClassNames','_destroyCanvas','updateDuration','_cacheScaleX','MRF','Game_BattlerBase_initMembers','makeDeepCopy','Scene_Skill_create','split','applyForcedGameTroopSettingsCoreEngine','CreateBattleSystemID','Window_Base_drawCharacter','updateOpacity','initialize','enemies','RowSpacing','_addSpotTile','_targetScaleX','ParseClassNotetags','abs','ExportCurTroopText','list','_shouldPreventDefault','〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','updateEffekseer','OutlineColorDmg','isAnimationPlaying','operation','FunctionName','setupRate','Scene_Status_create','getCombinedScrollingText','xparamFlatBonus','Scene_Battle_createSpriteset','startMove','SCROLLBAR','BTestWeapons','isKeyItem','ConvertNumberToString','smooth','down','Game_Picture_y','getLevel','button','sparam','drawActorLevel','processMoveCommand','makeFontSmaller','updateBgsParameters','titles2','createTilemap','BarBodyColor','Window_NumberInput_start','setActorHomeRepositioned','randomInt','paramName','ActorBgType','framesMax','%1\x0a','gold','centerCameraCheckData','default','hpGaugeColor1','Game_Picture_initRotation','SystemSetFontSize','sparamPlus','LevelUpFullHp','moveMenuButtonSideButtonLayout','context','setupTileExtendTerrainTags','offset','isAnimationOffsetXMirrored','RevertPreserveNumbers','CustomParamAbb','SplitEscape','paramY','buttonAssistKey3','getCoreEngineScreenShakeStyle','processBack','updatePictureCoordinates','Sprite_AnimationMV_processTimingData','drawTextTopAligned','onKeyDownKeysF6F7','TGR','adjustX','NON_FRAME','buttonAreaHeight','get','nextLevelExp','applyCoreEasing','Color','openness','scrollUp','runCombinedScrollingTextAsCode','Show\x20Scrolling\x20Text\x20Script\x20Error','EditRect','drawNewParam','ZOOM','consumable','bind','StatusParamsBgType','string','_stored_tpCostColor','GREATER_THAN','PictureID','_optionsWindow','retreat','mmp','deselect','_previousClass','turn','drawGauge','IconParam1','_stored_gaugeBackColor','TextStr','consumeItem','CustomParamIcons','SaveMenu','quit','ModernControls','\x20Origin:\x20%1','《《《\x20Page\x20%1\x20》》》\x0a%2\x0a','isPlaytest','IconSParam3','updateTransform','xparamPlus1','ESC','Scene_Options_create','_addShadow','IconParam4','catchLoadError','vertical','ControllerButtons','processDigitChange','number','contents','Scene_Base_create','result','IconSParam0','DimColor1','_stored_maxLvGaugeColor2','floor','Game_Interpreter_command111','SlotRect','processKeyboardBackspace','Scene_MenuBase_helpAreaTop','isFullDocumentTitle','GoldBgType','switchModes','SPACE','_profileWindow','MDF','setLastGamepadUsed','isAnimationForEach','setup','VOLUME_MUTE','PA1','buttonAssistOffset1','Scene_Boot_onDatabaseLoaded','Window_NameInput_cursorUp','Scene_Battle_createSpriteset_detach','DEFAULT_SHIFT_Y','send','Spriteset_Base_destroy','ctrl','playOk','_mapY','ColorPowerDown','_stored_tpGaugeColor2','AudioChangeBgsVolume','XParamVocab8','FontSmoothing','drawGameTitle','playBuzzer','GoldOverlap','startNormalGame','isTouchedInsideFrame','escape','_sideButtonLayout','Center','VisuMZ_2_BattleSystemCTB','_lastScrollBarValues','paintOpacity','IconSParam2','updatePositionCoreEngineShakeHorz','ctGaugeColor1','numRepeats','Spriteset_Map_createTilemap','getPointAnimationLayer','_changingClass','Game_Interpreter_PluginCommand','Input_pollGamepads','dimColor1','_tilemap','isEnabled','Scene_Name_onInputOk','overallHeight','setLastPluginCommandInterpreter','BottomHelp','updateScrollBarVisibility','createSubSprite','removeOnceParallelInterpreter','SParamVocab2','isActor','updateWaitMode','AudioChangeBgsPan','Basic','_paramPlus','isForFriend','Upper\x20Left','onDatabaseLoaded','\x5c}❪TAB❫\x5c{','ExportString','updatePictureAntiZoom','animationShouldMirror','displayY','baseId','createSpriteset','CTRL','charCode','_number','zoomScale','ScaleX','_backSprite1','drawCircle','Sprite_Battler_startMove','IconXParam6','_maxDigits','_pictureContainer','KeySHIFT','_shakeSpeed','Map%1','createPageButtons','EISU','Window_MapName_refresh','scaleX','Window_Base_update','processTouchModernControls','_logWindow','canUse','keyMapper','【%1】\x0a','_playTestFastMode','DATABASE','scrollDown','_name','PERIOD','Input_shouldPreventDefault','initMembersCoreEngine','INCUBIC','center','setMoveEasingType','Param','_stored_deathColor','crisisColor','pictureId','encounterStep','CommandRect','\x0a\x0a\x0a\x0a\x0a','_numberWindow','normal','CoreEngine','END','call','HIT','paramchangeTextColor','xparamFlat2','INQUINT','targetY','setupFont','textHeight','left','createCustomParameter','pressed','width','pagedown','adjustSprite','itemPadding','expGaugeColor1','target','_refreshBack','operand','_realScale','AutoScrollLockX','ButtonAssist','OUTQUAD','_textPopupWindow','DIVIDE','CategoryBgType','BlendMode','_shakePower','isMenuButtonAssistEnabled','ActorRect','isWindowMaskingEnabled','_context','SideView','option','up2','Window_Base_initialize','drawParamText','buttonAssistSwitch','Bitmap_drawTextOutline','setupValueFont','characters','_origin','DECIMAL','_drawTextOutline','Layer','Flat1','SParamVocab8','_dummyWindow','StatusBgType','Input_update','activate','centerY','tpColor','buttonAssistText1','removeChild','ColorCTGauge1','INQUAD','OS_KEY','_centerCameraCheck','Bitmap_drawCircle','skillTypes','SwitchRandomizeRange','SParamVocab0','NewGameCommonEventAll','Graphics_printError','tpGaugeColor1','gaugeHeight','Graphics','min','SParamVocab9','saveViewport','show','XParamVocab9','_onKeyDown','VisuMZ_2_BattleSystemPTB','determineSideButtonLayoutValid','PLUS','OUTBACK','Window_Selectable_cursorDown','_lastOrigin','NUMPAD2','tab','MvAnimationRate','getColor','isGameActive','targetObjects','itemHit','isUseModernControls','createWindowLayer','_repositioned','getTileExtendTerrainTags','ProfileRect','ButtonHeight','_pictureName','Window_Selectable_itemRect','onInputOk','_commandList','MAXMP','_goldWindow','DefaultStyle','connected','Window_refreshBack','_animationSprites','FontSize','powerUpColor','bitmap','itemHitImprovedAccuracy','updateData','_inputSpecialKeyCode','STB','ExportAllTroopText','snapForBackground','hit','SETTINGS','BTB','parallaxes','OUTSINE','itemLineRect','catchException','redraw','ExtJS','Scene_Boot_startNormalGame','Game_Map_scrollRight','stypeId','targetScaleY','_gamepadWait','createEnemies','Pixelated','_anchor','areButtonsHidden','_offsetX','ETB','process_VisuMZ_CoreEngine_Settings','refreshWithTextCodeSupport','initBasic','setActorHome','%1〘Choice\x20Cancel〙%1','MinDuration','Map%1.json','CLOSE_BRACKET','itemBackColor2','drawText','parameters','isPhysical','F18','_pageupButton','drawFace','_scrollBarHorz','faceWidth','F17','filterArea','process_VisuMZ_CoreEngine_Functions','makeTargetSprites','INSINE','_displayY','PHA','Power','useDigitGroupingEx','RequireFocus','titles1','NumberBgType','keyRepeatWait','INSERT','Game_Picture_scaleY','down2','_moveEasingType','drawValue','targetBackOpacity','sqrt','windowOpacity','Sprite_Button_initialize','Scene_Battle_createSpritesetFix','updateShadow','measureTextWidth','titleCommandWindow','KEEP','targetPosition','UpdatePictureCoordinates','BackOpacity','_backgroundFilter','_mainSprite','processCursorMove','updateCoreEasing','concat','_editWindow','fillAll','Game_Picture_updateRotation','_stored_hpGaugeColor1','CIRCUMFLEX','atbActive','Scene_Map_createSpriteset_detach','rowSpacing','destroy','prototype','ShortcutScripts','ColorSystem','buttonAssistKey5','CustomParamNames','origin','_createInternalTextures','VOLUME_DOWN','Mute','Game_BattlerBase_refresh','animationBaseDelay','Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages','Scene_Map_createSpritesetFix','SUBTRACT','gaugeLineHeight','maxScrollbar','playEscape','helpWindowRect','angle','checkPassage','maxScrollX','pow','drawGameSubtitle','INELASTIC','imageSmoothingEnabled','onActorChange','command355','fadeSpeed','processKeyboardDelete','update','cursorPageup','BattleSystem','_clickHandler','maxTp','eva','SlotBgType','xparamRate1','isTriggered','cancelShowButton','BuyBgType','focus','outlineColorDmg','mirror','easingType','targetX','Sprite_Button_updateOpacity','buttonAssistText5','backspace','removeAnimationFromContainer','processKeyboardHandling','openURL','areTileShadowsHidden','Bitmap_clearRect','WIN_OEM_AUTO','currentExp','BACK_SLASH','Bitmap_gradientFillRect','addOnceParallelInterpreter','destroyCoreEngineMarkedBitmaps','adjustPictureAntiZoom','GRD','BottomButtons','updateBackOpacity','updateScrollBars','loadSystem','storeMapData','clearOnceParallelInterpreters','SEMICOLON','SParamVocab6','CAPSLOCK','StatusParamsRect','isAutoColorAffected','isBusy','paramFlatJS','Scene_Shop_create','updatePosition','initCoreEasing','<JS\x20%1\x20%2:[\x20](.*)>','Game_Interpreter_command355','currentValue','bitmapWidth','Scene_Item_create','SnapshotOpacity','_pauseSignSprite','CRSEL','ceil','Chance','updateMain','createCustomBackgroundImages','smoothSelect','Troop%1','loadWindowskin','Total','command105','_stored_mpGaugeColor2','Once\x20Parallel\x20for\x20Battle\x20requires\x20VisuMZ_1_BattleCore!','initCoreEngineScreenShake','Input_updateGamepadState','GameEnd','〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','object','_index','TitlePicButtons','Manual','showFauxAnimations','TextFmt','Window_NameInput_cursorLeft','TCR','paramX','xparamRate2','updateKeyText','processCursorMoveModernControls','isCollidedWithEvents','_originalViewport','addEventListener','evaluate','_iconIndex','GoldMax','processKeyboardHome','refresh','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','bgsVolume','OTB','nah','updatePositionCoreEngine','blockWidth','ParseTilesetNotetags','_lastCommandSymbol','executeLoad','ZERO','EndingID','_targetOffsetX','AnimationPoint','updateFauxAnimations','contentsOpacity','makeFontBigger','_pictureCoordinatesMode','ProfileBgType','PictureRotateBy','hpGaugeColor2','updateOnceParallelInterpreters','defaultInputMode','Actor','_stored_ctGaugeColor1','SystemSetWindowPadding','VisuMZ_2_BattleSystemSTB','retrievePointAnimation','Sprite_destroy','sceneTerminationClearEffects','makeCommandList','expParams','Exported_Script_%1.txt','_startPlaying','_coreEasing','DamageColor','IconParam3','shift','canEquip','INBOUNCE','MapOnceParallel','_commandWindow','filter','ExportStrFromAllTroops','enter','changeAnglePlusData','Window_NameInput_cursorPagedown','start','SwitchToggleOne','Game_Map_setup','_bgsBuffer','setCommonEvent','_stored_systemColor','flush','isItem','buttonAssistKey1','move','Window_EquipItem_isEnabled','_tileExtendTerrainTags','LESS_THAN','1.3.0','scrollX','useDigitGrouping','apply','pages','ColorTPGauge2','CONVERT','removeAllPointAnimations','_buttonAssistWindow','pendingColor','\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','win32','usableSkills','Y:\x20%1','cursorLeft','BuyRect','Window_ShopSell_isEnabled','_fauxAnimationSprites','pointY','makeActionList','indexOf','moveCancelButtonSideButtonLayout','SParameterFormula','STENCIL_BUFFER_BIT','_downArrowSprite','system','_movementWholeDuration','updatePlayTestF7','DrawItemBackgroundJS','renderNoMask','Game_Actor_changeClass','max','endBattlerActions','881646WgMmJK','charAt','statusEquipWindowRect','_blank','_lastY','Window_Base_createContents','INQUART','ScreenResolution','_eventId','baseTextRect','processSoundTimings','deflate','OUTQUINT','BlurStrength','repositionEnemiesByResolution','ColorMaxLvGauge2','loadTileset','NUM','Name','createFauxAnimation','ColorCrisis','Bitmap_drawText','isPointAnimationPlaying','createPointAnimationTargets','wtypeId','IconParam2','refreshScrollBarBitmap','_mapNameWindow','GoldFontSize','paramRateJS','scrollRight','printError','contains','cursorDown','MAXHP','_helpWindow','parse','Subtitle','_bgmBuffer','Scene_Map_createSpriteset','OptionsMenu','tilesetFlags','DisplayLockY','LvExpGauge','levelUp','terms','OffBarOpacity','WIN_OEM_FINISH','FadeSpeed','〘Show\x20Text〙\x0a','Graphics_defaultStretchMode','buttonAssistWindowButtonRect','ARRAYSTRUCT','calcCoreEasing','DOLLAR','_animationQueue','Game_Troop_setup','drawRightArrow','jsonToZip','onXhrError','CancelText','PGDN','lineHeight','27rmViNP','constructor','Window_NameInput_cursorDown','CrisisRate','filters','SellBgType','end','Abbreviation','updateText','level','TimeProgress','RepositionEnemies130','_backSprite','xdg-open','numActions','includes','getControllerInputButtonString','NUMPAD9','NUMPAD7','setAction','updatePositionCoreEngineShakeRand','ExtDisplayedParams','ColorCTGauge2','paramValueByName','adjustY','createAnimationSprite','ParseArmorNotetags','_allTextHeight','horizontal','CLEAR','Tilemap_addShadow','_internalTextures','en-US','Actor-%1-%2','findSymbol','height','_movementDuration','makeDocumentTitle','menu','successRate','_mapX','updateMotion','cursorUp','index','_statusParamsWindow','processHandling','stencilOp','ShiftT_Toggle','isEventRunning','Finish','worldTransform','isSceneBattle','Enable','Scene_Title_drawGameTitle','random','PictureRotate','drawSegment','InputBgType','removeAnimation','_tile','_data','scrollLeft','_scrollDuration','PDR','blt','select','wait','Plus1','_itemWindow','INOUTELASTIC','command122','Window_NameInput_processHandling','Scene_SingleLoadTransition','_mp','OutlineColor','Bitmap_measureTextWidth','Weapon-%1-%2','QwertyLayout','FDR','Max','Control\x20Variables\x20Script\x20Error','updatePositionCoreEngineShakeOriginal','setEasingType','drawGoldItemStyle','createJsQuickFunction','statusParamsWindowRect','key%1','CtrlQuickLoad','render','_animation','version','Unnamed','Window_StatusBase_drawActorLevel','buttonAssistText3','dimColor2','text%1','alpha','clearZoom','playMiss','_buyWindow','toUpperCase','_anglePlus','FontShadows','isNextScene','anglePlus','createExtendedTileSprite','Scene_Map_updateMain','makeEncounterCount','smallParamFontSize','isNumpadPressed','_currentBgm','Scene_Map_updateScene','PictureEraseAll','showDevTools','isRepeated','LevelUpFullMp','ValueJS','_targetScaleY','XParameterFormula','setTileFrame','WIN_OEM_PA2','AMPERSAND','updateOpen','helpAreaHeight','TranslucentOpacity','setActionState','NUM_LOCK','84452eymTiF','allowShiftScrolling','EnableMasking','EREOF','RPGMAKER_VERSION','WIN_OEM_FJ_LOYA','REC','updateClose','%1/','loadIconBitmap','StatusEquipRect','Window_Selectable_cursorUp','itypeId','ActorMPColor','buttonAssistText4','DrawIcons','_battleField','getCustomBackgroundSettings','helpAreaTopSideButtonLayout','Window_NameInput_cursorRight','ALT','SEPARATOR','optSideView','NONCONVERT','actor','traitObjects','KeyItemProtect','ForceNoPlayTest','RepositionEnemies','Enemy','cursorPagedown','_isButtonHidden','evade','createDimmerSprite','batch','params','MODECHANGE','padZero','performMiss','dashToggle','log','processAlwaysEscape','IDs','Bitmap_blt','reduce','ARRAYNUM','right','arePageButtonsEnabled','playCancel','_forcedBattleSys','_bitmap','BasicParameterFormula','CRI','MRG','setupCoreEasing','INOUTCUBIC','VOLUME_UP','sparamFlatJS','mev','itemBackColor1','Scene_Menu_create','_actorWindow','IconXParam7','WIN_OEM_ENLW','onClick','NUMPAD8','displayX','XParamVocab5','Keyboard','Sprite_Animation_setViewport','addWindow','_image','_patternHeight','save','ColorManager_loadWindowskin','CustomParamType','VariableJsBlock','%2%1%3','AnimationID','sparamPlus2','_inputString','drawGameVersion','textAlign','BTestItems','_storedMapText','buttonAssistOffset2','loadMapData','destroyContents','StartID','_stored_pendingColor','initialLevel','WIN_OEM_WSCTRL','stop','requiredWtypeId1','Game_Map_setDisplayPos','LoadMenu','ShowDevTools','Flat','createContents','catchUnknownError','Scene_MenuBase_mainAreaTop','ConvertParams','centerX','repeat','ACCEPT','opacity','cursorRight','ParseAllNotetags','_mode','mapId','SellRect','attackSkillId','children','playtestQuickLoad','_statusWindow','maxBattleMembers','LEFT','getParameter','_hideTileShadows','setupCustomRateCoreEngine','%1〘End\x20Choice\x20Selection〙%1','addChild','close','Game_System_initialize','IconXParam9','Scene_Load','GroupDigits','getLastPluginCommandInterpreter','stringKeyMap','F23','Key%1','sv_enemies','horzJS','Window_NameInput_refresh','exec','isLoopHorizontal','child_process','process_VisuMZ_CoreEngine_CustomParameters','Input_setupEventHandlers','DisplayLockX','process_VisuMZ_CoreEngine_RegExp','Sprite_AnimationMV_updatePosition','isScrollBarVisible','setFrame','_tileSprite','horz','_target','sparamRateJS','SkillMenu','ParseItemNotetags','setMainFontSize','processCursorHomeEndTrigger','isGamepadTriggered','createCancelButton','INEXPO','helpAreaTop','TextManager_param','isTpb','processPointAnimationRequests','BgType','statusWindowRect','loadSystemImages','initialBattleSystem','requestFauxAnimation','reserveNewGameCommonEvent','Window_StatusBase_drawActorSimpleStatus','process_VisuMZ_CoreEngine_jsQuickFunctions','bgmVolume','animations','active','Match','ShowJS','paramBaseAboveLevel99','item','offOpacity','Window_NameInput_cursorPageup','isMapScrollLinked','_onError','updateFrame','_targetAnchor','_CoreEngineSettings','boxHeight','gaugeBackColor','shake','Scene_GameEnd_createBackground','resetBattleSystem','fontSize','X:\x20%1','ShowItemBackground','setWindowPadding','shouldAutosave','ExtractStrFromTroop','ListRect','Location','_scrollBarVert','_windowskin','Symbol','_startDecrypting','processTouch','_cache','Graphics_centerElement','join','SceneManager_initialize','remove','Scene_MenuBase_mainAreaHeight','Game_Map_scrollDown','process_VisuMZ_CoreEngine_Notetags','canAttack','Input_clear','type','current','isTileExtended','drawCharacter','scrollbarHeight','bodyColor','Skill-%1-%2','#%1','Window_Selectable_processCursorMove','isActiveTpb','PERCENT','updateScrollBarPosition','Window_Selectable_drawBackgroundRect','OUTCIRC','F24','and\x20add\x20it\x20onto\x20this\x20one.','Game_Action_updateLastTarget','F13','_stored_normalColor','Bitmap_resize','StatusRect','_cacheScaleY','setAnchor','setViewportCoreEngineFix','VisuMZ_2_BattleSystemFTB','Game_Picture_show','_viewportSize','Window_Base_drawText','defineProperty','innerWidth','TILDE','KeyTAB','traitsPi','text','isCancelled','evaded','isRightInputMode','DebugConsoleLastControllerID','LineHeight','textColor','WIN_ICO_00','valueOutlineColor','maxVisibleItems','showIncompleteTilesetError','Scene_Base_createWindowLayer','CommonEventID','scaleSprite','buttonAssistKey4','ParseSkillNotetags','Plus','checkSmartEventCollision','BaseTexture','_storedStack','round','checkCoreEngineDisplayCenter','itemHeight','PixelateImageRendering','HRG','COMMA','_categoryWindow','_duration','drawIconBySize','toString','toLowerCase','ColorMPGauge1','commandWindowRect','drawItem','sellWindowRect','Sprite_Picture_updateOrigin','onEscapeSuccess','F22','createFauxAnimationSprite','EQUAL','pitch','duration','allTiles','openingSpeed','font-smooth','WIN_OEM_RESET','dummyWindowRect','slice','ALTGR','process_VisuMZ_CoreEngine_ControllerButtons','F6key','updateAnglePlus','META','CNT','Game_Character_processMoveCommand','Scene_TitleTransition','VisuMZ_2_BattleSystemOTB','WIN_ICO_HELP','asin','sv_actors','playCursorSound','xScrollLinkedOffset','drawIcon','Window_Scrollable_update','isPlaying','create','startAutoNewGame','tpGaugeColor2','ItemStyle','paramFlat','subjectHitRate','INOUTSINE','setBackgroundOpacity','ONE','setupBattleTestItems','IconSParam9','_currentBgs','_tileExtendSprites','_playtestF7Looping','setHandler','Bitmap_fillRect','TPB\x20WAIT','img/%1/','_targetOffsetY','removeTileExtendSprites','sparamFlatBonus','isSideButtonLayout','processKeyboardDigitChange','_stored_crisisColor','Game_Picture_scaleX','playTestShiftT','popScene','map','HYPHEN_MINUS','_commonEventLayers','sparamRate','_backgroundSprite','pixelated','isPressed','WIN_OEM_CLEAR','Scene_Equip_create','createTitleButtons','isHandled','_scaleX','initButtonHidden','PositionY','textWidth','isSpecialCode','CommandBgType','drawActorSimpleStatus','TextPopupShow','_inputWindow','HelpRect','strokeRect','CLOSE_CURLY_BRACKET','processKeyboardEnd','sparamPlus1','isNwjs','isNormalPriority','_targets','setAnglePlusData','EnableJS','Game_Picture_updateMove','_setupEventHandlers','faceHeight','_active','ButtonFadeSpeed','gaugeRate','processTimingData','xparamRateJS','length','INOUTCIRC','_drawTextShadow','setHome','framesPerChar','Scene_Map_update','LINEAR','maxScrollY','Sprite_StateIcon_loadBitmap','EditBgType','DimColor2','setCoreEngineScreenShakeStyle','paramPlusJS','ColorNormal','home','rgba(0,\x200,\x200,\x200.7)','ItemBgType','ctGaugeColor2','_upArrowSprite','PLAY','getBattleSystem','updateMove','MAT','fillStyle','HOME','application/json','_coreEasingType','mainAreaHeightSideButtonLayout','currencyUnit','URL','xparamPlusJS','SHIFT','EncounterRateMinimum','keyCode','disable','Scene_Battle_update','paramPlus','_lastPluginCommandInterpreter','changeClass','stencilFunc','WIN_OEM_ATTN','setEvent','animationId','Window_NameInput_initialize','clearForcedGameTroopSettingsCoreEngine','NameInputMessage','displayName','ScreenShake','removeAllFauxAnimations','KeyboardInput','AnimationMirrorOffset','darwin','buttonAssistKey%1','WindowLayer_render','createCommandWindow','onInputBannedWords','_battlerName','_pointAnimationQueue','FINAL','slotWindowRect','MAX_GL_TEXTURES','CTB','pan','itemSuccessRate','IconSParam8','maxGold','Window_NameInput_processTouch','createMenuButton','trim','Spriteset_Base_isAnimationPlaying','SceneManager_exit','GetParamIcon','_scene','ParseStateNotetags','ColorDeath','_url','prepare','_centerElementCoreEngine','isMaxLevel','setupScrollBarBitmap','([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>','reservePlayTestNewGameCommonEvent','BoxMargin','nickname','boxWidth','scale','expRate','AGI','Game_Picture_x','alignBottom','anchor','isGamepadAxisMoved','transform'];_0x2f97=function(){return _0x1dcc99;};return _0x2f97();}VisuMZ['CoreEngine'][_0x1a3244(0x510)]=Window_ShopSell[_0x1a3244(0x44d)][_0x1a3244(0x347)],Window_ShopSell[_0x1a3244(0x44d)]['isEnabled']=function(_0x252b4a){const _0xc7fb8c=_0x1a3244;return VisuMZ['CoreEngine']['Settings'][_0xc7fb8c(0x83d)][_0xc7fb8c(0x5f9)]&&DataManager[_0xc7fb8c(0x2aa)](_0x252b4a)?![]:VisuMZ[_0xc7fb8c(0x38a)][_0xc7fb8c(0x510)][_0xc7fb8c(0x38c)](this,_0x252b4a);},Window_NumberInput[_0x1a3244(0x44d)]['isUseModernControls']=function(){return![];};VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x784)]['EnableNumberInput']&&(VisuMZ['CoreEngine'][_0x1a3244(0x2b9)]=Window_NumberInput[_0x1a3244(0x44d)]['start'],Window_NumberInput[_0x1a3244(0x44d)][_0x1a3244(0x4f3)]=function(){const _0x19ef29=_0x1a3244;VisuMZ['CoreEngine'][_0x19ef29(0x2b9)][_0x19ef29(0x38c)](this),this[_0x19ef29(0x5a1)](this['_maxDigits']-0x1),Input['clear']();},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x1c5)]=Window_NumberInput['prototype'][_0x1a3244(0x30a)],Window_NumberInput[_0x1a3244(0x44d)][_0x1a3244(0x30a)]=function(){const _0x2bf79e=_0x1a3244;if(!this['isOpenAndActive']())return;if(Input[_0x2bf79e(0x5cd)]())this[_0x2bf79e(0x728)]();else{if(Input['isSpecialCode']('backspace'))this[_0x2bf79e(0x315)]();else{if(Input[_0x2bf79e(0x3f8)]===0x2e)this[_0x2bf79e(0x469)]();else{if(Input[_0x2bf79e(0x3f8)]===0x24)this['processKeyboardHome']();else Input[_0x2bf79e(0x3f8)]===0x23?this[_0x2bf79e(0x744)]():VisuMZ[_0x2bf79e(0x38a)]['Window_NumberInput_processDigitChange']['call'](this);}}}},Window_NumberInput['prototype'][_0x1a3244(0x441)]=function(){const _0x3e93db=_0x1a3244;if(!this['isCursorMovable']())return;Input[_0x3e93db(0x5cd)]()?this['processKeyboardDigitChange']():Window_Selectable[_0x3e93db(0x44d)][_0x3e93db(0x441)][_0x3e93db(0x38c)](this);},Window_NumberInput['prototype'][_0x1a3244(0x676)]=function(){},Window_NumberInput[_0x1a3244(0x44d)]['processKeyboardDigitChange']=function(){const _0xe67c1c=_0x1a3244;if(String(this[_0xe67c1c(0x361)])[_0xe67c1c(0x753)]>=this[_0xe67c1c(0x368)])return;const _0x3a2fe5=Number(String(this[_0xe67c1c(0x361)])+Input['_inputString']);if(isNaN(_0x3a2fe5))return;this['_number']=_0x3a2fe5;const _0x1706aa='9'[_0xe67c1c(0x646)](this[_0xe67c1c(0x368)]);this[_0xe67c1c(0x361)]=this[_0xe67c1c(0x361)]['clamp'](0x0,_0x1706aa),Input['clear'](),this[_0xe67c1c(0x4c4)](),SoundManager[_0xe67c1c(0x8a8)](),this[_0xe67c1c(0x5a1)](this['_maxDigits']-0x1);},Window_NumberInput[_0x1a3244(0x44d)][_0x1a3244(0x315)]=function(){const _0x31a237=_0x1a3244;this['_number']=Number(String(this[_0x31a237(0x361)])[_0x31a237(0x700)](0x0,-0x1)),this[_0x31a237(0x361)]=Math['max'](0x0,this[_0x31a237(0x361)]),Input[_0x31a237(0x222)](),this[_0x31a237(0x4c4)](),SoundManager[_0x31a237(0x8a8)](),this[_0x31a237(0x5a1)](this[_0x31a237(0x368)]-0x1);},Window_NumberInput[_0x1a3244(0x44d)][_0x1a3244(0x469)]=function(){const _0x3fb444=_0x1a3244;this[_0x3fb444(0x361)]=Number(String(this['_number'])[_0x3fb444(0x92d)](0x1)),this[_0x3fb444(0x361)]=Math[_0x3fb444(0x51f)](0x0,this['_number']),Input[_0x3fb444(0x222)](),this[_0x3fb444(0x4c4)](),SoundManager['playCursor'](),this[_0x3fb444(0x5a1)](this[_0x3fb444(0x368)]-0x1);},Window_NumberInput[_0x1a3244(0x44d)][_0x1a3244(0x4c3)]=function(){const _0x59bb91=_0x1a3244;if(this[_0x59bb91(0x58b)]()===0x0)return;Input[_0x59bb91(0x222)](),this[_0x59bb91(0x4c4)](),SoundManager[_0x59bb91(0x8a8)](),this[_0x59bb91(0x5a1)](0x0);},Window_NumberInput[_0x1a3244(0x44d)]['processKeyboardEnd']=function(){const _0x217294=_0x1a3244;if(this[_0x217294(0x58b)]()===this['_maxDigits']-0x1)return;Input['clear'](),this['refresh'](),SoundManager[_0x217294(0x8a8)](),this['select'](this[_0x217294(0x368)]-0x1);});;VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x36f)]=Window_MapName[_0x1a3244(0x44d)][_0x1a3244(0x4c4)],Window_MapName[_0x1a3244(0x44d)][_0x1a3244(0x4c4)]=function(){const _0x360657=_0x1a3244;VisuMZ[_0x360657(0x38a)]['Settings'][_0x360657(0x83d)]['MapNameTextCode']?this[_0x360657(0x411)]():VisuMZ[_0x360657(0x38a)][_0x360657(0x36f)][_0x360657(0x38c)](this);},Window_MapName[_0x1a3244(0x44d)]['refreshWithTextCodeSupport']=function(){const _0xa8d2ca=_0x1a3244;this['contents'][_0xa8d2ca(0x222)]();if($gameMap[_0xa8d2ca(0x781)]()){const _0x1d9090=this['innerWidth'];this[_0xa8d2ca(0x8ba)](0x0,0x0,_0x1d9090,this[_0xa8d2ca(0x55f)]());const _0x57f430=this[_0xa8d2ca(0x193)]($gameMap['displayName']())[_0xa8d2ca(0x397)];this[_0xa8d2ca(0x81c)]($gameMap[_0xa8d2ca(0x781)](),Math[_0xa8d2ca(0x312)]((_0x1d9090-_0x57f430)/0x2),0x0);}},Window_TitleCommand[_0x1a3244(0x3ec)]=VisuMZ['CoreEngine'][_0x1a3244(0x927)][_0x1a3244(0x1bd)],Window_TitleCommand[_0x1a3244(0x44d)][_0x1a3244(0x4e2)]=function(){const _0x4230c7=_0x1a3244;this[_0x4230c7(0x883)]();},Window_TitleCommand[_0x1a3244(0x44d)][_0x1a3244(0x883)]=function(){const _0x2cda8d=_0x1a3244;for(const _0x163f77 of Window_TitleCommand['_commandList']){if(_0x163f77[_0x2cda8d(0x68a)][_0x2cda8d(0x38c)](this)){const _0x24536d=_0x163f77['Symbol'];let _0x2c25cc=_0x163f77[_0x2cda8d(0x2f7)];if(['',_0x2cda8d(0x1eb)][_0x2cda8d(0x56f)](_0x2c25cc))_0x2c25cc=_0x163f77[_0x2cda8d(0x196)]['call'](this);const _0x21a934=_0x163f77[_0x2cda8d(0x74a)][_0x2cda8d(0x38c)](this),_0x3a67e2=_0x163f77[_0x2cda8d(0x404)][_0x2cda8d(0x38c)](this);this[_0x2cda8d(0x93a)](_0x2c25cc,_0x24536d,_0x21a934,_0x3a67e2),this[_0x2cda8d(0x720)](_0x24536d,_0x163f77[_0x2cda8d(0x93c)][_0x2cda8d(0x2e8)](this,_0x3a67e2));}}},VisuMZ[_0x1a3244(0x38a)]['Window_TitleCommand_selectLast']=Window_TitleCommand[_0x1a3244(0x44d)][_0x1a3244(0x8c3)],Window_TitleCommand[_0x1a3244(0x44d)][_0x1a3244(0x8c3)]=function(){const _0xda189a=_0x1a3244;VisuMZ[_0xda189a(0x38a)][_0xda189a(0x839)][_0xda189a(0x38c)](this);if(!Window_TitleCommand[_0xda189a(0x4cc)])return;const _0x188171=this[_0xda189a(0x582)](Window_TitleCommand[_0xda189a(0x4cc)]),_0x54d850=Math[_0xda189a(0x312)](this[_0xda189a(0x6da)]()/0x2)-0x1;this[_0xda189a(0x4a6)](_0x188171),this[_0xda189a(0x59e)]>0x1&&(this[_0xda189a(0x59e)]=0x1,this[_0xda189a(0x817)]()),this['setTopRow'](_0x188171-_0x54d850);},Window_GameEnd['_commandList']=VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)][_0x1a3244(0x7d5)][_0x1a3244(0x4af)][_0x1a3244(0x27b)],Window_GameEnd[_0x1a3244(0x44d)][_0x1a3244(0x4e2)]=function(){const _0x14a7c5=_0x1a3244;this[_0x14a7c5(0x883)]();},Window_GameEnd[_0x1a3244(0x44d)][_0x1a3244(0x883)]=function(){const _0x871291=_0x1a3244;for(const _0x12ac1c of Window_GameEnd[_0x871291(0x3ec)]){if(_0x12ac1c[_0x871291(0x68a)][_0x871291(0x38c)](this)){const _0x1df098=_0x12ac1c[_0x871291(0x6a3)];let _0x556123=_0x12ac1c['TextStr'];if(['',_0x871291(0x1eb)][_0x871291(0x56f)](_0x556123))_0x556123=_0x12ac1c['TextJS'][_0x871291(0x38c)](this);const _0x1d9264=_0x12ac1c['EnableJS'][_0x871291(0x38c)](this),_0x28057c=_0x12ac1c[_0x871291(0x404)][_0x871291(0x38c)](this);this[_0x871291(0x93a)](_0x556123,_0x1df098,_0x1d9264,_0x28057c),this[_0x871291(0x720)](_0x1df098,_0x12ac1c['CallHandlerJS']['bind'](this,_0x28057c));}}};function Window_ButtonAssist(){this['initialize'](...arguments);}Window_ButtonAssist[_0x1a3244(0x44d)]=Object['create'](Window_Base[_0x1a3244(0x44d)]),Window_ButtonAssist[_0x1a3244(0x44d)][_0x1a3244(0x561)]=Window_ButtonAssist,Window_ButtonAssist[_0x1a3244(0x44d)][_0x1a3244(0x292)]=function(_0x255d1c){const _0x385b07=_0x1a3244;this[_0x385b07(0x59c)]={},Window_Base['prototype'][_0x385b07(0x292)][_0x385b07(0x38c)](this,_0x255d1c),this[_0x385b07(0x849)](VisuMZ[_0x385b07(0x38a)][_0x385b07(0x927)][_0x385b07(0x3a1)][_0x385b07(0x67e)]||0x0),this['refresh']();},Window_ButtonAssist[_0x1a3244(0x44d)][_0x1a3244(0x4d4)]=function(){const _0x24a12b=_0x1a3244;this[_0x24a12b(0x30c)]['fontSize']<=0x60&&(this[_0x24a12b(0x30c)][_0x24a12b(0x699)]+=0x6);},Window_ButtonAssist[_0x1a3244(0x44d)][_0x1a3244(0x2b4)]=function(){const _0x50cd9a=_0x1a3244;this[_0x50cd9a(0x30c)][_0x50cd9a(0x699)]>=0x18&&(this['contents'][_0x50cd9a(0x699)]-=0x6);},Window_ButtonAssist['prototype'][_0x1a3244(0x46a)]=function(){const _0x2c1b83=_0x1a3244;Window_Base['prototype'][_0x2c1b83(0x46a)][_0x2c1b83(0x38c)](this),this[_0x2c1b83(0x4bb)]();},Window_ButtonAssist[_0x1a3244(0x44d)][_0x1a3244(0x221)]=function(){const _0x1ddb44=_0x1a3244;this[_0x1ddb44(0x8e2)]=SceneManager['_scene'][_0x1ddb44(0x830)]()!=='button'?0x0:0x8;},Window_ButtonAssist[_0x1a3244(0x44d)][_0x1a3244(0x4bb)]=function(){const _0x227d72=_0x1a3244,_0x123a31=SceneManager['_scene'];for(let _0x22a782=0x1;_0x22a782<=0x5;_0x22a782++){if(this[_0x227d72(0x59c)]['key%1'[_0x227d72(0x1ad)](_0x22a782)]!==_0x123a31[_0x227d72(0x787)[_0x227d72(0x1ad)](_0x22a782)]())return this['refresh']();if(this[_0x227d72(0x59c)]['text%1'['format'](_0x22a782)]!==_0x123a31[_0x227d72(0x81a)[_0x227d72(0x1ad)](_0x22a782)]())return this['refresh']();}},Window_ButtonAssist[_0x1a3244(0x44d)][_0x1a3244(0x4c4)]=function(){const _0x192c12=_0x1a3244;this[_0x192c12(0x30c)][_0x192c12(0x222)]();for(let _0x4b343e=0x1;_0x4b343e<=0x5;_0x4b343e++){this[_0x192c12(0x598)](_0x4b343e);}},Window_ButtonAssist[_0x1a3244(0x44d)][_0x1a3244(0x598)]=function(_0x1bc233){const _0x2c913c=_0x1a3244,_0x2e5f32=this[_0x2c913c(0x6cd)]/0x5,_0x9bee3=SceneManager[_0x2c913c(0x79b)],_0x49ef7b=_0x9bee3[_0x2c913c(0x787)['format'](_0x1bc233)](),_0x19a7e1=_0x9bee3['buttonAssistText%1'[_0x2c913c(0x1ad)](_0x1bc233)]();this[_0x2c913c(0x59c)][_0x2c913c(0x5b6)[_0x2c913c(0x1ad)](_0x1bc233)]=_0x49ef7b,this['_data'][_0x2c913c(0x5bf)[_0x2c913c(0x1ad)](_0x1bc233)]=_0x19a7e1;if(_0x49ef7b==='')return;if(_0x19a7e1==='')return;const _0x49cbb3=_0x9bee3['buttonAssistOffset%1'['format'](_0x1bc233)](),_0x3cdb02=this[_0x2c913c(0x39a)](),_0x290659=_0x2e5f32*(_0x1bc233-0x1)+_0x3cdb02+_0x49cbb3,_0x2482cd=VisuMZ[_0x2c913c(0x38a)][_0x2c913c(0x927)][_0x2c913c(0x3a1)][_0x2c913c(0x4b6)];this[_0x2c913c(0x81c)](_0x2482cd[_0x2c913c(0x1ad)](_0x49ef7b,_0x19a7e1),_0x290659,0x0,_0x2e5f32-_0x3cdb02*0x2);},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x843)]=Game_Interpreter[_0x1a3244(0x44d)][_0x1a3244(0x351)],Game_Interpreter[_0x1a3244(0x44d)][_0x1a3244(0x351)]=function(){const _0x5c5b03=_0x1a3244;if($gameTemp[_0x5c5b03(0x4d5)]!==undefined)return VisuMZ[_0x5c5b03(0x38a)][_0x5c5b03(0x43d)]();return VisuMZ[_0x5c5b03(0x38a)][_0x5c5b03(0x843)][_0x5c5b03(0x38c)](this);},VisuMZ['CoreEngine'][_0x1a3244(0x43d)]=function(){const _0x176700=_0x1a3244,_0x9fac81=$gameTemp[_0x176700(0x4d5)]||0x0;(_0x9fac81<0x0||_0x9fac81>0x64||TouchInput['isCancelled']()||Input[_0x176700(0x472)](_0x176700(0x83e)))&&($gameTemp[_0x176700(0x4d5)]=undefined,Input['clear'](),TouchInput[_0x176700(0x222)]());const _0x2b8ef0=$gameScreen['picture'](_0x9fac81);return _0x2b8ef0&&(_0x2b8ef0['_x']=TouchInput['_x'],_0x2b8ef0['_y']=TouchInput['_y']),VisuMZ[_0x176700(0x38a)][_0x176700(0x2d4)](),$gameTemp[_0x176700(0x4d5)]!==undefined;},VisuMZ['CoreEngine']['updatePictureCoordinates']=function(){const _0x59ca57=_0x1a3244,_0x2f2dc2=SceneManager[_0x59ca57(0x79b)];if(!_0x2f2dc2)return;!_0x2f2dc2[_0x59ca57(0x870)]&&(SoundManager['playLoad'](),_0x2f2dc2['_pictureCoordinatesWindow']=new Window_PictureCoordinates(),_0x2f2dc2[_0x59ca57(0x658)](_0x2f2dc2[_0x59ca57(0x870)])),$gameTemp['_pictureCoordinatesMode']===undefined&&(SoundManager[_0x59ca57(0x60f)](),_0x2f2dc2[_0x59ca57(0x3c2)](_0x2f2dc2[_0x59ca57(0x870)]),_0x2f2dc2['_pictureCoordinatesWindow']=undefined);};function Window_PictureCoordinates(){const _0x1c072b=_0x1a3244;this[_0x1c072b(0x292)](...arguments);}Window_PictureCoordinates[_0x1a3244(0x44d)]=Object['create'](Window_Base[_0x1a3244(0x44d)]),Window_PictureCoordinates[_0x1a3244(0x44d)][_0x1a3244(0x561)]=Window_PictureCoordinates,Window_PictureCoordinates['prototype']['initialize']=function(){const _0x2e0cd8=_0x1a3244;this[_0x2e0cd8(0x3db)]=_0x2e0cd8(0x4c8),this[_0x2e0cd8(0x8ca)]=_0x2e0cd8(0x4c8),this['_lastY']='nah';const _0x429645=this['windowRect']();Window_Base[_0x2e0cd8(0x44d)]['initialize']['call'](this,_0x429645),this[_0x2e0cd8(0x849)](0x2);},Window_PictureCoordinates[_0x1a3244(0x44d)][_0x1a3244(0x903)]=function(){const _0x54ca23=_0x1a3244;let _0x84e384=0x0,_0x31dbec=Graphics['height']-this[_0x54ca23(0x55f)](),_0x2b3e29=Graphics[_0x54ca23(0x397)],_0x245091=this['lineHeight']();return new Rectangle(_0x84e384,_0x31dbec,_0x2b3e29,_0x245091);},Window_PictureCoordinates[_0x1a3244(0x44d)][_0x1a3244(0x221)]=function(){const _0x64fb67=_0x1a3244;this[_0x64fb67(0x8e2)]=0x0;},Window_PictureCoordinates[_0x1a3244(0x44d)][_0x1a3244(0x46a)]=function(){const _0x283ae3=_0x1a3244;Window_Base[_0x283ae3(0x44d)][_0x283ae3(0x46a)]['call'](this),this[_0x283ae3(0x3f7)]();},Window_PictureCoordinates[_0x1a3244(0x44d)][_0x1a3244(0x3f7)]=function(){const _0x4126f1=_0x1a3244;if(!this[_0x4126f1(0x863)]())return;this[_0x4126f1(0x4c4)]();},Window_PictureCoordinates[_0x1a3244(0x44d)][_0x1a3244(0x863)]=function(){const _0x3425a6=_0x1a3244,_0x5a5a99=$gameTemp[_0x3425a6(0x4d5)],_0x5f08a2=$gameScreen[_0x3425a6(0x920)](_0x5a5a99);return _0x5f08a2?this['_lastOrigin']!==_0x5f08a2[_0x3425a6(0x3b5)]||this['_lastX']!==_0x5f08a2['_x']||this[_0x3425a6(0x525)]!==_0x5f08a2['_y']:![];},Window_PictureCoordinates[_0x1a3244(0x44d)][_0x1a3244(0x4c4)]=function(){const _0x1b0731=_0x1a3244;this['contents'][_0x1b0731(0x222)]();const _0x37d6e9=$gameTemp[_0x1b0731(0x4d5)],_0x1cebe2=$gameScreen[_0x1b0731(0x920)](_0x37d6e9);if(!_0x1cebe2)return;this['_lastOrigin']=_0x1cebe2[_0x1b0731(0x3b5)],this[_0x1b0731(0x8ca)]=_0x1cebe2['_x'],this[_0x1b0731(0x525)]=_0x1cebe2['_y'];const _0x5b2c05=ColorManager[_0x1b0731(0x61a)]();this[_0x1b0731(0x30c)][_0x1b0731(0x7be)](0x0,0x0,this['innerWidth'],this[_0x1b0731(0x281)],_0x5b2c05);const _0x45812f=_0x1b0731(0x2fd)[_0x1b0731(0x1ad)](_0x1cebe2[_0x1b0731(0x3b5)]===0x0?_0x1b0731(0x356):_0x1b0731(0x338)),_0x3df827=_0x1b0731(0x69a)[_0x1b0731(0x1ad)](_0x1cebe2['_x']),_0x3fe5ae=_0x1b0731(0x50d)[_0x1b0731(0x1ad)](_0x1cebe2['_y']),_0x4b37d5=_0x1b0731(0x21b)[_0x1b0731(0x1ad)](TextManager[_0x1b0731(0x201)]('cancel'));let _0x5d89bf=Math[_0x1b0731(0x312)](this[_0x1b0731(0x6cd)]/0x4);this[_0x1b0731(0x419)](_0x45812f,_0x5d89bf*0x0,0x0,_0x5d89bf),this[_0x1b0731(0x419)](_0x3df827,_0x5d89bf*0x1,0x0,_0x5d89bf,_0x1b0731(0x37f)),this[_0x1b0731(0x419)](_0x3fe5ae,_0x5d89bf*0x2,0x0,_0x5d89bf,_0x1b0731(0x37f));const _0x4f820e=this[_0x1b0731(0x193)](_0x4b37d5)['width'],_0x8ffb95=this['innerWidth']-_0x4f820e;this[_0x1b0731(0x81c)](_0x4b37d5,_0x8ffb95,0x0,_0x4f820e);};function Window_TextPopup(){const _0x23b1f8=_0x1a3244;this[_0x23b1f8(0x292)](...arguments);}Window_TextPopup['prototype']=Object['create'](Window_Base[_0x1a3244(0x44d)]),Window_TextPopup[_0x1a3244(0x44d)]['constructor']=Window_TextPopup,Window_TextPopup['SETTINGS']={'framesPerChar':VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x927)]['Window'][_0x1a3244(0x91d)]??1.5,'framesMin':VisuMZ['CoreEngine']['Settings']['Window'][_0x1a3244(0x415)]??0x5a,'framesMax':VisuMZ[_0x1a3244(0x38a)]['Settings'][_0x1a3244(0x919)][_0x1a3244(0x21e)]??0x12c},Window_TextPopup[_0x1a3244(0x44d)]['initialize']=function(){const _0x51705c=_0x1a3244,_0x3dc877=new Rectangle(0x0,0x0,0x1,0x1);Window_Base[_0x51705c(0x44d)][_0x51705c(0x292)][_0x51705c(0x38c)](this,_0x3dc877),this[_0x51705c(0x2e0)]=0x0,this[_0x51705c(0x8ab)]='',this['_textQueue']=[],this[_0x51705c(0x815)]=0x0;},Window_TextPopup[_0x1a3244(0x44d)][_0x1a3244(0x494)]=function(){return!![];},Window_TextPopup[_0x1a3244(0x44d)][_0x1a3244(0x83a)]=function(_0x28f37b){const _0x2766b7=_0x1a3244;if(this[_0x2766b7(0x83b)][this[_0x2766b7(0x83b)][_0x2766b7(0x753)]-0x1]===_0x28f37b)return;this['_textQueue']['push'](_0x28f37b),SceneManager[_0x2766b7(0x79b)][_0x2766b7(0x658)](this);},Window_TextPopup[_0x1a3244(0x44d)][_0x1a3244(0x46a)]=function(){const _0x270f17=_0x1a3244;Window_Base['prototype'][_0x270f17(0x46a)][_0x270f17(0x38c)](this),this[_0x270f17(0x568)](),this[_0x270f17(0x287)]();},Window_TextPopup[_0x1a3244(0x44d)][_0x1a3244(0x568)]=function(){const _0x5ad6ae=_0x1a3244;if(this['_text']!=='')return;if(this[_0x5ad6ae(0x83b)]['length']<=0x0)return;if(!this[_0x5ad6ae(0x1b3)]())return;this['_text']=this[_0x5ad6ae(0x83b)][_0x5ad6ae(0x4e9)]();const _0x26ce1a=Window_TextPopup[_0x5ad6ae(0x3fd)],_0x39b478=Math[_0x5ad6ae(0x4a2)](this[_0x5ad6ae(0x8ab)][_0x5ad6ae(0x753)]*_0x26ce1a[_0x5ad6ae(0x757)]);this[_0x5ad6ae(0x815)]=_0x39b478[_0x5ad6ae(0x277)](_0x26ce1a[_0x5ad6ae(0x80f)],_0x26ce1a[_0x5ad6ae(0x2be)]);const _0x58ff46=this[_0x5ad6ae(0x193)](this[_0x5ad6ae(0x8ab)]);let _0x2debe2=_0x58ff46[_0x5ad6ae(0x397)]+this[_0x5ad6ae(0x39a)]()*0x2;_0x2debe2+=$gameSystem['windowPadding']()*0x2;let _0x323945=Math[_0x5ad6ae(0x51f)](_0x58ff46[_0x5ad6ae(0x583)],this['lineHeight']());_0x323945+=$gameSystem[_0x5ad6ae(0x20f)]()*0x2;const _0x1b90d4=Math[_0x5ad6ae(0x6e5)]((Graphics[_0x5ad6ae(0x397)]-_0x2debe2)/0x2),_0x11375d=Math[_0x5ad6ae(0x6e5)]((Graphics[_0x5ad6ae(0x583)]-_0x323945)/0x2),_0x308a5b=new Rectangle(_0x1b90d4,_0x11375d,_0x2debe2,_0x323945);this[_0x5ad6ae(0x4fc)](_0x308a5b['x'],_0x308a5b['y'],_0x308a5b[_0x5ad6ae(0x397)],_0x308a5b[_0x5ad6ae(0x583)]),this[_0x5ad6ae(0x641)](),this[_0x5ad6ae(0x4c4)](),this[_0x5ad6ae(0x1f6)](),SceneManager['_scene']['addChild'](this);},Window_TextPopup[_0x1a3244(0x44d)]['refresh']=function(){const _0x57b1a0=_0x1a3244,_0xe0dd25=this[_0x57b1a0(0x52a)]();this[_0x57b1a0(0x30c)][_0x57b1a0(0x222)](),this[_0x57b1a0(0x81c)](this[_0x57b1a0(0x8ab)],_0xe0dd25['x'],_0xe0dd25['y'],_0xe0dd25[_0x57b1a0(0x397)]);},Window_TextPopup['prototype']['updateDuration']=function(){const _0x4e18c9=_0x1a3244;if(this['isOpening']()||this[_0x4e18c9(0x7bd)]())return;if(this[_0x4e18c9(0x815)]<=0x0)return;this[_0x4e18c9(0x815)]--,this[_0x4e18c9(0x815)]<=0x0&&(this[_0x4e18c9(0x659)](),this[_0x4e18c9(0x8ab)]='');},VisuMZ[_0x1a3244(0x63f)]=function(_0x2dec88){const _0x3dd809=_0x1a3244;if(Utils[_0x3dd809(0x8b9)](_0x3dd809(0x803))){var _0x5c0da2=require(_0x3dd809(0x213))[_0x3dd809(0x919)][_0x3dd809(0x2dc)]();SceneManager[_0x3dd809(0x5d1)]();if(_0x2dec88)setTimeout(_0x5c0da2[_0x3dd809(0x475)][_0x3dd809(0x2e8)](_0x5c0da2),0x190);}},VisuMZ[_0x1a3244(0x239)]=function(_0x1c55e0,_0x19c340){const _0x232d7a=_0x1a3244;_0x19c340=_0x19c340[_0x232d7a(0x5c4)]();var _0x204103=1.70158,_0x2b951d=0.7;switch(_0x19c340){case _0x232d7a(0x759):return _0x1c55e0;case _0x232d7a(0x425):return-0x1*Math[_0x232d7a(0x187)](_0x1c55e0*(Math['PI']/0x2))+0x1;case _0x232d7a(0x400):return Math[_0x232d7a(0x214)](_0x1c55e0*(Math['PI']/0x2));case _0x232d7a(0x718):return-0.5*(Math[_0x232d7a(0x187)](Math['PI']*_0x1c55e0)-0x1);case _0x232d7a(0x3c4):return _0x1c55e0*_0x1c55e0;case _0x232d7a(0x3a2):return _0x1c55e0*(0x2-_0x1c55e0);case _0x232d7a(0x92b):return _0x1c55e0<0.5?0x2*_0x1c55e0*_0x1c55e0:-0x1+(0x4-0x2*_0x1c55e0)*_0x1c55e0;case _0x232d7a(0x37e):return _0x1c55e0*_0x1c55e0*_0x1c55e0;case _0x232d7a(0x893):var _0x518dc8=_0x1c55e0-0x1;return _0x518dc8*_0x518dc8*_0x518dc8+0x1;case _0x232d7a(0x616):return _0x1c55e0<0.5?0x4*_0x1c55e0*_0x1c55e0*_0x1c55e0:(_0x1c55e0-0x1)*(0x2*_0x1c55e0-0x2)*(0x2*_0x1c55e0-0x2)+0x1;case _0x232d7a(0x527):return _0x1c55e0*_0x1c55e0*_0x1c55e0*_0x1c55e0;case _0x232d7a(0x901):var _0x518dc8=_0x1c55e0-0x1;return 0x1-_0x518dc8*_0x518dc8*_0x518dc8*_0x518dc8;case _0x232d7a(0x87c):var _0x518dc8=_0x1c55e0-0x1;return _0x1c55e0<0.5?0x8*_0x1c55e0*_0x1c55e0*_0x1c55e0*_0x1c55e0:0x1-0x8*_0x518dc8*_0x518dc8*_0x518dc8*_0x518dc8;case _0x232d7a(0x390):return _0x1c55e0*_0x1c55e0*_0x1c55e0*_0x1c55e0*_0x1c55e0;case _0x232d7a(0x52d):var _0x518dc8=_0x1c55e0-0x1;return 0x1+_0x518dc8*_0x518dc8*_0x518dc8*_0x518dc8*_0x518dc8;case _0x232d7a(0x7d6):var _0x518dc8=_0x1c55e0-0x1;return _0x1c55e0<0.5?0x10*_0x1c55e0*_0x1c55e0*_0x1c55e0*_0x1c55e0*_0x1c55e0:0x1+0x10*_0x518dc8*_0x518dc8*_0x518dc8*_0x518dc8*_0x518dc8;case _0x232d7a(0x679):if(_0x1c55e0===0x0)return 0x0;return Math[_0x232d7a(0x462)](0x2,0xa*(_0x1c55e0-0x1));case'OUTEXPO':if(_0x1c55e0===0x1)return 0x1;return-Math[_0x232d7a(0x462)](0x2,-0xa*_0x1c55e0)+0x1;case _0x232d7a(0x806):if(_0x1c55e0===0x0||_0x1c55e0===0x1)return _0x1c55e0;var _0x513682=_0x1c55e0*0x2,_0x180b21=_0x513682-0x1;if(_0x513682<0x1)return 0.5*Math[_0x232d7a(0x462)](0x2,0xa*_0x180b21);return 0.5*(-Math[_0x232d7a(0x462)](0x2,-0xa*_0x180b21)+0x2);case'INCIRC':var _0x513682=_0x1c55e0/0x1;return-0x1*(Math['sqrt'](0x1-_0x513682*_0x1c55e0)-0x1);case _0x232d7a(0x6bd):var _0x518dc8=_0x1c55e0-0x1;return Math[_0x232d7a(0x434)](0x1-_0x518dc8*_0x518dc8);case _0x232d7a(0x754):var _0x513682=_0x1c55e0*0x2,_0x180b21=_0x513682-0x2;if(_0x513682<0x1)return-0.5*(Math['sqrt'](0x1-_0x513682*_0x513682)-0x1);return 0.5*(Math[_0x232d7a(0x434)](0x1-_0x180b21*_0x180b21)+0x1);case _0x232d7a(0x198):return _0x1c55e0*_0x1c55e0*((_0x204103+0x1)*_0x1c55e0-_0x204103);case _0x232d7a(0x3d9):var _0x513682=_0x1c55e0/0x1-0x1;return _0x513682*_0x513682*((_0x204103+0x1)*_0x513682+_0x204103)+0x1;break;case _0x232d7a(0x259):var _0x513682=_0x1c55e0*0x2,_0x443bd1=_0x513682-0x2,_0x2aef31=_0x204103*1.525;if(_0x513682<0x1)return 0.5*_0x513682*_0x513682*((_0x2aef31+0x1)*_0x513682-_0x2aef31);return 0.5*(_0x443bd1*_0x443bd1*((_0x2aef31+0x1)*_0x443bd1+_0x2aef31)+0x2);case _0x232d7a(0x464):if(_0x1c55e0===0x0||_0x1c55e0===0x1)return _0x1c55e0;var _0x513682=_0x1c55e0/0x1,_0x180b21=_0x513682-0x1,_0x533ca1=0x1-_0x2b951d,_0x2aef31=_0x533ca1/(0x2*Math['PI'])*Math[_0x232d7a(0x70b)](0x1);return-(Math[_0x232d7a(0x462)](0x2,0xa*_0x180b21)*Math[_0x232d7a(0x214)]((_0x180b21-_0x2aef31)*(0x2*Math['PI'])/_0x533ca1));case'OUTELASTIC':var _0x533ca1=0x1-_0x2b951d,_0x513682=_0x1c55e0*0x2;if(_0x1c55e0===0x0||_0x1c55e0===0x1)return _0x1c55e0;var _0x2aef31=_0x533ca1/(0x2*Math['PI'])*Math[_0x232d7a(0x70b)](0x1);return Math['pow'](0x2,-0xa*_0x513682)*Math[_0x232d7a(0x214)]((_0x513682-_0x2aef31)*(0x2*Math['PI'])/_0x533ca1)+0x1;case _0x232d7a(0x5a5):var _0x533ca1=0x1-_0x2b951d;if(_0x1c55e0===0x0||_0x1c55e0===0x1)return _0x1c55e0;var _0x513682=_0x1c55e0*0x2,_0x180b21=_0x513682-0x1,_0x2aef31=_0x533ca1/(0x2*Math['PI'])*Math[_0x232d7a(0x70b)](0x1);if(_0x513682<0x1)return-0.5*(Math[_0x232d7a(0x462)](0x2,0xa*_0x180b21)*Math['sin']((_0x180b21-_0x2aef31)*(0x2*Math['PI'])/_0x533ca1));return Math[_0x232d7a(0x462)](0x2,-0xa*_0x180b21)*Math[_0x232d7a(0x214)]((_0x180b21-_0x2aef31)*(0x2*Math['PI'])/_0x533ca1)*0.5+0x1;case'OUTBOUNCE':var _0x513682=_0x1c55e0/0x1;if(_0x513682<0x1/2.75)return 7.5625*_0x513682*_0x513682;else{if(_0x513682<0x2/2.75){var _0x443bd1=_0x513682-1.5/2.75;return 7.5625*_0x443bd1*_0x443bd1+0.75;}else{if(_0x513682<2.5/2.75){var _0x443bd1=_0x513682-2.25/2.75;return 7.5625*_0x443bd1*_0x443bd1+0.9375;}else{var _0x443bd1=_0x513682-2.625/2.75;return 7.5625*_0x443bd1*_0x443bd1+0.984375;}}}case _0x232d7a(0x4eb):var _0x1c478d=0x1-VisuMZ[_0x232d7a(0x239)](0x1-_0x1c55e0,_0x232d7a(0x20d));return _0x1c478d;case'INOUTBOUNCE':if(_0x1c55e0<0.5)var _0x1c478d=VisuMZ[_0x232d7a(0x239)](_0x1c55e0*0x2,_0x232d7a(0x8ee))*0.5;else var _0x1c478d=VisuMZ[_0x232d7a(0x239)](_0x1c55e0*0x2-0x1,_0x232d7a(0x20d))*0.5+0.5;return _0x1c478d;default:return _0x1c55e0;}},VisuMZ[_0x1a3244(0x79a)]=function(_0x4357a1){const _0x1db0d5=_0x1a3244;_0x4357a1=String(_0x4357a1)[_0x1db0d5(0x5c4)]();const _0x40f03e=VisuMZ[_0x1db0d5(0x38a)][_0x1db0d5(0x927)][_0x1db0d5(0x381)];if(_0x4357a1===_0x1db0d5(0x543))return _0x40f03e[_0x1db0d5(0x851)];if(_0x4357a1===_0x1db0d5(0x3ed))return _0x40f03e[_0x1db0d5(0x2f5)];if(_0x4357a1===_0x1db0d5(0x821))return _0x40f03e[_0x1db0d5(0x53a)];if(_0x4357a1===_0x1db0d5(0x8da))return _0x40f03e[_0x1db0d5(0x4e8)];if(_0x4357a1===_0x1db0d5(0x769))return _0x40f03e[_0x1db0d5(0x306)];if(_0x4357a1===_0x1db0d5(0x31c))return _0x40f03e[_0x1db0d5(0x7cb)];if(_0x4357a1===_0x1db0d5(0x7aa))return _0x40f03e['IconParam6'];if(_0x4357a1===_0x1db0d5(0x885))return _0x40f03e['IconParam7'];if(_0x4357a1===_0x1db0d5(0x38d))return _0x40f03e['IconXParam0'];if(_0x4357a1===_0x1db0d5(0x842))return _0x40f03e[_0x1db0d5(0x21c)];if(_0x4357a1===_0x1db0d5(0x613))return _0x40f03e[_0x1db0d5(0x7fd)];if(_0x4357a1===_0x1db0d5(0x183))return _0x40f03e['IconXParam3'];if(_0x4357a1===_0x1db0d5(0x1f0))return _0x40f03e[_0x1db0d5(0x1c6)];if(_0x4357a1===_0x1db0d5(0x289))return _0x40f03e[_0x1db0d5(0x1ee)];if(_0x4357a1===_0x1db0d5(0x706))return _0x40f03e[_0x1db0d5(0x367)];if(_0x4357a1===_0x1db0d5(0x6e9))return _0x40f03e[_0x1db0d5(0x61d)];if(_0x4357a1===_0x1db0d5(0x614))return _0x40f03e[_0x1db0d5(0x86b)];if(_0x4357a1==='TRG')return _0x40f03e[_0x1db0d5(0x65b)];if(_0x4357a1===_0x1db0d5(0x2d8))return _0x40f03e[_0x1db0d5(0x30f)];if(_0x4357a1==='GRD')return _0x40f03e['IconSParam1'];if(_0x4357a1===_0x1db0d5(0x5e5))return _0x40f03e[_0x1db0d5(0x33c)];if(_0x4357a1===_0x1db0d5(0x427))return _0x40f03e[_0x1db0d5(0x300)];if(_0x4357a1===_0x1db0d5(0x8bd))return _0x40f03e[_0x1db0d5(0x844)];if(_0x4357a1==='TCR')return _0x40f03e[_0x1db0d5(0x244)];if(_0x4357a1==='PDR')return _0x40f03e['IconSParam6'];if(_0x4357a1==='MDR')return _0x40f03e[_0x1db0d5(0x7f8)];if(_0x4357a1==='FDR')return _0x40f03e[_0x1db0d5(0x793)];if(_0x4357a1===_0x1db0d5(0x1c3))return _0x40f03e[_0x1db0d5(0x71c)];if(VisuMZ['CoreEngine'][_0x1db0d5(0x2f9)][_0x4357a1])return VisuMZ['CoreEngine'][_0x1db0d5(0x2f9)][_0x4357a1]||0x0;return 0x0;},VisuMZ[_0x1a3244(0x2ab)]=function(_0x38b25d,_0x5a504a,_0x3f3efb){const _0x379e8d=_0x1a3244;if(_0x3f3efb===undefined&&_0x38b25d%0x1===0x0)return _0x38b25d;if(_0x3f3efb!==undefined&&['MAXHP',_0x379e8d(0x3ed),'ATK','DEF','MAT','MDF','AGI',_0x379e8d(0x885)][_0x379e8d(0x56f)](String(_0x3f3efb)[_0x379e8d(0x5c4)]()[_0x379e8d(0x797)]()))return _0x38b25d;_0x5a504a=_0x5a504a||0x0;if(VisuMZ[_0x379e8d(0x38a)][_0x379e8d(0x2ce)][_0x3f3efb])return VisuMZ[_0x379e8d(0x38a)][_0x379e8d(0x62a)][_0x3f3efb]===_0x379e8d(0x1a7)?_0x38b25d:String((_0x38b25d*0x64)['toFixed'](_0x5a504a))+'%';return String((_0x38b25d*0x64)['toFixed'](_0x5a504a))+'%';},VisuMZ[_0x1a3244(0x65d)]=function(_0x407e4e){const _0x51ce73=_0x1a3244;_0x407e4e=String(_0x407e4e);if(!_0x407e4e)return _0x407e4e;if(typeof _0x407e4e!==_0x51ce73(0x2ea))return _0x407e4e;const _0x49e442=VisuMZ['CoreEngine']['Settings'][_0x51ce73(0x83d)][_0x51ce73(0x87d)]||_0x51ce73(0x580),_0x1b314f={'maximumFractionDigits':0x6};_0x407e4e=_0x407e4e['replace'](/\[(.*?)\]/g,(_0x373837,_0x22dcdb)=>{return VisuMZ['PreserveNumbers'](_0x22dcdb,'[',']');}),_0x407e4e=_0x407e4e[_0x51ce73(0x845)](/<(.*?)>/g,(_0x586ec3,_0x1da2ff)=>{const _0x55db7f=_0x51ce73;return VisuMZ[_0x55db7f(0x21a)](_0x1da2ff,'<','>');}),_0x407e4e=_0x407e4e[_0x51ce73(0x845)](/\{\{(.*?)\}\}/g,(_0x299e46,_0x13542d)=>{return VisuMZ['PreserveNumbers'](_0x13542d,'','');}),_0x407e4e=_0x407e4e[_0x51ce73(0x845)](/(\d+\.?\d*)/g,(_0x4f1e9f,_0x4fffb5)=>{const _0x47a3c6=_0x51ce73;let _0x160b6a=_0x4fffb5;if(_0x160b6a[0x0]==='0')return _0x160b6a;if(_0x160b6a[_0x160b6a[_0x47a3c6(0x753)]-0x1]==='.')return Number(_0x160b6a)['toLocaleString'](_0x49e442,_0x1b314f)+'.';else return _0x160b6a[_0x160b6a[_0x47a3c6(0x753)]-0x1]===','?Number(_0x160b6a)[_0x47a3c6(0x8ec)](_0x49e442,_0x1b314f)+',':Number(_0x160b6a)['toLocaleString'](_0x49e442,_0x1b314f);});let _0x1bf958=0x3;while(_0x1bf958--){_0x407e4e=VisuMZ[_0x51ce73(0x2cd)](_0x407e4e);}return _0x407e4e;},VisuMZ[_0x1a3244(0x21a)]=function(_0x28bcd8,_0x314b89,_0x475020){const _0x78b0d1=_0x1a3244;return _0x28bcd8=_0x28bcd8[_0x78b0d1(0x845)](/(\d)/gi,(_0x57efcf,_0x457d16)=>_0x78b0d1(0x275)[_0x78b0d1(0x1ad)](Number(_0x457d16))),_0x78b0d1(0x62c)[_0x78b0d1(0x1ad)](_0x28bcd8,_0x314b89,_0x475020);},VisuMZ[_0x1a3244(0x2cd)]=function(_0x29d457){const _0x55161c=_0x1a3244;return _0x29d457=_0x29d457[_0x55161c(0x845)](/PRESERVCONVERSION\((\d+)\)/gi,(_0x2a768c,_0x4d5f3d)=>Number(parseInt(_0x4d5f3d))),_0x29d457;},VisuMZ[_0x1a3244(0x47f)]=function(_0x36fee5){const _0x5ce113=_0x1a3244;SoundManager[_0x5ce113(0x32a)]();if(!Utils['isNwjs']()){const _0x2b5e39=window[_0x5ce113(0x1f6)](_0x36fee5,_0x5ce113(0x524));}else{const _0x5cebbf=process[_0x5ce113(0x206)]==_0x5ce113(0x786)?_0x5ce113(0x1f6):process[_0x5ce113(0x206)]==_0x5ce113(0x50b)?'start':_0x5ce113(0x56d);require(_0x5ce113(0x667))[_0x5ce113(0x665)](_0x5cebbf+'\x20'+_0x36fee5);}},VisuMZ[_0x1a3244(0x1ea)]=function(_0x30507f,_0x2bdf1f){const _0x443715=_0x1a3244;if(!_0x30507f)return'';const _0x3caa1d=_0x30507f[_0x443715(0x35d)]||_0x30507f['id'];let _0x15be5e='';return _0x30507f[_0x443715(0x639)]!==undefined&&_0x30507f[_0x443715(0x7a6)]!==undefined&&(_0x15be5e=_0x443715(0x581)[_0x443715(0x1ad)](_0x3caa1d,_0x2bdf1f)),_0x30507f[_0x443715(0x4e3)]!==undefined&&_0x30507f[_0x443715(0x80b)]!==undefined&&(_0x15be5e='Class-%1-%2'[_0x443715(0x1ad)](_0x3caa1d,_0x2bdf1f)),_0x30507f[_0x443715(0x407)]!==undefined&&_0x30507f[_0x443715(0x63c)]!==undefined&&(_0x15be5e=_0x443715(0x6b6)['format'](_0x3caa1d,_0x2bdf1f)),_0x30507f[_0x443715(0x5eb)]!==undefined&&_0x30507f[_0x443715(0x2e7)]!==undefined&&(_0x15be5e='Item-%1-%2'[_0x443715(0x1ad)](_0x3caa1d,_0x2bdf1f)),_0x30507f[_0x443715(0x539)]!==undefined&&_0x30507f[_0x443715(0x87b)]===0x1&&(_0x15be5e=_0x443715(0x5ac)[_0x443715(0x1ad)](_0x3caa1d,_0x2bdf1f)),_0x30507f['atypeId']!==undefined&&_0x30507f['etypeId']>0x1&&(_0x15be5e='Armor-%1-%2'[_0x443715(0x1ad)](_0x3caa1d,_0x2bdf1f)),_0x30507f[_0x443715(0x265)]!==undefined&&_0x30507f['battlerHue']!==undefined&&(_0x15be5e=_0x443715(0x249)['format'](_0x3caa1d,_0x2bdf1f)),_0x30507f['autoRemovalTiming']!==undefined&&_0x30507f['maxTurns']!==undefined&&(_0x15be5e=_0x443715(0x22f)[_0x443715(0x1ad)](_0x3caa1d,_0x2bdf1f)),_0x15be5e;},Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x7ad)]=function(){const _0x336715=_0x1a3244;return this[_0x336715(0x40c)];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x270)]=Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x412)],Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x412)]=function(){const _0xf079f8=_0x1a3244;VisuMZ[_0xf079f8(0x38a)][_0xf079f8(0x270)]['call'](this),this[_0xf079f8(0x40c)]={'x':0x0,'y':0x0},this[_0xf079f8(0x692)]={'x':0x0,'y':0x0};},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x74b)]=Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x768)],Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x768)]=function(){const _0x6c533f=_0x1a3244;this['updateAnchor']();const _0x18d8ca=this[_0x6c533f(0x6ec)];VisuMZ['CoreEngine'][_0x6c533f(0x74b)]['call'](this),_0x18d8ca>0x0&&this['_duration']<=0x0&&(this['_x']=this[_0x6c533f(0x23a)],this['_y']=this[_0x6c533f(0x185)],this[_0x6c533f(0x738)]=this[_0x6c533f(0x296)],this[_0x6c533f(0x1ac)]=this[_0x6c533f(0x5d5)],this[_0x6c533f(0x279)]=this[_0x6c533f(0x228)],this['_anchor']&&(this[_0x6c533f(0x40c)]['x']=this['_targetAnchor']['x'],this[_0x6c533f(0x40c)]['y']=this[_0x6c533f(0x692)]['y']));},VisuMZ['CoreEngine'][_0x1a3244(0x6c9)]=Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x3d3)],Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x3d3)]=function(_0x3b6244,_0x2e213e,_0x4915db,_0x2bdc9f,_0x287f21,_0x469cd2,_0xf5e320,_0x5cc546){const _0x424ddb=_0x1a3244;VisuMZ[_0x424ddb(0x38a)][_0x424ddb(0x6c9)]['call'](this,_0x3b6244,_0x2e213e,_0x4915db,_0x2bdc9f,_0x287f21,_0x469cd2,_0xf5e320,_0x5cc546),this[_0x424ddb(0x6c6)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x2e213e]||{'x':0x0,'y':0x0});},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x81e)]=Game_Picture[_0x1a3244(0x44d)]['move'],Game_Picture['prototype'][_0x1a3244(0x4fc)]=function(_0x23c7ed,_0x11f399,_0x1c8c55,_0x4143cf,_0x7d1cb6,_0x4fccf8,_0x18f31f,_0x31d5bb,_0xf9611d){const _0xdab575=_0x1a3244;VisuMZ[_0xdab575(0x38a)]['Game_Picture_move']['call'](this,_0x23c7ed,_0x11f399,_0x1c8c55,_0x4143cf,_0x7d1cb6,_0x4fccf8,_0x18f31f,_0x31d5bb,_0xf9611d),this['setTargetAnchor']([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x23c7ed]||{'x':0x0,'y':0x0});},Game_Picture[_0x1a3244(0x44d)]['updateAnchor']=function(){const _0x2fd167=_0x1a3244;this[_0x2fd167(0x6ec)]>0x0&&(this[_0x2fd167(0x40c)]['x']=this[_0x2fd167(0x26e)](this[_0x2fd167(0x40c)]['x'],this[_0x2fd167(0x692)]['x']),this[_0x2fd167(0x40c)]['y']=this[_0x2fd167(0x26e)](this[_0x2fd167(0x40c)]['y'],this[_0x2fd167(0x692)]['y']));},Game_Picture[_0x1a3244(0x44d)]['setAnchor']=function(_0x3d7e7f){const _0x129737=_0x1a3244;this[_0x129737(0x40c)]=_0x3d7e7f,this[_0x129737(0x692)]=JsonEx['makeDeepCopy'](this[_0x129737(0x40c)]);},Game_Picture[_0x1a3244(0x44d)][_0x1a3244(0x7d3)]=function(_0x1a82da){const _0x47b804=_0x1a3244;this[_0x47b804(0x692)]=_0x1a82da;},VisuMZ['CoreEngine'][_0x1a3244(0x6f4)]=Sprite_Picture['prototype']['updateOrigin'],Sprite_Picture['prototype']['updateOrigin']=function(){const _0x5d3756=_0x1a3244,_0x4f804d=this[_0x5d3756(0x920)]();!_0x4f804d[_0x5d3756(0x7ad)]()?VisuMZ[_0x5d3756(0x38a)][_0x5d3756(0x6f4)][_0x5d3756(0x38c)](this):(this[_0x5d3756(0x7ad)]['x']=_0x4f804d['anchor']()['x'],this[_0x5d3756(0x7ad)]['y']=_0x4f804d['anchor']()['y']);},Game_Action[_0x1a3244(0x44d)]['setEnemyAction']=function(_0x1e41a5){const _0x57772d=_0x1a3244;if(_0x1e41a5){const _0x209c51=_0x1e41a5['skillId'];if(_0x209c51===0x1&&this[_0x57772d(0x17a)]()[_0x57772d(0x64e)]()!==0x1)this[_0x57772d(0x864)]();else _0x209c51===0x2&&this['subject']()['guardSkillId']()!==0x2?this[_0x57772d(0x203)]():this[_0x57772d(0x1e4)](_0x209c51);}else this[_0x57772d(0x222)]();},Game_Actor[_0x1a3244(0x44d)][_0x1a3244(0x50c)]=function(){const _0x2d1f28=_0x1a3244;return this['skills']()[_0x2d1f28(0x4ee)](_0x3ce1ab=>this[_0x2d1f28(0x374)](_0x3ce1ab)&&this[_0x2d1f28(0x3c8)]()[_0x2d1f28(0x56f)](_0x3ce1ab['stypeId']));},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x600)]=function(){const _0x4e990f=_0x1a3244;this['_dimmerSprite']=new Sprite(),this['_dimmerSprite'][_0x4e990f(0x3f5)]=new Bitmap(0x0,0x0),this['_dimmerSprite']['x']=0x0,this['addChildToBack'](this[_0x4e990f(0x7dc)]);},Window_Base[_0x1a3244(0x44d)][_0x1a3244(0x1f2)]=function(){const _0x1624aa=_0x1a3244;if(this[_0x1624aa(0x7dc)]){const _0x3f830c=this[_0x1624aa(0x7dc)][_0x1624aa(0x3f5)],_0x138949=this[_0x1624aa(0x397)],_0x54ae50=this[_0x1624aa(0x583)],_0x3eb896=this[_0x1624aa(0x8e2)],_0x542620=ColorManager[_0x1624aa(0x345)](),_0x4044c9=ColorManager[_0x1624aa(0x5be)]();_0x3f830c['resize'](_0x138949,_0x54ae50),_0x3f830c[_0x1624aa(0x923)](0x0,0x0,_0x138949,_0x3eb896,_0x4044c9,_0x542620,!![]),_0x3f830c[_0x1624aa(0x7be)](0x0,_0x3eb896,_0x138949,_0x54ae50-_0x3eb896*0x2,_0x542620),_0x3f830c[_0x1624aa(0x923)](0x0,_0x54ae50-_0x3eb896,_0x138949,_0x3eb896,_0x542620,_0x4044c9,!![]),this[_0x1624aa(0x7dc)][_0x1624aa(0x66e)](0x0,0x0,_0x138949,_0x54ae50);}},Game_Actor[_0x1a3244(0x44d)][_0x1a3244(0x8ce)]=function(){const _0x230b4f=_0x1a3244;for(let _0x250a76=0x0;_0x250a76<this[_0x230b4f(0x56e)]();_0x250a76++){const _0x12d760=this[_0x230b4f(0x513)]();let _0x24c33c=Number['MIN_SAFE_INTEGER'];this[_0x230b4f(0x573)](_0x250a76,_0x12d760[0x0]);for(const _0x112ef1 of _0x12d760){const _0x54af90=_0x112ef1[_0x230b4f(0x4c0)]();_0x54af90>_0x24c33c&&(_0x24c33c=_0x54af90,this[_0x230b4f(0x573)](_0x250a76,_0x112ef1));}}this[_0x230b4f(0x5dd)](_0x230b4f(0x7b6));},Window_BattleItem[_0x1a3244(0x44d)][_0x1a3244(0x347)]=function(_0x3d250b){const _0x30fa4c=_0x1a3244;return BattleManager[_0x30fa4c(0x5f7)]()?BattleManager[_0x30fa4c(0x5f7)]()[_0x30fa4c(0x374)](_0x3d250b):Window_ItemList[_0x30fa4c(0x44d)][_0x30fa4c(0x347)][_0x30fa4c(0x38c)](this,_0x3d250b);},VisuMZ['CoreEngine'][_0x1a3244(0x459)]=Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x35e)],Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x35e)]=function(){const _0x47c054=_0x1a3244;VisuMZ[_0x47c054(0x38a)][_0x47c054(0x459)][_0x47c054(0x38c)](this);const _0x22e137=this[_0x47c054(0x245)][_0x47c054(0x8d2)];if(_0x22e137)this[_0x47c054(0x658)](_0x22e137);},VisuMZ['CoreEngine'][_0x1a3244(0x437)]=Scene_Battle[_0x1a3244(0x44d)][_0x1a3244(0x35e)],Scene_Battle['prototype']['createSpriteset']=function(){const _0x3855f8=_0x1a3244;VisuMZ['CoreEngine'][_0x3855f8(0x437)][_0x3855f8(0x38c)](this);const _0x5b37b8=this['_spriteset']['_timerSprite'];if(_0x5b37b8)this[_0x3855f8(0x658)](_0x5b37b8);},Sprite_Actor['prototype'][_0x1a3244(0x46a)]=function(){const _0x4aa175=_0x1a3244;Sprite_Battler[_0x4aa175(0x44d)]['update'][_0x4aa175(0x38c)](this),this[_0x4aa175(0x438)]();if(this[_0x4aa175(0x861)])this[_0x4aa175(0x589)]();else this[_0x4aa175(0x78b)]!==''&&(this[_0x4aa175(0x78b)]='');},Window[_0x1a3244(0x44d)][_0x1a3244(0x8a9)]=function(){const _0x4466af=_0x1a3244,_0xe240e5=this['_width'],_0x4fa1d4=this[_0x4466af(0x82f)],_0x1da1f5=0x18,_0x4dd50c=_0x1da1f5/0x2,_0x1b4eb0=0x60+_0x1da1f5,_0x5f436f=0x0+_0x1da1f5;this['_downArrowSprite']['bitmap']=this['_windowskin'],this[_0x4466af(0x518)][_0x4466af(0x7ad)]['x']=0.5,this['_downArrowSprite'][_0x4466af(0x7ad)]['y']=0.5,this['_downArrowSprite']['setFrame'](_0x1b4eb0+_0x4dd50c,_0x5f436f+_0x4dd50c+_0x1da1f5,_0x1da1f5,_0x4dd50c),this[_0x4466af(0x518)][_0x4466af(0x4fc)](Math[_0x4466af(0x6e5)](_0xe240e5/0x2),Math['round'](_0x4fa1d4-_0x4dd50c)),this[_0x4466af(0x765)][_0x4466af(0x3f5)]=this[_0x4466af(0x6a2)],this['_upArrowSprite']['anchor']['x']=0.5,this[_0x4466af(0x765)][_0x4466af(0x7ad)]['y']=0.5,this[_0x4466af(0x765)][_0x4466af(0x66e)](_0x1b4eb0+_0x4dd50c,_0x5f436f,_0x1da1f5,_0x4dd50c),this[_0x4466af(0x765)]['move'](Math['round'](_0xe240e5/0x2),Math[_0x4466af(0x6e5)](_0x4dd50c));},Window['prototype'][_0x1a3244(0x7c3)]=function(){const _0x53bfb7=_0x1a3244,_0x4da067=0x90,_0xca4f31=0x60,_0xea98b8=0x18;this[_0x53bfb7(0x4a0)][_0x53bfb7(0x3f5)]=this[_0x53bfb7(0x6a2)],this[_0x53bfb7(0x4a0)][_0x53bfb7(0x7ad)]['x']=0.5,this[_0x53bfb7(0x4a0)][_0x53bfb7(0x7ad)]['y']=0x1,this[_0x53bfb7(0x4a0)]['move'](Math['round'](this[_0x53bfb7(0x936)]/0x2),this['_height']),this[_0x53bfb7(0x4a0)]['setFrame'](_0x4da067,_0xca4f31,_0xea98b8,_0xea98b8),this[_0x53bfb7(0x4a0)][_0x53bfb7(0x5c0)]=0xff;},Window['prototype']['_updateFilterArea']=function(){const _0x2bc430=_0x1a3244,_0x1bcc93=this[_0x2bc430(0x8e9)][_0x2bc430(0x592)][_0x2bc430(0x503)](new Point(0x0,0x0)),_0x22c4b0=this[_0x2bc430(0x8e9)][_0x2bc430(0x422)];_0x22c4b0['x']=_0x1bcc93['x']+this[_0x2bc430(0x452)]['x'],_0x22c4b0['y']=_0x1bcc93['y']+this[_0x2bc430(0x452)]['y'],_0x22c4b0['width']=Math[_0x2bc430(0x4a2)](this[_0x2bc430(0x6cd)]*this[_0x2bc430(0x7a8)]['x']),_0x22c4b0['height']=Math['ceil'](this[_0x2bc430(0x281)]*this['scale']['y']);},VisuMZ['CoreEngine'][_0x1a3244(0x3f1)]=Window[_0x1a3244(0x44d)]['_refreshBack'],Window['prototype'][_0x1a3244(0x39d)]=function(){const _0x5cfe0c=_0x1a3244,_0x12aba8=VisuMZ[_0x5cfe0c(0x38a)][_0x5cfe0c(0x927)]['Window'][_0x5cfe0c(0x880)]??!![];if(!_0x12aba8)return VisuMZ[_0x5cfe0c(0x38a)][_0x5cfe0c(0x3f1)]['call'](this);const _0x3f7ea9=this['_margin'],_0x249193=Math[_0x5cfe0c(0x51f)](0x0,this['_width']-_0x3f7ea9*0x2),_0x3579f7=Math[_0x5cfe0c(0x51f)](0x0,this[_0x5cfe0c(0x82f)]-_0x3f7ea9*0x2),_0x29d21e=this[_0x5cfe0c(0x56c)],_0x261ca4=_0x29d21e[_0x5cfe0c(0x64f)][0x0];_0x29d21e[_0x5cfe0c(0x3f5)]=this[_0x5cfe0c(0x6a2)],_0x29d21e[_0x5cfe0c(0x66e)](0x0,0x0,0x60,0x60),_0x29d21e[_0x5cfe0c(0x4fc)](_0x3f7ea9,_0x3f7ea9),_0x29d21e['scale']['x']=_0x249193/0x60,_0x29d21e[_0x5cfe0c(0x7a8)]['y']=_0x3579f7/0x60,_0x261ca4['bitmap']=this[_0x5cfe0c(0x6a2)],_0x261ca4['setFrame'](0x0,0x60,0x60,0x60),_0x261ca4[_0x5cfe0c(0x4fc)](0x0,0x0,_0x249193,_0x3579f7),_0x261ca4['scale']['x']=0x1/_0x29d21e[_0x5cfe0c(0x7a8)]['x'],_0x261ca4[_0x5cfe0c(0x7a8)]['y']=0x1/_0x29d21e[_0x5cfe0c(0x7a8)]['y'],_0x29d21e['setColorTone'](this[_0x5cfe0c(0x284)]);},Game_Temp[_0x1a3244(0x44d)][_0x1a3244(0x4e1)]=function(){const _0x122230=_0x1a3244;this[_0x122230(0x558)]=[],this['_fauxAnimationQueue']=[],this[_0x122230(0x78c)]=[],this[_0x122230(0x8d1)]=[];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x888)]=Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x7ce)],Scene_Base[_0x1a3244(0x44d)][_0x1a3244(0x7ce)]=function(){const _0xc82f98=_0x1a3244;if($gameTemp)$gameTemp[_0xc82f98(0x4e1)]();VisuMZ[_0xc82f98(0x38a)][_0xc82f98(0x888)][_0xc82f98(0x38c)](this);},Bitmap['prototype'][_0x1a3244(0x89f)]=function(_0x37a98c){const _0x5e47a8=_0x1a3244,_0x27f779=this[_0x5e47a8(0x2c9)];_0x27f779['save'](),_0x27f779[_0x5e47a8(0x840)]=this[_0x5e47a8(0x8b1)]();const _0x16ec9a=_0x27f779['measureText'](_0x37a98c)[_0x5e47a8(0x397)];return _0x27f779['restore'](),_0x16ec9a;},Window_Message[_0x1a3244(0x44d)][_0x1a3244(0x73b)]=function(_0xdc3559){const _0x13f5bf=_0x1a3244;return this[_0x13f5bf(0x1c2)]()?this[_0x13f5bf(0x30c)]['measureTextWidthNoRounding'](_0xdc3559):Window_Base['prototype'][_0x13f5bf(0x73b)][_0x13f5bf(0x38c)](this,_0xdc3559);},Window_Message[_0x1a3244(0x44d)][_0x1a3244(0x1c2)]=function(){const _0x3134bb=_0x1a3244;return VisuMZ[_0x3134bb(0x38a)][_0x3134bb(0x927)][_0x3134bb(0x83d)]['FontWidthFix']??!![];},VisuMZ[_0x1a3244(0x38a)][_0x1a3244(0x18d)]=Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x33f)],Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x33f)]=function(){const _0x51fbe2=_0x1a3244;return this['item']()?VisuMZ[_0x51fbe2(0x38a)][_0x51fbe2(0x18d)][_0x51fbe2(0x38c)](this):0x0;},VisuMZ[_0x1a3244(0x38a)]['Game_Action_setAttack']=Game_Action['prototype'][_0x1a3244(0x864)],Game_Action[_0x1a3244(0x44d)][_0x1a3244(0x864)]=function(){const _0x4bffd4=_0x1a3244;this['subject']()&&this[_0x4bffd4(0x17a)]()[_0x4bffd4(0x6ae)]()?VisuMZ[_0x4bffd4(0x38a)][_0x4bffd4(0x177)]['call'](this):this[_0x4bffd4(0x222)]();},Sprite_Name[_0x1a3244(0x44d)][_0x1a3244(0x938)]=function(){return 0x24;},Sprite_Name[_0x1a3244(0x44d)][_0x1a3244(0x403)]=function(){const _0x52e875=_0x1a3244,_0x3fdec2=this['name'](),_0x23116a=this['bitmapWidth'](),_0x4c401c=this['bitmapHeight']();this[_0x52e875(0x392)](),this['bitmap'][_0x52e875(0x222)](),this['bitmap'][_0x52e875(0x2d6)](_0x3fdec2,0x4,0x0,_0x23116a-0xa,_0x4c401c,'left');},Bitmap['prototype'][_0x1a3244(0x2d6)]=function(_0x115949,_0x1059a1,_0x198357,_0x54de96,_0xd0d5a0,_0x91c224){const _0x2731b9=_0x1a3244,_0x1be925=this[_0x2731b9(0x2c9)],_0x43893c=_0x1be925[_0x2731b9(0x869)];_0x54de96=_0x54de96||0xffffffff;let _0x45a329=_0x1059a1,_0xc8df70=Math[_0x2731b9(0x6e5)](_0x198357+0x18/0x2+this[_0x2731b9(0x699)]*0.35);_0x91c224===_0x2731b9(0x37f)&&(_0x45a329+=_0x54de96/0x2),_0x91c224===_0x2731b9(0x60d)&&(_0x45a329+=_0x54de96),_0x1be925['save'](),_0x1be925[_0x2731b9(0x840)]=this[_0x2731b9(0x8b1)](),_0x1be925[_0x2731b9(0x631)]=_0x91c224,_0x1be925['textBaseline']=_0x2731b9(0x25b),_0x1be925[_0x2731b9(0x869)]=0x1,this[_0x2731b9(0x3b7)](_0x115949,_0x45a329,_0xc8df70,_0x54de96),_0x1be925[_0x2731b9(0x869)]=_0x43893c,this['_drawTextBody'](_0x115949,_0x45a329,_0xc8df70,_0x54de96),_0x1be925['restore'](),this[_0x2731b9(0x892)][_0x2731b9(0x46a)]();},VisuMZ[_0x1a3244(0x38a)]['BattleManager_checkSubstitute']=BattleManager[_0x1a3244(0x93e)],BattleManager['checkSubstitute']=function(_0x5bde55){const _0x3f411f=_0x1a3244;if(this[_0x3f411f(0x17b)][_0x3f411f(0x355)]())return![];return VisuMZ['CoreEngine'][_0x3f411f(0x904)][_0x3f411f(0x38c)](this,_0x5bde55);},BattleManager[_0x1a3244(0x1fb)]=function(){const _0x11fa85=_0x1a3244;if(this[_0x11fa85(0x1e2)])this[_0x11fa85(0x373)][_0x11fa85(0x1fb)](this[_0x11fa85(0x1e2)]);this['_phase']=_0x11fa85(0x2f3),this[_0x11fa85(0x1e2)]&&this[_0x11fa85(0x1e2)][_0x11fa85(0x56e)]()===0x0&&(this[_0x11fa85(0x520)](this[_0x11fa85(0x1e2)]),this[_0x11fa85(0x1e2)]=null);},Bitmap[_0x1a3244(0x44d)][_0x1a3244(0x18b)]=function(){const _0x343689=_0x1a3244;this[_0x343689(0x626)]=new Image(),this[_0x343689(0x626)][_0x343689(0x84e)]=this[_0x343689(0x200)][_0x343689(0x2e8)](this),this[_0x343689(0x626)]['onerror']=this[_0x343689(0x690)]['bind'](this),this[_0x343689(0x286)](),this['_loadingState']='loading',Utils['hasEncryptedImages']()?this[_0x343689(0x6a4)]():(this[_0x343689(0x626)]['src']=this[_0x343689(0x79e)],![]&&this[_0x343689(0x626)]['width']>0x0&&(this['_image'][_0x343689(0x84e)]=null,this[_0x343689(0x200)]()));},Scene_Skill[_0x1a3244(0x44d)][_0x1a3244(0x466)]=function(){const _0x227f60=_0x1a3244;Scene_MenuBase[_0x227f60(0x44d)]['onActorChange'][_0x227f60(0x38c)](this),this[_0x227f60(0x231)](),this[_0x227f60(0x5a4)]['deactivate'](),this[_0x227f60(0x5a4)][_0x227f60(0x2f1)](),this[_0x227f60(0x22b)][_0x227f60(0x3be)]();},Scene_Skill[_0x1a3244(0x44d)][_0x1a3244(0x60e)]=function(){const _0x4b7fbd=_0x1a3244;return this['_skillTypeWindow']&&this[_0x4b7fbd(0x22b)][_0x4b7fbd(0x688)];},Game_Map['prototype'][_0x1a3244(0x460)]=function(_0x592c65,_0x30f554,_0x143240){const _0x493216=_0x1a3244,_0x4a0561=this['tilesetFlags'](),_0x17f81b=this[_0x493216(0x6fb)](_0x592c65,_0x30f554);for(const _0x1ff309 of _0x17f81b){const _0x251e35=_0x4a0561[_0x1ff309];if(_0x251e35===undefined||_0x251e35===null){if($gameTemp[_0x493216(0x2ff)]()&&!DataManager[_0x493216(0x809)]()){let _0x3d014b=_0x493216(0x7ff)+'\x0a';_0x3d014b+=_0x493216(0x458)+'\x0a',_0x3d014b+=_0x493216(0x6bf),this[_0x493216(0x6db)]()?(alert(_0x3d014b),SceneManager[_0x493216(0x208)]()):(console['log'](_0x3d014b),!$gameTemp['_showDevTools']&&($gameTemp['_showDevTools']=!![],SceneManager[_0x493216(0x5d1)]()));}}if((_0x251e35&0x10)!==0x0)continue;if((_0x251e35&_0x143240)===0x0)return!![];if((_0x251e35&_0x143240)===_0x143240)return![];}return![];},Game_Map[_0x1a3244(0x44d)][_0x1a3244(0x6db)]=function(){if(Imported['VisuMZ_3_EventChainReact'])return!![];if(Imported['VisuMZ_4_UniqueTileEffects'])return!![];return![];},Sprite_Animation[_0x1a3244(0x44d)][_0x1a3244(0x3d2)]=function(_0x178a23){const _0x4de20d=_0x1a3244;!this[_0x4de20d(0x4be)]&&(this[_0x4de20d(0x4be)]=_0x178a23['gl'][_0x4de20d(0x654)](_0x178a23['gl'][_0x4de20d(0x1b2)]));},VisuMZ[_0x1a3244(0x38a)]['Scene_Map_shouldAutosave']=Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x69d)],Scene_Map[_0x1a3244(0x44d)][_0x1a3244(0x69d)]=function(){const _0x1b397e=_0x1a3244,_0x15fa77=SceneManager[_0x1b397e(0x2f2)][_0x1b397e(0x17f)];if(['Scene_Title',_0x1b397e(0x65c),_0x1b397e(0x708),_0x1b397e(0x5a8)][_0x1b397e(0x56f)](_0x15fa77))return![];return VisuMZ[_0x1b397e(0x38a)]['Scene_Map_shouldAutosave']['call'](this);};