
var i18n = jQuery.extend({}, i18n || {}, {
    dcmvcal: {
        dateformat: {
            "fulldaykey": "MMddyyyy",
            "fulldayshow": "L d yyyy",
            "fulldayvalue": "M/d/yyyy", 
            "Md": "W M/d",
            "nDaysView": "M/d",
            "listViewDate": "L d yyyy",
            "Md3": "L d",
            "separator": "/",
            "year_index": 2,
            "month_index": 0,
            "day_index": 1,
            "day": "d",
            "sun2": "Su",
            "mon2": "Má",
            "tue2": "Þr",
            "wed2": "Mi",
            "thu2": "Fi",
            "fri2": "Fö",
            "sat2": "La",
            "sun": "Sun",
            "mon": "Mán",
            "tue": "Þri",
            "wed": "Mið",
            "thu": "Fim",
            "fri": "Fös",
            "sat": "Lau",
            "sunday": "Sunnudagur",
            "monday": "Mánudagur",
            "tuesday": "Þriðjudagur",
            "wednesday": "Miðvikudagur",
            "thursday": "Fimmtudagur",
            "friday": "Föstudagur",
            "saturday": "Laugardagur",
            "jan": "Jan",
            "feb": "Feb",
            "mar": "Mar",
            "apr": "Apr",
            "may": "Maí",
            "jun": "Jún",
            "jul": "Júl",
            "aug": "Ágú",
            "sep": "Sep",
            "oct": "Ókt",
            "nov": "Nóv",
            "dec": "Dec",
            "l_jan": "Janúar",
            "l_feb": "Febrúar",
            "l_mar": "Mars",
            "l_apr": "Apríl",
            "l_may": "Maí",
            "l_jun": "Júní",
            "l_jul": "Júlí",
            "l_aug": "Ágúst",
            "l_sep": "September",
            "l_oct": "Óktóber",
            "l_nov": "Nóvember",
            "l_dec": "Desember"
        },
        "no_implemented": "No implemented yet",
        "to_date_view": "Click to the view of current date",
        "i_undefined": "Undefined",
        "allday_event": "All day event",
        "repeat_event": "Repeat event",
        "time": "Time",
        "event": "Event",
        "location": "Location",
        "participant": "Participant",
        "get_data_exception": "Exception when getting data",
        "new_event": "New event",
        "confirm_delete_event": "Do you confirm to delete this event? ",
        "confrim_delete_event_or_all": "Do you want to delete all repeat events or only this event? \r\nClick [OK] to delete only this event, click [Cancel] delete all events",
        "data_format_error": "Data format error! ",
        "invalid_title": "Event title can not be blank or contains ($<>)",
        "view_no_ready": "View is not ready",
        "example": "e.g., meeting at room 107",
        "content": "What",
        "create_event": "Create event",
        "update_detail": "Edit details",
        "click_to_detail": "View details",
        "i_delete": "Delete",
        "i_save": "Save",
        "i_close": "Close",
        "day_plural": "days",
        "others": "Others",
        "item": "",
        "loading_data":"Loading data...",
        "request_processed":"The request is being processed ...",
        "success":"Success!",
        "are_you_sure_delete":"Are you sure to delete this event",
        "ok":"Ok",
        "cancel":"Cancel",
        "manage_the_calendar":"Manage The Calendar",
        "error_occurs":"Error occurs",
        "color":"Color",
        "invalid_date_format":"Invalid date format",
        "invalid_time_format":"Invalid time format",
        "_simbol_not_allowed":"$<> not allowed",
        "subject":"Subject",
        "time":"Time",
        "to":"To",
        "all_day_event":"All Day Event",
        "location":"Location",
        "remark":"Description",
        "click_to_create_new_event":"Click to Create New Event",
        "new_event":"New Event",
        "click_to_back_to_today":"Click to back to today",
        "today":"Í dag",
        "sday":"Day",
        "week":"Week",
        "month":"Mánuður",
        "ndays":"Days",
        "list":"List",
        "nmonth":"Árs",
        "refresh_view":"Refresh view",
        "refresh":"Endurglæða",
        "prev":"Fyrri",
        "next":"Næsti",
        "loading":"Er að hlaða",
        "error_overlapping":"This event is overlapping another event",
        "sorry_could_not_load_your_data":"Sorry, could not load your data, please try again later",
        "first":"First",
        "second":"Second",
        "third":"Third",
        "fourth":"Fourth",
        "last":"last",
        "repeat":"Repeat: ",
        "edit":"Edit",
        "edit_recurring_event":"Edit recurring event",
        "would_you_like_to_change_only_this_event_all_events_in_the_series_or_this_and_all_following_events_in_the_series":"Would you like to change only this event, all events in the series, or this and all following events in the series?",
        "only_this_event":"Only this event",
        "all_other_events_in_the_series_will_remain_the_same":"All other events in the series will remain the same.",
        "following_events":"Following events",
        "this_and_all_the_following_events_will_be_changed":"This and all the following events will be changed.",
        "any_changes_to_future_events_will_be_lost":"Any changes to future events will be lost.",
        "all_events":"All events",
        "all_events_in_the_series_will_be_changed":"All events in the series will be changed.",
        "any_changes_made_to_other_events_will_be_kept":"Any changes made to other events will be kept.",
        "cancel_this_change":"Cancel this change",
        "delete_recurring_event":"Delete recurring event",
        "would_you_like_to_delete_only_this_event_all_events_in_the_series_or_this_and_all_future_events_in_the_series":"Would you like to delete only this event, all events in the series, or this and all future events in the series?",
        "only_this_instance":"Only this instance",
        "all_other_events_in_the_series_will_remain":"All other events in the series will remain.",
        "all_following":"All following",
        "this_and_all_the_following_events_will_be_deleted":"This and all the following events will be deleted.",
        "all_events_in_the_series":"All events in the series",
        "all_events_in_the_series_will_be_deleted":"All events in the series will be deleted.",
        "repeats":"Repeats",
        "daily":"Daily",
        "every_weekday_monday_to_friday":"Every weekday (Monday to Friday)",
        "every_monday_wednesday_and_friday":"Every Monday, Wednesday, and Friday",
        "every_tuesday_and_thursday":"Every Tuesday, and Thursday",
        "weekly":"Weekly",
        "monthly":"Monthly",
        "yearly":"Yearly",
        "repeat_every":"Repeat every:",
        "weeks":"weeks",
        "repeat_on":"Repeat on:",
        "repeat_by":"Repeat by:",
        "day_of_the_month":"day of the month",
        "day_of_the_week":"day of the week",
        "starts_on":"Starts on:",
        "ends":"Ends:",
        "never":" Never",
        "after":"After",
        "occurrences":"occurrences",
        "summary":"Summary:",
        "every":"Every",
        "weekly_on_weekdays":"Weekly on weekdays",
        "weekly_on_monday_wednesday_friday":"Weekly on Monday, Wednesday, Friday",
        "weekly_on_tuesday_thursday":"Weekly on Tuesday, Thursday",
        "on":"on",
        "on_day":"on day",
        "on_the":"on the",
        "months":"months",
        "annually":"Annually",
        "years":"years",
        "once":"Once",
        "times":"times",
        "readmore":"read more",
        "readmore_less":"less",
        "reminder_to":"Reminder to",
        "reminder_before":"before",
        "reminder_days":"days",
        "reminder_hours":"hours",
        "reminder_minutes":"minutes",
        "until":"until"
    }
});
