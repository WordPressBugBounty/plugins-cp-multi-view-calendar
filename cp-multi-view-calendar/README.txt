=== Calendar Event Multi View ===
Contributors: codepeople
Donate link: https://wordpress.dwbooster.com/calendars/cp-multi-view-calendar
Tags: calendar,calendars,event calendar,event,event manager
Requires at least: 3.0.5
Tested up to: 6.6
Stable tag: 1.4.29
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Event calendar for WordPress websites that features multiple visualization modes.

== Description ==

The Calendar Event Multi View is an **event calendar** for WordPress websites that features multiple visualization modes and multiple predefined styles.

= Features: =

* Classic month view (like Google Calendar)
* Multi-month view (show a configurable number of months at once)
* Day view
* Week view
* Multiple configurations for the views, the same view can be used in a very different way
* Allows multiple views for the same event calendar on the same page
* Configurable start day of the week
* Can be setup to edit the events from the public website
* You can select which button show/display (ex: navigation buttons, refresh button, others...)
* The event calendar information can be displayed in many ways: Title + tooltip on mouse over or Title + tooltip on mouse click
* Events can have a location and an extended rich text description
* Multiple selectable colors to highlight events in the calendar
* Events can be linked to other pages.
* Can display images directly on the calendar cells
* Can be easily published in a page or post by using its shortcode or visual publish button
* Can be setup to use a 12 or 24 hour clock.
* Can be setup to display only the weekdays needed
* Fast Ajax load for the events data
* Recurring events / repeat events like Google Calendar

You can see 20 sample visualization modes and an online demo at: https://wordpress.dwbooster.com/calendars/cp-multi-view-calendar

**Languages Included in the Calendar**

* Czech
* Danish
* Dutch
* English
* French
* German
* Italian
* Norwegian
* Polish
* Portuguese
* Russian
* Slovak
* Slovenian
* Spanish

If your language is not listed here feel free to open a support ticket and it will be added asap.

**Update note**

New: The latest update features a new interface for easily editing a previously inserted event calendar views and preview buttons for a faster verification of how they will look in the website.

= Import / Export events using iCal = 

The option to import events from iCal files and export the calendar events to iCal files is currently available in the **Platinum version** of the plugin (commercial version). The iCal / .ics files supported are compatible with the Google Calendar iCal format.

== Installation ==

To install **Calendar Event Multi View**, follow these steps:

1.	Download and unzip the plugin
2.	Upload the entire cp-multi-view-calendar/ directory to the /wp-content/plugins/ directory
3.	Activate the plugin through the Plugins menu in WordPress
4.	Configure the settings at the administration menu >> CP Multi View Event Calendar. 
5.	To insert the calendar form into some content or post use the icon that will appear when editing contents


== Frequently Asked Questions ==

= Q: Is the plugin ready to comply the European GDPR regulation? =

A: Yes, plugin is prepared to comply the European GDPR. 

The plugin doesn't store personal data, IP address or cookies from the user unless explicitly entered as part of the text of an event in the calendar.

= Q: What means each field in the settings area? =

A: The product's page contains detailed information about each settings field and customization:

https://wordpress.dwbooster.com/calendars/cp-multi-view-calendar

= Q: How events are added into the event calendar? =

A: In the dashboard area go to "WordPress administration menu >> CP Multiview Event Calendar" and click the button "Admin Calendar Data" that leads to a page where you can add/edit/delete events.

The events edition on the public event calendar can be also (optionally) enabled, that way the website visitors can edit events directly in the event calendar without having to access through the dashboard.

= Q: How show the entire title on month,week and day view? =

A: Add this CSS rule into the "Customization area >> Add Custom Styles" (at the bottom of the page that contains the list of calendars):

    #multicalendar .rb-i{white-space:normal}

= Q: How to show differents colors in the nMonth view? =

A: Use the following configuration parameter:

        date_box_with_color_in_nmonth_view:true

The parameters should be added into the "Other Parameters" box. These parameters must be comma separated and will overwrite the initial configuration selected.

The "Other Parameters" box can be found in the following location (link to image):

https://wordpress.dwbooster.com/UserFiles/Image/cp-multiview-calendar/additional-parameters.gif

= Q: How to allow edition on the public calendar only for some registered users? =

A: If you want to setup the calendar editable only by some users in the public website then publish a view of the calendar in a private page (restrict the access to the page with the calendar with "Edition" enabled).

You can have multiple views of the same event calendar, one for read-only public access and another view with edition enabled on a private page accessible only by registered users.

Note that there are two different concepts here:

* **An event calendar:** This is a unit of information and events. The events aren't shared with other calendars.
* **An event calendar's view:** This is the way a calendar is displayed. The same event calendar can have multiple views in the same page or in different pages. Since the calendar unit is the same, the data is shared between all views but the visual settings and features can be different.

See also this other FAQ entry about additional permissions settings: https://wordpress.dwbooster.com/faq/cp-multi-view-calendar#q205

= Q: How show the entire title on month,week and day view on the event calendar? =

A: Add this CSS rule  into the "Customization area >> Add Custom Styles" (at the bottom of the page that contains the list of calendars):

        #multicalendar .rb-i{white-space:normal}

= Q: Can I change the event calendar plugin date format to DD/MM/YYYY? =

A: The date format is automatically defined with each language to the proper values, however if you want to overwrite those settings open your plugin language file "wp-content\plugins\cp-multi-view-calendar\DC_MultiViewCal\language\multiview_lang_**xx-XX**.js", where **xx-XX** in the file name is your language identifier and into that file modify the items marked below:

        "fulldaykey": "MMddyyyy",
        "fulldayshow": "L d yyyy",
        "fulldayvalue": "M/d/yyyy",
        "Md": "W M/d",
        "nDaysView": "M/d",
        "Md3": "L d",
        "separator": "/",
        "year_index": 2,
        "month_index": 0,
        "day_index": 1,

... to this:

        "fulldaykey": "ddMMyyyy",
        "fulldayshow": "d L yyyy",
        "fulldayvalue": "d/M/yyyy",
        "Md": "W d/M",
        "nDaysView": "d/M",
        "Md3": "d L",
        "separator": "/",
        "year_index": 2,
        "month_index": 1,
        "day_index": 0,


== Other Notes ==

= Settings in the insertion area =

To insert the calendar form into some content or post use the insertion area that will appear below the editor when editing contents. It looks like the following image: 

https://wordpress.dwbooster.com/UserFiles/Image/cp-multiview-calendar/insert-calendar.png

The fields on the event calendar insertion area (shown in the above image) are the following:

* MultiCalendar: Which of the calendars will be shown.
* Calendar Views: The views that will be included in the event calendar.
* Default View: Which of the calendar views will appear as default.
* Start day of the week: The start day of the week (Ex: Sunday, Monday, ...).
* CSS Style: Select one of the CSS styles available to render the calendar.
* Palette Color: The palette color used for the events in the calendar.
* Allow edition: Check this box if the event calendar will allow edition on the public website.
* Other buttons: Select the buttons that will be displayed on the top of the calendar.
* Number of Months for nMonths View: Number of months shown at the same time in the nMonths View.
* Other parameters for nMonths View: Other parameters for the nMonths View (more info below).
* Other parameters: Other parameters that apply to all calendar views (more info below).

= Adding custom parameters = 

The additional parameters should be added into the "Other Parameters" box in the event calendar insertion area. These parameters must be comma separated and will overwrite the initial configuration selected for the event calendar. 

The "Other Parameters" box can be found in the following location (click to enlarge image): https://wordpress.dwbooster.com/demos/multi-view/screenshots/additional-parameters.png

= Adding custom CSS Styles = 

The custom CSS styles can be added into the "Customization area >> Add Custom Styles" (at the bottom of the page that contains the list of calendars). 

= Sample calendar views = 

The following area some sample views. You can apply or mix configurations to get your own calendar views in addition to the following samples:

1.	**View day only:** Event calendar configured with the "day" view option only, the "Default View" should be "day". The views "Week", "Month", "nMonth" should be unchecked. To fix the height, just add (for example) the parameter "height:400". Sample: https://wordpress.dwbooster.com/demos/multi-view/01-view-day-only.html    

2.	**View week only:** Event calendar configured with the view week option only; the "Week" view should be enabled and the default view should be "week". The views "Day", "Month" and "nMonth" should be disabled. To fix the height, just add (for example) the parameter "height:400". Sample: https://wordpress.dwbooster.com/demos/multi-view/02-view-week-only.html

3.	**View month only:** Event calendar configured with the view month option only. To get this enable the "Month" view and set the default view to "month". The views "Day", "Week" and "nMonth" should be unchecked. To fix the height, just add (for example) the parameter "height:400". Sample: https://wordpress.dwbooster.com/demos/multi-view/03-view-month-only.html

4.	**View n-Months only:** Event calendar configured with the view n-Months option only. This can be done by setting the amount of months to display in the event calendar to 12, enable only the "n-Month" view and setting the "Default View" to "nMonth". All the other views and buttons should be unchecked. In the styles for this sample we have selected to fix the calendar width. Sample: https://wordpress.dwbooster.com/demos/multi-view/04-view-n-months-only.html 

5.	**Small event calendar:** You can configure the calendar just like a single small event calendar. This can be done by selecting the n-Months view and setting the "Number of Months for nMonths View" dropdown select box to 1. Sample: https://wordpress.dwbooster.com/demos/multi-view/05-small-calendar.html 

6.	**n-Month view, only one month, large view:** Event calendar with the n-Month view configured to display a single month in a large view. To get this result enable only the "n-Month" view and add the styles specified in the following sample page: https://wordpress.dwbooster.com/demos/multi-view/06-one-month-large-view.html

7.	**n-Month view with 2 months using all the width:** To get this result in the calendar enable only the "n-Month" view, set the "Number of Months for nMonths View" dropdown select box to 2 and add the styles specified in the following sample page to fix the width of both the event calendar area and the width of each month: https://wordpress.dwbooster.com/demos/multi-view/07-two-months-using-all-the-width.html

8.	**n-Month view, 3 months with vertical align:** The first settings needed to get this calendar configuration is to enable only the "n-Month" view and set the "Number of Months for nMonths View" dropdown select box to show 3 months. After that proceed to add some CSS styles to fix the width to the desired column width. This way you can publish the calendar in the sidebar of your website. Sample: https://wordpress.dwbooster.com/demos/multi-view/08-various-months-with-vertical-align.html 

9.	**Tooltip displayed on month,week and day view:** In this event calendar sample, when you click over an event in the calendar, a floating tooltip panel with additional information is displayed. This type of tooltip is available for the month, week and day views. The n-Month view has a different type of tooltip panel. To enable the tooltips, the parameter "showtooltipdwm" must be set to "true" (or enable it by checking the checkbox in the visual configuration). In addition to these parameters, add also the styles mentioned in the following page as instructed: https://wordpress.dwbooster.com/demos/multi-view/09-tooltip-displayed.html 

10.	**Lighter view for events and center align:** This calendar sample features the month, week and day views showing the events with a more lighter view: a color border is used instead filled backgrounds and the text is centered. The tooltips are already enabled for this sample; to enable the tooltips you can do that by checking the tooltip checkbox in the visual configuration or just by setting parameter "showtooltipdwm" to "true", this is also explained in other demos. To get the more lighter view you can add the styles indicated at this page: https://wordpress.dwbooster.com/demos/multi-view/10-lighter-view-center-align.html 

11.	**Multi-line event description:** Event calendar that displays a multi-line event description in the month, week and day views, this is useful to display more information directly over the calendar. Only two CSS rules should be added to the styles to get this configuration. It will work with any selection of parameters if you are using one of the mentioned views. Check the detailed instructions at this page: https://wordpress.dwbooster.com/demos/multi-view/11-multi-line-event-description.html

12.	**Images and HTML formatting in tooltip:** The tooltips on the calendar can show images and formatted text. There are some styles that can be used to show/hide/customize the title, location, description and time: these styles are the CSS classes named "bubbletitle", "bubblelocation", "bubbledescription" and "bubbletime". In this sample we have used only the class "bubbletime" to align it at the bottom of the content/image: https://wordpress.dwbooster.com/demos/multi-view/12-images-and-html-formatting-in-tooltip.html

13.	**Images directly on the calendar cells:** You can use this plugin like a picture calendar. The images should be added to the event description and the css rules mentioned in the following page to complete the formatting: https://wordpress.dwbooster.com/demos/multi-view/13-images-directly-on-the-calendar-cells.html

14.	**Show only from Monday to Friday:** In this event sample we have disabled the Saturday and Sunday since this is a common configuration. In the "viewWeekDays" parameter, each number in the array represents a weekday from Sunday to Saturday. An zero means that the weekday is disabled (not shown) and a 1 means that the day is enabled (shown). Details at: https://wordpress.dwbooster.com/demos/multi-view/14-show-only-from-monday-to-friday.html

15.	**Using 12 or 24 hour clock:** This calendar supports both the 12 and the 24 hour clock (also known as military time). The 24-hour clock is enabled as default; if you prefer to use the 12-hour clock then just set the parameter "militaryTime" to "false". Sample: https://wordpress.dwbooster.com/demos/multi-view/15-using-12-or-24-hour-clock.html

16.	**Showing the n-Days view:** With this event calendar view you can display many days in a view similar to the single day view. First you should enable the "nDays" view and then set the number of days to view on each calendar page. The parameters are viewNDays:true for enabling the view, numberOfDays:10 for setting the number of days and viewdefault:"nDays" to make it the default view if needed. Sample: https://wordpress.dwbooster.com/demos/multi-view/16-n-days-view.html 

17.	**Selecting hours to be shown:** In some applications you may want to select only some hours to be shown in the event calendar, for example working hours. In the "Days", "nDays" and "Week" views you can select the range of hours to be shown be setting the start and end hours. Three parameters must be specified for this: the start hour hoursStart:8, the end hour hoursEnd:17 and the height of a single hour cell cellheight:60. Hours are in military time, so 17 means 5:00pm. Sample: https://wordpress.dwbooster.com/demos/multi-view/17-selecting-hours-to-be-shown.html

18.	**Using drop-down lists for location and title:** The location and title that are part of each event's description in the calendar are open/editable fields by default but you can convert them in drop-down lists to make them easier to edit and keep the data consistency. Sample and detailed instructions: https://wordpress.dwbooster.com/demos/multi-view/18-lists-for-location-and-title.html

19.	**Multi-column day view, location or title:** In this event calendar sample the location and title have been converted in drop-down lists as explained in the previous sample #18. In addition to that now we have selected to use the "title" field as the column header in the day view, this way the events are placed in different columns agrupated by their titles. The same can be done with the location instead the title. Sample and detailed instructions: https://wordpress.dwbooster.com/demos/multi-view/19-multi-column-day-view.html

20.	**Day view with location & title grid:** The event calendar day view can be modified to show the title and location as headers of the rows and column instead the default single columns and the hour in the row header. This is useful to display informations agrupated by title and location on each day. Sample and detailed instructions: https://wordpress.dwbooster.com/demos/multi-view/20-day-view-with-location-title-grid.html


== Screenshots ==

1. Classic style (Google Calendar Style)
2. Month view with event information floating panel
3. Event calendar with images on the cells
4. Classic little event calendar for sidebars
5. Event calendar in single day view
6. Event calendar in single month view
7. Advanced sample: Event calendar with custom information on rows
8. Advanced sample: Event calendar with custom information on both rows and columns


== Changelog ==

= 1.4.29 =
* Translations update

= 1.4.28 =
* Compatible with WP 6.6

= 1.4.27 =
* Fixed problem with calendar stretching in month view

= 1.4.26 =
* Script enqueue improvement

= 1.4.25 =
* Javascript improvement
* Tags moved: picture calendar,ical,images calendar,recurring,google calendar,event management,week calendar, month calendar

= 1.4.24 =
* Compatible with WP 6.4

= 1.4.23 =
* More time edition options

= 1.4.22 =
* Compatible with WP 6.3

= 1.4.21 =
* JS fixes

= 1.4.20 =
* Additional wp_unslash fix

= 1.4.19 =
* wp_unslash fix

= 1.4.18 =
* Compatible with WP 6.2

= 1.4.17 =
* Fixed bug in edition area

= 1.4.16 =
* Ajax URL update

= 1.4.15 =
* Interface modifications and bug fixes

= 1.4.13 =
* Compatible with WP 6.1

= 1.4.12 =
* Edition panel fix

= 1.4.11 =
* Feedback panel update

= 1.4.10 =
* Update for compatibility with some themes (III)

= 1.4.09 =
* Update for compatibility with some themes (II)

= 1.4.08 =
* Update for compatibility with some themes

= 1.4.07 =
* Security improvements

= 1.4.06 =
* Compatible with WordPress 6.0

= 1.4.05 =
* Compatible with WordPress 5.9

= 1.4.04 =
* PHP compatibility fix

= 1.4.03 =
* Fixed jQuery initialization issue

= 1.4.02 =
* Compatible with WordPress 5.8

= 1.4.01 =
* Security improvements

= 1.3.99 =
* Compatible with WordPress 5.7

= 1.3.98 =
* Minor visualization bug fixes

= 1.3.97 =
* Compatible with WordPress 5.6

= 1.3.96 =
* Replaced jQuery deprecated code

= 1.3.95 =
* Fixed bug with jQuery deprecated code

= 1.3.94 =
* jQuery compatibility update

= 1.3.93 =
* Compatible with WordPress 5.5

= 1.3.92 =
* Language detection improvement

= 1.3.91 =
* Compatible with WordPress 5.4

= 1.3.90 =
* Fixed bug in lists

= 1.3.89 =
* Added Swedish language

= 1.3.88 =
* Compatible with WordPress 5.3

= 1.3.87 =
* New settings option to overwrite date format

= 1.3.86 =
* Optimized script enqueue

= 1.3.85 =
* Fixed bug on min/max date

= 1.3.84 =
* Fixed bug on max date / n-month calendar view settings

= 1.3.83 =
* Update to publish section

= 1.3.82 =
* Fix to database encoding

= 1.3.81 =
* Updated editor settings

= 1.3.80 =
* Multiple code improvements

= 1.3.79 =
* Code improvements

= 1.3.78 =
* Update for compatibility with WordPress 5.2

= 1.3.77 =
* Compatible with Google Translate

= 1.3.76 =
* Compatible with WordPress 5.2

= 1.3.75 =
* Review link update

= 1.3.74 =
* Fixed conflict with third party plugin (NextGEN Gallery)

= 1.3.73 =
* Fixed bug in edition window

= 1.3.72 =
* New mobile-friendly edition interface

= 1.3.71 =
* Improved compatibility with Elementor

= 1.3.70 =
* Fixed bugs data loading

= 1.3.69 =
* Fixed bugs in day events for weekly and daily views

= 1.3.68 =
* Fixed bug in events floating panel

= 1.3.67 =
* Removed use of CURL

= 1.3.66 =
* Fixed compatibility issue with Gutemberg Editor

= 1.3.65 =
* Fixed compatibility issue with Elementor

= 1.3.64 =
* New responsive edition panel

= 1.3.63 =
* Compatible with WordPress 5.0

= 1.3.62 =
* Interface improvements

= 1.3.61 =
* Fixed bug in recurrent events

= 1.3.60 =
* Several interface improvements

= 1.3.59 =
* Improved security in custom edition area

= 1.3.58 =
* Fixed admin edition view and added list

= 1.3.57 =
* Better CSS edition area

= 1.3.56 =
* Added automatic data deletion option

= 1.3.55 =
* Fixed problem with lines alignment in the day and week view

= 1.3.54 =
* Fixed magic quotes issues

= 1.3.53 =
* Fixed conflict with Gutemberg editor

= 1.3.52 =
* Easier installation process and publish wizard

= 1.3.51 =
* First calendar view is automatically created during installatino

= 1.3.50 =
* Improved interface for easier use

= 1.3.49 =
* Fixed conflict with Beaver Builder

= 1.3.48 =
* Fixed bug related to the avoid overlapping events feature

= 1.3.47 =
* Activation issue fixed

= 1.3.46 =
* Fixed jQuery conflicts

= 1.3.45 =
* Database creating encoding fix 

= 1.3.44 =
* Fixed bug in activation process

= 1.3.43 =
* Readme updates and optional feedback feature added.

= 1.3.42 =
* Easier activation process

= 1.3.41 =
* Improved interface and documentation

= 1.3.40 =
* Added interval by hour configuration value

= 1.3.39 =
* Fixed problem in day visualization

= 1.3.38 =
* Fixed conflict with W3 Total Cache

= 1.3.37 =
* Fixed problem when adding events from a locations list

= 1.3.36 =
* Renamed plugin references to avoid conflicts

= 1.3.35 =
* Fixed typo in Slovak translation

= 1.3.34 =
* Updates to CSS in order to improve the responsive visualization

= 1.3.33 =
* Language updates in English, French, German, Italian, Russian, Portuguese, Danish, Czech, Dutch, Norwegian, Polish and Slovak

= 1.3.32 =
* Language updates

= 1.3.31 =
* Updates to CSS in order to improve the visualization

= 1.3.30 =
* Updates to support a new calendar view

= 1.3.29 =
* Added CSS and JavaScript customization panel

= 1.3.28 =
* Fixed bug in review panel

= 1.3.27 =
* Fixed problem with numberofdays in the day, week and nDays View

= 1.3.26 =
* Updates to support a new calendar view

= 1.3.25 =
* Fixed problem with arrows alignment  into the nMonth view

= 1.3.24 =
* Compatible with WordPress 4.9

= 1.3.23 =
* Fixed bug in classic view

= 1.3.22 =
* Fixed CSS to the fix the position of the icons

= 1.3.21 =
* Fixed bug related to the new event popup in the month view.

= 1.3.20 =
* Security update for edition access verification.

= 1.3.19 =
* Added feature to modify character sets

= 1.3.18 =
* Fixed conflict with third party plugins in the edition panel

= 1.3.17 =
* Fix to avoid PHP warning

= 1.3.16 =
* Fixed bug in edition window

= 1.3.15 =
* Demo and sample pages moved to SSL

= 1.3.14 =
* Moved plugin website and links to SSL

= 1.3.12 =
* Interface modifications for clearer instructions 

= 1.3.11 =
* Security update to prevent direct calls to scripts

= 1.3.10 =
* Optimized method for loading CSS

= 1.2.99 =
* Tested and compatible with WordPress 4.8

= 1.2.98 =
* Fixed bug while using shared resources

= 1.2.96 =
* Improvements to query sanitization

= 1.2.95 =
* Fixed bug in review panel

= 1.2.94 =
* Support pointed to public forum
* Better query sanitization with $wpdb->prepare

= 1.2.93 =
* Fixed bug related to print not working in Google Chrome
* Calendar shortcode also available for admin area

= 1.2.92 =
* Improved the week view for mobile version

= 1.2.91 =
* Fixed bug related to encoding text into the event location

= 1.2.90 =
* Fixed bug related to conflict with viewWeekDays parameter and start day of the week

= 1.2.89 =
* Fixed bug with recurring events in the list view

= 1.2.88 =
* Fixed bug when create an event that spans more than one day

= 1.2.87 =
* Display all events in the month view without the "more event" link

= 1.2.86 =
* Improved responsive design in the week view.

= 1.2.85 =
* Fixed bug into the German Language.
* Improved visualization in the week view.

= 1.2.84 =
* Fixed bug related to encoding text into the edition event

= 1.2.83 =
* Fixed another bug related to week view with rows

= 1.2.82 =
* Fixed bug related to week view with rows and not all day events

= 1.2.81 =
* Database update

= 1.2.80 =
* Changed the portuguese language file

= 1.2.79 =
* Admin intf updates

= 1.2.78 =
* Added CSS class to time in the month view

= 1.2.77 =
* Fixed links

= 1.2.76 =
* Changed the code to configure the hours width in the day and week view

= 1.2.75 =
* Fixed bug related to the default location when dc_locations is used

= 1.2.74 =
* Fixed bug related to the position in the "Quick add" tooltip

= 1.2.73 =
* Correction to views list

= 1.2.72 =
* Fixed bug related to the time edition in the recurrent events

= 1.2.71 =
* Fixed bug related to showing the calendar in Internet Explorer

= 1.2.70 =
* Fixed bug in the position of the edition calendar

= 1.2.69 =
* Fixed bug related to the recurrent events

= 1.2.68 =
* Compatible with WP 4.7

= 1.2.67 =
* New documentation page

= 1.2.66 =
* Avoids the error "414 Request-URI Too Long" in some servers

= 1.2.65 =
* Fixed bug related to responsive design in nMonth view

= 1.2.64 =
* New upgrade option

= 1.2.63 =
* Update for month view visualization

= 1.2.62 =
* Fixed problem of event height in the week view

= 1.2.61 =
* Avoid conflict with the CSS theme when date_box_with_color_in_nmonth_view is true in the nMonth view

= 1.2.60 =
* Fix to CSS conflict in nMonth view

= 1.2.59 =
* Updated for one instance of recurrent events

= 1.2.58 =
* Modifications to make the calendar more responsive in weekly view on a cell or tablet

= 1.2.57 =
* Fixed bug related to starts showing 00:00 events at the 12:00 level in Weekly view

= 1.2.56 =
* Fixed bug on duplicated events

= 1.2.55 =
* Update for recurrent events

= 1.2.54 =
* Fixed bug related to the recurrent events start always in the current date

= 1.2.53 =
* Fixed bug related recurrents events with current date

= 1.2.52 =
* Fixed bug events time

= 1.2.51 =
* Fixed bug in view creation

= 1.2.50 =
* Language update

= 1.2.49 =
* Fixed to magic quotes feature

= 1.2.48 =
* Fixed bug related to nDays view.

= 1.2.47 =
* Fixed bug related to recurrent events in the rrule file

= 1.2.46 =
* Fixed bug in the ndays view related to the cells of the calendar getting out of the borders

= 1.2.45 =
* New custom request form

= 1.2.44 =
* Compatible with WP 4.6

= 1.2.43 =
* Polish language update

= 1.2.42 =
* New page for custom requests

= 1.2.41 =
* Improved language auto-detection

= 1.2.40 =
* Added alternative script load methods

= 1.2.39 =
* Fixed bug in the week view to avoid a conflic with the CSS theme

= 1.2.38 =
* CSS update to fix the time color in the day view

= 1.2.37 =
* New support addr and tracking param

= 1.2.36 =
* Fixed bug related to the auto heigh into the day and week view

= 1.2.35 =
* Fixed bug in encoding of calendar params

= 1.2.34 =
* Removed old versions of the calendar

= 1.2.33 =
* Calendar improvement to minimize plugin conflicts

= 1.2.32 =
* New init hooks

= 1.2.31 =
* Moved old changelogs to external file

= 1.2.30 =
* Fixed bug related to initialization in the  event edition's colorpicker 

= 1.2.29 =
* Added new script load method

= 1.2.28 =
* Lang update for recurrent events

= 1.2.27 =
* Tested in WP 4.5
* Fixed bug related to the recurrent events in the february 28

= 1.2.26 =
* Fixed the dynamic row height in Multi-column week view.

= 1.2.25 =
* CSS update to fix the time color in the week view

= 1.2.24 =
* Fixed the dynamic row height in Multi-column day view.

= 1.2.23 =
* Allow dynamic row height in the rows by category in the week view

= 1.2.22 =
* Fixed bug in the editor to keep the focus in the description field

= 1.2.21 =
* CSS update to fix the weekday color in the nMonth view

= 1.2.20 =
* Fixed bug when loading events from database

= 1.2.19 =
* Fixed bug in month view with quick add button.

= 1.2.18 =
* Fix for a correct refresh of the calendar after editing an event.
* Update for fixing update date issue

= 1.2.17 =
* Fixed problem with the focus in chrome quick add button

= 1.2.16 =
* Fixed bug related to render after quick add event button

= 1.2.15 =
* Improved the visualization in the day and week view

= 1.2.14 =
* Translation corrections

= 1.2.13 =
* Fixed bug in the "more events" text
* Fixed bug in the quick add button

= 1.2.12 =
* Fixed bug related to the "more events" feature

= 1.2.11 =
* Fixed bug related to the autoselect color in the event edition

= 1.2.10 =
* Fixed underline CSS issues
* Fixed bug related event color in the move action

= 1.2.9 =
* Tested and compatible with WordPress 4.4

= 1.2.8 =
* Fixed script error
* Fixed bug in month view

= 1.2.7 =
* Fixed bug related to the heigh of the cell in the day and week view
* Fixed bug related to recurrent events in List View
* Fixed bug related to resize event in the day and week view

= 1.2.6 =
* Prevent recurrent events be moved with drag and drop feature to keep data integrity
* Fixed bug related to loosing focus while editing event details

= 1.2.5 =
* Fixed bug related to the annually repeat event.

= 1.2.4 =
* Add configurable dialog width in the day, week, month and nMonth views

= 1.2.3 =
* Fixed bug related to recurrent events.
* Added note about the recurrent events

= 1.2.2 =
* Updated CSS rules to avoid conflicts in WP 4.3

= 1.2.1 =
* Compatible with WordPress 4.3
* Fixed bug in the mindate parameter.
* Update to the new PHP style contructor for WP 4.3
* Replaced heading tags in admin interface.
* Fixed bug related to undefined message that appeared under slow connections.

= 1.1.9 =
* Fixed bug related to the latest day of the month for repeat events
* Added tracking to error codes
* Fixed bug in parameters processing

= 1.1.8 =
* Fixed SQL vulnerability (thank you to Joaquin Ramirez Martinez for the report)

= 1.1.7 =
* Tooltip setting is now marked as default
* New col attribute in the day view with columns
* Pre-selection of items in quick add tooltip features
* Compatible with the latest WordPress 4.2.x version

= 1.1.6 =
* Sanitized output of items on the admin area

= 1.1.5 =
* Fixed SQL and XSS Vulnerabilities (vulnerability was found by Joaquin Ramirez Martinez with the help Christian Mondragon Uriel Zarate)
* Translations improved
* Update to the ajax url paths
* Fixed bug related to the date format

= 1.0.2 =
* Improved plugin security 
* Fixed warning that appeared with PHP safe mode restrictions 
* Sanitized GET parameters used in queries

= 1.0.1 =
* Interface modifications.
* Added missing images folder
* Preview options for the event calendar views
* Fixed bug with special characters in events
* Compatible with the latest WP versions
* Modifications to make the calendar responsive

== Upgrade Notice ==

= 1.4.29 =
* Translations update