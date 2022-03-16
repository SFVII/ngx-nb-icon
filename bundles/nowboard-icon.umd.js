(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('nowboard-icon', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["nowboard-icon"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var IconRegistry = {
        "activity_1": "/assets/nowboard-icon/activity_1.svg",
        "activity_2": "/assets/nowboard-icon/activity_2.svg",
        "activity_3": "/assets/nowboard-icon/activity_3.svg",
        "activity_4": "/assets/nowboard-icon/activity_4.svg",
        "add": "/assets/nowboard-icon/add.svg",
        "add_category": "/assets/nowboard-icon/add_category.svg",
        "add_circle": "/assets/nowboard-icon/add_circle.svg",
        "add_square": "/assets/nowboard-icon/add_square.svg",
        "arrow_swap_horizontal": "/assets/nowboard-icon/arrow_swap_horizontal.svg",
        "arrow_swap_vertical": "/assets/nowboard-icon/arrow_swap_vertical.svg",
        "attachment": "/assets/nowboard-icon/attachment.svg",
        "award_1-1": "/assets/nowboard-icon/award_1-1.svg",
        "award_1": "/assets/nowboard-icon/award_1.svg",
        "award_2-1": "/assets/nowboard-icon/award_2-1.svg",
        "award_2": "/assets/nowboard-icon/award_2.svg",
        "award_3": "/assets/nowboard-icon/award_3.svg",
        "award_4": "/assets/nowboard-icon/award_4.svg",
        "backward": "/assets/nowboard-icon/backward.svg",
        "backward_10_seconds": "/assets/nowboard-icon/backward_10_seconds.svg",
        "backward_5_seconds": "/assets/nowboard-icon/backward_5_seconds.svg",
        "battery_charging": "/assets/nowboard-icon/battery_charging.svg",
        "battery_fully": "/assets/nowboard-icon/battery_fully.svg",
        "battery_low": "/assets/nowboard-icon/battery_low.svg",
        "battery_normal": "/assets/nowboard-icon/battery_normal.svg",
        "blank": "/assets/nowboard-icon/blank.svg",
        "bookmark_1": "/assets/nowboard-icon/bookmark_1.svg",
        "bookmark_2": "/assets/nowboard-icon/bookmark_2.svg",
        "bookmark_3": "/assets/nowboard-icon/bookmark_3.svg",
        "buy_2": "/assets/nowboard-icon/buy_2.svg",
        "calender_1": "/assets/nowboard-icon/calender_1.svg",
        "calender_2": "/assets/nowboard-icon/calender_2.svg",
        "camera_1": "/assets/nowboard-icon/camera_1.svg",
        "camera_2": "/assets/nowboard-icon/camera_2.svg",
        "camera_slash_1": "/assets/nowboard-icon/camera_slash_1.svg",
        "camera_slash_2": "/assets/nowboard-icon/camera_slash_2.svg",
        "category": "/assets/nowboard-icon/category.svg",
        "chart": "/assets/nowboard-icon/chart.svg",
        "close": "/assets/nowboard-icon/close.svg",
        "close_circle": "/assets/nowboard-icon/close_circle.svg",
        "close_square": "/assets/nowboard-icon/close_square.svg",
        "color_picker": "/assets/nowboard-icon/color_picker.svg",
        "crop_1": "/assets/nowboard-icon/crop_1.svg",
        "crop_2": "/assets/nowboard-icon/crop_2.svg",
        "crop_3": "/assets/nowboard-icon/crop_3.svg",
        "cup": "/assets/nowboard-icon/cup.svg",
        "danger_circle": "/assets/nowboard-icon/danger_circle.svg",
        "danger_triangle": "/assets/nowboard-icon/danger_triangle.svg",
        "delete_1": "/assets/nowboard-icon/delete_1.svg",
        "delete_2": "/assets/nowboard-icon/delete_2.svg",
        "discovery_1": "/assets/nowboard-icon/discovery_1.svg",
        "discovery_2": "/assets/nowboard-icon/discovery_2.svg",
        "dislike": "/assets/nowboard-icon/dislike.svg",
        "display_1": "/assets/nowboard-icon/display_1.svg",
        "display_2": "/assets/nowboard-icon/display_2.svg",
        "display_3": "/assets/nowboard-icon/display_3.svg",
        "display_4": "/assets/nowboard-icon/display_4.svg",
        "docuement_align_left_11": "/assets/nowboard-icon/docuement_align_left_11.svg",
        "document_add_1": "/assets/nowboard-icon/document_add_1.svg",
        "document_add_2": "/assets/nowboard-icon/document_add_2.svg",
        "document_add_3": "/assets/nowboard-icon/document_add_3.svg",
        "document_add_4": "/assets/nowboard-icon/document_add_4.svg",
        "document_align_11": "/assets/nowboard-icon/document_align_11.svg",
        "document_align_center_1": "/assets/nowboard-icon/document_align_center_1.svg",
        "document_align_center_2": "/assets/nowboard-icon/document_align_center_2.svg",
        "document_align_center_3": "/assets/nowboard-icon/document_align_center_3.svg",
        "document_align_center_5": "/assets/nowboard-icon/document_align_center_5.svg",
        "document_align_center_6": "/assets/nowboard-icon/document_align_center_6.svg",
        "document_align_center_7": "/assets/nowboard-icon/document_align_center_7.svg",
        "document_align_left_1": "/assets/nowboard-icon/document_align_left_1.svg",
        "document_align_left_10": "/assets/nowboard-icon/document_align_left_10.svg",
        "document_align_left_12": "/assets/nowboard-icon/document_align_left_12.svg",
        "document_align_left_13": "/assets/nowboard-icon/document_align_left_13.svg",
        "document_align_left_14": "/assets/nowboard-icon/document_align_left_14.svg",
        "document_align_left_15": "/assets/nowboard-icon/document_align_left_15.svg",
        "document_align_left_16": "/assets/nowboard-icon/document_align_left_16.svg",
        "document_align_left_17": "/assets/nowboard-icon/document_align_left_17.svg",
        "document_align_left_2": "/assets/nowboard-icon/document_align_left_2.svg",
        "document_align_left_3": "/assets/nowboard-icon/document_align_left_3.svg",
        "document_align_left_4-1": "/assets/nowboard-icon/document_align_left_4-1.svg",
        "document_align_left_4": "/assets/nowboard-icon/document_align_left_4.svg",
        "document_align_left_5": "/assets/nowboard-icon/document_align_left_5.svg",
        "document_align_left_6": "/assets/nowboard-icon/document_align_left_6.svg",
        "document_align_left_7-1": "/assets/nowboard-icon/document_align_left_7-1.svg",
        "document_align_left_7": "/assets/nowboard-icon/document_align_left_7.svg",
        "document_align_left_8": "/assets/nowboard-icon/document_align_left_8.svg",
        "document_align_left_9-1": "/assets/nowboard-icon/document_align_left_9-1.svg",
        "document_align_left_9": "/assets/nowboard-icon/document_align_left_9.svg",
        "document_align_right_1": "/assets/nowboard-icon/document_align_right_1.svg",
        "document_align_right_10": "/assets/nowboard-icon/document_align_right_10.svg",
        "document_align_right_12": "/assets/nowboard-icon/document_align_right_12.svg",
        "document_align_right_13": "/assets/nowboard-icon/document_align_right_13.svg",
        "document_align_right_14": "/assets/nowboard-icon/document_align_right_14.svg",
        "document_align_right_15": "/assets/nowboard-icon/document_align_right_15.svg",
        "document_align_right_16": "/assets/nowboard-icon/document_align_right_16.svg",
        "document_align_right_17": "/assets/nowboard-icon/document_align_right_17.svg",
        "document_align_right_2": "/assets/nowboard-icon/document_align_right_2.svg",
        "document_align_right_3": "/assets/nowboard-icon/document_align_right_3.svg",
        "document_align_right_4": "/assets/nowboard-icon/document_align_right_4.svg",
        "document_align_right_5": "/assets/nowboard-icon/document_align_right_5.svg",
        "document_align_right_6": "/assets/nowboard-icon/document_align_right_6.svg",
        "document_align_right_9": "/assets/nowboard-icon/document_align_right_9.svg",
        "document_download_1": "/assets/nowboard-icon/document_download_1.svg",
        "document_download_2": "/assets/nowboard-icon/document_download_2.svg",
        "document_download_3": "/assets/nowboard-icon/document_download_3.svg",
        "document_download_4": "/assets/nowboard-icon/document_download_4.svg",
        "document_fail_1": "/assets/nowboard-icon/document_fail_1.svg",
        "document_fail_2": "/assets/nowboard-icon/document_fail_2.svg",
        "document_fail_3": "/assets/nowboard-icon/document_fail_3.svg",
        "document_fail_4": "/assets/nowboard-icon/document_fail_4.svg",
        "document_justify_center_1": "/assets/nowboard-icon/document_justify_center_1.svg",
        "document_justify_center_2": "/assets/nowboard-icon/document_justify_center_2.svg",
        "document_justify_left_1": "/assets/nowboard-icon/document_justify_left_1.svg",
        "document_justify_left_2": "/assets/nowboard-icon/document_justify_left_2.svg",
        "document_justify_right_1": "/assets/nowboard-icon/document_justify_right_1.svg",
        "document_justify_right_2": "/assets/nowboard-icon/document_justify_right_2.svg",
        "document_minus_1": "/assets/nowboard-icon/document_minus_1.svg",
        "document_minus_2": "/assets/nowboard-icon/document_minus_2.svg",
        "document_minus_3": "/assets/nowboard-icon/document_minus_3.svg",
        "document_minus_4": "/assets/nowboard-icon/document_minus_4.svg",
        "document_upload_1": "/assets/nowboard-icon/document_upload_1.svg",
        "document_upload_2": "/assets/nowboard-icon/document_upload_2.svg",
        "document_upload_3": "/assets/nowboard-icon/document_upload_3.svg",
        "document_upload_4": "/assets/nowboard-icon/document_upload_4.svg",
        "down_1": "/assets/nowboard-icon/down_1.svg",
        "down_2": "/assets/nowboard-icon/down_2.svg",
        "down_3": "/assets/nowboard-icon/down_3.svg",
        "down_circle_1": "/assets/nowboard-icon/down_circle_1.svg",
        "down_circle_2": "/assets/nowboard-icon/down_circle_2.svg",
        "down_square_1": "/assets/nowboard-icon/down_square_1.svg",
        "down_square_2": "/assets/nowboard-icon/down_square_2.svg",
        "download": "/assets/nowboard-icon/download.svg",
        "drop": "/assets/nowboard-icon/drop.svg",
        "edit_1": "/assets/nowboard-icon/edit_1.svg",
        "edit_2": "/assets/nowboard-icon/edit_2.svg",
        "edit_square": "/assets/nowboard-icon/edit_square.svg",
        "education": "/assets/nowboard-icon/education.svg",
        "faq_circle": "/assets/nowboard-icon/faq_circle.svg",
        "filter_1": "/assets/nowboard-icon/filter_1.svg",
        "filter_2": "/assets/nowboard-icon/filter_2.svg",
        "filter_3": "/assets/nowboard-icon/filter_3.svg",
        "filter_4": "/assets/nowboard-icon/filter_4.svg",
        "filter_5": "/assets/nowboard-icon/filter_5.svg",
        "flash_disk_1": "/assets/nowboard-icon/flash_disk_1.svg",
        "flash_disk_2": "/assets/nowboard-icon/flash_disk_2.svg",
        "folder_1": "/assets/nowboard-icon/folder_1.svg",
        "folder_2": "/assets/nowboard-icon/folder_2.svg",
        "folder_add_1": "/assets/nowboard-icon/folder_add_1.svg",
        "folder_add_2": "/assets/nowboard-icon/folder_add_2.svg",
        "folder_cross_1": "/assets/nowboard-icon/folder_cross_1.svg",
        "folder_cross_2": "/assets/nowboard-icon/folder_cross_2.svg",
        "folder_minus_1": "/assets/nowboard-icon/folder_minus_1.svg",
        "folder_minus_2": "/assets/nowboard-icon/folder_minus_2.svg",
        "foreign": "/assets/nowboard-icon/foreign.svg",
        "forward": "/assets/nowboard-icon/forward.svg",
        "forward_10_secondes": "/assets/nowboard-icon/forward_10_secondes.svg",
        "forward_5_seconds": "/assets/nowboard-icon/forward_5_seconds.svg",
        "gift_1": "/assets/nowboard-icon/gift_1.svg",
        "gift_2": "/assets/nowboard-icon/gift_2.svg",
        "graph": "/assets/nowboard-icon/graph.svg",
        "group": "/assets/nowboard-icon/group.svg",
        "group_1": "/assets/nowboard-icon/group_1.svg",
        "group_2": "/assets/nowboard-icon/group_2.svg",
        "group_3": "/assets/nowboard-icon/group_3.svg",
        "happy_1": "/assets/nowboard-icon/happy_1.svg",
        "happy_2": "/assets/nowboard-icon/happy_2.svg",
        "hashtag": "/assets/nowboard-icon/hashtag.svg",
        "headphone_1": "/assets/nowboard-icon/headphone_1.svg",
        "headphone_2": "/assets/nowboard-icon/headphone_2.svg",
        "heart_1": "/assets/nowboard-icon/heart_1.svg",
        "heart_2": "/assets/nowboard-icon/heart_2.svg",
        "heart_3": "/assets/nowboard-icon/heart_3.svg",
        "hide": "/assets/nowboard-icon/hide.svg",
        "home_1": "/assets/nowboard-icon/home_1.svg",
        "home_2": "/assets/nowboard-icon/home_2.svg",
        "home_3": "/assets/nowboard-icon/home_3.svg",
        "home_4": "/assets/nowboard-icon/home_4.svg",
        "image": "/assets/nowboard-icon/image.svg",
        "information_circle": "/assets/nowboard-icon/information_circle.svg",
        "information_square": "/assets/nowboard-icon/information_square.svg",
        "instagram": "/assets/nowboard-icon/instagram.svg",
        "keyboard": "/assets/nowboard-icon/keyboard.svg",
        "left_1": "/assets/nowboard-icon/left_1.svg",
        "left_2": "/assets/nowboard-icon/left_2.svg",
        "left_3": "/assets/nowboard-icon/left_3.svg",
        "left_circle_1": "/assets/nowboard-icon/left_circle_1.svg",
        "left_circle_2": "/assets/nowboard-icon/left_circle_2.svg",
        "left_square_1": "/assets/nowboard-icon/left_square_1.svg",
        "left_square_2": "/assets/nowboard-icon/left_square_2.svg",
        "like": "/assets/nowboard-icon/like.svg",
        "like_1": "/assets/nowboard-icon/like_1.svg",
        "like_2": "/assets/nowboard-icon/like_2.svg",
        "like_3": "/assets/nowboard-icon/like_3.svg",
        "link": "/assets/nowboard-icon/link.svg",
        "location": "/assets/nowboard-icon/location.svg",
        "location_add": "/assets/nowboard-icon/location_add.svg",
        "location_cross": "/assets/nowboard-icon/location_cross.svg",
        "location_minus": "/assets/nowboard-icon/location_minus.svg",
        "location_tick": "/assets/nowboard-icon/location_tick.svg",
        "lock_1": "/assets/nowboard-icon/lock_1.svg",
        "lock_2": "/assets/nowboard-icon/lock_2.svg",
        "lock_3": "/assets/nowboard-icon/lock_3.svg",
        "login": "/assets/nowboard-icon/login.svg",
        "logout": "/assets/nowboard-icon/logout.svg",
        "map": "/assets/nowboard-icon/map.svg",
        "menu": "/assets/nowboard-icon/menu.svg",
        "menu_candy_box": "/assets/nowboard-icon/menu_candy_box.svg",
        "menu_cheesesburger": "/assets/nowboard-icon/menu_cheesesburger.svg",
        "menu_fries": "/assets/nowboard-icon/menu_fries.svg",
        "menu_hamburger-1": "/assets/nowboard-icon/menu_hamburger-1.svg",
        "menu_hamburger": "/assets/nowboard-icon/menu_hamburger.svg",
        "menu_hotdog": "/assets/nowboard-icon/menu_hotdog.svg",
        "menu_kebab": "/assets/nowboard-icon/menu_kebab.svg",
        "menu_meatballs": "/assets/nowboard-icon/menu_meatballs.svg",
        "menu_strawberry": "/assets/nowboard-icon/menu_strawberry.svg",
        "menu_veggie_burger": "/assets/nowboard-icon/menu_veggie_burger.svg",
        "message_1": "/assets/nowboard-icon/message_1.svg",
        "message_10": "/assets/nowboard-icon/message_10.svg",
        "message_11": "/assets/nowboard-icon/message_11.svg",
        "message_12": "/assets/nowboard-icon/message_12.svg",
        "message_13": "/assets/nowboard-icon/message_13.svg",
        "message_14": "/assets/nowboard-icon/message_14.svg",
        "message_15": "/assets/nowboard-icon/message_15.svg",
        "message_16": "/assets/nowboard-icon/message_16.svg",
        "message_17": "/assets/nowboard-icon/message_17.svg",
        "message_18": "/assets/nowboard-icon/message_18.svg",
        "message_2": "/assets/nowboard-icon/message_2.svg",
        "message_21": "/assets/nowboard-icon/message_21.svg",
        "message_22": "/assets/nowboard-icon/message_22.svg",
        "message_23": "/assets/nowboard-icon/message_23.svg",
        "message_24": "/assets/nowboard-icon/message_24.svg",
        "message_25": "/assets/nowboard-icon/message_25.svg",
        "message_26": "/assets/nowboard-icon/message_26.svg",
        "message_27": "/assets/nowboard-icon/message_27.svg",
        "message_28": "/assets/nowboard-icon/message_28.svg",
        "message_29": "/assets/nowboard-icon/message_29.svg",
        "message_3": "/assets/nowboard-icon/message_3.svg",
        "message_30": "/assets/nowboard-icon/message_30.svg",
        "message_31": "/assets/nowboard-icon/message_31.svg",
        "message_32": "/assets/nowboard-icon/message_32.svg",
        "message_33": "/assets/nowboard-icon/message_33.svg",
        "message_34": "/assets/nowboard-icon/message_34.svg",
        "message_35": "/assets/nowboard-icon/message_35.svg",
        "message_36": "/assets/nowboard-icon/message_36.svg",
        "message_37": "/assets/nowboard-icon/message_37.svg",
        "message_38": "/assets/nowboard-icon/message_38.svg",
        "message_4": "/assets/nowboard-icon/message_4.svg",
        "message_5": "/assets/nowboard-icon/message_5.svg",
        "message_6": "/assets/nowboard-icon/message_6.svg",
        "message_7": "/assets/nowboard-icon/message_7.svg",
        "message_8": "/assets/nowboard-icon/message_8.svg",
        "message_9": "/assets/nowboard-icon/message_9.svg",
        "microphone_1": "/assets/nowboard-icon/microphone_1.svg",
        "microphone_2": "/assets/nowboard-icon/microphone_2.svg",
        "microphone_3": "/assets/nowboard-icon/microphone_3.svg",
        "microphone_4": "/assets/nowboard-icon/microphone_4.svg",
        "microphone_off": "/assets/nowboard-icon/microphone_off.svg",
        "minus": "/assets/nowboard-icon/minus.svg",
        "minus_circle": "/assets/nowboard-icon/minus_circle.svg",
        "minus_square": "/assets/nowboard-icon/minus_square.svg",
        "moon": "/assets/nowboard-icon/moon.svg",
        "more_circle": "/assets/nowboard-icon/more_circle.svg",
        "more_square": "/assets/nowboard-icon/more_square.svg",
        "mouse": "/assets/nowboard-icon/mouse.svg",
        "music": "/assets/nowboard-icon/music.svg",
        "music_filter": "/assets/nowboard-icon/music_filter.svg",
        "musicnote": "/assets/nowboard-icon/musicnote.svg",
        "next": "/assets/nowboard-icon/next.svg",
        "notification_1": "/assets/nowboard-icon/notification_1.svg",
        "notification_2": "/assets/nowboard-icon/notification_2.svg",
        "notification_3": "/assets/nowboard-icon/notification_3.svg",
        "notification_4": "/assets/nowboard-icon/notification_4.svg",
        "numerical_star": "/assets/nowboard-icon/numerical_star.svg",
        "off": "/assets/nowboard-icon/off.svg",
        "palette": "/assets/nowboard-icon/palette.svg",
        "password_1": "/assets/nowboard-icon/password_1.svg",
        "password_2": "/assets/nowboard-icon/password_2.svg",
        "password_3": "/assets/nowboard-icon/password_3.svg",
        "password_4": "/assets/nowboard-icon/password_4.svg",
        "password_5": "/assets/nowboard-icon/password_5.svg",
        "password_6": "/assets/nowboard-icon/password_6.svg",
        "pause": "/assets/nowboard-icon/pause.svg",
        "pause_circle": "/assets/nowboard-icon/pause_circle.svg",
        "pause_octagon": "/assets/nowboard-icon/pause_octagon.svg",
        "pause_octagon_1": "/assets/nowboard-icon/pause_octagon_1.svg",
        "pen": "/assets/nowboard-icon/pen.svg",
        "pin": "/assets/nowboard-icon/pin.svg",
        "plat": "/assets/nowboard-icon/plat.svg",
        "play_circle": "/assets/nowboard-icon/play_circle.svg",
        "play_octagon": "/assets/nowboard-icon/play_octagon.svg",
        "play_square": "/assets/nowboard-icon/play_square.svg",
        "pocker": "/assets/nowboard-icon/pocker.svg",
        "previous": "/assets/nowboard-icon/previous.svg",
        "profile_1": "/assets/nowboard-icon/profile_1.svg",
        "profile_accepted_2": "/assets/nowboard-icon/profile_accepted_2.svg",
        "profile_add_1": "/assets/nowboard-icon/profile_add_1.svg",
        "profile_add_2": "/assets/nowboard-icon/profile_add_2.svg",
        "profile_circle": "/assets/nowboard-icon/profile_circle.svg",
        "profile_delete_1": "/assets/nowboard-icon/profile_delete_1.svg",
        "profile_delete_2": "/assets/nowboard-icon/profile_delete_2.svg",
        "profile_octagon": "/assets/nowboard-icon/profile_octagon.svg",
        "profile_remove_1": "/assets/nowboard-icon/profile_remove_1.svg",
        "profile_remove_2": "/assets/nowboard-icon/profile_remove_2.svg",
        "profile_square": "/assets/nowboard-icon/profile_square.svg",
        "ps5_1": "/assets/nowboard-icon/ps5_1.svg",
        "ps5_2": "/assets/nowboard-icon/ps5_2.svg",
        "radio": "/assets/nowboard-icon/radio.svg",
        "record": "/assets/nowboard-icon/record.svg",
        "redo": "/assets/nowboard-icon/redo.svg",
        "refresh_1": "/assets/nowboard-icon/refresh_1.svg",
        "refresh_2": "/assets/nowboard-icon/refresh_2.svg",
        "repeat_1": "/assets/nowboard-icon/repeat_1.svg",
        "repeat_3": "/assets/nowboard-icon/repeat_3.svg",
        "repeat_one_1": "/assets/nowboard-icon/repeat_one_1.svg",
        "repeat_one_2": "/assets/nowboard-icon/repeat_one_2.svg",
        "repeat_one_3": "/assets/nowboard-icon/repeat_one_3.svg",
        "report": "/assets/nowboard-icon/report.svg",
        "right_1": "/assets/nowboard-icon/right_1.svg",
        "right_2": "/assets/nowboard-icon/right_2.svg",
        "right_3": "/assets/nowboard-icon/right_3.svg",
        "right_circle_1": "/assets/nowboard-icon/right_circle_1.svg",
        "right_circle_2": "/assets/nowboard-icon/right_circle_2.svg",
        "right_square_1": "/assets/nowboard-icon/right_square_1.svg",
        "right_square_2": "/assets/nowboard-icon/right_square_2.svg",
        "rotate_left": "/assets/nowboard-icon/rotate_left.svg",
        "rotate_right": "/assets/nowboard-icon/rotate_right.svg",
        "sad": "/assets/nowboard-icon/sad.svg",
        "scan_1": "/assets/nowboard-icon/scan_1.svg",
        "scan_10": "/assets/nowboard-icon/scan_10.svg",
        "scan_11": "/assets/nowboard-icon/scan_11.svg",
        "scan_12": "/assets/nowboard-icon/scan_12.svg",
        "scan_13": "/assets/nowboard-icon/scan_13.svg",
        "scan_2": "/assets/nowboard-icon/scan_2.svg",
        "scan_3": "/assets/nowboard-icon/scan_3.svg",
        "scan_4": "/assets/nowboard-icon/scan_4.svg",
        "scan_5": "/assets/nowboard-icon/scan_5.svg",
        "scan_6": "/assets/nowboard-icon/scan_6.svg",
        "scan_7": "/assets/nowboard-icon/scan_7.svg",
        "scan_8": "/assets/nowboard-icon/scan_8.svg",
        "search_1": "/assets/nowboard-icon/search_1.svg",
        "search_2": "/assets/nowboard-icon/search_2.svg",
        "security_safe": "/assets/nowboard-icon/security_safe.svg",
        "send_1": "/assets/nowboard-icon/send_1.svg",
        "send_2": "/assets/nowboard-icon/send_2.svg",
        "send_3": "/assets/nowboard-icon/send_3.svg",
        "send_4": "/assets/nowboard-icon/send_4.svg",
        "send_5": "/assets/nowboard-icon/send_5.svg",
        "setting": "/assets/nowboard-icon/setting.svg",
        "shield_1": "/assets/nowboard-icon/shield_1.svg",
        "shield_cross": "/assets/nowboard-icon/shield_cross.svg",
        "shield_plus": "/assets/nowboard-icon/shield_plus.svg",
        "shield_star": "/assets/nowboard-icon/shield_star.svg",
        "shield_tick": "/assets/nowboard-icon/shield_tick.svg",
        "show": "/assets/nowboard-icon/show.svg",
        "shuffle_1": "/assets/nowboard-icon/shuffle_1.svg",
        "shuffle_2": "/assets/nowboard-icon/shuffle_2.svg",
        "situation_1": "/assets/nowboard-icon/situation_1.svg",
        "situation_2": "/assets/nowboard-icon/situation_2.svg",
        "sms_1": "/assets/nowboard-icon/sms_1.svg",
        "sms_2": "/assets/nowboard-icon/sms_2.svg",
        "speaker_1": "/assets/nowboard-icon/speaker_1.svg",
        "speaker_2": "/assets/nowboard-icon/speaker_2.svg",
        "start_1": "/assets/nowboard-icon/start_1.svg",
        "sticker": "/assets/nowboard-icon/sticker.svg",
        "stop": "/assets/nowboard-icon/stop.svg",
        "stop_circle": "/assets/nowboard-icon/stop_circle.svg",
        "sun_1": "/assets/nowboard-icon/sun_1.svg",
        "sun_2": "/assets/nowboard-icon/sun_2.svg",
        "swap_1": "/assets/nowboard-icon/swap_1.svg",
        "swap_2": "/assets/nowboard-icon/swap_2.svg",
        "tag": "/assets/nowboard-icon/tag.svg",
        "tick": "/assets/nowboard-icon/tick.svg",
        "tick_circle": "/assets/nowboard-icon/tick_circle.svg",
        "tick_square": "/assets/nowboard-icon/tick_square.svg",
        "time_circle_1": "/assets/nowboard-icon/time_circle_1.svg",
        "time_circle_2": "/assets/nowboard-icon/time_circle_2.svg",
        "time_circle_3": "/assets/nowboard-icon/time_circle_3.svg",
        "time_circle_4": "/assets/nowboard-icon/time_circle_4.svg",
        "time_circle_5": "/assets/nowboard-icon/time_circle_5.svg",
        "time_circle_6": "/assets/nowboard-icon/time_circle_6.svg",
        "tv": "/assets/nowboard-icon/tv.svg",
        "undo": "/assets/nowboard-icon/undo.svg",
        "unlock_1": "/assets/nowboard-icon/unlock_1.svg",
        "unlock_2": "/assets/nowboard-icon/unlock_2.svg",
        "unlock_3": "/assets/nowboard-icon/unlock_3.svg",
        "up_1": "/assets/nowboard-icon/up_1.svg",
        "up_2": "/assets/nowboard-icon/up_2.svg",
        "up_3": "/assets/nowboard-icon/up_3.svg",
        "up_circle_1": "/assets/nowboard-icon/up_circle_1.svg",
        "up_circle_2": "/assets/nowboard-icon/up_circle_2.svg",
        "up_square_1": "/assets/nowboard-icon/up_square_1.svg",
        "up_square_2": "/assets/nowboard-icon/up_square_2.svg",
        "upload": "/assets/nowboard-icon/upload.svg",
        "user_tag": "/assets/nowboard-icon/user_tag.svg",
        "vector": "/assets/nowboard-icon/vector.svg",
        "verified": "/assets/nowboard-icon/verified.svg",
        "video_1": "/assets/nowboard-icon/video_1.svg",
        "video_2": "/assets/nowboard-icon/video_2.svg",
        "video_slash": "/assets/nowboard-icon/video_slash.svg",
        "virus": "/assets/nowboard-icon/virus.svg",
        "voice": "/assets/nowboard-icon/voice.svg",
        "voice_circle": "/assets/nowboard-icon/voice_circle.svg",
        "voice_shape_1": "/assets/nowboard-icon/voice_shape_1.svg",
        "voice_shape_2": "/assets/nowboard-icon/voice_shape_2.svg",
        "voice_square": "/assets/nowboard-icon/voice_square.svg",
        "volume_cross": "/assets/nowboard-icon/volume_cross.svg",
        "volume_high": "/assets/nowboard-icon/volume_high.svg",
        "volume_low": "/assets/nowboard-icon/volume_low.svg",
        "volume_low_1": "/assets/nowboard-icon/volume_low_1.svg",
        "volume_mute": "/assets/nowboard-icon/volume_mute.svg",
        "volume_off": "/assets/nowboard-icon/volume_off.svg",
        "volume_slash": "/assets/nowboard-icon/volume_slash.svg",
        "volume_up": "/assets/nowboard-icon/volume_up.svg",
        "warning": "/assets/nowboard-icon/warning.svg",
        "watch_1": "/assets/nowboard-icon/watch_1.svg",
        "watch_2": "/assets/nowboard-icon/watch_2.svg",
        "website": "/assets/nowboard-icon/website.svg",
        "wifi": "/assets/nowboard-icon/wifi.svg",
        "zoom_in": "/assets/nowboard-icon/zoom_in.svg",
        "zoom_out": "/assets/nowboard-icon/zoom_out.svg"
    };

    var NowboardIconService = /** @class */ (function () {
        function NowboardIconService() {
            this.registry = IconRegistry;
        }
        NowboardIconService.prototype.getFromRegistry = function (key) {
            console.log(this.registry[key]);
            return this.registry[key];
        };
        NowboardIconService.prototype.addRegistry = function (key, path) {
            this.registry[key] = path;
        };
        return NowboardIconService;
    }());
    NowboardIconService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NowboardIconService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NowboardIconService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NowboardIconService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NowboardIconService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var Color = /** @class */ (function () {
        function Color(r, g, b) {
            this.r = 0;
            this.g = 0;
            this.b = 0;
            this.set(r, g, b);
        }
        Color.prototype.set = function (r, g, b) {
            this.r = this.clamp(r);
            this.g = this.clamp(g);
            this.b = this.clamp(b);
        };
        /**
         * Applying cals to get CSS filter for hue-rotate
         *
         * @param {number} [angle=0]
         * @memberof Color
         */
        Color.prototype.hueRotate = function (angle) {
            if (angle === void 0) { angle = 0; }
            angle = (angle / 180) * Math.PI;
            var sin = Math.sin(angle);
            var cos = Math.cos(angle);
            this.multiply([
                0.213 + cos * 0.787 - sin * 0.213,
                0.715 - cos * 0.715 - sin * 0.715,
                0.072 - cos * 0.072 + sin * 0.928,
                0.213 - cos * 0.213 + sin * 0.143,
                0.715 + cos * 0.285 + sin * 0.14,
                0.072 - cos * 0.072 - sin * 0.283,
                0.213 - cos * 0.213 - sin * 0.787,
                0.715 - cos * 0.715 + sin * 0.715,
                0.072 + cos * 0.928 + sin * 0.072,
            ]);
        };
        /**
         * Applying cals to get CSS filter for grayscale
         *
         * @param {number} [value=1]
         * @memberof Color
         */
        Color.prototype.grayscale = function (value) {
            if (value === void 0) { value = 1; }
            this.multiply([
                0.2126 + 0.7874 * (1 - value),
                0.7152 - 0.7152 * (1 - value),
                0.0722 - 0.0722 * (1 - value),
                0.2126 - 0.2126 * (1 - value),
                0.7152 + 0.2848 * (1 - value),
                0.0722 - 0.0722 * (1 - value),
                0.2126 - 0.2126 * (1 - value),
                0.7152 - 0.7152 * (1 - value),
                0.0722 + 0.9278 * (1 - value),
            ]);
        };
        /**
         * Applying cals to get CSS filter for sepia
         *
         * @param {number} [value=1]
         * @memberof Color
         */
        Color.prototype.sepia = function (value) {
            if (value === void 0) { value = 1; }
            this.multiply([
                0.393 + 0.607 * (1 - value),
                0.769 - 0.769 * (1 - value),
                0.189 - 0.189 * (1 - value),
                0.349 - 0.349 * (1 - value),
                0.686 + 0.314 * (1 - value),
                0.168 - 0.168 * (1 - value),
                0.272 - 0.272 * (1 - value),
                0.534 - 0.534 * (1 - value),
                0.131 + 0.869 * (1 - value),
            ]);
        };
        /**
         * Applying cals to get CSS filter for saturate
         *
         * @param {number} [value=1]
         * @memberof Color
         */
        Color.prototype.saturate = function (value) {
            if (value === void 0) { value = 1; }
            this.multiply([
                0.213 + 0.787 * value,
                0.715 - 0.715 * value,
                0.072 - 0.072 * value,
                0.213 - 0.213 * value,
                0.715 + 0.285 * value,
                0.072 - 0.072 * value,
                0.213 - 0.213 * value,
                0.715 - 0.715 * value,
                0.072 + 0.928 * value,
            ]);
        };
        Color.prototype.multiply = function (matrix) {
            // These values are needed. It's correct because the returned values will change
            var newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
            var newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
            var newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
            this.r = newR;
            this.g = newG;
            this.b = newB;
        };
        /**
         * Applying cals to get CSS filter for brightness
         *
         * @param {number} [value=1]
         * @memberof Color
         */
        Color.prototype.brightness = function (value) {
            if (value === void 0) { value = 1; }
            this.linear(value);
        };
        /**
         * Applying cals to get CSS filter for contrast
         *
         * @param {number} [value=1]
         * @memberof Color
         */
        Color.prototype.contrast = function (value) {
            if (value === void 0) { value = 1; }
            this.linear(value, -(0.5 * value) + 0.5);
        };
        Color.prototype.linear = function (slope, intercept) {
            if (slope === void 0) { slope = 1; }
            if (intercept === void 0) { intercept = 0; }
            this.r = this.clamp(this.r * slope + intercept * 255);
            this.g = this.clamp(this.g * slope + intercept * 255);
            this.b = this.clamp(this.b * slope + intercept * 255);
        };
        /**
         * Applying cals to get CSS filter for invert
         *
         * @param {number} [value=1]
         * @memberof Color
         */
        Color.prototype.invert = function (value) {
            if (value === void 0) { value = 1; }
            this.r = this.clamp((value + (this.r / 255) * (1 - 2 * value)) * 255);
            this.g = this.clamp((value + (this.g / 255) * (1 - 2 * value)) * 255);
            this.b = this.clamp((value + (this.b / 255) * (1 - 2 * value)) * 255);
        };
        /**
         * transform RGB into HSL values
         *
         * @returns {HSLData}
         * @memberof Color
         */
        Color.prototype.hsl = function () {
            var red = this.r / 255;
            var green = this.g / 255;
            var blue = this.b / 255;
            // find greatest and smallest channel values
            var max = Math.max(red, green, blue);
            var min = Math.min(red, green, blue);
            var hue = 0;
            var saturation = 0;
            var lightness = (max + min) / 2;
            // If min and max have the same values, it means
            // the given color is achromatic
            if (max === min) {
                return {
                    h: 0,
                    s: 0,
                    l: lightness * 100,
                };
            }
            // Adding delta value of greatest and smallest channel values
            var delta = max - min;
            saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
            if (max === red) {
                hue = (green - blue) / delta + (green < blue ? 6 : 0);
            }
            else if (max === green) {
                hue = (blue - red) / delta + 2;
            }
            else if (max === blue) {
                hue = (red - green) / delta + 4;
            }
            hue /= 6;
            return {
                h: hue * 100,
                s: saturation * 100,
                l: lightness * 100,
            };
        };
        /**
         * Normalize the value to follow the min and max for RGB colors
         * min: 0
         * max: 255
         *
         * @private
         * @param {number} value
         * @returns {number}
         * @memberof Color
         */
        Color.prototype.clamp = function (value) {
            // Minimum RGB Value = 0;
            // Maximum RGB Value = 255;
            return Math.min(Math.max(value, 0), 255);
        };
        return Color;
    }());

    var Solver = /** @class */ (function () {
        function Solver(target, options) {
            this.target = target;
            this.targetHSL = target.hsl();
            this.options = Object.assign({}, 
            // Adding default values for options
            {
                acceptanceLossPercentage: 5,
                maxChecks: 15,
            }, options);
            // All the calcs done by the library to generate
            // a CSS Filter are based on the color `#000`
            // in this case, `rgb(0, 0, 0)`
            // Please make sure the background of the element
            // is `#000` for better performance
            // and color similarity.
            this.reusedColor = new Color(0, 0, 0);
        }
        /**
         * Returns the solved values for the
         *
         * @returns {(SPSAPayload & { filter: string; })}
         * @memberof Solver
         */
        Solver.prototype.solve = function () {
            var result = this.solveNarrow(this.solveWide());
            return {
                values: result.values,
                called: result.called,
                loss: result.loss,
                filter: this.css(result.values),
            };
        };
        /**
         * Solve wide values based on the wide values for RGB and HSL values
         *
         * @private
         * @returns {SPSAPayload}
         * @memberof Solver
         */
        Solver.prototype.solveWide = function () {
            var A = 5;
            var c = 15;
            // Wide values for RGB and HSL values
            // the values in the order: [`r`, `g`, `b`, `h`, `s`, `l`]
            var a = [60, 180, 18000, 600, 1.2, 1.2];
            var best = { loss: Infinity };
            var counter = 0;
            while (best.loss > this.options.acceptanceLossPercentage) {
                var initialFilterValues = [50, 20, 3750, 50, 100, 100];
                var result = this.spsa({
                    A: A,
                    a: a,
                    c: c,
                    values: initialFilterValues,
                    // for wide values we should use the double of tries in
                    // comparison of `solveNarrow()` method
                    maxTriesInLoop: 1000,
                });
                if (result.loss < best.loss) {
                    best = result;
                }
                counter += 1;
                if (counter >= this.options.maxChecks) {
                    break;
                }
            }
            return Object.assign({}, best, { called: counter });
        };
        /**
         * Solve narrow values based on the wide values for the filter
         *
         * @private
         * @param {SPSAPayload} wide
         * @returns {SPSAPayload}
         * @memberof Solver
         */
        Solver.prototype.solveNarrow = function (wide) {
            var A = wide.loss;
            var c = 2;
            var A1 = A + 1;
            // Narrow values for RGB and HSL values
            // the values in the order: [`r`, `g`, `b`, `h`, `s`, `l`]
            var a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
            return this.spsa({
                A: A,
                a: a,
                c: c,
                values: wide.values,
                maxTriesInLoop: 500,
                called: wide.called,
            });
        };
        /**
         * Returns final value based on the current filter order
         * to get the order, please check the returned value
         * in `css()` method
         *
         * @private
         * @param {number} value
         * @param {number} idx
         * @returns {number}
         * @memberof Solver
         */
        Solver.prototype.fixValueByFilterIDX = function (value, idx) {
            var max = 100;
            // Fixing max, minimum and value by filter
            if (idx === 2 /* saturate */) {
                max = 7500;
            }
            else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
                max = 200;
            }
            if (idx === 3 /* hue-rotate */) {
                if (value > max) {
                    value %= max;
                }
                else if (value < 0) {
                    value = max + (value % max);
                }
            }
            // Checking if value is below the minimum or above
            // the maximum allowed by filter
            else if (value < 0) {
                value = 0;
            }
            else if (value > max) {
                value = max;
            }
            return value;
        };
        Solver.prototype.spsa = function (_a) {
            var A = _a.A, a = _a.a, c = _a.c, values = _a.values, _b = _a.maxTriesInLoop, maxTriesInLoop = _b === void 0 ? 500 : _b, _c = _a.called, called = _c === void 0 ? 0 : _c;
            var alpha = 1;
            var gamma = 0.16666666666666666;
            var best = null;
            var bestLoss = Infinity;
            var deltas = new Array(6);
            var highArgs = new Array(6);
            var lowArgs = new Array(6);
            // Size of all CSS filters to be applied to get the correct color
            var filtersToBeAppliedSize = 6;
            for (var key = 0; key < maxTriesInLoop; key++) {
                var ck = c / Math.pow(key + 1, gamma);
                for (var i = 0; i < filtersToBeAppliedSize; i++) {
                    deltas[i] = Math.random() > 0.5 ? 1 : -1;
                    highArgs[i] = values[i] + ck * deltas[i];
                    lowArgs[i] = values[i] - ck * deltas[i];
                }
                var lossDiff = this.loss(highArgs) - this.loss(lowArgs);
                for (var i = 0; i < filtersToBeAppliedSize; i++) {
                    var g = (lossDiff / (2 * ck)) * deltas[i];
                    var ak = a[i] / Math.pow(A + key + 1, alpha);
                    values[i] = this.fixValueByFilterIDX(values[i] - ak * g, i);
                }
                var loss = this.loss(values);
                if (loss < bestLoss) {
                    best = values.slice(0);
                    bestLoss = loss;
                }
            }
            return { values: best, loss: bestLoss, called: called };
        };
        /**
         * Checks how much is the loss for the filter in RGB and HSL colors
         *
         * @private
         * @param {SPSAPayload['values']} filters
         * @returns {number}
         * @memberof Solver
         */
        Solver.prototype.loss = function (filters) {
            // Argument as an Array of percentages.
            var color = this.reusedColor;
            // Resetting the color to black in case
            // it was called more than once
            color.set(0, 0, 0);
            color.invert(filters[0] / 100);
            color.sepia(filters[1] / 100);
            color.saturate(filters[2] / 100);
            color.hueRotate(filters[3] * 3.6);
            color.brightness(filters[4] / 100);
            color.contrast(filters[5] / 100);
            var colorHSL = color.hsl();
            return (Math.abs(color.r - this.target.r) +
                Math.abs(color.g - this.target.g) +
                Math.abs(color.b - this.target.b) +
                Math.abs(colorHSL.h - this.targetHSL.h) +
                Math.abs(colorHSL.s - this.targetHSL.s) +
                Math.abs(colorHSL.l - this.targetHSL.l));
        };
        /**
         * Returns the CSS filter list for the received HEX color
         *
         * @private
         * @param {number[]} filters
         * @returns {string}
         * @memberof Solver
         */
        Solver.prototype.css = function (filters) {
            var formatCssFilterValueByMultiplier = function (idx, multiplier) {
                if (multiplier === void 0) { multiplier = 1; }
                return Math.round(filters[idx] * multiplier);
            };
            return [
                "invert(" + formatCssFilterValueByMultiplier(0) + "%)",
                "sepia(" + formatCssFilterValueByMultiplier(1) + "%)",
                "saturate(" + formatCssFilterValueByMultiplier(2) + "%)",
                "hue-rotate(" + formatCssFilterValueByMultiplier(3, 3.6) + "deg)",
                "brightness(" + formatCssFilterValueByMultiplier(4) + "%)",
                "contrast(" + formatCssFilterValueByMultiplier(5) + "%);",
            ].join(' ');
        };
        return Solver;
    }());

    /**
     * Transform a CSS Color from Hexadecimal to RGB color
     *
     * @param {string} hex hexadecimal color
     * @returns {([number, number, number] | [])} array with the RGB colors or empty array
     */
    var hexToRgb = function (hex) {
        if (hex.length === 4) {
            return [parseInt("0x" + hex[1] + hex[1]), parseInt("0x" + hex[2] + hex[2]), parseInt("0x" + hex[3] + hex[3])];
        }
        if (hex.length === 7) {
            return [parseInt("0x" + hex[1] + hex[2]), parseInt("0x" + hex[3] + hex[4]), parseInt("0x" + hex[5] + hex[6])];
        }
        return [];
    };
    var isNumeric = function (n) { return !isNaN(parseFloat(n)) && isFinite(n); };
    // Memory cache for the computed results to avoid multiple
    // calculations for the same color
    var results = {};
    /**
     * A function that transforms a HEX color into CSS filters
     *
     * @param colorValue string hexadecimal color
     * @param opts HexToCssConfiguration function configuration
     *
     */
    var hexToCSSFilter = function (colorValue, opts) {
        var _a;
        if (opts === void 0) { opts = {}; }
        var red;
        var green;
        var blue;
        if (results[colorValue] && !opts.forceFilterRecalculation) {
            return Object.assign({}, results[colorValue], { cache: true });
        }
        var color;
        try {
            _a = __read(hexToRgb(colorValue), 3), red = _a[0], green = _a[1], blue = _a[2];
            if (!isNumeric(red) || !isNumeric(green) || !isNumeric(blue)) {
                throw new Error("hextToRgb returned an invalid value for '" + colorValue + "'");
            }
            color = new Color(Number(red), Number(green), Number(blue));
        }
        catch (error) {
            throw new Error("Color value should be in HEX format. " + error);
        }
        var solver = new Solver(color, Object.assign({}, 
        // `HexToCssConfiguration` Defaults
        {
            acceptanceLossPercentage: 5,
            maxChecks: 30,
            forceFilterRecalculation: false,
        }, opts));
        return (results[colorValue] = Object.assign({}, solver.solve(), {
            hex: colorValue,
            rgb: [red, green, blue],
            cache: false,
        }));
    };
    /**
     * A function that clears cached results
     *
     * @param  {string} key? HEX string value passed previously `#24639C`. If not passed, it clears all cached results
     * @returns void
     */
    var clearCache = function (key) {
        if (!key) {
            results = {};
        }
        else if (results[key]) {
            delete results[key];
        }
    };

    var NowboardIconComponent = /** @class */ (function () {
        function NowboardIconComponent(service) {
            this.service = service;
            this.size = 1;
            this.color = 'white';
            this.icon = '';
            this.style = '';
            this.spanStyleWrapper = {};
            this.src = '';
            this.default_size = 12;
        }
        NowboardIconComponent.prototype.ngOnInit = function () {
            this.style = [
                "width: (" + this.default_size * this.size + ") px",
                "height: (" + this.default_size * this.size + ") px",
                "filter: " + this.filter(),
                "transform: scale(" + this.size + ")"
            ].join(';');
            this.spanStyleWrapper = {
                width: (this.default_size * this.size) + 'px',
                height: (this.default_size * this.size) + 'px',
            };
            this.src = this.service.getFromRegistry(this.icon);
        };
        NowboardIconComponent.prototype.filter = function () {
            var _a;
            var config = {
                acceptanceLossPercentage: 1,
                maxChecks: 10,
            };
            var convert = hexToCSSFilter(this.color, config);
            return (_a = convert.filter) === null || _a === void 0 ? void 0 : _a.replace(';', '');
        };
        return NowboardIconComponent;
    }());
    NowboardIconComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NowboardIconComponent, deps: [{ token: NowboardIconService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    NowboardIconComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: NowboardIconComponent, selector: "nb-icon", inputs: { size: "size", color: "color", icon: "icon" }, ngImport: i0__namespace, template: "\n    <span class=\"nb-icon {{icon}}-x{{size}}\" [style]=\"spanStyleWrapper\">\n      <img [src]=\"src\" style=\"{{style}}\">\n    </span>\n  ", isInline: true, styles: ["span {display: flex; align-items: center; justify-content: center;}"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NowboardIconComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'nb-icon',
                        template: "\n    <span class=\"nb-icon {{icon}}-x{{size}}\" [style]=\"spanStyleWrapper\">\n      <img [src]=\"src\" style=\"{{style}}\">\n    </span>\n  ",
                        styles: ['span {display: flex; align-items: center; justify-content: center;}']
                    }]
            }], ctorParameters: function () { return [{ type: NowboardIconService }]; }, propDecorators: { size: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }] } });

    var NowboardIconModule = /** @class */ (function () {
        function NowboardIconModule() {
        }
        return NowboardIconModule;
    }());
    NowboardIconModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NowboardIconModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NowboardIconModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NowboardIconModule, declarations: [NowboardIconComponent], exports: [NowboardIconComponent] });
    NowboardIconModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NowboardIconModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NowboardIconModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NowboardIconComponent
                        ],
                        imports: [],
                        exports: [
                            NowboardIconComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of nowboard-icon
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NowboardIconComponent = NowboardIconComponent;
    exports.NowboardIconModule = NowboardIconModule;
    exports.NowboardIconService = NowboardIconService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=nowboard-icon.umd.js.map
