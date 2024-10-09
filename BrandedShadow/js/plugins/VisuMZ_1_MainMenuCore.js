//=============================================================================
// VisuStella MZ - Main Menu Core
// VisuMZ_1_MainMenuCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MainMenuCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MainMenuCore = VisuMZ.MainMenuCore || {};
VisuMZ.MainMenuCore.version = 1.26;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.26] [MainMenuCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Menu_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Main Menu Core plugin is designed to give you more control over the Main
 * Menu outside of RPG Maker MZ's editor's control. Game devs are given control
 * over how commands work, visual aesthetics pertaining to the Main Menu, and 
 * assign menu images to actors as background portraits.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general Main Menu settings.
 * * The ability to set Menu Background Portraits for individual actors.
 * * Flexibility in changing which commands appear in the Main Menu.
 * * Add new windows like the Playtime Window and Variable windows.
 * * Change the style of how the windows are arranged in the Main Menu.
 * * Change the way the status list is displayed and the way it's displayed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * <Menu Portrait: filename>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Sets the menu image for the actor to 'filename'.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 * 
 * <Menu Portrait Offset: +x, +y>
 * <Menu Portrait Offset: -x, -y>
 * 
 * <Menu Portrait Offset X: +x>
 * <Menu Portrait Offset X: -x>
 * 
 * <Menu Portrait Offset Y: +y>
 * <Menu Portrait Offset Y: -y>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Offsets the X and Y coordinates for the menu image.
 * - Replace 'x' with a number value that offsets the x coordinate.
 * - Negative x values offset left. Positive x values offset right.
 * - Replace 'y' with a number value that offsets the y coordinate.
 * - Negative y values offset up. Positive x values offset down.
 * - This only applies to the Main Menu portraits.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Menu Image (Group)
 * Actor: Change Menu Image (Range)
 * Actor: Change Menu Image (JS)
 * - Changes the actor's Menu Image.
 * - Each version has a different means of selecting Actor ID's.
 *
 *   Actor ID:
 *   - Select which ID(s) to affect.
 *
 *   Filename:
 *   - Selected actor(s) will have their menu images changed to this.
 *
 * ---
 * 
 * Actor: Change Menu Image (JS) (v1.24)
 * - Changes an actor's Menu Image using JavaScript.
 * - Allows more control with more text entry.
 * 
 *   JS: Actor ID:
 *   - Enter which Actor ID to affect.
 *   - Uses JavaScript code.
 * 
 *   JS: Filename:
 *   - Enter the filename you wish to use.
 *   - Uses JavaScript code.
 * 
 * ---
 * 
 * === Menu Command Plugin Commands ===
 * 
 * ---
 * 
 * Menu Command: Clear Forced Settings
 * - Clear any forced settings for the menu command symbols.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Disable
 * - Forcefully disable specific menu commands via their symbols.
 * - Matching forced enabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Enable
 * - Forcefully enable specific menu commands via their symbols.
 * - Matching forced disabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Hide
 * - Forcefully hide specific menu commands via their symbols.
 * - Matching forced shown symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Show
 * - Forcefully show specific menu commands via their symbols.
 * - Matching forced hidden symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These general settings contain various settings on how the Main Menu scene
 * displays certain windows, alters how specific windows behave, and determines
 * which scenes would display actor menu images as background portraits.
 *
 * ---
 *
 * Gold Window
 * 
 *   Thinner Gold Window:
 *   - Make the Gold Window thinner in the Main Menu?
 *   - Used to match the Playtime and Variable Windows.
 *   - Only applies to the Command Window style: Default Vertical.
 * 
 *   Auto Adjust Height:
 *   - Automatically adjust the height for the thinner Gold Window?
 *
 *   Auto Adjust Y:
 *   - Automatically adjust the Y position for the thinner Gold Window?
 *
 * ---
 * 
 * Status Window
 * 
 *   Select Last?:
 *   - When picking a personal command from the Command Window, select the
 *     last picked actor or always the first?
 * 
 * ---
 *
 * Solo Party
 *
 *   Solo Quick Mode:
 *   - When selecting "Skills", "Equip", or "Status" with one party member,
 *     immediately go to the scene.
 *
 * ---
 *
 * Sub Menus
 *
 *   Menus with Actor BG's:
 *   - A list of the menus that would be compatible with Actor Menu Backgrounds
 *
 *   JS: Actor BG Action:
 *   - Code used to determine how to display the sprites upon loading.
 *
 * ---
 * 
 * Party Window
 * 
 *   Show Reserve Memebers:
 *   - Show reserve members while on the Main Menu scene?
 * 
 *   Hide Main Menu Only
 *   - If reserve members are hidden, hide them only in the main menu or
 *     all scenes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window List
 * ============================================================================
 *
 * The Command Window functions as a hub to the various scenes linked from the
 * Main Menu. These include 'Item', 'Skill', 'Equip', 'Status', 'Save', and
 * so on. This Plugin Parameter is an array that lets you add, remove, and/or
 * alter the Command Window's various commands, how they're handled, whether or
 * not they're visible, and how they react when selected.
 *
 * These will require knowledge of JavaScript to use them properly.
 *
 * ---
 *
 * Command Window List
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   Subcategory:
 *   - The subcategory used for this command.
 *   - Leave empty for no subcategory.
 *
 *   Icon:
 *   - Icon used for this command.
 *   - Use 0 for no icon.
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
 *   JS: Personal Code:
 *   - JavaScript code that runs once the actor list is selected with this
 *     command highlighted.
 *
 * ---
 * 
 * ==== Subcategories ====
 * 
 * Subcategories are a new addition to the Main Menu Core version 1.18. When a
 * subcategory is set, it will only display Command Window items that belong
 * to that subcategory. Those Command Window items do not appear when there is
 * no subcategory active or if it's a different subcategory.
 * 
 * ---
 * 
 * To create a subcategory, a few things must be done:
 * 
 * 1. The subcategory symbol must be "subcategory".
 * 
 * 2. The string returned by JS: Ext determines the subcategory. In the default
 *    Plugin Parameters, 'datalog' is returned as the subcategory. This becomes
 *    the subcategory when picked.
 * 
 * 3. For the JS: Run Code, have the following code somewhere in it:
 * 
 *    const ext = arguments[0];
 *    this.setSubcategory(ext);
 * 
 * ---
 * 
 * To make a Command Window item be a part of a subcategory do the following:
 * 
 * 1. Take the JS: Ext string value (case sensitive).
 * 
 * 2. Set it as the target Command Window item's "Subcategory" value.
 * 
 * 3. If the subcategory doesn't exist, then this Command Window item will
 *    appear normally.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Playtime Window
 * ============================================================================
 *
 * The Playtime Window is an optional feature that can be displayed in the
 * Main Menu. As its name suggests, it displays the playtime of the player's
 * current play through.
 *
 * ---
 *
 * Playtime Window
 * 
 *   Enable:
 *   - Use the Playtime Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Playtime Window?
 *
 *   Background Type:
 *   - Select background type for the Playtime window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Playtime window.
 * 
 *   Time Icon:
 *   - Icon displayed for the 'Time' label.
 * 
 *   Time Text:
 *   - Text for the display of 'Time' in the Playtime window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Playtime window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Variable Window
 * ============================================================================
 *
 * The Variable Window is an optional feature that can be displayed in the
 * Main Menu. If enabled, the Variable Window will display variables of the
 * game dev's choice in the Main Menu itself.
 *
 * ---
 *
 * Variable Window
 * 
 *   Enable:
 *   - Use the Variable Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Variable Window?
 *
 *   Background Type:
 *   - Select background type for the Variable window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Variable window.
 * 
 *   Variable List:
 *   - Select variables to be displayed into the window.
 *     Use \i[x] to determine their icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Variable window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window Style & Command Style Settings
 * ============================================================================
 *
 * This determines how the Main Menu appears based on the Command Window Style.
 * If anything but the 'Default' is used, then these settings will take over
 * the window placement settings for the Main Menu. This means that even if you
 * are using VisuStella's Core Engine, the window layouts will be overwritten.
 *
 * ---
 *
 * Command Window Style:
 * - Choose the positioning and style of the Main Menu Command Window.
 * - This will automatically rearrange windows.
 * 
 *   Default Vertical Side Style:
 *   - The default Main Menu layout style.
 *   - Affected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Top Horizontal Style:
 *   - Puts the Command Window at the top of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 *   Bottom Horizontal Style:
 *   - Puts the Command Window at the bottom of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the top.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Mobile Full Screen Style:
 *   - Puts the Command Window at the center of the screen with larger buttons.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is hidden until prompted to be selected.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 * ---
 *
 * Command Style Settings
 *
 *   Style:
 *   - How do you wish to draw command entries in the Command Window?
 *   - Text Only: displays only text.
 *   - Icon Only: displays only the icon.
 *   - Icon + Text: displays icon first, then text.
 *   - Automatic: determines the best fit for the size
 *
 *   Text Alignment:
 *   - Decide how you want the text to be aligned.
 *   - Left, Center, or Right
 * 
 *   Rows:
 *   - Number of visible rows.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Mobile Thickness:
 *   - The thickness of the buttons for mobile version.
 *   - Applies only to Top, Bottom, and Mobile styles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Graphic, Status List Style, & List Style Settings
 * ============================================================================
 *
 * Choose how the contents Actor Status List Window in the Main Menu appears.
 * This can range from the which actor graphic is drawn to the style used for
 * the data that's displayed.
 *
 * ---
 *
 * Status Graphic:
 * - Choose how the graphic for actor graphics appear in status-like menus.
 * 
 *   None:
 *   - Don't display any graphic for the actors.
 * 
 *   Face:
 *   - Display the actors' faces. This is the default option in RPG Maker MZ.
 *
 *   Map Sprite:
 *   - Display the actors' map sprites.
 * 
 *   Sideview Battler:
 *   - Display the actors' sideview battlers.
 *
 * ---
 *
 * Main Menu List Style
 * - Choose how the actor status list looks in the Main Menu.
 *
 * Inner-Menu List Style
 * - Choose how the actor status list looks in the inner menus like Scene_Item,
 *   Scene_Skill, etc.
 *
 *   Default Horizontal Style:
 *   - This is the default style found in RPG Maker MZ's Main Menu.
 *
 *   Vertical Style:
 *   - Makes the display for the actor list vertical instead of horizontal.
 *
 *   Portrait Style:
 *   - Similar to the vertical style, except each actor's Menu Image is
 *     displayed in the background instead. Portraits are required.
 *   - If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 *
 *   Solo Style:
 *   - Used for solo party member games. Extends the whole view of the Status
 *     Window to accomodate a single actor.
 *
 *   Thin Horizontal Style:
 *   - Makes the selectable menu entries for the actors a single line thin.
 *
 *   Thicker Horizontal Style:
 *   - Makes the selectable menu entries for the actors two lines thick.
 *
 * ---
 *
 * List Styles
 *   JavaScript code used to determine how the individual styles are drawn.
 *
 *   JS: Default:
 *   JS: Vertical:
 *   JS: Portrait:
 *   JS: Solo:
 *   JS: Thin:
 *   JS: Thicker:
 *   - Code used to draw the data for these styles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Mouse Cursor Settings
 * ============================================================================
 *
 * Add/enable a custom mouse cursor for your game. This will use a graphic
 * found in the game project's img/system/ folder to use as the custom mouse
 * cursor when hovering over the game.
 * 
 * Does not work on mobile devices.
 *
 * ---
 *
 * General Settings
 * 
 *   Enable?:
 *   - Enable custom cursor?
 *   - Requires a custom 'Idle' graphic.
 * 
 * ---
 * 
 * Graphic Settings
 * 
 *   Idle Filename:
 *   - Graphic used for mouse cursor when idle or moving.
 *   - Required for a custom mouse cursor.
 *   - Located in game project's /icon/ folder.
 *   - Include .png extension (ie. Cursor1.png)
 * 
 *   Click Filename:
 *   - Optional.
 *   - Graphic used for mouse cursor when clicked or held.
 *   - Uses the 'Idle' graphic if 'Click' graphic is not used.
 *   - Located in game project's /icon/ folder.
 *   - Include .png extension (ie. Cursor2.png)
 * 
 * ---
 * 
 * Anchor Settings
 * 
 *   Anchor X:
 *   - Anchor X value for the custom cursor.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Anchor Y value for the custom cursor.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
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
 * Version 1.26: October 17, 2024
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Due to conflicts with deployment, the Custom Mouse Cursor has its base
 *    location moved from /img/system/ to /icon/.
 * ** Please move the cursor file(s) as well as update the Plugin Parameters.
 * ** Sorry for the inconvenience.
 * 
 * Version 1.25: September 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Custom Mouse Cursor
 * ****  Add/enable a custom mouse cursor for your game.
 * 
 * Version 1.24: August 29, 2024
 * * Compatibility Update
 * ** When "Load" command is used with Save Core's Single-Save Mode,
 *    automatically load up the save instead of going to the Load Menu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Command renamed:
 * *** Actor: Change Menu Image (JS) to Actor: Change Menu Image (JS) (Legacy)
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Actor: Change Menu Image (JS) (v1.24)
 * **** Changes an actor's Menu Image using JavaScript.
 * **** Allows more control with more text entry.
 * 
 * Version 1.23: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Battle Tactics' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'battleGridTactics' option(s)
 *      and click copy. Go to the target project's Main Menu Core's 'Command
 *      Window List' plugin parameter. Paste the command where you want it
 *      to go.
 * 
 * Version 1.22: October 12, 2023
 * * Feature Update!
 * ** Subcategories are now maintained when exiting a scene pushed forward by
 *    a subcategory. Added by Olivia and sponsored by AndyL.
 * 
 * Version 1.21: April 13, 2023
 * * Bug Fixes!
 * ** Multiple subcategories should now work properly. Fix made by Arisu.
 * 
 * Version 1.20: March 16, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Bestiary' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'bestiary' option(s) and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.19: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'CG Gallery', 'Credits Page', and 'Patch Notes' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'cgGallery', 'creditsPage', or
 *      'patchNotes' option(s) and click copy. Go to the target project's Main
 *      Menu Core's 'Command Window List' plugin parameter. Paste the command
 *      where you want it to go.
 * 
 * Version 1.18: October 27, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added a new section into Plugin Parameters: Command Window List for
 *    "Subcategories" and adding info on how they are handled.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Tutorial List' command.
 * *** This is for the upcoming VisuMZ_2_TutorialPanelSys plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'tutorialList' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * ** Subcategory called "Datalog" is now added.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'subcategory' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * **** Existing entries for Quest, Message Log, and Combat Log are now added
 *      to the Datalog subcategory.
 * * New Features!
 * ** Subcategory support is now added for the Main Menu Command Window.
 * *** Subcategories allow you to make some Command Window items invisible
 *     until a subcategory is selected. This helps reduce clutter and save room
 *     on the Command Window command list.
 * 
 * Version 1.17: August 18, 2022
 * * Bug Fixes!
 * ** Changed actor graphics now reflect properly for those using the default
 *    status menu. Fix made by Irina.
 * 
 * Version 1.16: April 21, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Menu Command: Clear Forced Settings
 * *** Menu Command: Force Disable
 * *** Menu Command: Force Enable
 * *** Menu Command: Force Hide
 * *** Menu Command: Force Show
 * **** These new Plugin Commands allow you to forcefully show, hide, enable,
 *      or disable Plugin Commands regardless of their required settings.
 * **** We are not responsible for errors that occur by accessing menus that
 *      should otherwise be disabled or hidden.
 * 
 * Version 1.15: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: October 25, 2021
 * * Bug Fixes!
 * ** Plugin Parameter settings for automatic Command Window height adjustment
 *    should now work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Added a note for the Help File: Gold Window > Thinner Gold Window
 * *** Only applies to the Command Window style: Default Vertical.
 * 
 * Version 1.13: October 21, 2021
 * * Feature Update!
 * ** Rounding update applied to picture portraits so that coordinates aren't
 *    drawn on non-whole numbers due to base images having odd values. Update
 *    made by Olivia.
 * 
 * Version 1.12: July 16, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Message Log' command.
 * *** This is for the upcoming VisuMZ_3_MessageLog plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'MessageLog' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.11: May 14, 2021
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Load' command after the 'Save' command.
 * *** This allows players to access the load game screen from the Main Menu.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'Load' option and click copy.
 *      Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.10: April 16, 2021
 * * Feature Update!
 * ** Default style for List Styles now have its code updated with the
 *    JS: Default plugin parameter for games whose vertical screen resolution
 *    is larger than normal.
 * *** To update this, do either of the following:
 * **** Open up the Main Menu Core Plugin Parameters. Select and press delete 
 *      on "List Style Settings". Press Enter. New updated settings will be
 *      replaced for the JS: Default settings.
 * **** Or Delete the existing VisuMZ_1_MainMenuCore.js in the Plugin Manager
 *      list and install the newest version.
 * 
 * Version 1.09: March 19, 2021
 * * Documentation Update!
 * ** Added clarity for the "Portrait Style" in Plugin Parameters section for
 *    "Status Graphic, Status List Style, & List Style Settings":
 * *** If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 * 
 * Version 1.08: February 26, 2021
 * * Feature Update!
 * ** Default Plugin Parameters for the List Style Settings defaults have been
 *    updated with tighter coordinate values to allow for more accurate display
 *    of UI element positioning. Update made by Olivia.
 * 
 * Version 1.07: January 1, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Removed "<Menu Image: filename>" version of notetag to reduce confusion
 *    and to stick with the norm declared by the Battle Core.
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Menu Portrait Offset: +x, +y>
 * *** <Menu Portrait Offset X: +x>
 * *** <Menu Portrait Offset Y: +y>
 * **** This is used with the "Portrait" style Main Menu list.
 * **** Offsets the X and Y coordinates for the menu portrait.
 * 
 * Version 1.06: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: October 11, 2020
 * * Documentation Update!
 * ** Documentation added for the new plugin parameter.
 * * New Features!
 * ** New plugin parameter added by Yanfly.
 * *** Plugin Parameters > General > Status Window > Select Last?
 * **** When picking a personal command from the Command Window, select the
 *      last picked actor or always the first?
 * 
 * Version 1.04: October 4, 2020
 * * Feature Update!
 * ** Certain windows will now pre-load all associated image types for the
 *    actor upon being created to avoid custom JS drawing problems.
 *    Change made by Irina.
 * ** Failsafes have been added to prevent non-existent variables from crashing
 *    the game if a user does not remove them from the variable list. Change
 *    made by Irina.
 * 
 * Version 1.03: September 20, 2020
 * * Documentation Update!
 * ** Added the alternative notetag <Menu Portrait: filename> that also works
 *    the same way as <Menu Image: filename>.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update!
 * ** Better compatibility for SV Actor graphics.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Skill check plugin parameter for show fixed. Fixed by Yanfly and Shaz.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Command Window List > skill >
 *     JS: Show > and changing 'this.needsCommand("item")' to
 *     'this.needsCommand("skill")'
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
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageGroup
 * @text Actor: Change Menu Image (Group)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's to change.
 *
 * @arg Step1:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageRange
 * @text Actor: Change Menu Image (Range)
 * @desc Changes the actor's Menu Image.
 * Select from a range of actor ID's to change.
 *
 * @arg Step1
 * @text Actor ID Range
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to end at.
 * @default 4
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS
 * @text Actor: Change Menu Image (JS) (Legacy)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's using JavaScript.
 *
 * @arg Step1:arrayeval
 * @text Actor ID(s)
 * @type string[]
 * @desc Enter which Actor ID(s) to affect.
 * You may use JavaScript code.
 * @default ["$gameVariables.value(1)"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS_v124
 * @text Actor: Change Menu Image (JS) (v1.24)
 * @desc Changes an actor's Menu Image using JavaScript.
 * Allows more control with more text entry.
 *
 * @arg ActorJS:func
 * @text JS: Actor ID
 * @type note
 * @desc Enter which Actor ID to affect.
 * Uses JavaScript code.
 * @default "// Get Actor ID here.\nlet actorID = 0;\nactorID = $gameParty.members()[0].actorId();\n\n// Return Actor ID\nreturn actorID;"
 *
 * @arg FilenameJS:func
 * @text JS: Filename
 * @type note
 * @desc Enter the filename you wish to use.
 * Uses JavaScript code.
 * @default "// Get Filename here.\nlet filename = 'Actor1_';\nfilename += String(Math.randomInt(8) + 1);\n\n// Return Filename\nreturn filename;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MenuCommand
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandClear
 * @text Menu Command: Clear Forced Settings
 * @desc Clear any forced settings for the menu command symbols.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceDisable
 * @text Menu Command: Force Disable
 * @desc Forcefully disable specific menu commands via their symbols.
 * Matching forced enabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceEnable
 * @text Menu Command: Force Enable
 * @desc Forcefully enable specific menu commands via their symbols.
 * Matching forced disabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceHide
 * @text Menu Command: Force Hide
 * @desc Forcefully hide specific menu commands via their symbols.
 * Matching forced shown symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceShow
 * @text Menu Command: Force Show
 * @desc Forcefully show specific menu commands via their symbols.
 * Matching forced hidden symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
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
 * @param MainMenuCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings pertaining to the Main Menu and related.
 * @default {"GoldWindow":"","ThinGoldWindow:eval":"true","AutoGoldHeight:eval":"true","AutoGoldY:eval":"true","StatusWindow":"","StatusSelectLast:eval":"false","SoloParty":"","SoloQuick:eval":"true","SubMenus":"","ActorBgMenus:arraystr":"[\"Scene_Skill\"]","ActorBgMenuJS:func":"\"this.anchor.x = 0.5;\\nconst scale = 1.25;\\nthis.scale.x = this.scale.y = scale;\\nthis.x = Graphics.width;\\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._targetX = Graphics.width * 3 / 4;\\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._duration = 10;\\nthis.opacity = 0;\"","PartyWindow":"","ShowReserve:eval":"true","HideMainMenuOnly:eval":"true"}
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @parent General:struct
 * @type struct<Command>[]
 * @desc Window commands used by the Main Menu.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"item\",\"Icon:num\":\"208\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.item;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"item\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItem();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"classChange\",\"Icon:num\":\"133\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.classChangeMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    this.isClassChangeCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled() &&\\\\n    this.isClassChangeCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_ClassChange);\\\"\"}","{\"Symbol:str\":\"skill\",\"Icon:num\":\"101\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.skill;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"skill\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Skill);\\\"\"}","{\"Symbol:str\":\"equip\",\"Icon:num\":\"137\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.equip;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"equip\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Equip);\\\"\"}","{\"Symbol:str\":\"status\",\"Icon:num\":\"82\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.status;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"status\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Status);\\\"\"}","{\"Symbol:str\":\"itemCrafting\",\"Icon:num\":\"223\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.ItemCraftingMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ItemCraftingSys &&\\\\n    this.isItemCraftingCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isItemCraftingCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItemCrafting();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"subcategory\",\"Subcategory:str\":\"\",\"Icon:num\":\"230\",\"TextStr:str\":\"Datalog\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return this.isSubcategoryVisible(arguments[1]);\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"// This becomes the subcategory name. Case-sensitive.\\\\n\\\\nreturn 'datalog';\\\"\",\"CallHandlerJS:func\":\"\\\"const ext = arguments[0];\\\\nthis.setSubcategory(ext);\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"quest\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"186\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.questCommandName;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_QuestSystem &&\\\\n    this.isQuestCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isQuestCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandQuest();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"bestiary\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"10\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.BestiaryMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_Bestiary &&\\\\n    this.isBestiaryCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isBestiaryCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandBestiary();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"tutorialList\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.tutorial.menuCmd;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_TutorialPanelSys &&\\\\n    this.isTutorialListCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isTutorialListCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandTutorialList();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"messageLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.MessageLogMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_3_MessageLog &&\\\\n    this.isMessageLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isMessageLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandMessageLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"combatLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.combatLog_BattleCmd_Name;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CombatLog &&\\\\n    this.isCombatLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCombatLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCombatLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"cgGallery\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"311\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.cgGalleryMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CGGallery &&\\\\n    this.isCgGalleryCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCgGalleryCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCgGallery();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"creditsPage\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.CreditsPageMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CreditsPage &&\\\\n    this.isCreditsPageCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCreditsPageCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCreditsPage();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"patchNotes\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.PatchNotesMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_PatchNotes &&\\\\n    this.isPatchNotesCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isPatchNotesCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPatchNotes();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"formation\",\"Icon:num\":\"75\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.formation;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"formation\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isFormationEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandFormation();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"battleGridTactics\",\"Subcategory:str\":\"\",\"Icon:num\":\"76\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.BattleGridTacticsMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_BattleGridSystem &&\\\\n    this.isBattleGridTacticsCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isBattleGridTacticsCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandBattleGridTactics();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"options\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"options\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isOptionsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"save\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.save;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isSaveEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandSave();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"load\",\"Icon:num\":\"191\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return 'Load';\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandLoad();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent1\",\"Icon:num\":\"88\",\"TextStr:str\":\"Common Event 1\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return 1;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCommonEvent();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent2\",\"Icon:num\":\"87\",\"TextStr:str\":\"Common Event 2\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return 2;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"// Declare Ext\\\\nconst ext = arguments[0];\\\\n\\\\n// Declare Status Window\\\\nconst statusWindow = SceneManager._scene._statusWindow;\\\\n\\\\n// Declare Actor ID\\\\nconst actorId = statusWindow.actor(statusWindow.index()).actorId();\\\\n\\\\n// Set variable 1 to Actor ID\\\\n$gameVariables.setValue(1, actorId);\\\\n\\\\n// Prepare Common Event ext to run\\\\n$gameTemp.reserveCommonEvent(ext);\\\\n\\\\n// Exit Main Menu\\\\nSceneManager._scene.popScene();\\\"\"}","{\"Symbol:str\":\"gameEnd\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"gameEnd\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isGameEndEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandGameEnd();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}"]
 *
 * @param Playtime:struct
 * @text Playtime Window
 * @type struct<Playtime>
 * @desc Settings for the Playtime Window.
 * @default {"Enable:eval":"true","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","Icon:num":"75","Time:str":"Time","WindowRect:func":"\"const rows = 1;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Variable:struct
 * @text Variable Window
 * @type struct<Variable>
 * @desc Settings for the Variable Window.
 * @default {"Enable:eval":"false","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","VarList:arraynum":"[\"1\",\"2\"]","WindowRect:func":"\"const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param ParamBreak1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CommandWindowStyle:str
 * @text Command Window Style
 * @type select
 * @option Default Vertical Side Style
 * @value default
 * @option Top Horizontal Style
 * @value top
 * @option Thin Top Horizontal Style
 * @value thinTop
 * @option Bottom Horizontal Style
 * @value bottom
 * @option Thin Bottom Horizontal Style
 * @value thinBottom
 * @option Mobile Full Screen Style
 * @value mobile
 * @desc Choose the positioning and style of the Main Menu Command Window. This will automatically rearrange windows.
 * @default top
 *
 * @param CustomCmdWin:struct
 * @text Command Style Settings
 * @parent CommandWindowStyle:str
 * @type struct<CustomCmdWin>
 * @desc Settings for the non-default Command Window Styles.
 * @default {"Style:str":"auto","TextAlign:str":"center","Rows:num":"2","Cols:num":"4","MobileThickness:num":"5"}
 *
 * @param ParamBreak2
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StatusGraphic:str
 * @text Status Graphic
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in status-like menus.
 * @default face
 *
 * @param StatusListStyle:str
 * @text Main Menu List Style
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the Main Menu.
 * @default portrait
 *
 * @param InnerMenuListStyle:str
 * @text Inner-Menu List Style
 * @parent StatusListStyle:str
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the inner menus
 * like Scene_Item, Scene_Skill, etc.
 * @default default
 *
 * @param ListStyles:struct
 * @text List Style Settings
 * @parent StatusListStyle:str
 * @type struct<ListStyles>
 * @desc JavaScript code used to determine how the individual styles are drawn.
 * @default {"DefaultStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst sx = rect.x + 180;\\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\\nconst lineHeight = this.lineHeight();\\nconst sx2 = sx + 180;\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\\nthis.drawActorClass(actor, sx2, sy);\\n\\n// Place Gauges\\nconst sy2 = sy + lineHeight;\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nthis.placeGauge(actor, \\\"hp\\\", sx2, sy2);\\nthis.placeGauge(actor, \\\"mp\\\", sx2, sy2 + gaugeLineHeight);\\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\\nif ($dataSystem.optDisplayTp && roomForTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx2, sy2 + gaugeLineHeight * 2);\\n}\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx2 + 180;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\"","VerticalStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nconst gx = rect.x;\\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Actor Name\\nlet sx = rect.x;\\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\\nlet sw = rect.width;\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","PortraitStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = rect.height;\\nconst gx = rect.x;\\nconst gy = rect.y;\\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\\n\\n// Draw Dark Rectangle\\nlet sx = rect.x;\\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\\nlet sw = rect.width;\\nlet sh = rect.y + rect.height - sy;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","SoloStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\n\\n// Draw Actor Graphic\\nlet sx = rect.x;\\nlet sy = rect.y;\\nlet sw = rect.width;\\nlet sh = rect.height;\\n\\n// Portrait\\nif (actor.getMenuImage() !== '') {\\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\\n\\n// Everything Else\\n} else {\\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\\n}\\n\\n// Draw Dark Rectangle\\nsh = Math.ceil(lineHeight * 4.5);\\nsy = rect.y + rect.height - sh;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nsw = Math.round(rect.width / 2);\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Prepare Stat Coordinates\\nsx = rect.x + Math.floor(rect.width / 2);\\nsw = rect.width / 2;\\nsh = rect.height;\\nconst sx3 = sx;\\nconst cw = rect.width - sx3 - 2;\\n\\n// Prepare Total Content Height to vertically center the content.\\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    totalHeight += lineHeight;\\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\nconst equips = actor.equips();\\ntotalHeight += lineHeight;\\ntotalHeight += equips.length * lineHeight;\\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\\n\\n// Place Gauges\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nif ($dataSystem.optDisplayTp) {\\n    sy += gaugeLineHeight;\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n    sy += gaugeLineHeight;\\n}\\nlet ny = sy;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    sy += lineHeight;\\n    const pw = Math.floor(cw / 2) - 24;\\n    let px = sx3;\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, sy, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            sy += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n    ny += lineHeight;\\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\n\\n// Draw Actor Equipment\\nthis.resetFontSettings();\\nsx = rect.x + Math.floor(rect.width / 2);\\nsy = ny + lineHeight;\\nsw = rect.width / 2;\\nfor (const equip of equips) {\\n    if (equip) {\\n        this.drawItemName(equip, sx, sy, sw);\\n        sy += lineHeight;\\n        if (sy + lineHeight > rect.y + rect.height) return;\\n    }\\n}\"","ThinStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\n\\n// Place Gauges\\nsx += 180;\\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy);\"","ThickerStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorClass(actor, sx, sy + lineHeight);\\n//this.drawActorLevel(actor, sx, sy + lineHeight);\\n\\n// Place Gauges\\nsx += 180;\\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy + gaugeLineHeight);\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy + (gaugeLineHeight * 2));\\nsx += 160;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\""}
 *
 * @param ParamBreak3
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MouseCursor:struct
 * @text Custom Mouse Cursor
 * @type struct<MouseCursor>
 * @desc Add/enable a custom mouse cursor for your game.
 * @default {"General":"","Enable:eval":"true","Graphics":"","idleFilenameIcon:str":"","clickFilenameIcon:str":"","Anchor":"","anchorX:num":"0.0","anchorY:num":"0.0"}
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
 * @param Subcategory:str
 * @text Subcategory
 * @desc The subcategory used for this command.
 * Leave empty for no subcategory.
 * @default 
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this command.
 * Use 0 for no icon.
 * @default 0
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this menu command.
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
 * @default "const ext = arguments[0];"
 *
 * @param PersonalHandlerJS:func
 * @text JS: Personal Code
 * @type note
 * @desc JavaScript code that runs once the actor list is selected with this command highlighted.
 * @default "const ext = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param ThinGoldWindow:eval
 * @text Thinner Gold Window
 * @parent GoldWindow
 * @type boolean
 * @on Thinner
 * @off Normal
 * @desc Make the Gold Window thinner in the Main Menu?
 * Used to match the Playtime and Variable Windows.
 * @default true
 *
 * @param AutoGoldHeight:eval
 * @text Auto Adjust Height
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the height for the thinner Gold Window?
 * @default true
 *
 * @param AutoGoldY:eval
 * @text Auto Adjust Y
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the Y position for the thinner Gold Window?
 * @default true
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusSelectLast:eval
 * @text Select Last?
 * @parent StatusWindow
 * @type boolean
 * @on Last Picked Actor
 * @off Always First Actor
 * @desc When picking a personal command from the Command Window,
 * select the last picked actor or always the first?
 * @default false
 *
 * @param SoloParty
 * @text Solo Party
 *
 * @param SoloQuick:eval
 * @text Solo Quick Mode
 * @parent SoloParty
 * @type boolean
 * @on Quick
 * @off Normal
 * @desc When selecting "Skills", "Equip", or "Status" with one party member, immediately go to the scene.
 * @default true
 *
 * @param SubMenus
 * @text Sub Menus
 *
 * @param ActorBgMenus:arraystr
 * @text Menus with Actor BG's
 * @parent SubMenus
 * @type string[]
 * @desc A list of the menus that would be compatible with Actor Menu Backgrounds.
 * @default ["Scene_Skill","Scene_Equip","Scene_Status"]
 *
 * @param ActorBgMenuJS:func
 * @text JS: Actor BG Action
 * @parent SubMenus
 * @type note
 * @desc Code used to determine how to display the sprites upon loading.
 * @default "this.anchor.x = 0.5;\nconst scale = 1.25;\nthis.scale.x = this.scale.y = scale;\nthis.x = Graphics.width;\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._targetX = Graphics.width * 3 / 4;\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._duration = 10;\nthis.opacity = 0;"
 *
 * @param PartyWindow
 * @text Party Window
 *
 * @param ShowReserve:eval
 * @text Show Reserve Memebers
 * @parent PartyWindow
 * @type boolean
 * @on Show Reserve Members
 * @off Hide Reserve Members
 * @desc Show reserve members while on the Main Menu scene?
 * @default true
 *
 * @param HideMainMenuOnly:eval
 * @text Hide Main Menu Only
 * @parent ShowReserve:eval
 * @type boolean
 * @on Hide in Main Menu Only
 * @off Hide in all Scenes
 * @desc If reserve members are hidden, hide them only in the main menu or all scenes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Playtime Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Playtime:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Playtime Window?
 * @default true
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Playtime Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Playtime window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Playtime window.
 * Default: 26
 * @default 20
 *
 * @param Icon:num
 * @text Time Icon
 * @desc Icon displayed for the 'Time' label.
 * @default 75
 *
 * @param Time:str
 * @text Time Text
 * @desc Text for the display of 'Time' in the Playtime window.
 * @default Time
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Playtime window.
 * @default "const rows = 1;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Variable Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Variable:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Variable Window?
 * @default false
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Variable Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Variable window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Variable window.
 * Default: 26
 * @default 20
 *
 * @param VarList:arraynum
 * @text Variable List
 * @type variable[]
 * @desc Select variables to be displayed into the window.
 * Use \i[x] to determine their icon.
 * @default ["1","2","3"]
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Variable window.
 * @default "const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Horizontal Command Window Style
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomCmdWin:
 *
 * @param Style:str
 * @text Command Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw command entries in the Command Window?
 * @default auto
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Rows:num
 * @text Rows
 * @type number
 * @min 1
 * @desc Number of visible rows.
 * @default 2
 *
 * @param Cols:num
 * @text Columns
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 4
 *
 * @param MobileThickness:num
 * @text Mobile Thickness
 * @type number
 * @min 1
 * @desc The thickness of the buttons for mobile version.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * List Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ListStyles:
 *
 * @param DefaultStyle:func
 * @text JS: Default
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + Math.floor((rect.height - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst sx = rect.x + 180;\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\nconst lineHeight = this.lineHeight();\nconst sx2 = sx + 180;\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\nthis.drawActorClass(actor, sx2, sy);\n\n// Place Gauges\nconst sy2 = sy + lineHeight;\nconst gaugeLineHeight = this.gaugeLineHeight();\nthis.placeGauge(actor, \"hp\", sx2, sy2);\nthis.placeGauge(actor, \"mp\", sx2, sy2 + gaugeLineHeight);\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\nif ($dataSystem.optDisplayTp && roomForTp) {\n    this.placeGauge(actor, \"tp\", sx2, sy2 + gaugeLineHeight * 2);\n}\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx2 + 180;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 * @param VerticalStyle:func
 * @text JS: Vertical
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x;\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Actor Name\nlet sx = rect.x;\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\nlet sw = rect.width;\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param PortraitStyle:func
 * @text JS: Portrait
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = rect.height;\nconst gx = rect.x;\nconst gy = rect.y;\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\n\n// Draw Dark Rectangle\nlet sx = rect.x;\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\nlet sw = rect.width;\nlet sh = rect.y + rect.height - sy;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param SoloStyle:func
 * @text JS: Solo
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\n\n// Draw Actor Graphic\nlet sx = rect.x;\nlet sy = rect.y;\nlet sw = rect.width;\nlet sh = rect.height;\n\n// Portrait\nif (actor.getMenuImage() !== '') {\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\n\n// Everything Else\n} else {\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\n}\n\n// Draw Dark Rectangle\nsh = Math.ceil(lineHeight * 4.5);\nsy = rect.y + rect.height - sh;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nsw = Math.round(rect.width / 2);\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Prepare Stat Coordinates\nsx = rect.x + Math.floor(rect.width / 2);\nsw = rect.width / 2;\nsh = rect.height;\nconst sx3 = sx;\nconst cw = rect.width - sx3 - 2;\n\n// Prepare Total Content Height to vertically center the content.\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    totalHeight += lineHeight;\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\nconst equips = actor.equips();\ntotalHeight += lineHeight;\ntotalHeight += equips.length * lineHeight;\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\n\n// Place Gauges\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nif ($dataSystem.optDisplayTp) {\n    sy += gaugeLineHeight;\n    this.placeGauge(actor, \"tp\", sx, sy);\n    sy += gaugeLineHeight;\n}\nlet ny = sy;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    sy += lineHeight;\n    const pw = Math.floor(cw / 2) - 24;\n    let px = sx3;\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, sy, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            sy += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n    ny += lineHeight;\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\n\n// Draw Actor Equipment\nthis.resetFontSettings();\nsx = rect.x + Math.floor(rect.width / 2);\nsy = ny + lineHeight;\nsw = rect.width / 2;\nfor (const equip of equips) {\n    if (equip) {\n        this.drawItemName(equip, sx, sy, sw);\n        sy += lineHeight;\n        if (sy + lineHeight > rect.y + rect.height) return;\n    }\n}"
 *
 * @param ThinStyle:func
 * @text JS: Thin
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\n\n// Place Gauges\nsx += 180;\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy);"
 *
 * @param ThickerStyle:func
 * @text JS: Thicker
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\nthis.drawActorName(actor, sx, sy);\nthis.drawActorClass(actor, sx, sy + lineHeight);\n//this.drawActorLevel(actor, sx, sy + lineHeight);\n\n// Place Gauges\nsx += 180;\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nthis.placeGauge(actor, \"mp\", sx, sy + gaugeLineHeight);\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy + (gaugeLineHeight * 2));\nsx += 160;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 */
/* ----------------------------------------------------------------------------
 * Mouse Cursor Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MouseCursor:
 *
 * @param General
 * @text General Settings
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Custom Cursor
 * @off Normal Cursor
 * @desc Enable custom cursor?
 * Requires a custom 'Idle' graphic.
 * @default true
 *
 * @param Graphics
 * @text Graphic Settings
 *
 * @param idleFilenameIcon:str
 * @text Idle Filename
 * @parent Graphics
 * @desc Located in game project's /icon/ folder.
 * Include .png extension (ie. Cursor1.png)
 * @default 
 *
 * @param clickFilenameIcon:str
 * @text Click Filename
 * @parent Graphics
 * @desc Optional. Located in game project's /icon/ folder.
 * Include .png extension (ie. Cursor2.png)
 * @default 
 *
 * @param Anchor
 * @text Anchor Settings
 *
 * @param anchorX:num
 * @text Anchor X
 * @parent Anchor
 * @desc Anchor X value for the custom cursor.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.0
 *
 * @param anchorY:num
 * @text Anchor Y
 * @parent Anchor
 * @desc Anchor Y value for the custom cursor.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.0
 *
 */
//=============================================================================

const _0x62bedd=_0x2775;(function(_0x223597,_0x35229b){const _0x4fb53a=_0x2775,_0xc6029d=_0x223597();while(!![]){try{const _0x51b54f=-parseInt(_0x4fb53a(0x103))/0x1+-parseInt(_0x4fb53a(0xae))/0x2+parseInt(_0x4fb53a(0x1bf))/0x3*(-parseInt(_0x4fb53a(0x117))/0x4)+parseInt(_0x4fb53a(0x19f))/0x5*(-parseInt(_0x4fb53a(0x22f))/0x6)+-parseInt(_0x4fb53a(0xb4))/0x7*(-parseInt(_0x4fb53a(0x115))/0x8)+-parseInt(_0x4fb53a(0xea))/0x9+parseInt(_0x4fb53a(0x1dc))/0xa;if(_0x51b54f===_0x35229b)break;else _0xc6029d['push'](_0xc6029d['shift']());}catch(_0x1a9fc2){_0xc6029d['push'](_0xc6029d['shift']());}}}(_0x4055,0xbfead));var label=_0x62bedd(0xb1),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x62bedd(0xca)](function(_0x119382){const _0x1d2295=_0x62bedd;return _0x119382[_0x1d2295(0x133)]&&_0x119382[_0x1d2295(0x1db)][_0x1d2295(0x99)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x5ba5b0,_0x40cfca){const _0x42cf3b=_0x62bedd;for(const _0xb8ea15 in _0x40cfca){if(_0xb8ea15['match'](/(.*):(.*)/i)){const _0x446da7=String(RegExp['$1']),_0x1f99d3=String(RegExp['$2'])[_0x42cf3b(0x97)]()[_0x42cf3b(0xf0)]();let _0x5df235,_0x47061f,_0x3b1169;switch(_0x1f99d3){case _0x42cf3b(0x9d):_0x5df235=_0x40cfca[_0xb8ea15]!==''?Number(_0x40cfca[_0xb8ea15]):0x0;break;case _0x42cf3b(0x166):_0x47061f=_0x40cfca[_0xb8ea15]!==''?JSON[_0x42cf3b(0x197)](_0x40cfca[_0xb8ea15]):[],_0x5df235=_0x47061f[_0x42cf3b(0x116)](_0x41f925=>Number(_0x41f925));break;case _0x42cf3b(0x14d):_0x5df235=_0x40cfca[_0xb8ea15]!==''?eval(_0x40cfca[_0xb8ea15]):null;break;case'ARRAYEVAL':_0x47061f=_0x40cfca[_0xb8ea15]!==''?JSON[_0x42cf3b(0x197)](_0x40cfca[_0xb8ea15]):[],_0x5df235=_0x47061f[_0x42cf3b(0x116)](_0x3cfe9d=>eval(_0x3cfe9d));break;case _0x42cf3b(0x183):_0x5df235=_0x40cfca[_0xb8ea15]!==''?JSON[_0x42cf3b(0x197)](_0x40cfca[_0xb8ea15]):'';break;case _0x42cf3b(0x198):_0x47061f=_0x40cfca[_0xb8ea15]!==''?JSON['parse'](_0x40cfca[_0xb8ea15]):[],_0x5df235=_0x47061f[_0x42cf3b(0x116)](_0x46e698=>JSON[_0x42cf3b(0x197)](_0x46e698));break;case'FUNC':_0x5df235=_0x40cfca[_0xb8ea15]!==''?new Function(JSON['parse'](_0x40cfca[_0xb8ea15])):new Function(_0x42cf3b(0x201));break;case'ARRAYFUNC':_0x47061f=_0x40cfca[_0xb8ea15]!==''?JSON[_0x42cf3b(0x197)](_0x40cfca[_0xb8ea15]):[],_0x5df235=_0x47061f[_0x42cf3b(0x116)](_0xc702a4=>new Function(JSON['parse'](_0xc702a4)));break;case _0x42cf3b(0x1a9):_0x5df235=_0x40cfca[_0xb8ea15]!==''?String(_0x40cfca[_0xb8ea15]):'';break;case'ARRAYSTR':_0x47061f=_0x40cfca[_0xb8ea15]!==''?JSON['parse'](_0x40cfca[_0xb8ea15]):[],_0x5df235=_0x47061f[_0x42cf3b(0x116)](_0x43f1ab=>String(_0x43f1ab));break;case'STRUCT':_0x3b1169=_0x40cfca[_0xb8ea15]!==''?JSON[_0x42cf3b(0x197)](_0x40cfca[_0xb8ea15]):{},_0x5ba5b0[_0x446da7]={},VisuMZ[_0x42cf3b(0x20b)](_0x5ba5b0[_0x446da7],_0x3b1169);continue;case'ARRAYSTRUCT':_0x47061f=_0x40cfca[_0xb8ea15]!==''?JSON[_0x42cf3b(0x197)](_0x40cfca[_0xb8ea15]):[],_0x5df235=_0x47061f[_0x42cf3b(0x116)](_0x49cac6=>VisuMZ[_0x42cf3b(0x20b)]({},JSON['parse'](_0x49cac6)));break;default:continue;}_0x5ba5b0[_0x446da7]=_0x5df235;}}return _0x5ba5b0;},(_0x394e6d=>{const _0x3facec=_0x62bedd,_0x102c3c=_0x394e6d[_0x3facec(0xcf)];for(const _0x109d79 of dependencies){if(!Imported[_0x109d79]){alert(_0x3facec(0x102)[_0x3facec(0x196)](_0x102c3c,_0x109d79)),SceneManager[_0x3facec(0x111)]();break;}}const _0xfe2bf0=_0x394e6d[_0x3facec(0x1db)];if(_0xfe2bf0['match'](/\[Version[ ](.*?)\]/i)){const _0x5a6da7=Number(RegExp['$1']);_0x5a6da7!==VisuMZ[label][_0x3facec(0x20f)]&&(alert(_0x3facec(0xa4)['format'](_0x102c3c,_0x5a6da7)),SceneManager['exit']());}if(_0xfe2bf0[_0x3facec(0x162)](/\[Tier[ ](\d+)\]/i)){const _0x14f819=Number(RegExp['$1']);_0x14f819<tier?(alert(_0x3facec(0x11b)[_0x3facec(0x196)](_0x102c3c,_0x14f819,tier)),SceneManager['exit']()):tier=Math[_0x3facec(0x1f4)](_0x14f819,tier);}VisuMZ[_0x3facec(0x20b)](VisuMZ[label][_0x3facec(0x1a8)],_0x394e6d['parameters']);})(pluginData),PluginManager[_0x62bedd(0x224)](pluginData[_0x62bedd(0xcf)],_0x62bedd(0xdb),_0x1e048a=>{const _0x50e82a=_0x62bedd;VisuMZ[_0x50e82a(0x20b)](_0x1e048a,_0x1e048a);const _0x9dfa05=_0x1e048a[_0x50e82a(0xbe)],_0x5a9693=_0x1e048a[_0x50e82a(0x225)];for(let _0x453167 of _0x9dfa05){_0x453167=parseInt(_0x453167)||0x0;if(_0x453167<=0x0)continue;const _0x1a3730=$gameActors[_0x50e82a(0x1d8)](_0x453167);if(!_0x1a3730)continue;_0x1a3730[_0x50e82a(0x214)](_0x5a9693);}}),PluginManager['registerCommand'](pluginData[_0x62bedd(0xcf)],_0x62bedd(0x1e2),_0x5ebb0b=>{const _0x12e2c7=_0x62bedd;VisuMZ['ConvertParams'](_0x5ebb0b,_0x5ebb0b);const _0x3e95d5=_0x5ebb0b[_0x12e2c7(0xbd)]>=_0x5ebb0b['Step1Start']?_0x5ebb0b[_0x12e2c7(0xc9)]:_0x5ebb0b[_0x12e2c7(0xbd)],_0x2ba3da=_0x5ebb0b[_0x12e2c7(0xbd)]>=_0x5ebb0b[_0x12e2c7(0xc9)]?_0x5ebb0b[_0x12e2c7(0xbd)]:_0x5ebb0b[_0x12e2c7(0xc9)],_0xcac19a=Array(_0x2ba3da-_0x3e95d5+0x1)[_0x12e2c7(0x227)]()[_0x12e2c7(0x116)]((_0x367ae0,_0xdd2460)=>_0x3e95d5+_0xdd2460),_0x69f91a=_0x5ebb0b[_0x12e2c7(0x225)];for(let _0x5c2039 of _0xcac19a){_0x5c2039=parseInt(_0x5c2039)||0x0;if(_0x5c2039<=0x0)continue;const _0x5bdc67=$gameActors[_0x12e2c7(0x1d8)](_0x5c2039);if(!_0x5bdc67)continue;_0x5bdc67[_0x12e2c7(0x214)](_0x69f91a);}}),PluginManager[_0x62bedd(0x224)](pluginData[_0x62bedd(0xcf)],'ChangeActorMenuImageJS',_0x4ddd44=>{const _0x51d397=_0x62bedd;VisuMZ['ConvertParams'](_0x4ddd44,_0x4ddd44);const _0x4985b4=_0x4ddd44['Step1'];let _0x1708b9=[];while(_0x4985b4[_0x51d397(0x100)]>0x0){const _0x4239ac=_0x4985b4['shift']();Array['isArray'](_0x4239ac)?_0x1708b9=_0x1708b9[_0x51d397(0xb3)](_0x4239ac):_0x1708b9[_0x51d397(0x1b3)](_0x4239ac);}const _0xd80b6=_0x4ddd44[_0x51d397(0x225)];for(let _0x498f3a of _0x1708b9){_0x498f3a=parseInt(_0x498f3a)||0x0;if(_0x498f3a<=0x0)continue;const _0x4b9a3c=$gameActors['actor'](_0x498f3a);if(!_0x4b9a3c)continue;_0x4b9a3c[_0x51d397(0x214)](_0xd80b6);}}),PluginManager[_0x62bedd(0x224)](pluginData[_0x62bedd(0xcf)],_0x62bedd(0xa0),_0x10f60d=>{const _0x575477=_0x62bedd;VisuMZ[_0x575477(0x20b)](_0x10f60d,_0x10f60d);const _0x14134f=_0x10f60d[_0x575477(0x24b)](),_0x3c7721=$gameActors['actor'](_0x14134f)||null;if(!_0x3c7721){console[_0x575477(0x96)](_0x575477(0xd8));return;}const _0x1595a4=_0x10f60d[_0x575477(0x23c)]();_0x3c7721[_0x575477(0x214)](_0x1595a4);}),PluginManager[_0x62bedd(0x224)](pluginData['name'],'MenuCommandClear',_0x1d291b=>{const _0x53feb7=_0x62bedd;VisuMZ[_0x53feb7(0x20b)](_0x1d291b,_0x1d291b);const _0x411d2d=_0x1d291b[_0x53feb7(0x152)]||[];for(const _0xece301 of _0x411d2d){$gameSystem[_0x53feb7(0x93)](_0xece301);}}),PluginManager['registerCommand'](pluginData[_0x62bedd(0xcf)],_0x62bedd(0x246),_0x2770fd=>{const _0x5636b4=_0x62bedd;VisuMZ[_0x5636b4(0x20b)](_0x2770fd,_0x2770fd);const _0x31588e=_0x2770fd[_0x5636b4(0x152)]||[];for(const _0x2f97d7 of _0x31588e){$gameSystem['forceEnableMainMenuCommand'](_0x2f97d7);}}),PluginManager[_0x62bedd(0x224)](pluginData[_0x62bedd(0xcf)],_0x62bedd(0x13f),_0x51c96a=>{const _0x391c5e=_0x62bedd;VisuMZ[_0x391c5e(0x20b)](_0x51c96a,_0x51c96a);const _0x538d4d=_0x51c96a[_0x391c5e(0x152)]||[];for(const _0x1c2e03 of _0x538d4d){$gameSystem['forceDisableMainMenuCommand'](_0x1c2e03);}}),PluginManager['registerCommand'](pluginData[_0x62bedd(0xcf)],_0x62bedd(0x202),_0x1734d8=>{const _0x154289=_0x62bedd;VisuMZ['ConvertParams'](_0x1734d8,_0x1734d8);const _0x3ee051=_0x1734d8[_0x154289(0x152)]||[];for(const _0x4a40a3 of _0x3ee051){$gameSystem['forceHideMainMenuCommand'](_0x4a40a3);}}),PluginManager[_0x62bedd(0x224)](pluginData['name'],'MenuCommandForceShow',_0x2cbfae=>{const _0x3e00b2=_0x62bedd;VisuMZ[_0x3e00b2(0x20b)](_0x2cbfae,_0x2cbfae);const _0xca60e9=_0x2cbfae[_0x3e00b2(0x152)]||[];for(const _0x1836ae of _0xca60e9){$gameSystem['forceShowMainMenuCommand'](_0x1836ae);}}),VisuMZ[_0x62bedd(0xb1)]['Scene_Boot_loadSystemImages_MC']=Scene_Boot[_0x62bedd(0xfb)]['loadSystemImages'],Scene_Boot['prototype']['loadSystemImages']=function(){const _0x3734ed=_0x62bedd;VisuMZ[_0x3734ed(0xb1)][_0x3734ed(0x140)][_0x3734ed(0x17d)](this),VisuMZ[_0x3734ed(0xb1)][_0x3734ed(0x236)]()&&VisuMZ['MainMenuCore']['SetupCustomCursor']();},VisuMZ['MainMenuCore'][_0x62bedd(0x236)]=function(){const _0x1c81fa=_0x62bedd;if(Utils[_0x1c81fa(0x17b)]())return![];const _0x34810b=VisuMZ[_0x1c81fa(0xb1)][_0x1c81fa(0x1a8)][_0x1c81fa(0x17a)];if(!_0x34810b[_0x1c81fa(0x14a)])return![];if(_0x34810b[_0x1c81fa(0x1c3)]&&_0x34810b[_0x1c81fa(0x1c3)]['length']>0x0)return!![];return _0x34810b[_0x1c81fa(0x16a)]&&_0x34810b[_0x1c81fa(0x16a)][_0x1c81fa(0x100)]>0x0;},VisuMZ['MainMenuCore'][_0x62bedd(0x142)]=function(){const _0x4c2af0=_0x62bedd,_0x2fab19=VisuMZ['MainMenuCore'][_0x4c2af0(0x1a8)][_0x4c2af0(0x17a)];if(_0x2fab19[_0x4c2af0(0x1c3)]!==undefined||_0x2fab19[_0x4c2af0(0x14e)]!==undefined){let _0x1eb33b=_0x4c2af0(0xaf);_0x1eb33b+='\x0aMain\x20Menu\x20Core\x27s\x20\x22Custom\x20Mouse\x20Cursor\x22\x20has\x20moved\x20image\x20location',_0x1eb33b+=_0x4c2af0(0x240),_0x1eb33b+=_0x4c2af0(0x1d9),_0x1eb33b+=_0x4c2af0(0x106),alert(_0x1eb33b),SceneManager[_0x4c2af0(0x111)]();return;}const _0x3e55ad='icon/'+_0x2fab19[_0x4c2af0(0x16a)],_0x319fc4=_0x4c2af0(0x21e)+(_0x2fab19[_0x4c2af0(0x170)]||_0x2fab19[_0x4c2af0(0x16a)]),_0x5192cc=new Image();_0x5192cc[_0x4c2af0(0x1d5)]=_0x3e55ad,_0x5192cc[_0x4c2af0(0x178)]=function(){const _0x3af8ad=_0x4c2af0,_0x479859=document[_0x3af8ad(0xc1)]('div');_0x479859['style']['position']=_0x3af8ad(0x1cc),_0x479859[_0x3af8ad(0xd3)][_0x3af8ad(0x194)]=_0x5192cc[_0x3af8ad(0x194)]+'px',_0x479859['style'][_0x3af8ad(0xd0)]=_0x5192cc[_0x3af8ad(0xd0)]+'px',_0x479859[_0x3af8ad(0xd3)][_0x3af8ad(0x1b9)]=_0x3af8ad(0x143)+_0x3e55ad+')',_0x479859[_0x3af8ad(0xd3)]['pointerEvents']=_0x3af8ad(0x113),_0x479859['style'][_0x3af8ad(0x1cd)]=_0x3af8ad(0x1b2),_0x479859[_0x3af8ad(0xd3)][_0x3af8ad(0xbb)]=_0x3af8ad(0x113),document[_0x3af8ad(0x1be)][_0x3af8ad(0x1bb)](_0x479859),document[_0x3af8ad(0x1be)][_0x3af8ad(0xd3)][_0x3af8ad(0x119)]=_0x3af8ad(0x113),document[_0x3af8ad(0x1be)][_0x3af8ad(0xd3)][_0x3af8ad(0x1a7)]='hidden',document[_0x3af8ad(0x14c)](_0x3af8ad(0xad),function(_0x31d23c){const _0x37a711=_0x3af8ad;_0x479859[_0x37a711(0xd3)][_0x37a711(0xbb)]='';let _0x931c44=_0x31d23c[_0x37a711(0x17c)],_0x587cbd=_0x31d23c[_0x37a711(0x1ab)];_0x931c44<=0x0&&_0x587cbd<=0x0&&(_0x931c44+=Graphics['width']*0xa,_0x587cbd+=Graphics[_0x37a711(0xd0)]*0xa),_0x931c44-=Math[_0x37a711(0x192)](_0x2fab19[_0x37a711(0xe0)]*_0x5192cc['width']),_0x587cbd-=Math['round'](_0x2fab19[_0x37a711(0x1ac)]*_0x5192cc[_0x37a711(0xd0)]),_0x479859[_0x37a711(0xd3)][_0x37a711(0x1fb)]=_0x931c44+'px',_0x479859[_0x37a711(0xd3)][_0x37a711(0xf1)]=_0x587cbd+'px';}),document[_0x3af8ad(0x14c)](_0x3af8ad(0x193),function(_0x357923){const _0x20295f=_0x3af8ad,_0x1b8fb9=_0x357923['touches'][0x0];let _0x15ac57=_0x1b8fb9[_0x20295f(0x17c)],_0x48db0d=_0x1b8fb9[_0x20295f(0x1ab)];_0x15ac57-=Math[_0x20295f(0x192)](_0x2fab19[_0x20295f(0xe0)]*_0x5192cc[_0x20295f(0x194)]),_0x48db0d-=Math['round'](_0x2fab19[_0x20295f(0x1ac)]*_0x5192cc[_0x20295f(0xd0)]),_0x479859[_0x20295f(0xd3)]['left']=_0x15ac57+'px',_0x479859[_0x20295f(0xd3)][_0x20295f(0xf1)]=_0x48db0d+'px';}),document['addEventListener'](_0x3af8ad(0x1f8),function(){const _0x1e95e0=_0x3af8ad;_0x479859[_0x1e95e0(0xd3)][_0x1e95e0(0x1b9)]=_0x1e95e0(0x143)+_0x319fc4+')';}),document[_0x3af8ad(0x14c)](_0x3af8ad(0x1f3),function(){const _0x4a90e6=_0x3af8ad;_0x479859[_0x4a90e6(0xd3)]['backgroundImage']=_0x4a90e6(0x143)+_0x3e55ad+')';});},_0x5192cc[_0x4c2af0(0x130)]=function(){const _0x126c10=_0x4c2af0;console[_0x126c10(0x11f)](_0x126c10(0x222));};},VisuMZ[_0x62bedd(0xb1)][_0x62bedd(0x129)]=SceneManager[_0x62bedd(0x1b3)],SceneManager[_0x62bedd(0x1b3)]=function(_0x4b5b89){const _0x233fd1=_0x62bedd;_0x4b5b89===Scene_Menu&&($gameTemp[_0x233fd1(0xfa)]=undefined),VisuMZ['MainMenuCore'][_0x233fd1(0x129)][_0x233fd1(0x17d)](this,_0x4b5b89);},VisuMZ[_0x62bedd(0xb1)]['Game_System_initialize']=Game_System[_0x62bedd(0xfb)][_0x62bedd(0x22d)],Game_System[_0x62bedd(0xfb)][_0x62bedd(0x22d)]=function(){const _0x1f7489=_0x62bedd;VisuMZ[_0x1f7489(0xb1)][_0x1f7489(0x1f9)][_0x1f7489(0x17d)](this),this[_0x1f7489(0xf7)]();},Game_System[_0x62bedd(0xfb)][_0x62bedd(0xf7)]=function(){const _0xee6095=_0x62bedd;this[_0xee6095(0x114)]=this[_0xee6095(0x114)]||{'forceShow':[],'forceHide':[],'forceEnable':[],'forceDisable':[]};},Game_System['prototype'][_0x62bedd(0x21b)]=function(){const _0x3ca36c=_0x62bedd;if(this[_0x3ca36c(0x114)]===undefined)this[_0x3ca36c(0xf7)]();const _0x5a65c6=[_0x3ca36c(0x22e),_0x3ca36c(0xec),'forceEnable',_0x3ca36c(0x179)];for(const _0x2f9fa8 of _0x5a65c6){this['_mainMenuCore'][_0x2f9fa8]=this[_0x3ca36c(0x114)][_0x2f9fa8]||[];}return this['_mainMenuCore'];},Game_System[_0x62bedd(0xfb)]['getMainMenuSymbolState']=function(_0x2d0a3f,_0x479d26){const _0x2290ab=_0x62bedd,_0x260457=this['mainMenuCoreSettings']();if(!_0x260457[_0x479d26])return![];return _0x260457[_0x479d26][_0x2290ab(0x99)](_0x2d0a3f);},Game_System[_0x62bedd(0xfb)][_0x62bedd(0x93)]=function(_0x363fc3){const _0xa80fa6=_0x62bedd,_0x1c755c=this[_0xa80fa6(0x21b)](),_0x5dd058=[_0xa80fa6(0x22e),'forceHide',_0xa80fa6(0x167),_0xa80fa6(0x179)];for(const _0x3b2f9f of _0x5dd058){_0x1c755c[_0x3b2f9f][_0xa80fa6(0x12e)](_0x363fc3);}},Game_System[_0x62bedd(0xfb)][_0x62bedd(0xa5)]=function(_0x1b04d5){const _0x409426=_0x62bedd,_0x302193=this['mainMenuCoreSettings']();!_0x302193['forceShow'][_0x409426(0x99)](_0x1b04d5)&&_0x302193[_0x409426(0x22e)]['push'](_0x1b04d5),_0x302193[_0x409426(0xec)]['remove'](_0x1b04d5);},Game_System[_0x62bedd(0xfb)]['forceHideMainMenuCommand']=function(_0x5e7cde){const _0x35faba=_0x62bedd,_0x56e2f6=this[_0x35faba(0x21b)]();!_0x56e2f6[_0x35faba(0xec)][_0x35faba(0x99)](_0x5e7cde)&&_0x56e2f6[_0x35faba(0xec)]['push'](_0x5e7cde),_0x56e2f6[_0x35faba(0x22e)][_0x35faba(0x12e)](_0x5e7cde);},Game_System[_0x62bedd(0xfb)][_0x62bedd(0x204)]=function(_0x1689a6){const _0x57b3af=_0x62bedd,_0x2e6e47=this['mainMenuCoreSettings']();!_0x2e6e47['forceEnable']['includes'](_0x1689a6)&&_0x2e6e47[_0x57b3af(0x167)][_0x57b3af(0x1b3)](_0x1689a6),_0x2e6e47[_0x57b3af(0x179)][_0x57b3af(0x12e)](_0x1689a6);},Game_System[_0x62bedd(0xfb)][_0x62bedd(0x1d4)]=function(_0x1176c5){const _0x5579c9=_0x62bedd,_0x4da060=this['mainMenuCoreSettings']();!_0x4da060[_0x5579c9(0x179)][_0x5579c9(0x99)](_0x1176c5)&&_0x4da060[_0x5579c9(0x179)][_0x5579c9(0x1b3)](_0x1176c5),_0x4da060[_0x5579c9(0x167)][_0x5579c9(0x12e)](_0x1176c5);},VisuMZ['MainMenuCore'][_0x62bedd(0x177)]=Game_Actor[_0x62bedd(0xfb)][_0x62bedd(0xbf)],Game_Actor['prototype'][_0x62bedd(0xbf)]=function(_0x426bcc){const _0xfd0579=_0x62bedd;VisuMZ['MainMenuCore'][_0xfd0579(0x177)][_0xfd0579(0x17d)](this,_0x426bcc),this['initMenuImage']();},Game_Actor['prototype'][_0x62bedd(0x1ea)]=function(){const _0x2343d5=_0x62bedd;this[_0x2343d5(0x1aa)]='',this[_0x2343d5(0x1d8)]()&&this[_0x2343d5(0x1d8)]()[_0x2343d5(0x1ca)][_0x2343d5(0x162)](/<MENU (?:IMAGE|PORTRAIT):[ ](.*)>/i)&&(this['_menuImage']=String(RegExp['$1']));},Game_Actor[_0x62bedd(0xfb)][_0x62bedd(0x188)]=function(){const _0x43fbc5=_0x62bedd;if(this[_0x43fbc5(0x1aa)]===undefined)this['initMenuImage']();return this[_0x43fbc5(0x1aa)];},Game_Actor[_0x62bedd(0xfb)][_0x62bedd(0x214)]=function(_0x3de6de){const _0x3bbe1e=_0x62bedd;if(this['_menuImage']===undefined)this[_0x3bbe1e(0x1ea)]();this[_0x3bbe1e(0x1aa)]=_0x3de6de;},Game_Actor['prototype']['getMenuImageOffsetX']=function(){const _0x150714=_0x62bedd;if(this[_0x150714(0x1d8)]()[_0x150714(0x1ca)][_0x150714(0x162)](/<MENU (?:IMAGE|PORTRAIT) OFFSET X:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this[_0x150714(0x1d8)]()['note'][_0x150714(0x162)](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);}return 0x0;},Game_Actor[_0x62bedd(0xfb)][_0x62bedd(0x218)]=function(){const _0x3f83cf=_0x62bedd;if(this['actor']()[_0x3f83cf(0x1ca)][_0x3f83cf(0x162)](/<MENU (?:IMAGE|PORTRAIT) OFFSET Y:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this['actor']()[_0x3f83cf(0x1ca)]['match'](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i))return Number(RegExp['$2']);}return 0x0;},Scene_MenuBase[_0x62bedd(0xfb)][_0x62bedd(0xcd)]=function(){const _0x171f52=_0x62bedd;return VisuMZ[_0x171f52(0xb1)]['Settings'][_0x171f52(0x1d2)][_0x171f52(0x1de)][_0x171f52(0x99)](this[_0x171f52(0x22c)]['name']);},VisuMZ[_0x62bedd(0xb1)][_0x62bedd(0x1fe)]=Scene_MenuBase['prototype']['createBackground'],Scene_MenuBase[_0x62bedd(0xfb)][_0x62bedd(0x174)]=function(){const _0x3eb478=_0x62bedd;VisuMZ[_0x3eb478(0xb1)][_0x3eb478(0x1fe)]['call'](this),this[_0x3eb478(0x1e3)]();},Scene_MenuBase[_0x62bedd(0xfb)]['createActorMenuBackgroundImageSprite']=function(){const _0x569936=_0x62bedd;this[_0x569936(0x1c6)]=new Sprite_MenuBackgroundActor(),this[_0x569936(0x150)](this[_0x569936(0x1c6)]);},VisuMZ['MainMenuCore']['Scene_MenuBase_updateActor']=Scene_MenuBase[_0x62bedd(0xfb)][_0x62bedd(0x1af)],Scene_MenuBase[_0x62bedd(0xfb)]['updateActor']=function(){const _0x4f8f83=_0x62bedd;VisuMZ[_0x4f8f83(0xb1)][_0x4f8f83(0x1fa)][_0x4f8f83(0x17d)](this),this[_0x4f8f83(0xcd)]()&&this[_0x4f8f83(0x1c6)]&&this[_0x4f8f83(0x1c6)][_0x4f8f83(0x1df)](this[_0x4f8f83(0x160)]);},VisuMZ['MainMenuCore'][_0x62bedd(0x23b)]=Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x229)],Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x229)]=function(){const _0xced836=_0x62bedd;VisuMZ[_0xced836(0xb1)][_0xced836(0x23b)][_0xced836(0x17d)](this),this[_0xced836(0xe2)](),this[_0xced836(0x189)](),this[_0xced836(0x10b)]();},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x191)]=function(){const _0x4dda44=_0x62bedd,_0x704de7=this['commandWindowRect'](),_0x4dfd15=new Window_MenuCommand(_0x704de7);_0x4dfd15['setHandler'](_0x4dda44(0xe5),this[_0x4dda44(0x1ed)][_0x4dda44(0x1e1)](this)),this[_0x4dda44(0x1ee)](_0x4dfd15),this[_0x4dda44(0x207)]=_0x4dfd15;},VisuMZ[_0x62bedd(0xb1)][_0x62bedd(0x1d0)]=Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x124)],Scene_Menu['prototype'][_0x62bedd(0x124)]=function(){const _0xc72957=_0x62bedd,_0x42a529=this[_0xc72957(0x146)]();if(_0x42a529==='top')return this[_0xc72957(0xe7)]();else{if(_0x42a529===_0xc72957(0x154))return this[_0xc72957(0xef)]();else{if(_0x42a529===_0xc72957(0x1cf))return this[_0xc72957(0x220)]();else{if(_0x42a529===_0xc72957(0x15f))return this['commandWindowRectThinBottomStyle']();else{if(_0x42a529===_0xc72957(0x1eb))return this[_0xc72957(0xe3)]();else{const _0x409466=VisuMZ[_0xc72957(0xb1)][_0xc72957(0x1d0)][_0xc72957(0x17d)](this);return this[_0xc72957(0x11c)](_0x409466),_0x409466;}}}}}},Scene_Menu['prototype'][_0x62bedd(0x11c)]=function(_0x4332c3){const _0x465fe8=_0x62bedd;this[_0x465fe8(0x120)]()&&(_0x4332c3[_0x465fe8(0xd0)]-=this[_0x465fe8(0x200)]()[_0x465fe8(0xd0)]),this[_0x465fe8(0xb9)]()&&(_0x4332c3[_0x465fe8(0xd0)]-=this[_0x465fe8(0x19e)]()[_0x465fe8(0xd0)]);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0xe7)]=function(){const _0x94f9eb=_0x62bedd,_0x194c55=VisuMZ['MainMenuCore'][_0x94f9eb(0x1a8)][_0x94f9eb(0xd9)][_0x94f9eb(0x101)],_0x19c38c=Graphics[_0x94f9eb(0x20c)],_0x350976=this[_0x94f9eb(0x1f5)](_0x194c55,!![]),_0x49a157=0x0,_0x9557b5=this['mainAreaTop']();return new Rectangle(_0x49a157,_0x9557b5,_0x19c38c,_0x350976);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0xef)]=function(){const _0x58e653=_0x62bedd,_0x50319f=VisuMZ[_0x58e653(0xb1)][_0x58e653(0x1a8)]['CustomCmdWin'][_0x58e653(0x101)],_0x347abf=Graphics[_0x58e653(0x20c)],_0x21e3be=this[_0x58e653(0x1f5)](0x1,!![]),_0x2fd686=0x0,_0x3897f3=this[_0x58e653(0x126)]();return new Rectangle(_0x2fd686,_0x3897f3,_0x347abf,_0x21e3be);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x220)]=function(){const _0x28e2af=_0x62bedd,_0x1a38b8=VisuMZ[_0x28e2af(0xb1)][_0x28e2af(0x1a8)][_0x28e2af(0xd9)]['Rows'],_0x2b8a21=Graphics[_0x28e2af(0x20c)],_0x31c016=this[_0x28e2af(0x1f5)](_0x1a38b8,!![]),_0x45523d=0x0,_0x592b87=this[_0x28e2af(0xb6)]()-_0x31c016;return new Rectangle(_0x45523d,_0x592b87,_0x2b8a21,_0x31c016);},Scene_Menu['prototype'][_0x62bedd(0x187)]=function(){const _0x585799=_0x62bedd,_0x92579b=VisuMZ['MainMenuCore'][_0x585799(0x1a8)][_0x585799(0xd9)][_0x585799(0x101)],_0x39cfc0=Graphics[_0x585799(0x20c)],_0x42dc72=this[_0x585799(0x1f5)](0x1,!![]),_0xda4c16=0x0,_0x31ab82=this[_0x585799(0xb6)]()-_0x42dc72;return new Rectangle(_0xda4c16,_0x31ab82,_0x39cfc0,_0x42dc72);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0xe3)]=function(){const _0x45d3f0=_0x62bedd,_0x34328c=VisuMZ['MainMenuCore'][_0x45d3f0(0x1a8)][_0x45d3f0(0xd9)][_0x45d3f0(0x101)],_0x334d3b=Graphics['boxWidth'],_0xe3d5a=Window_MenuCommand['prototype'][_0x45d3f0(0x13b)](_0x34328c),_0x4ebc5c=0x0,_0x1b2bb6=Math[_0x45d3f0(0x192)]((Graphics[_0x45d3f0(0x180)]-_0xe3d5a)/0x2);return new Rectangle(_0x4ebc5c,_0x1b2bb6,_0x334d3b,_0xe3d5a);},Scene_Menu['prototype'][_0x62bedd(0x146)]=function(){const _0x3bef29=_0x62bedd;return VisuMZ[_0x3bef29(0xb1)]['Settings'][_0x3bef29(0x1f1)];},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x1e8)]=function(){const _0x3d15ae=_0x62bedd;if(this[_0x3d15ae(0x146)]()!==_0x3d15ae(0x10a))return!![];return VisuMZ['MainMenuCore'][_0x3d15ae(0x1a8)]['General'][_0x3d15ae(0xeb)];},Scene_Menu[_0x62bedd(0xfb)]['createGoldWindow']=function(){const _0x1dd2ea=_0x62bedd,_0x50a1e9=this['goldWindowRect']();this[_0x1dd2ea(0xf6)]=this[_0x1dd2ea(0x1e8)]()?new Window_ThinGold(_0x50a1e9):new Window_Gold(_0x50a1e9),this[_0x1dd2ea(0x1ee)](this[_0x1dd2ea(0xf6)]);},VisuMZ[_0x62bedd(0xb1)]['Scene_Menu_goldWindowRect']=Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x181)],Scene_Menu['prototype']['goldWindowRect']=function(){const _0x4193d1=_0x62bedd,_0x17b534=this[_0x4193d1(0x146)]();if(['top','thinTop','mobile'][_0x4193d1(0x99)](_0x17b534))return this['goldWindowRectTopStyle']();else{if([_0x4193d1(0x1cf),'thinBottom'][_0x4193d1(0x99)](_0x17b534))return this[_0x4193d1(0xfe)]();else{const _0x5cf039=VisuMZ[_0x4193d1(0xb1)][_0x4193d1(0x243)][_0x4193d1(0x17d)](this);return this[_0x4193d1(0x105)](_0x5cf039),_0x5cf039;}}},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x105)]=function(_0x49f340){const _0x530698=_0x62bedd;if(this['thinGoldWindow']()){if(VisuMZ[_0x530698(0xb1)][_0x530698(0x1a8)][_0x530698(0x1d2)]['AutoGoldY']){const _0x1e9a11=_0x49f340[_0x530698(0xd0)]-this[_0x530698(0x1f5)](0x1,![]);_0x49f340['y']+=_0x1e9a11;}VisuMZ[_0x530698(0xb1)][_0x530698(0x1a8)][_0x530698(0x1d2)][_0x530698(0x149)]&&(_0x49f340[_0x530698(0xd0)]=this[_0x530698(0x1f5)](0x1,![]));}},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x1bc)]=function(){const _0x3655e7=_0x62bedd,_0x2412cd=this[_0x3655e7(0xa3)](),_0x3c6c78=this[_0x3655e7(0x1f5)](0x1,![]),_0x446f7f=Graphics[_0x3655e7(0x20c)]-_0x2412cd,_0x158924=this[_0x3655e7(0xb6)]()-_0x3c6c78;return new Rectangle(_0x446f7f,_0x158924,_0x2412cd,_0x3c6c78);},Scene_Menu['prototype']['goldWindowRectBottomStyle']=function(){const _0xe47482=_0x62bedd,_0x39606a=this[_0xe47482(0xa3)](),_0xa76ff6=this[_0xe47482(0x1f5)](0x1,![]),_0x474ec7=Graphics['boxWidth']-_0x39606a,_0x400c7f=this['mainAreaTop']();return new Rectangle(_0x474ec7,_0x400c7f,_0x39606a,_0xa76ff6);},VisuMZ[_0x62bedd(0xb1)][_0x62bedd(0x12d)]=Scene_Menu[_0x62bedd(0xfb)]['createStatusWindow'],Scene_Menu['prototype']['createStatusWindow']=function(){const _0x159123=_0x62bedd;VisuMZ[_0x159123(0xb1)]['Scene_Menu_createStatusWindow']['call'](this),this['adjustStatusWindowMobile']();},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x1e4)]=function(){const _0x3b87de=_0x62bedd;this[_0x3b87de(0x146)]()==='mobile'&&(this['_statusWindow'][_0x3b87de(0xde)]=0x0);},VisuMZ[_0x62bedd(0xb1)]['Scene_Menu_statusWindowRect']=Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x1c2)],Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x1c2)]=function(){const _0x664c8f=_0x62bedd,_0x272a05=this[_0x664c8f(0x146)]();if(['top',_0x664c8f(0x154)][_0x664c8f(0x99)](_0x272a05))return this[_0x664c8f(0x16b)]();else{if([_0x664c8f(0x1cf),_0x664c8f(0x15f)][_0x664c8f(0x99)](_0x272a05))return this[_0x664c8f(0x219)]();else return _0x272a05===_0x664c8f(0x1eb)?this['statusWindowRectMobileStyle']():VisuMZ[_0x664c8f(0xb1)][_0x664c8f(0x21d)][_0x664c8f(0x17d)](this);}},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x16b)]=function(){const _0x4a927c=_0x62bedd,_0x59b901=Graphics[_0x4a927c(0x20c)],_0xfad3e3=this[_0x4a927c(0x1ad)]()-this[_0x4a927c(0x207)][_0x4a927c(0xd0)]-this['_goldWindow'][_0x4a927c(0xd0)],_0x1ab53c=0x0,_0x263c12=this[_0x4a927c(0x207)]['y']+this['_commandWindow'][_0x4a927c(0xd0)];return new Rectangle(_0x1ab53c,_0x263c12,_0x59b901,_0xfad3e3);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x219)]=function(){const _0x14ab99=_0x62bedd,_0x58cc18=Graphics[_0x14ab99(0x20c)],_0x276cd7=this['mainAreaHeight']()-this[_0x14ab99(0x207)]['height']-this[_0x14ab99(0xf6)][_0x14ab99(0xd0)],_0x1f4bee=0x0,_0x3b009f=this[_0x14ab99(0xf6)]['y']+this[_0x14ab99(0xf6)]['height'];return new Rectangle(_0x1f4bee,_0x3b009f,_0x58cc18,_0x276cd7);},Scene_Menu['prototype'][_0x62bedd(0xa6)]=function(){const _0x1402b4=_0x62bedd,_0x26b491=Graphics['boxWidth'],_0x377c9c=this[_0x1402b4(0x1ad)]()-this['_goldWindow']['height'],_0x15cf46=0x0,_0xa4b938=this[_0x1402b4(0xb6)]()-this[_0x1402b4(0xf6)][_0x1402b4(0xd0)]-_0x377c9c;return new Rectangle(_0x15cf46,_0xa4b938,_0x26b491,_0x377c9c);},Scene_Menu['prototype']['createPlaytimeWindow']=function(){const _0x1bc157=_0x62bedd;if(!this['canCreatePlaytimeWindow']())return new Rectangle(0x0,0x0,0x0,0x0);const _0x7e8263=this[_0x1bc157(0x200)]();this[_0x1bc157(0x9b)]=new Window_Playtime(_0x7e8263),this['_playtimeWindow'][_0x1bc157(0xf4)](VisuMZ[_0x1bc157(0xb1)]['Settings']['Playtime'][_0x1bc157(0xe4)]),this[_0x1bc157(0x1ee)](this[_0x1bc157(0x9b)]);},Scene_Menu['prototype'][_0x62bedd(0x23f)]=function(){const _0x1d5540=_0x62bedd;return VisuMZ['MainMenuCore'][_0x1d5540(0x1a8)][_0x1d5540(0x168)]['Enable'];},Scene_Menu['prototype']['adjustCommandHeightByPlaytime']=function(){const _0x3735d7=_0x62bedd;return this[_0x3735d7(0x23f)]()&&(VisuMZ['MainMenuCore'][_0x3735d7(0x1a8)][_0x3735d7(0x168)][_0x3735d7(0x132)]??!![]);},Scene_Menu[_0x62bedd(0xfb)]['playtimeWindowRect']=function(){const _0x4db966=_0x62bedd,_0x2fca34=this['commandWindowStyle']();if([_0x4db966(0xf1),_0x4db966(0x154),_0x4db966(0x1eb)]['includes'](_0x2fca34))return this[_0x4db966(0xf3)]();else return['bottom',_0x4db966(0x15f)][_0x4db966(0x99)](_0x2fca34)?this[_0x4db966(0x1b7)]():VisuMZ[_0x4db966(0xb1)][_0x4db966(0x1a8)][_0x4db966(0x168)][_0x4db966(0x153)][_0x4db966(0x17d)](this);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0xf3)]=function(){const _0x1f3947=_0x62bedd,_0x7f3171=this['mainCommandWidth'](),_0x2a9dfe=this[_0x1f3947(0x1f5)](0x1,![]),_0x5a1506=0x0,_0x22e7de=this[_0x1f3947(0xb6)]()-_0x2a9dfe;return new Rectangle(_0x5a1506,_0x22e7de,_0x7f3171,_0x2a9dfe);},Scene_Menu['prototype'][_0x62bedd(0x1b7)]=function(){const _0x516994=_0x62bedd,_0x27d807=this['mainCommandWidth'](),_0x2fe6de=this['calcWindowHeight'](0x1,![]),_0x53bf42=0x0,_0x1131a8=this[_0x516994(0x126)]();return new Rectangle(_0x53bf42,_0x1131a8,_0x27d807,_0x2fe6de);},Scene_Menu['prototype'][_0x62bedd(0x189)]=function(){const _0x34e65d=_0x62bedd;if(!this[_0x34e65d(0x190)]())return new Rectangle(0x0,0x0,0x0,0x0);const _0x3aec2b=this[_0x34e65d(0x19e)]();this[_0x34e65d(0xe6)]=new Window_MenuVariables(_0x3aec2b),this[_0x34e65d(0xe6)][_0x34e65d(0xf4)](VisuMZ['MainMenuCore']['Settings'][_0x34e65d(0xed)][_0x34e65d(0xe4)]),this['addWindow'](this[_0x34e65d(0xe6)]);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x190)]=function(){const _0x169e66=_0x62bedd;return VisuMZ[_0x169e66(0xb1)][_0x169e66(0x1a8)][_0x169e66(0xed)][_0x169e66(0x14a)];},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0xb9)]=function(){const _0x4ff6b8=_0x62bedd;return this[_0x4ff6b8(0x190)]()&&(VisuMZ[_0x4ff6b8(0xb1)][_0x4ff6b8(0x1a8)]['Variable']['AdjustCommandHeight']??!![]);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x19e)]=function(){const _0x4c2ea3=_0x62bedd,_0x58eee2=this['commandWindowStyle']();if([_0x4c2ea3(0xf1),_0x4c2ea3(0x154),_0x4c2ea3(0x1eb)]['includes'](_0x58eee2))return this[_0x4c2ea3(0x112)]();else return[_0x4c2ea3(0x1cf),_0x4c2ea3(0x15f)]['includes'](_0x58eee2)?this['variableWindowRectBottomStyle']():VisuMZ[_0x4c2ea3(0xb1)][_0x4c2ea3(0x1a8)]['Variable'][_0x4c2ea3(0x153)][_0x4c2ea3(0x17d)](this);},Scene_Menu[_0x62bedd(0xfb)]['variableWindowRectTopStyle']=function(){const _0x35db90=_0x62bedd,_0xe5b557=Graphics[_0x35db90(0x20c)]-this[_0x35db90(0xf6)][_0x35db90(0x194)]-(this['_playtimeWindow']?this[_0x35db90(0x9b)][_0x35db90(0x194)]:0x0),_0x52b40d=this['calcWindowHeight'](0x1,![]),_0x483c86=this[_0x35db90(0xf6)]['x']-_0xe5b557,_0xc1bc37=this[_0x35db90(0xb6)]()-_0x52b40d;return new Rectangle(_0x483c86,_0xc1bc37,_0xe5b557,_0x52b40d);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0xfd)]=function(){const _0x33f14c=_0x62bedd,_0x520022=Graphics['boxWidth']-this[_0x33f14c(0xf6)][_0x33f14c(0x194)]-(this[_0x33f14c(0x9b)]?this[_0x33f14c(0x9b)][_0x33f14c(0x194)]:0x0),_0x433a1f=this[_0x33f14c(0x1f5)](0x1,![]),_0x286dd8=this['_goldWindow']['x']-_0x520022,_0x412f7c=this[_0x33f14c(0x126)]();return new Rectangle(_0x286dd8,_0x412f7c,_0x520022,_0x433a1f);},Scene_Menu[_0x62bedd(0xfb)]['createDummyWindow']=function(){const _0x4d0d4e=_0x62bedd;if(!this['needsDummyWindow']())return;const _0xb3508f=this[_0x4d0d4e(0x19e)]();this[_0x4d0d4e(0x1c8)]=new Window_Base(_0xb3508f),this[_0x4d0d4e(0x1c8)][_0x4d0d4e(0xf4)](VisuMZ[_0x4d0d4e(0xb1)][_0x4d0d4e(0x1a8)][_0x4d0d4e(0xed)][_0x4d0d4e(0xe4)]),this[_0x4d0d4e(0x1ee)](this[_0x4d0d4e(0x1c8)]);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x1d7)]=function(){const _0x4d0014=_0x62bedd;if(['default',_0x4d0014(0x1eb)][_0x4d0014(0x99)](this[_0x4d0014(0x146)]()))return![];if(this[_0x4d0014(0xe6)])return![];return!![];},VisuMZ[_0x62bedd(0xb1)]['Scene_Menu_commandPersonal']=Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x1a5)],Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x1a5)]=function(){const _0x549fbe=_0x62bedd;if(this['isSoloQuickMode']()&&this[_0x549fbe(0x205)])$gameParty[_0x549fbe(0x19a)]($gameParty[_0x549fbe(0x12f)]()[0x0]),this[_0x549fbe(0xd4)]();else{if(this['commandWindowStyle']()===_0x549fbe(0x1eb))this[_0x549fbe(0x205)][_0x549fbe(0xd6)]();VisuMZ[_0x549fbe(0xb1)][_0x549fbe(0x18a)][_0x549fbe(0x17d)](this);}},Scene_Menu['prototype']['isSoloQuickMode']=function(){const _0x578b9f=_0x62bedd;return VisuMZ[_0x578b9f(0xb1)][_0x578b9f(0x1a8)][_0x578b9f(0x1d2)][_0x578b9f(0x9a)]&&$gameParty['members']()[_0x578b9f(0x100)]<=0x1;},Scene_Menu['prototype']['onPersonalOk']=function(){const _0x533daf=_0x62bedd,_0x1971a3=this['_commandWindow'][_0x533daf(0x13e)](),_0x12b6ff=this[_0x533daf(0x207)][_0x533daf(0x10d)]();for(const _0x245d40 of Window_MenuCommand['_commandList']){if(_0x245d40[_0x533daf(0x20e)]===_0x1971a3){_0x245d40[_0x533daf(0x1cb)][_0x533daf(0x17d)](this,_0x12b6ff);return;}}},VisuMZ[_0x62bedd(0xb1)][_0x62bedd(0xc6)]=Scene_Menu[_0x62bedd(0xfb)]['onPersonalCancel'],Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0xb0)]=function(){const _0x1fc160=_0x62bedd;VisuMZ[_0x1fc160(0xb1)][_0x1fc160(0xc6)][_0x1fc160(0x17d)](this);if(this[_0x1fc160(0x146)]()==='mobile')this[_0x1fc160(0x205)][_0x1fc160(0x1a4)]();},Scene_Menu['prototype'][_0x62bedd(0x209)]=function(){const _0xac8ff5=_0x62bedd,_0x1e6282=parseInt(this['_commandWindow']['currentExt']());_0x1e6282?($gameTemp[_0xac8ff5(0xdd)](_0x1e6282),this[_0xac8ff5(0x169)]()):this['_commandWindow'][_0xac8ff5(0x109)]();},VisuMZ['MainMenuCore'][_0x62bedd(0xbc)]=Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0xa2)],Scene_Menu[_0x62bedd(0xfb)]['commandFormation']=function(){const _0x441aee=_0x62bedd;VisuMZ['MainMenuCore'][_0x441aee(0xbc)][_0x441aee(0x17d)](this);if(this['commandWindowStyle']()==='mobile')this[_0x441aee(0x205)][_0x441aee(0xd6)]();},VisuMZ[_0x62bedd(0xb1)][_0x62bedd(0x1dd)]=Scene_Menu['prototype'][_0x62bedd(0x148)],Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x148)]=function(){const _0x3c6cec=_0x62bedd;VisuMZ[_0x3c6cec(0xb1)]['Scene_Menu_onFormationCancel'][_0x3c6cec(0x17d)](this);if(this[_0x3c6cec(0x146)]()==='mobile')this[_0x3c6cec(0x205)]['close']();},Scene_Menu['prototype']['commandLoad']=function(){const _0x3a94d4=_0x62bedd;Imported[_0x3a94d4(0x221)]&&StorageManager['saveStyle']()==='single'?DataManager[_0x3a94d4(0x237)](0x0)['then'](()=>this[_0x3a94d4(0x228)]())[_0x3a94d4(0x1b5)](()=>this[_0x3a94d4(0x125)]()):SceneManager[_0x3a94d4(0x1b3)](Scene_Load);},Scene_Menu[_0x62bedd(0xfb)]['commandCancel']=function(){const _0x268725=_0x62bedd;this[_0x268725(0x207)][_0x268725(0x145)]()!==''?this[_0x268725(0x207)]['removeSubcategory']():this[_0x268725(0x169)]();},Scene_Menu['prototype']['onSaveCoreLoadSuccess']=function(){const _0x46cd5c=_0x62bedd;SoundManager[_0x46cd5c(0xa1)](),this['fadeOutAll'](),Scene_Load[_0x46cd5c(0xfb)][_0x46cd5c(0xb7)](),SceneManager[_0x46cd5c(0xd2)](Scene_Map),this[_0x46cd5c(0x12c)]=!![],VisuMZ['SaveCore'][_0x46cd5c(0x1a8)][_0x46cd5c(0xd5)]['OnLoadSuccessJS'][_0x46cd5c(0x17d)](this);},Scene_Menu[_0x62bedd(0xfb)][_0x62bedd(0x125)]=function(){const _0x108d9c=_0x62bedd;SoundManager['playBuzzer'](),VisuMZ[_0x108d9c(0x14b)][_0x108d9c(0x1a8)][_0x108d9c(0xd5)][_0x108d9c(0x184)][_0x108d9c(0x17d)](this),this['loadFailureConfirmationWindow']();},VisuMZ[_0x62bedd(0xb1)][_0x62bedd(0x14f)]=Scene_Menu['prototype'][_0x62bedd(0x249)],Scene_Menu['prototype'][_0x62bedd(0x249)]=function(){const _0x35c147=_0x62bedd;VisuMZ[_0x35c147(0xb1)][_0x35c147(0x14f)]['call'](this);if(this['_loadSuccess'])$gameSystem[_0x35c147(0xd1)]();};function Sprite_MenuBackgroundActor(){const _0x45547d=_0x62bedd;this[_0x45547d(0x22d)](...arguments);}Sprite_MenuBackgroundActor[_0x62bedd(0xfb)]=Object[_0x62bedd(0x229)](Sprite['prototype']),Sprite_MenuBackgroundActor['prototype'][_0x62bedd(0x22c)]=Sprite_MenuBackgroundActor,Sprite_MenuBackgroundActor['prototype'][_0x62bedd(0x22d)]=function(){const _0x146166=_0x62bedd;this['_actor']=null,this[_0x146166(0x135)]=![],Sprite['prototype']['initialize']['call'](this),this['x']=Graphics[_0x146166(0x194)];},Sprite_MenuBackgroundActor['prototype'][_0x62bedd(0x1df)]=function(_0x3645f6){const _0x241022=_0x62bedd;this['_actor']!==_0x3645f6&&(this[_0x241022(0x160)]=_0x3645f6,this[_0x241022(0x233)]());},Sprite_MenuBackgroundActor[_0x62bedd(0xfb)][_0x62bedd(0x233)]=function(){const _0x43532b=_0x62bedd;this['_bitmapReady']=![],this['_actor']?(this['bitmap']=ImageManager[_0x43532b(0xda)](this[_0x43532b(0x160)][_0x43532b(0x188)]()),this[_0x43532b(0x1bd)][_0x43532b(0xa7)](this['onBitmapLoad'][_0x43532b(0x1e1)](this))):this[_0x43532b(0x1bd)]=new Bitmap(0x1,0x1);},Sprite_MenuBackgroundActor['prototype'][_0x62bedd(0x1c5)]=function(){const _0xf79c0d=_0x62bedd;this[_0xf79c0d(0x135)]=!![],VisuMZ['MainMenuCore']['Settings'][_0xf79c0d(0x1d2)][_0xf79c0d(0x13c)][_0xf79c0d(0x17d)](this);},Sprite_MenuBackgroundActor['prototype'][_0x62bedd(0x1a0)]=function(){const _0x4e0ee3=_0x62bedd;Sprite[_0x4e0ee3(0xfb)][_0x4e0ee3(0x1a0)][_0x4e0ee3(0x17d)](this),this[_0x4e0ee3(0x135)]&&(this[_0x4e0ee3(0xb8)](),this[_0x4e0ee3(0x10c)](),this[_0x4e0ee3(0x199)]());},Sprite_MenuBackgroundActor[_0x62bedd(0xfb)]['updateOpacity']=function(){const _0x1558b4=_0x62bedd;if(this[_0x1558b4(0x185)]>0x0){const _0x12ce46=this[_0x1558b4(0x185)];this[_0x1558b4(0x217)]=(this['opacity']*(_0x12ce46-0x1)+0xff)/_0x12ce46;}},Sprite_MenuBackgroundActor['prototype'][_0x62bedd(0x10c)]=function(){const _0x578b6d=_0x62bedd;if(this[_0x578b6d(0x185)]>0x0){const _0x148706=this[_0x578b6d(0x185)];this['x']=(this['x']*(_0x148706-0x1)+this['_targetX'])/_0x148706,this['y']=(this['y']*(_0x148706-0x1)+this[_0x578b6d(0x182)])/_0x148706;}},Sprite_MenuBackgroundActor['prototype'][_0x62bedd(0x199)]=function(){if(this['_duration']>0x0)this['_duration']--;},ImageManager[_0x62bedd(0x245)]=ImageManager[_0x62bedd(0x245)]||0x9,ImageManager['svActorVertCells']=ImageManager[_0x62bedd(0xc2)]||0x6,Window_Base[_0x62bedd(0xfb)][_0x62bedd(0x1fd)]=function(_0x57da3f,_0x3f31c9,_0x194704){const _0x26e013=_0x62bedd,_0x4ccca5=_0x57da3f[_0x26e013(0x162)](/\$/i),_0x1756e7=ImageManager[_0x26e013(0x98)](_0x57da3f),_0x3da20a=_0x1756e7[_0x26e013(0x194)]/(_0x4ccca5?0x1:ImageManager['svActorHorzCells']),_0x32f0e2=_0x1756e7[_0x26e013(0xd0)]/(_0x4ccca5?0x1:ImageManager[_0x26e013(0xc2)]),_0xdec7b4=0x0,_0x8ea87=0x0;this['contents'][_0x26e013(0x95)](_0x1756e7,_0xdec7b4,_0x8ea87,_0x3da20a,_0x32f0e2,_0x3f31c9-_0x3da20a/0x2,_0x194704-_0x32f0e2);},Window_MenuCommand['_commandList']=VisuMZ['MainMenuCore']['Settings']['CommandList'],Window_MenuCommand['SUBCATEGORY_LIST']=undefined,VisuMZ['MainMenuCore'][_0x62bedd(0x16f)]=Window_MenuCommand['prototype'][_0x62bedd(0x22d)],Window_MenuCommand['prototype'][_0x62bedd(0x22d)]=function(_0x14ff4a){const _0x266f59=_0x62bedd;this[_0x266f59(0x18d)]=$gameTemp[_0x266f59(0xfa)]||'',VisuMZ[_0x266f59(0xb1)][_0x266f59(0x16f)][_0x266f59(0x17d)](this,_0x14ff4a),this[_0x266f59(0x231)](_0x14ff4a);},Window_MenuCommand['prototype'][_0x62bedd(0x231)]=function(_0x35fc28){const _0x1d78a3=_0x62bedd,_0x13bb86=new Rectangle(0x0,0x0,_0x35fc28[_0x1d78a3(0x194)],_0x35fc28[_0x1d78a3(0xd0)]);this[_0x1d78a3(0x159)]=new Window_Base(_0x13bb86),this[_0x1d78a3(0x159)][_0x1d78a3(0x217)]=0x0,this[_0x1d78a3(0x150)](this[_0x1d78a3(0x159)]),this[_0x1d78a3(0x19b)]();},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x23d)]=function(){const _0x2439de=_0x62bedd;Window_HorzCommand[_0x2439de(0xfb)][_0x2439de(0x23d)]['call'](this);if(this[_0x2439de(0x159)])this[_0x2439de(0x19b)]();},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x19b)]=function(){const _0x3a55dc=_0x62bedd,_0x466642=this[_0x3a55dc(0x159)];_0x466642[_0x3a55dc(0x203)][_0x3a55dc(0x171)]();const _0x3db76e=this[_0x3a55dc(0x1e9)](this[_0x3a55dc(0x1f2)]());if(_0x3db76e===_0x3a55dc(0x1ce)){const _0xbcb539=this[_0x3a55dc(0x1ba)](this[_0x3a55dc(0x1f2)]());let _0x4fcc67=this[_0x3a55dc(0x13a)](this[_0x3a55dc(0x1f2)]());_0x4fcc67=_0x4fcc67['replace'](/\\I\[(\d+)\]/gi,''),_0x466642[_0x3a55dc(0x12b)](),this[_0x3a55dc(0xd7)](_0x4fcc67,_0xbcb539),this['commandNameWindowDrawText'](_0x4fcc67,_0xbcb539),this['commandNameWindowCenter'](_0x4fcc67,_0xbcb539);}},Window_MenuCommand['prototype'][_0x62bedd(0xd7)]=function(_0x4f74ba,_0xe09268){},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x208)]=function(_0x10230a,_0x1dcc06){const _0x1ff344=_0x62bedd,_0x1b6c67=this[_0x1ff344(0x159)];_0x1b6c67['drawText'](_0x10230a,0x0,_0x1dcc06['y'],_0x1b6c67[_0x1ff344(0x212)],'center');},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x1f6)]=function(_0x4bf388,_0x52c5a3){const _0x128eb3=_0x62bedd,_0x11543b=this[_0x128eb3(0x159)],_0x5073fb=$gameSystem[_0x128eb3(0x1f7)](),_0x36d517=_0x52c5a3['x']+Math[_0x128eb3(0x1c4)](_0x52c5a3[_0x128eb3(0x194)]/0x2)+_0x5073fb;_0x11543b['x']=_0x11543b['width']/-0x2+_0x36d517,_0x11543b['y']=Math['floor'](_0x52c5a3[_0x128eb3(0xd0)]/0x4);},Window_MenuCommand['prototype']['itemHeight']=function(){const _0x1cb351=_0x62bedd,_0x53c4a0=SceneManager[_0x1cb351(0x1b8)][_0x1cb351(0x146)]();if(_0x53c4a0===_0x1cb351(0x1eb)){const _0x52a54c=VisuMZ['MainMenuCore']['Settings']['CustomCmdWin'][_0x1cb351(0xe9)];return this[_0x1cb351(0x238)]()*_0x52a54c+0x8;}else return Window_Command[_0x1cb351(0xfb)]['itemHeight'][_0x1cb351(0x17d)](this);},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x21a)]=function(){this['makeMainMenuCoreCommandList']();},Window_MenuCommand[_0x62bedd(0xfb)]['makeMainMenuCoreCommandList']=function(){const _0x1376fb=_0x62bedd;let _0x21257b=0x0;for(const _0xed6fb of Window_MenuCommand[_0x1376fb(0x139)]){let _0x578860=_0xed6fb[_0x1376fb(0x20e)];if(this[_0x1376fb(0x151)](_0x578860,_0xed6fb)){let _0x51a7e9=_0xed6fb[_0x1376fb(0x137)];if(['',_0x1376fb(0x21f)][_0x1376fb(0x99)](_0x51a7e9))_0x51a7e9=_0xed6fb[_0x1376fb(0x1c0)][_0x1376fb(0x17d)](this);const _0x1858e2=_0xed6fb[_0x1376fb(0x11e)];_0x1858e2>0x0&&this[_0x1376fb(0x20d)]()!==_0x1376fb(0x15b)&&(_0x51a7e9='\x5cI[%1]%2'[_0x1376fb(0x196)](_0x1858e2,_0x51a7e9));const _0x5713ad=this[_0x1376fb(0x24d)](_0x578860,_0xed6fb),_0x149bc8=_0xed6fb[_0x1376fb(0xf8)][_0x1376fb(0x17d)](this);_0x578860===_0x1376fb(0x15c)&&(_0x21257b++,_0x578860+=_0x21257b),this[_0x1376fb(0x1b6)](_0x51a7e9,_0x578860,_0x5713ad,_0x149bc8),this[_0x1376fb(0x172)](_0x578860,_0xed6fb[_0x1376fb(0x215)][_0x1376fb(0x1e1)](this,_0x149bc8));}this['addSymbolBridge'](_0x578860);}},Window_MenuCommand[_0x62bedd(0xfb)]['isMainMenuCommandVisible']=function(_0x1e474f,_0x226821,_0x32b993){const _0x2f8718=_0x62bedd;if(!_0x32b993){if(!this[_0x2f8718(0x17e)](_0x1e474f,_0x226821))return![];}if($gameSystem[_0x2f8718(0x1fc)](_0x1e474f,_0x2f8718(0x22e)))return!![];if($gameSystem[_0x2f8718(0x1fc)](_0x1e474f,_0x2f8718(0xec)))return![];return _0x226821[_0x2f8718(0x173)][_0x2f8718(0x17d)](this,_0x1e474f,_0x226821);},Window_MenuCommand[_0x62bedd(0xfb)]['isMainMenuCommandEnabled']=function(_0x951cf2,_0x4b99ff){const _0x4da60b=_0x62bedd;if($gameSystem[_0x4da60b(0x1fc)](_0x951cf2,_0x4da60b(0x167)))return!![];if($gameSystem[_0x4da60b(0x1fc)](_0x951cf2,'forceDisable'))return![];return _0x4b99ff[_0x4da60b(0x156)][_0x4da60b(0x17d)](this,_0x951cf2,_0x4b99ff);},Window_MenuCommand['prototype'][_0x62bedd(0x138)]=function(_0x602ae3){const _0x1161b7=_0x62bedd;switch(_0x602ae3){case _0x1161b7(0x186):this[_0x1161b7(0x136)]();break;case _0x1161b7(0x18f):this[_0x1161b7(0x1c9)](),this[_0x1161b7(0x121)]();break;case _0x1161b7(0x12a):this[_0x1161b7(0xa9)]();break;case _0x1161b7(0x9c):this[_0x1161b7(0xc3)]();break;case'gameEnd':this['addGameEndCommand']();break;}},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x136)]=function(){},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x1c9)]=function(){},Window_MenuCommand[_0x62bedd(0xfb)]['addOriginalCommands']=function(){},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0xa9)]=function(){},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0xc3)]=function(){},Window_MenuCommand['prototype'][_0x62bedd(0x230)]=function(){},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x110)]=function(){const _0x49c30e=_0x62bedd,_0x165088=SceneManager[_0x49c30e(0x1b8)][_0x49c30e(0x146)]();if([_0x49c30e(0x154),_0x49c30e(0x15f)]['includes'](_0x165088))return this[_0x49c30e(0x1f0)]?this[_0x49c30e(0x15a)]():0x4;else return _0x165088!==_0x49c30e(0x10a)?VisuMZ[_0x49c30e(0xb1)][_0x49c30e(0x1a8)]['CustomCmdWin'][_0x49c30e(0xcb)]:Window_Command['prototype'][_0x49c30e(0x110)][_0x49c30e(0x17d)](this);},Window_MenuCommand['prototype'][_0x62bedd(0x145)]=function(){return this['_subcategory']||'';},Window_MenuCommand['prototype'][_0x62bedd(0x17e)]=function(_0x2a1f5e,_0x23ed22){const _0xbb0ad5=_0x62bedd,_0x3d28a2=_0x23ed22[_0xbb0ad5(0x210)]||'';if(!this[_0xbb0ad5(0x18c)](_0x3d28a2)&&this['currentSubcategory']()==='')return!![];return _0x3d28a2===this[_0xbb0ad5(0x145)]();},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x18c)]=function(_0x34bf9f){const _0x30e775=_0x62bedd;return this[_0x30e775(0x1d6)]()[_0x30e775(0x99)](_0x34bf9f);},Window_MenuCommand['prototype'][_0x62bedd(0x1d6)]=function(){const _0x21a183=_0x62bedd;if(Window_MenuCommand['SUBCATEGORY_LIST']!==undefined)return Window_MenuCommand['SUBCATEGORY_LIST'];Window_MenuCommand['SUBCATEGORY_LIST']=[];for(const _0x5f5df7 of Window_MenuCommand['_commandList']){const _0x59118c=_0x5f5df7[_0x21a183(0x20e)];if(_0x59118c!=='subcategory')continue;const _0x2ed67b=_0x5f5df7[_0x21a183(0xf8)][_0x21a183(0x17d)](this);Window_MenuCommand[_0x21a183(0x11a)][_0x21a183(0x1b3)](_0x2ed67b);}return Window_MenuCommand[_0x21a183(0x11a)];},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0xce)]=function(_0x54f3d4){const _0x1d016c=_0x62bedd;if(!_0x54f3d4)return!![];const _0x1dc049=_0x54f3d4[_0x1d016c(0xf8)][_0x1d016c(0x17d)](this);for(const _0x37fcf4 of Window_MenuCommand['_commandList']){if(_0x37fcf4===_0x54f3d4)continue;const _0x48f3d8=_0x37fcf4[_0x1d016c(0x210)]||'';if(_0x48f3d8!==_0x1dc049)continue;const _0x108926=_0x37fcf4[_0x1d016c(0x20e)];if(this['isMainMenuCommandVisible'](_0x108926,_0x37fcf4,!![]))return!![];}return![];},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x22a)]=function(_0x117d9a){const _0x4385ae=_0x62bedd;_0x117d9a=_0x117d9a;if(this[_0x4385ae(0x145)]()===_0x117d9a)return;this[_0x4385ae(0x18d)]=_0x117d9a,$gameTemp[_0x4385ae(0xfa)]=_0x117d9a,this[_0x4385ae(0x242)](),this['select'](0x0),this[_0x4385ae(0x19c)](0x0),this[_0x4385ae(0x109)]();},Window_MenuCommand[_0x62bedd(0xfb)]['removeSubcategory']=function(){const _0x10f809=_0x62bedd,_0x45ddd0=this[_0x10f809(0x145)]();this[_0x10f809(0x18d)]='',$gameTemp[_0x10f809(0xfa)]=undefined,this[_0x10f809(0x242)](),this[_0x10f809(0x19c)](0x0);this[_0x10f809(0x239)]>0x1&&(this[_0x10f809(0x239)]=0x1,this[_0x10f809(0xe8)]());const _0x27914b=Math[_0x10f809(0x1f4)](this[_0x10f809(0x10e)](_0x45ddd0),0x0);this[_0x10f809(0x155)](_0x27914b),this['activate']();},Window_MenuCommand['prototype'][_0x62bedd(0x1a1)]=function(){const _0x1cbdc0=_0x62bedd;return VisuMZ[_0x1cbdc0(0xb1)][_0x1cbdc0(0x1a8)][_0x1cbdc0(0xd9)][_0x1cbdc0(0xb2)];},Window_MenuCommand['prototype'][_0x62bedd(0x247)]=function(_0x25c1d3){const _0x30579c=_0x62bedd,_0x3630df=this[_0x30579c(0x1e9)](_0x25c1d3);if(_0x3630df===_0x30579c(0xc8))this[_0x30579c(0x195)](_0x25c1d3);else _0x3630df===_0x30579c(0x1ce)?this[_0x30579c(0x157)](_0x25c1d3):Window_Command['prototype']['drawItem'][_0x30579c(0x17d)](this,_0x25c1d3);},Window_MenuCommand[_0x62bedd(0xfb)]['commandStyle']=function(){const _0x38ba59=_0x62bedd;return VisuMZ['MainMenuCore'][_0x38ba59(0x1a8)][_0x38ba59(0xd9)][_0x38ba59(0x24a)];},Window_MenuCommand['prototype'][_0x62bedd(0x1e9)]=function(_0x21e653){const _0x3ee2fa=_0x62bedd,_0x4429e2=this['commandStyle']();if(_0x4429e2!==_0x3ee2fa(0x16e))return _0x4429e2;else{const _0x86cbb9=this[_0x3ee2fa(0x13a)](_0x21e653);if(_0x86cbb9[_0x3ee2fa(0x162)](/\\I\[(\d+)\]/i)){const _0xfd5a18=this[_0x3ee2fa(0x1ba)](_0x21e653),_0x2deff6=this[_0x3ee2fa(0x24e)](_0x86cbb9)['width'];return _0x2deff6<=_0xfd5a18[_0x3ee2fa(0x194)]?_0x3ee2fa(0xc8):_0x3ee2fa(0x1ce);}else return'text';}},Window_MenuCommand['prototype']['drawItemStyleIconText']=function(_0x7d9b2){const _0x4bf437=_0x62bedd,_0x5201c9=this['itemLineRect'](_0x7d9b2),_0x509a40=this[_0x4bf437(0x13a)](_0x7d9b2),_0x5ee6b8=this[_0x4bf437(0x24e)](_0x509a40)[_0x4bf437(0x194)];this[_0x4bf437(0x19d)](this['isCommandEnabled'](_0x7d9b2));let _0x5afc5a=this['itemTextAlign']();if(_0x5afc5a==='right')this['drawTextEx'](_0x509a40,_0x5201c9['x']+_0x5201c9[_0x4bf437(0x194)]-_0x5ee6b8,_0x5201c9['y'],_0x5ee6b8);else{if(_0x5afc5a===_0x4bf437(0x15d)){const _0x5b8d59=_0x5201c9['x']+Math[_0x4bf437(0x1c4)]((_0x5201c9[_0x4bf437(0x194)]-_0x5ee6b8)/0x2);this[_0x4bf437(0x108)](_0x509a40,_0x5b8d59,_0x5201c9['y'],_0x5ee6b8);}else this[_0x4bf437(0x108)](_0x509a40,_0x5201c9['x'],_0x5201c9['y'],_0x5ee6b8);}},Window_MenuCommand[_0x62bedd(0xfb)][_0x62bedd(0x157)]=function(_0x229721){const _0xe3981c=_0x62bedd;this['commandName'](_0x229721)[_0xe3981c(0x162)](/\\I\[(\d+)\]/i);const _0x1afb5d=Number(RegExp['$1']),_0x38a83a=this[_0xe3981c(0x1ba)](_0x229721),_0x5d21c4=_0x38a83a['x']+Math[_0xe3981c(0x1c4)]((_0x38a83a[_0xe3981c(0x194)]-ImageManager[_0xe3981c(0x1ec)])/0x2),_0xa3fe92=_0x38a83a['y']+(_0x38a83a[_0xe3981c(0xd0)]-ImageManager[_0xe3981c(0x127)])/0x2;this[_0xe3981c(0x1b4)](_0x1afb5d,_0x5d21c4,_0xa3fe92);},VisuMZ[_0x62bedd(0xb1)]['Window_StatusBase_loadFaceImages']=Window_StatusBase[_0x62bedd(0xfb)][_0x62bedd(0x1b0)],Window_StatusBase[_0x62bedd(0xfb)][_0x62bedd(0x1b0)]=function(){const _0x2365b2=_0x62bedd;VisuMZ[_0x2365b2(0xb1)][_0x2365b2(0x176)][_0x2365b2(0x17d)](this),this['loadOtherActorImages']();},Window_StatusBase[_0x62bedd(0xfb)][_0x62bedd(0x128)]=function(){const _0x1168c3=_0x62bedd;for(const _0x415411 of $gameParty[_0x1168c3(0x12f)]()){if(!_0x415411)continue;_0x415411[_0x1168c3(0x15e)]()&&ImageManager[_0x1168c3(0xf2)](_0x415411['characterName']()),_0x415411[_0x1168c3(0x234)]()&&ImageManager[_0x1168c3(0x98)](_0x415411['battlerName']()),_0x415411['getMenuImage']()&&ImageManager['loadPicture'](_0x415411[_0x1168c3(0x188)]());}},Window_StatusBase[_0x62bedd(0xfb)][_0x62bedd(0x1ae)]=function(){const _0x42020b=_0x62bedd;return VisuMZ[_0x42020b(0xb1)][_0x42020b(0x1a8)]['StatusGraphic'];},Window_StatusBase['prototype'][_0x62bedd(0x141)]=function(_0x58cac9,_0x5ad437,_0x3829ba,_0x4b9fd5,_0x2455fc){const _0x1076df=_0x62bedd;_0x4b9fd5=_0x4b9fd5||ImageManager['faceWidth'],_0x2455fc=_0x2455fc||ImageManager[_0x1076df(0xc7)];const _0x158df6=ImageManager[_0x1076df(0x1a6)],_0x1073dc=_0x2455fc-0x2,_0x4bd894=_0x5ad437+Math[_0x1076df(0x1c4)]((_0x4b9fd5-_0x158df6)/0x2);this[_0x1076df(0x22c)]===Window_MenuStatus&&this[_0x1076df(0x19d)](_0x58cac9[_0x1076df(0x94)]()),this['drawActorFace'](_0x58cac9,_0x4bd894,_0x3829ba,_0x158df6,_0x1073dc),this[_0x1076df(0x19d)](!![]);},Window_StatusBase['prototype'][_0x62bedd(0x206)]=function(_0x1b81fb,_0x192401,_0x35e2f6,_0x2a7d1e,_0x267da9){const _0x102730=_0x62bedd;_0x2a7d1e=_0x2a7d1e||ImageManager[_0x102730(0x1a6)],_0x267da9=_0x267da9||ImageManager[_0x102730(0xc7)];const _0x46add4=_0x1b81fb[_0x102730(0x15e)](),_0xaad6ae=_0x1b81fb[_0x102730(0x21c)](),_0xeaf9e=ImageManager['loadCharacter'](_0x46add4),_0x1608e0=ImageManager[_0x102730(0x16c)](_0x46add4),_0x3a1659=_0xeaf9e[_0x102730(0x194)]/(_0x1608e0?0x3:0xc),_0x21dbe9=_0xeaf9e[_0x102730(0xd0)]/(_0x1608e0?0x4:0x8),_0x7c2eab=_0x2a7d1e,_0x6cc9d3=_0x267da9-0x2,_0x547075=_0x192401+Math[_0x102730(0x1c4)](_0x7c2eab/0x2),_0x15d010=_0x35e2f6+Math[_0x102730(0x122)]((_0x267da9+_0x21dbe9)/0x2);this['constructor']===Window_MenuStatus&&this[_0x102730(0x19d)](_0x1b81fb['isBattleMember']());const _0x5e61b9=Math[_0x102730(0x1c1)](_0x2a7d1e,_0x3a1659),_0xa79a7f=Math[_0x102730(0x1c1)](_0x267da9,_0x21dbe9),_0x39cb59=Math[_0x102730(0x1c4)](_0x192401+Math[_0x102730(0x1f4)](_0x2a7d1e-_0x3a1659,0x0)/0x2),_0x15d207=Math['floor'](_0x35e2f6+Math[_0x102730(0x1f4)](_0x267da9-_0x21dbe9,0x0)/0x2),_0x416f9f=_0x1608e0?0x0:_0xaad6ae,_0x1f8dc9=(_0x416f9f%0x4*0x3+0x1)*_0x3a1659,_0x1e1948=Math['floor'](_0x416f9f/0x4)*0x4*_0x21dbe9;this[_0x102730(0x203)][_0x102730(0x95)](_0xeaf9e,_0x1f8dc9,_0x1e1948,_0x5e61b9,_0xa79a7f,_0x39cb59,_0x15d207),this[_0x102730(0x19d)](!![]);},Window_StatusBase[_0x62bedd(0xfb)][_0x62bedd(0xdc)]=function(_0x2a48d1,_0x1cb7ee,_0xf60cef,_0x31a9a5,_0x172f29){const _0x2302c9=_0x62bedd;_0x31a9a5=_0x31a9a5||ImageManager['faceWidth'],_0x172f29=_0x172f29||ImageManager[_0x2302c9(0xc7)];const _0x1d8cb5=ImageManager['loadSvActor'](_0x2a48d1[_0x2302c9(0x234)]()),_0x301776=_0x1d8cb5[_0x2302c9(0x194)]/ImageManager['svActorHorzCells'],_0x134803=_0x1d8cb5[_0x2302c9(0xd0)]/ImageManager['svActorVertCells'],_0x5abe1d=_0x31a9a5,_0x263ce8=_0x172f29-0x2,_0x55ead5=_0x1cb7ee+Math[_0x2302c9(0x1c4)](_0x5abe1d/0x2),_0xa03482=_0xf60cef+Math[_0x2302c9(0x122)]((_0x172f29+_0x134803)/0x2);this['constructor']===Window_MenuStatus&&this[_0x2302c9(0x19d)](_0x2a48d1['isBattleMember']());const _0x140312=_0x2a48d1['hasStaticSvBattler']&&_0x2a48d1[_0x2302c9(0xa8)](),_0x479570=0x0,_0x5c83da=0x0,_0x3198fc=_0x140312?_0x1d8cb5[_0x2302c9(0x194)]:_0x301776,_0xa38f86=_0x140312?_0x1d8cb5['height']:_0x134803,_0x88f31f=Math['min'](0x1,_0x31a9a5/_0x3198fc,_0x172f29/_0xa38f86),_0x1ae2d2=_0x88f31f*_0x3198fc,_0x1934c5=_0x88f31f*_0xa38f86,_0x3f4cd7=Math[_0x2302c9(0x1c4)](_0x1cb7ee+Math[_0x2302c9(0x1f4)](_0x31a9a5-_0x1ae2d2,0x0)/0x2),_0xe4fecf=Math['floor'](_0xf60cef+Math[_0x2302c9(0x1f4)](_0x172f29-_0x1934c5,0x0)/0x2);this['contents']['blt'](_0x1d8cb5,_0x479570,_0x5c83da,_0x3198fc,_0xa38f86,_0x3f4cd7,_0xe4fecf,_0x1ae2d2,_0x1934c5),this[_0x2302c9(0x19d)](!![]);},Window_StatusBase['prototype'][_0x62bedd(0x213)]=function(_0x44c6ff,_0x3cfacd,_0x498735,_0x53c10a,_0x22e523){const _0x66afe7=_0x62bedd,_0x4534b9=ImageManager[_0x66afe7(0xda)](_0x44c6ff[_0x66afe7(0x188)]());_0x53c10a=(_0x53c10a||ImageManager['faceWidth'])-0x2,_0x22e523=(_0x22e523||ImageManager[_0x66afe7(0xc7)])-0x2;const _0x566c56=_0x4534b9[_0x66afe7(0x194)],_0x26d311=_0x4534b9['height'],_0x40e12a=_0x53c10a,_0x414133=_0x22e523-0x2,_0x3d9802=_0x3cfacd+Math[_0x66afe7(0x1c4)](_0x40e12a/0x2),_0x5c0f75=_0x498735+Math['ceil']((_0x22e523+_0x26d311)/0x2);this[_0x66afe7(0x22c)]===Window_MenuStatus&&this['changePaintOpacity'](_0x44c6ff[_0x66afe7(0x94)]());const _0x4f989f=Math[_0x66afe7(0x1c1)](_0x53c10a,_0x566c56),_0x3428c4=Math[_0x66afe7(0x1c1)](_0x22e523,_0x26d311),_0x2238f8=_0x3cfacd+0x1,_0xbf4765=Math[_0x66afe7(0x1f4)](_0x498735+0x1,_0x498735+_0x414133-_0x26d311+0x3);let _0x4ed890=Math[_0x66afe7(0x192)]((_0x566c56-_0x4f989f)/0x2),_0x2fb0f6=Math[_0x66afe7(0x192)]((_0x26d311-_0x3428c4)/0x2);_0x4ed890-=_0x44c6ff[_0x66afe7(0x241)](),_0x2fb0f6-=_0x44c6ff[_0x66afe7(0x218)]();if(Imported[_0x66afe7(0x144)]){if(VisuMZ[_0x66afe7(0x158)]['Settings'][_0x66afe7(0x223)]['PixelateImageRendering']){}}this['contents'][_0x66afe7(0x95)](_0x4534b9,_0x4ed890,_0x2fb0f6,_0x4f989f,_0x3428c4,_0x2238f8,_0xbf4765),this[_0x66afe7(0x19d)](!![]);},Window_Status[_0x62bedd(0xfb)]['drawActorFace']=function(_0x4f95aa,_0x20fc71,_0x34458c,_0x2e0327,_0x3565f0){const _0x11ed22=_0x62bedd;switch(this[_0x11ed22(0x1ae)]()){case'none':break;case _0x11ed22(0x235):this['drawItemActorSprite'](_0x4f95aa,_0x20fc71,_0x34458c,_0x2e0327,_0x3565f0);break;case _0x11ed22(0xee):this[_0x11ed22(0xdc)](_0x4f95aa,_0x20fc71,_0x34458c,_0x2e0327,_0x3565f0);break;default:Window_StatusBase[_0x11ed22(0xfb)]['drawActorFace']['call'](this,_0x4f95aa,_0x20fc71,_0x34458c,_0x2e0327,_0x3565f0);break;}},VisuMZ[_0x62bedd(0xb1)][_0x62bedd(0x244)]=Window_MenuStatus[_0x62bedd(0xfb)][_0x62bedd(0xfc)],Window_MenuStatus['prototype'][_0x62bedd(0xfc)]=function(){const _0x25efad=_0x62bedd;VisuMZ[_0x25efad(0xb1)][_0x25efad(0x1a8)][_0x25efad(0x1d2)][_0x25efad(0x17f)]?VisuMZ[_0x25efad(0xb1)][_0x25efad(0x244)][_0x25efad(0x17d)](this):this['smoothSelect'](0x0);},VisuMZ[_0x62bedd(0xb1)][_0x62bedd(0x1ef)]=Window_MenuStatus['prototype'][_0x62bedd(0x15a)],Window_MenuStatus['prototype'][_0x62bedd(0x15a)]=function(){const _0xab7c9f=_0x62bedd;return this[_0xab7c9f(0x107)]()?$gameParty[_0xab7c9f(0x248)]()['length']:VisuMZ['MainMenuCore']['Window_MenuStatus_maxItems'][_0xab7c9f(0x17d)](this);},Window_MenuStatus['prototype'][_0x62bedd(0x107)]=function(){const _0x914b27=_0x62bedd,_0x4a9c12=VisuMZ[_0x914b27(0xb1)][_0x914b27(0x1a8)][_0x914b27(0x1d2)];if(_0x4a9c12[_0x914b27(0x24c)]===undefined)_0x4a9c12[_0x914b27(0x24c)]=!![];const _0x3c306b=SceneManager[_0x914b27(0x1b8)];if(!_0x4a9c12['ShowReserve']){if(_0x4a9c12[_0x914b27(0x1ff)])return _0x3c306b[_0x914b27(0x22c)]===Scene_Menu;return!![];}return![];},Window_MenuStatus[_0x62bedd(0xfb)]['listStyle']=function(){const _0x21a479=_0x62bedd,_0x59cacd=SceneManager['_scene']['constructor'];return _0x59cacd===Scene_Menu?VisuMZ[_0x21a479(0xb1)][_0x21a479(0x1a8)][_0x21a479(0x23a)]:VisuMZ[_0x21a479(0xb1)]['Settings']['InnerMenuListStyle'];},Window_MenuStatus['prototype']['numVisibleRows']=function(){const _0x3a39d3=_0x62bedd,_0x254cf7=this[_0x3a39d3(0x211)]();switch(_0x254cf7){case _0x3a39d3(0x9f):case _0x3a39d3(0xac):return 0x1;case _0x3a39d3(0x1d3):return 0x1;default:return $gameParty['maxBattleMembers']();}},Window_MenuStatus[_0x62bedd(0xfb)][_0x62bedd(0x110)]=function(){const _0x29ec3c=_0x62bedd,_0x2d7655=this[_0x29ec3c(0x211)]();switch(_0x2d7655){case _0x29ec3c(0x9f):case _0x29ec3c(0xac):return $gameParty[_0x29ec3c(0x13d)]();default:return 0x1;}},VisuMZ['MainMenuCore'][_0x62bedd(0x175)]=Window_MenuStatus['prototype'][_0x62bedd(0x131)],Window_MenuStatus[_0x62bedd(0xfb)][_0x62bedd(0x131)]=function(){const _0x426ecb=_0x62bedd,_0x3391cf=this['listStyle']();switch(_0x3391cf){case'vertical':case _0x426ecb(0xac):case _0x426ecb(0x1d3):return this['innerHeight'];case _0x426ecb(0x18b):return Window_Selectable[_0x426ecb(0xfb)][_0x426ecb(0x131)][_0x426ecb(0x17d)](this);case _0x426ecb(0x134):return this[_0x426ecb(0x238)]()*0x2+0x8;default:return VisuMZ[_0x426ecb(0xb1)][_0x426ecb(0x175)]['call'](this);}},Window_MenuStatus[_0x62bedd(0xfb)][_0x62bedd(0x247)]=function(_0x3a5aca){const _0x2a88e3=_0x62bedd;this[_0x2a88e3(0x118)](_0x3a5aca),this['drawItemStatus'](_0x3a5aca);},VisuMZ['MainMenuCore'][_0x62bedd(0x232)]=Window_MenuStatus['prototype'][_0x62bedd(0xe1)],Window_MenuStatus[_0x62bedd(0xfb)]['drawActorGraphic']=function(_0x197e3d,_0xe8f1ab,_0x231421,_0x2a37a6,_0xd41fd7){const _0x21a2fb=_0x62bedd;switch(this[_0x21a2fb(0x1ae)]()){case _0x21a2fb(0x113):break;case'sprite':this[_0x21a2fb(0x206)](_0x197e3d,_0xe8f1ab,_0x231421+0x1,_0x2a37a6,_0xd41fd7-0x2);break;case _0x21a2fb(0xee):this[_0x21a2fb(0xdc)](_0x197e3d,_0xe8f1ab,_0x231421+0x1,_0x2a37a6,_0xd41fd7-0x2);break;default:this[_0x21a2fb(0x141)](_0x197e3d,_0xe8f1ab,_0x231421,_0x2a37a6,_0xd41fd7);break;}},Window_MenuStatus[_0x62bedd(0xfb)][_0x62bedd(0xdf)]=function(_0x3d4a09){const _0x45917c=_0x62bedd;this[_0x45917c(0x12b)]();const _0xf54eb7=this['actor'](_0x3d4a09),_0x4ed11f=this[_0x45917c(0x1e6)](_0x3d4a09),_0x5713b7=this['listStyle']();switch(_0x5713b7){case _0x45917c(0x9f):this['drawItemStatusVerticalStyle'](_0xf54eb7,_0x4ed11f);break;case'portrait':this[_0x45917c(0x216)](_0xf54eb7,_0x4ed11f);break;case'solo':this[_0x45917c(0xf5)](_0xf54eb7,_0x4ed11f);break;case _0x45917c(0x18b):this[_0x45917c(0x16d)](_0xf54eb7,_0x4ed11f);break;case'thicker':this['drawItemStatusThickerStyle'](_0xf54eb7,_0x4ed11f);break;default:this[_0x45917c(0xaa)](_0xf54eb7,_0x4ed11f);break;}},Window_MenuStatus['prototype']['drawItemStatusVerticalStyle']=function(_0x5da335,_0x4b4b98){const _0x31ece2=_0x62bedd;VisuMZ[_0x31ece2(0xb1)][_0x31ece2(0x1a8)][_0x31ece2(0x22b)][_0x31ece2(0xff)][_0x31ece2(0x17d)](this,_0x5da335,_0x4b4b98);},Window_MenuStatus[_0x62bedd(0xfb)][_0x62bedd(0x216)]=function(_0x4adad8,_0x670a86){const _0x5f5995=_0x62bedd;if(_0x4adad8['getMenuImage']()!==''){const _0x4bf1b0=ImageManager[_0x5f5995(0xda)](_0x4adad8['getMenuImage']());_0x4bf1b0['addLoadListener'](this[_0x5f5995(0xcc)][_0x5f5995(0x1e1)](this,_0x4adad8,_0x670a86));}else this[_0x5f5995(0x1da)](_0x4adad8,_0x670a86);},Window_MenuStatus[_0x62bedd(0xfb)]['drawItemStatusPortraitStyleOnLoad']=function(_0xcd472a,_0x245267){const _0xeff5e4=_0x62bedd;VisuMZ['MainMenuCore']['Settings'][_0xeff5e4(0x22b)][_0xeff5e4(0x20a)][_0xeff5e4(0x17d)](this,_0xcd472a,_0x245267);},Window_MenuStatus[_0x62bedd(0xfb)][_0x62bedd(0xf5)]=function(_0x280059,_0x464312){const _0x379d19=_0x62bedd,_0x52e238=ImageManager[_0x379d19(0xda)](_0x280059[_0x379d19(0x188)]());_0x52e238['addLoadListener'](this[_0x379d19(0xab)]['bind'](this,_0x280059,_0x464312));},Window_MenuStatus[_0x62bedd(0xfb)][_0x62bedd(0xab)]=function(_0x3ed6f6,_0x167359){const _0x537f9a=_0x62bedd;VisuMZ[_0x537f9a(0xb1)][_0x537f9a(0x1a8)]['ListStyles'][_0x537f9a(0x11d)][_0x537f9a(0x17d)](this,_0x3ed6f6,_0x167359);},Window_MenuStatus[_0x62bedd(0xfb)][_0x62bedd(0x16d)]=function(_0x3748b6,_0x1676cb){const _0x150b3d=_0x62bedd;VisuMZ[_0x150b3d(0xb1)][_0x150b3d(0x1a8)][_0x150b3d(0x22b)][_0x150b3d(0x163)][_0x150b3d(0x17d)](this,_0x3748b6,_0x1676cb);},Window_MenuStatus[_0x62bedd(0xfb)]['drawItemStatusThickerStyle']=function(_0x3402e9,_0x454f8a){const _0x1e808d=_0x62bedd;VisuMZ[_0x1e808d(0xb1)][_0x1e808d(0x1a8)][_0x1e808d(0x22b)]['ThickerStyle'][_0x1e808d(0x17d)](this,_0x3402e9,_0x454f8a);},Window_MenuStatus[_0x62bedd(0xfb)]['isExpGaugeDrawn']=function(){const _0x1ff5b2=_0x62bedd,_0x4b04e3=this[_0x1ff5b2(0x211)]();if([_0x1ff5b2(0x18b),_0x1ff5b2(0x134)][_0x1ff5b2(0x99)](_0x4b04e3))return![];return Window_StatusBase[_0x1ff5b2(0xfb)][_0x1ff5b2(0x165)][_0x1ff5b2(0x17d)](this);},Window_MenuStatus[_0x62bedd(0xfb)]['drawItemStatusDefaultStyle']=function(_0x3c5b73,_0x4c7a48){const _0x599e62=_0x62bedd;VisuMZ['MainMenuCore'][_0x599e62(0x1a8)][_0x599e62(0x22b)]['DefaultStyle'][_0x599e62(0x17d)](this,_0x3c5b73,_0x4c7a48);},Window_SkillStatus[_0x62bedd(0xfb)][_0x62bedd(0x18e)]=function(_0x19e3eb,_0x56b2ba,_0x5efaa9,_0x1fefbd,_0x23ab4e){const _0x20da8b=_0x62bedd;switch(this[_0x20da8b(0x1ae)]()){case _0x20da8b(0x113):break;case _0x20da8b(0x235):this[_0x20da8b(0x206)](_0x19e3eb,_0x56b2ba,_0x5efaa9,_0x1fefbd,_0x23ab4e);break;case'svbattler':this[_0x20da8b(0xdc)](_0x19e3eb,_0x56b2ba,_0x5efaa9,_0x1fefbd,_0x23ab4e);break;default:Window_StatusBase[_0x20da8b(0xfb)][_0x20da8b(0x18e)][_0x20da8b(0x17d)](this,_0x19e3eb,_0x56b2ba,_0x5efaa9,_0x1fefbd,_0x23ab4e);break;}},Window_EquipStatus[_0x62bedd(0xfb)][_0x62bedd(0x18e)]=function(_0x3bce9b,_0x5025f8,_0x24353c,_0x3b0011,_0x3fe9b8){const _0x5b265a=_0x62bedd;switch(this[_0x5b265a(0x1ae)]()){case _0x5b265a(0x113):break;case'sprite':this['drawItemActorSprite'](_0x3bce9b,_0x5025f8,_0x24353c,_0x3b0011,_0x3fe9b8);break;case _0x5b265a(0xee):this[_0x5b265a(0xdc)](_0x3bce9b,_0x5025f8,_0x24353c,_0x3b0011,_0x3fe9b8);break;default:Window_StatusBase['prototype'][_0x5b265a(0x18e)][_0x5b265a(0x17d)](this,_0x3bce9b,_0x5025f8,_0x24353c,_0x3b0011,_0x3fe9b8);break;}};function Window_ThinGold(){const _0x10faf5=_0x62bedd;this[_0x10faf5(0x22d)](...arguments);}Window_ThinGold[_0x62bedd(0xfb)]=Object['create'](Window_Gold['prototype']),Window_ThinGold[_0x62bedd(0xfb)][_0x62bedd(0x22c)]=Window_ThinGold,Window_ThinGold[_0x62bedd(0xfb)][_0x62bedd(0x131)]=function(){const _0x3f677=_0x62bedd;return this[_0x3f677(0x238)]();},Window_ThinGold[_0x62bedd(0xfb)][_0x62bedd(0x164)]=function(){const _0x1ef4eb=_0x62bedd;return Window_Selectable['prototype'][_0x1ef4eb(0x164)][_0x1ef4eb(0x17d)](this);};function _0x2775(_0x1ae875,_0x4e891b){const _0x4055e4=_0x4055();return _0x2775=function(_0x27757d,_0x3dabc3){_0x27757d=_0x27757d-0x93;let _0x14540d=_0x4055e4[_0x27757d];return _0x14540d;},_0x2775(_0x1ae875,_0x4e891b);}function Window_Playtime(){const _0x4db76c=_0x62bedd;this[_0x4db76c(0x22d)](...arguments);}Window_Playtime[_0x62bedd(0xfb)]=Object[_0x62bedd(0x229)](Window_Selectable[_0x62bedd(0xfb)]),Window_Playtime[_0x62bedd(0xfb)][_0x62bedd(0x22c)]=Window_Playtime,Window_Playtime[_0x62bedd(0xfb)][_0x62bedd(0x22d)]=function(_0x11ef11){const _0x3a5610=_0x62bedd;this[_0x3a5610(0x9e)]=$gameSystem['playtimeText'](),this[_0x3a5610(0xc4)]=0x3c,Window_Selectable['prototype'][_0x3a5610(0x22d)]['call'](this,_0x11ef11),this[_0x3a5610(0x242)]();},Window_Playtime['prototype']['itemHeight']=function(){const _0x141168=_0x62bedd;return this[_0x141168(0x238)]();},Window_Playtime[_0x62bedd(0xfb)][_0x62bedd(0x1a0)]=function(){const _0x3db28d=_0x62bedd;Window_Selectable['prototype'][_0x3db28d(0x1a0)][_0x3db28d(0x17d)](this),this[_0x3db28d(0x147)]();},Window_Playtime[_0x62bedd(0xfb)][_0x62bedd(0x147)]=function(){const _0x322a8d=_0x62bedd;if(this['_timer']-->0x0){if(this[_0x322a8d(0xc4)]<=0x0)this[_0x322a8d(0x242)]();}},Window_Playtime[_0x62bedd(0xfb)][_0x62bedd(0x242)]=function(){const _0x5affe3=_0x62bedd;this[_0x5affe3(0xc4)]=0x3c;const _0x2ace6a=this[_0x5affe3(0x1ba)](0x0),_0x486eb8=_0x2ace6a['x'],_0x27e763=_0x2ace6a['y'],_0x2cf605=_0x2ace6a[_0x5affe3(0x194)];this[_0x5affe3(0x203)][_0x5affe3(0x171)](),this['drawTimeIcon'](_0x2ace6a),this[_0x5affe3(0xf9)](_0x2ace6a),this[_0x5affe3(0x1d1)](_0x2ace6a);},Window_Playtime[_0x62bedd(0xfb)][_0x62bedd(0x12b)]=function(){const _0x3eea7d=_0x62bedd;Window_Selectable[_0x3eea7d(0xfb)][_0x3eea7d(0x12b)]['call'](this),this[_0x3eea7d(0x203)][_0x3eea7d(0x1e0)]=VisuMZ[_0x3eea7d(0xb1)]['Settings'][_0x3eea7d(0x168)][_0x3eea7d(0x1a3)];},Window_Playtime['prototype'][_0x62bedd(0xb5)]=function(_0x227886){const _0x88c558=_0x62bedd;if(VisuMZ[_0x88c558(0xb1)][_0x88c558(0x1a8)][_0x88c558(0x168)]['Icon']>0x0){const _0x48f6a5=VisuMZ[_0x88c558(0xb1)][_0x88c558(0x1a8)][_0x88c558(0x168)]['Icon'],_0x108226=_0x227886['y']+(this[_0x88c558(0x238)]()-ImageManager['iconHeight'])/0x2;this['drawIcon'](_0x48f6a5,_0x227886['x'],_0x108226);const _0x410f3c=ImageManager[_0x88c558(0x1ec)]+0x4;_0x227886['x']+=_0x410f3c,_0x227886[_0x88c558(0x194)]-=_0x410f3c;}},Window_Playtime[_0x62bedd(0xfb)]['drawTimeLabel']=function(_0xbdef24){const _0x2d5a31=_0x62bedd;this[_0x2d5a31(0x12b)](),this['changeTextColor'](ColorManager['systemColor']());const _0xc4789d=VisuMZ[_0x2d5a31(0xb1)]['Settings'][_0x2d5a31(0x168)][_0x2d5a31(0x23e)];this[_0x2d5a31(0x1c7)](_0xc4789d,_0xbdef24['x'],_0xbdef24['y'],_0xbdef24['width'],_0x2d5a31(0x1fb)),this[_0x2d5a31(0x10f)]();},Window_Playtime[_0x62bedd(0xfb)]['drawPlaytime']=function(_0x27d114){const _0x1b1016=_0x62bedd,_0x5162ef=$gameSystem[_0x1b1016(0x123)]();this['drawText'](_0x5162ef,_0x27d114['x'],_0x27d114['y'],_0x27d114['width'],_0x1b1016(0x1e7));};function Window_MenuVariables(){this['initialize'](...arguments);}function _0x4055(){const _0x34ae53=['mainMenuCoreSettings','characterIndex','Scene_Menu_statusWindowRect','icon/','Untitled','commandWindowRectBottomStyle','VisuMZ_1_SaveCore','Custom\x20cursor\x20image\x20failed\x20to\x20load.','QoL','registerCommand','Step2','drawItemBackground','fill','onSaveCoreLoadSuccess','create','setSubcategory','ListStyles','constructor','initialize','forceShow','30qzWCqj','addGameEndCommand','createCommandNameWindow','Window_MenuStatus_drawItemImage','loadBitmap','battlerName','sprite','IsCustomCursorEnabled','loadGame','lineHeight','_scrollDuration','StatusListStyle','Scene_Menu_create','FilenameJS','callUpdateHelp','Time','canCreatePlaytimeWindow','\x0ato\x20a\x20different\x20directory:\x20the\x20game\x20project\x27s\x20/icon/\x20folder.','getMenuImageOffsetX','refresh','Scene_Menu_goldWindowRect','Window_MenuStatus_selectLast','svActorHorzCells','MenuCommandForceEnable','drawItem','battleMembers','terminate','Style','ActorJS','ShowReserve','isMainMenuCommandEnabled','textSizeEx','clearShowMainMenuCommand','isBattleMember','blt','log','toUpperCase','loadSvActor','includes','SoloQuick','_playtimeWindow','save','NUM','_playtimeText','vertical','ChangeActorMenuImageJS_v124','playLoad','commandFormation','mainCommandWidth','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','forceShowMainMenuCommand','statusWindowRectMobileStyle','addLoadListener','hasStaticSvBattler','addOptionsCommand','drawItemStatusDefaultStyle','drawItemStatusSoloStyleOnLoad','portrait','mousemove','1420456VRFvSr','⚠️⚠️⚠️WARNING!⚠️⚠️⚠️','onPersonalCancel','MainMenuCore','TextAlign','concat','7929628PDQpSB','drawTimeIcon','mainAreaBottom','reloadMapIfUpdated','updateOpacity','adjustCommandHeightByVariable','drawAllItems','display','Scene_Menu_commandFormation','Step1End','Step1','setup','changeTextColor','createElement','svActorVertCells','addSaveCommand','_timer','systemColor','Scene_Menu_onPersonalCancel','faceHeight','iconText','Step1Start','filter','Cols','drawItemStatusPortraitStyleOnLoad','isDisplayActorMenuBackgroundImage','isSubcategoryVisible','name','height','onAfterLoad','goto','style','onPersonalOk','Save','open','commandNameWindowDrawBackground','NO\x20ACTOR\x20FOUND!','CustomCmdWin','loadPicture','ChangeActorMenuImageGroup','drawItemActorSvBattler','reserveCommonEvent','openness','drawItemStatus','anchorX','drawItemImage','createPlaytimeWindow','commandWindowRectMobileStyle','BgType','cancel','_variableWindow','commandWindowRectTopStyle','updateSmoothScroll','MobileThickness','348543dfZvrl','ThinGoldWindow','forceHide','Variable','svbattler','commandWindowRectThinTopStyle','trim','top','loadCharacter','playtimeWindowRectTopStyle','setBackgroundType','drawItemStatusSoloStyle','_goldWindow','initMainMenuCore','ExtJS','drawTimeLabel','_mainMenuSubcategory','prototype','selectLast','variableWindowRectBottomStyle','goldWindowRectBottomStyle','VerticalStyle','length','Rows','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','970452zVwSae','topIndex','applyThinnerGoldWindowRect','\x0a\x0aSorry\x20for\x20the\x20inconvenience.','showOnlyBattleMembers','drawTextEx','activate','default','createDummyWindow','updatePosition','currentExt','findExt','resetTextColor','maxCols','exit','variableWindowRectTopStyle','none','_mainMenuCore','8srEthk','map','8NWeGdz','drawPendingItemBackground','cursor','SUBCATEGORY_LIST','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','adjustDefaultCommandWindowRect','SoloStyle','Icon','error','adjustCommandHeightByPlaytime','addOriginalCommands','ceil','playtimeText','commandWindowRect','onSaveCoreLoadFailure','mainAreaTop','iconHeight','loadOtherActorImages','SceneManager_push','options','resetFontSettings','_loadSuccess','Scene_Menu_createStatusWindow','remove','members','onerror','itemHeight','AdjustCommandHeight','status','thicker','_bitmapReady','addMainCommands','TextStr','addSymbolBridge','_commandList','commandName','fittingHeight','ActorBgMenuJS','maxBattleMembers','currentSymbol','MenuCommandForceDisable','Scene_Boot_loadSystemImages_MC','drawItemActorFace','SetupCustomCursor','url(','VisuMZ_0_CoreEngine','currentSubcategory','commandWindowStyle','updateTimer','onFormationCancel','AutoGoldHeight','Enable','SaveCore','addEventListener','EVAL','clickFilename','Scene_Title_terminate','addChild','isMainMenuCommandVisible','Symbols','WindowRect','thinTop','smoothSelect','EnableJS','drawItemStyleIcon','CoreEngine','_commandNameWindow','maxItems','text','subcategory','center','characterName','thinBottom','_actor','_data','match','ThinStyle','colSpacing','isExpGaugeDrawn','ARRAYNUM','forceEnable','Playtime','popScene','idleFilenameIcon','statusWindowRectTopStyle','isBigCharacter','drawItemStatusThinStyle','auto','Window_MenuCommand_initialize','clickFilenameIcon','clear','setHandler','ShowJS','createBackground','Window_MenuStatus_itemHeight','Window_StatusBase_loadFaceImages','Game_Actor_setup','onload','forceDisable','MouseCursor','isMobileDevice','pageX','call','isIncludedInSubcategory','StatusSelectLast','boxHeight','goldWindowRect','_targetY','JSON','OnLoadFailureJS','_duration','item','commandWindowRectThinBottomStyle','getMenuImage','createVariableWindow','Scene_Menu_commandPersonal','thin','doesSubcategoryExist','_subcategory','drawActorFace','formation','canCreateVariableWindow','createCommandWindow','round','touchmove','width','drawItemStyleIconText','format','parse','ARRAYJSON','updateDuration','setTargetActor','updateCommandNameWindow','setTopRow','changePaintOpacity','variableWindowRect','602570yJXCpP','update','itemTextAlign','VarList','FontSize','close','commandPersonal','faceWidth','overflow','Settings','STR','_menuImage','pageY','anchorY','mainAreaHeight','graphicType','updateActor','loadFaceImages','variables','1000','push','drawIcon','catch','addCommand','playtimeWindowRectBottomStyle','_scene','backgroundImage','itemLineRect','appendChild','goldWindowRectTopStyle','bitmap','body','875796hZeoDX','TextJS','min','statusWindowRect','idleFilename','floor','onBitmapLoad','_actorMenuBgSprite','drawText','_dummyWindow','addFormationCommand','note','PersonalHandlerJS','absolute','zIndex','icon','bottom','Scene_Menu_commandWindowRect','drawPlaytime','General','solo','forceDisableMainMenuCommand','src','getSubcategoryList','needsDummyWindow','actor','\x0a\x0aPlease\x20move\x20the\x20cursor\x20file(s)\x20as\x20well\x20as\x20update\x20the\x20Plugin\x20Parameters.','drawItemStatusVerticalStyle','description','25591300AAIkrM','Scene_Menu_onFormationCancel','ActorBgMenus','setActor','fontSize','bind','ChangeActorMenuImageRange','createActorMenuBackgroundImageSprite','adjustStatusWindowMobile','maxVisibleItems','itemRect','right','thinGoldWindow','commandStyleCheck','initMenuImage','mobile','iconWidth','commandCancel','addWindow','Window_MenuStatus_maxItems','_list','CommandWindowStyle','index','mouseup','max','calcWindowHeight','commandNameWindowCenter','windowPadding','mousedown','Game_System_initialize','Scene_MenuBase_updateActor','left','getMainMenuSymbolState','drawSvActor','Scene_MenuBase_createBackground','HideMainMenuOnly','playtimeWindowRect','return\x200','MenuCommandForceHide','contents','forceEnableMainMenuCommand','_statusWindow','drawItemActorSprite','_commandWindow','commandNameWindowDrawText','commandCommonEvent','PortraitStyle','ConvertParams','boxWidth','commandStyle','Symbol','version','Subcategory','listStyle','innerWidth','drawItemActorMenuImage','setMenuImage','CallHandlerJS','drawItemStatusPortraitStyle','opacity','getMenuImageOffsetY','statusWindowRectBottomStyle','makeCommandList'];_0x4055=function(){return _0x34ae53;};return _0x4055();}Window_MenuVariables[_0x62bedd(0xfb)]=Object['create'](Window_Selectable[_0x62bedd(0xfb)]),Window_MenuVariables[_0x62bedd(0xfb)][_0x62bedd(0x22c)]=Window_MenuVariables,Window_MenuVariables[_0x62bedd(0xfb)][_0x62bedd(0x22d)]=function(_0x19a87e){const _0x415d59=_0x62bedd;Window_Selectable['prototype'][_0x415d59(0x22d)][_0x415d59(0x17d)](this,_0x19a87e),this[_0x415d59(0x161)]=VisuMZ['MainMenuCore'][_0x415d59(0x1a8)][_0x415d59(0xed)][_0x415d59(0x1a2)],this[_0x415d59(0x242)]();},Window_MenuVariables[_0x62bedd(0xfb)]['itemHeight']=function(){const _0x597d77=_0x62bedd;return this[_0x597d77(0x238)]();},Window_MenuVariables[_0x62bedd(0xfb)][_0x62bedd(0x110)]=function(){const _0x8df9fc=_0x62bedd,_0xcb3a37=SceneManager[_0x8df9fc(0x1b8)][_0x8df9fc(0x146)]();return _0xcb3a37===_0x8df9fc(0x10a)?0x1:VisuMZ[_0x8df9fc(0xb1)][_0x8df9fc(0x1a8)][_0x8df9fc(0xed)][_0x8df9fc(0x1a2)]['length'];},Window_MenuVariables[_0x62bedd(0xfb)][_0x62bedd(0x12b)]=function(){const _0x3dd38a=_0x62bedd;Window_Selectable['prototype']['resetFontSettings']['call'](this),this[_0x3dd38a(0x203)]['fontSize']=VisuMZ[_0x3dd38a(0xb1)][_0x3dd38a(0x1a8)][_0x3dd38a(0xed)][_0x3dd38a(0x1a3)],this[_0x3dd38a(0xc0)](ColorManager[_0x3dd38a(0xc5)]());},Window_MenuVariables['prototype']['maxItems']=function(){const _0x339925=_0x62bedd;return this[_0x339925(0x161)][_0x339925(0x100)];},Window_MenuVariables[_0x62bedd(0xfb)][_0x62bedd(0xba)]=function(){const _0x3be24d=_0x62bedd,_0x39a820=this[_0x3be24d(0x104)]();for(let _0x39e519=0x0;_0x39e519<this[_0x3be24d(0x1e5)]();_0x39e519++){const _0x1111fa=_0x39a820+_0x39e519;_0x1111fa<this[_0x3be24d(0x15a)]()&&(this[_0x3be24d(0x226)](_0x1111fa),this[_0x3be24d(0x247)](_0x1111fa));}},Window_MenuVariables[_0x62bedd(0xfb)][_0x62bedd(0x226)]=function(_0x718590){},Window_MenuVariables[_0x62bedd(0xfb)][_0x62bedd(0x247)]=function(_0x2fd368){const _0x2e772d=_0x62bedd,_0x2a3b82=this[_0x2e772d(0x161)][_0x2fd368];if(_0x2a3b82<=0x0)return;if(!$dataSystem['variables'][_0x2a3b82])return;const _0x46ad6d=this['itemLineRect'](_0x2fd368);this[_0x2e772d(0x12b)]();let _0x458e0b=0x0,_0x34354a=$dataSystem[_0x2e772d(0x1b1)][_0x2a3b82][_0x2e772d(0xf0)]();_0x34354a[_0x2e772d(0x162)](/\\I\[(\d+)\]/i)&&(_0x458e0b=Number(RegExp['$1']),_0x34354a=_0x34354a['replace'](/\\I\[(\d+)\]/i,'')[_0x2e772d(0xf0)]());if(_0x458e0b>0x0){const _0x58dd08=_0x46ad6d['y']+(this[_0x2e772d(0x238)]()-ImageManager[_0x2e772d(0x127)])/0x2;this[_0x2e772d(0x1b4)](_0x458e0b,_0x46ad6d['x'],_0x58dd08);const _0x3b7659=ImageManager[_0x2e772d(0x1ec)]+0x4;_0x46ad6d['x']+=_0x3b7659,_0x46ad6d[_0x2e772d(0x194)]-=_0x3b7659;}this[_0x2e772d(0x1c7)](_0x34354a,_0x46ad6d['x'],_0x46ad6d['y'],_0x46ad6d['width'],_0x2e772d(0x1fb)),this['changeTextColor'](ColorManager['normalColor']()),this['drawText']($gameVariables['value'](_0x2a3b82),_0x46ad6d['x'],_0x46ad6d['y'],_0x46ad6d['width'],_0x2e772d(0x1e7));};