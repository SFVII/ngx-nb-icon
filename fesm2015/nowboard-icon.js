import * as i0 from '@angular/core';
import { Injectable, Inject, Component, Input, NgModule, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const IconRegistry = {
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

class NowboardIconService {
    constructor(config) {
        this.registry = IconRegistry;
        this.setColorRules = new BehaviorSubject(null);
        if (config)
            this.DefaultColor = config;
        this.setColorRules.subscribe((colors) => {
            if (colors) {
                this.DefaultColor = colors;
            }
        });
    }
    getFromRegistry(key) {
        console.log(this.registry[key]);
        return this.registry[key];
    }
    addRegistry(key, path) {
        this.registry[key] = path;
    }
}
NowboardIconService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconService, deps: [{ token: '__NowboardIcon__' }], target: i0.ɵɵFactoryTarget.Injectable });
NowboardIconService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['__NowboardIcon__']
                }] }]; } });

class Color {
    constructor(r, g, b) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.set(r, g, b);
    }
    set(r, g, b) {
        this.r = this.clamp(r);
        this.g = this.clamp(g);
        this.b = this.clamp(b);
    }
    /**
     * Applying cals to get CSS filter for hue-rotate
     *
     * @param {number} [angle=0]
     * @memberof Color
     */
    hueRotate(angle = 0) {
        angle = (angle / 180) * Math.PI;
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
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
    }
    /**
     * Applying cals to get CSS filter for grayscale
     *
     * @param {number} [value=1]
     * @memberof Color
     */
    grayscale(value = 1) {
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
    }
    /**
     * Applying cals to get CSS filter for sepia
     *
     * @param {number} [value=1]
     * @memberof Color
     */
    sepia(value = 1) {
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
    }
    /**
     * Applying cals to get CSS filter for saturate
     *
     * @param {number} [value=1]
     * @memberof Color
     */
    saturate(value = 1) {
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
    }
    multiply(matrix) {
        // These values are needed. It's correct because the returned values will change
        const newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
        const newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
        const newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
        this.r = newR;
        this.g = newG;
        this.b = newB;
    }
    /**
     * Applying cals to get CSS filter for brightness
     *
     * @param {number} [value=1]
     * @memberof Color
     */
    brightness(value = 1) {
        this.linear(value);
    }
    /**
     * Applying cals to get CSS filter for contrast
     *
     * @param {number} [value=1]
     * @memberof Color
     */
    contrast(value = 1) {
        this.linear(value, -(0.5 * value) + 0.5);
    }
    linear(slope = 1, intercept = 0) {
        this.r = this.clamp(this.r * slope + intercept * 255);
        this.g = this.clamp(this.g * slope + intercept * 255);
        this.b = this.clamp(this.b * slope + intercept * 255);
    }
    /**
     * Applying cals to get CSS filter for invert
     *
     * @param {number} [value=1]
     * @memberof Color
     */
    invert(value = 1) {
        this.r = this.clamp((value + (this.r / 255) * (1 - 2 * value)) * 255);
        this.g = this.clamp((value + (this.g / 255) * (1 - 2 * value)) * 255);
        this.b = this.clamp((value + (this.b / 255) * (1 - 2 * value)) * 255);
    }
    /**
     * transform RGB into HSL values
     *
     * @returns {HSLData}
     * @memberof Color
     */
    hsl() {
        const red = this.r / 255;
        const green = this.g / 255;
        const blue = this.b / 255;
        // find greatest and smallest channel values
        const max = Math.max(red, green, blue);
        const min = Math.min(red, green, blue);
        let hue = 0;
        let saturation = 0;
        const lightness = (max + min) / 2;
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
        const delta = max - min;
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
    }
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
    clamp(value) {
        // Minimum RGB Value = 0;
        // Maximum RGB Value = 255;
        return Math.min(Math.max(value, 0), 255);
    }
}

class Solver {
    constructor(target, options) {
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
    solve() {
        const result = this.solveNarrow(this.solveWide());
        return {
            values: result.values,
            called: result.called,
            loss: result.loss,
            filter: this.css(result.values),
        };
    }
    /**
     * Solve wide values based on the wide values for RGB and HSL values
     *
     * @private
     * @returns {SPSAPayload}
     * @memberof Solver
     */
    solveWide() {
        const A = 5;
        const c = 15;
        // Wide values for RGB and HSL values
        // the values in the order: [`r`, `g`, `b`, `h`, `s`, `l`]
        const a = [60, 180, 18000, 600, 1.2, 1.2];
        let best = { loss: Infinity };
        let counter = 0;
        while (best.loss > this.options.acceptanceLossPercentage) {
            const initialFilterValues = [50, 20, 3750, 50, 100, 100];
            const result = this.spsa({
                A,
                a,
                c,
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
    }
    /**
     * Solve narrow values based on the wide values for the filter
     *
     * @private
     * @param {SPSAPayload} wide
     * @returns {SPSAPayload}
     * @memberof Solver
     */
    solveNarrow(wide) {
        const A = wide.loss;
        const c = 2;
        const A1 = A + 1;
        // Narrow values for RGB and HSL values
        // the values in the order: [`r`, `g`, `b`, `h`, `s`, `l`]
        const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
        return this.spsa({
            A,
            a,
            c,
            values: wide.values,
            maxTriesInLoop: 500,
            called: wide.called,
        });
    }
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
    fixValueByFilterIDX(value, idx) {
        let max = 100;
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
    }
    spsa({ A, a, c, values, maxTriesInLoop = 500, called = 0, }) {
        const alpha = 1;
        const gamma = 0.16666666666666666;
        let best = null;
        let bestLoss = Infinity;
        const deltas = new Array(6);
        const highArgs = new Array(6);
        const lowArgs = new Array(6);
        // Size of all CSS filters to be applied to get the correct color
        const filtersToBeAppliedSize = 6;
        for (let key = 0; key < maxTriesInLoop; key++) {
            const ck = c / Math.pow(key + 1, gamma);
            for (let i = 0; i < filtersToBeAppliedSize; i++) {
                deltas[i] = Math.random() > 0.5 ? 1 : -1;
                highArgs[i] = values[i] + ck * deltas[i];
                lowArgs[i] = values[i] - ck * deltas[i];
            }
            const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
            for (let i = 0; i < filtersToBeAppliedSize; i++) {
                const g = (lossDiff / (2 * ck)) * deltas[i];
                const ak = a[i] / Math.pow(A + key + 1, alpha);
                values[i] = this.fixValueByFilterIDX(values[i] - ak * g, i);
            }
            const loss = this.loss(values);
            if (loss < bestLoss) {
                best = values.slice(0);
                bestLoss = loss;
            }
        }
        return { values: best, loss: bestLoss, called };
    }
    /**
     * Checks how much is the loss for the filter in RGB and HSL colors
     *
     * @private
     * @param {SPSAPayload['values']} filters
     * @returns {number}
     * @memberof Solver
     */
    loss(filters) {
        // Argument as an Array of percentages.
        const color = this.reusedColor;
        // Resetting the color to black in case
        // it was called more than once
        color.set(0, 0, 0);
        color.invert(filters[0] / 100);
        color.sepia(filters[1] / 100);
        color.saturate(filters[2] / 100);
        color.hueRotate(filters[3] * 3.6);
        color.brightness(filters[4] / 100);
        color.contrast(filters[5] / 100);
        const colorHSL = color.hsl();
        return (Math.abs(color.r - this.target.r) +
            Math.abs(color.g - this.target.g) +
            Math.abs(color.b - this.target.b) +
            Math.abs(colorHSL.h - this.targetHSL.h) +
            Math.abs(colorHSL.s - this.targetHSL.s) +
            Math.abs(colorHSL.l - this.targetHSL.l));
    }
    /**
     * Returns the CSS filter list for the received HEX color
     *
     * @private
     * @param {number[]} filters
     * @returns {string}
     * @memberof Solver
     */
    css(filters) {
        const formatCssFilterValueByMultiplier = (idx, multiplier = 1) => Math.round(filters[idx] * multiplier);
        return [
            `invert(${formatCssFilterValueByMultiplier(0)}%)`,
            `sepia(${formatCssFilterValueByMultiplier(1)}%)`,
            `saturate(${formatCssFilterValueByMultiplier(2)}%)`,
            `hue-rotate(${formatCssFilterValueByMultiplier(3, 3.6)}deg)`,
            `brightness(${formatCssFilterValueByMultiplier(4)}%)`,
            `contrast(${formatCssFilterValueByMultiplier(5)}%);`,
        ].join(' ');
    }
}

/**
 * Transform a CSS Color from Hexadecimal to RGB color
 *
 * @param {string} hex hexadecimal color
 * @returns {([number, number, number] | [])} array with the RGB colors or empty array
 */
const hexToRgb = (hex) => {
    if (hex.length === 4) {
        return [parseInt(`0x${hex[1]}${hex[1]}`), parseInt(`0x${hex[2]}${hex[2]}`), parseInt(`0x${hex[3]}${hex[3]}`)];
    }
    if (hex.length === 7) {
        return [parseInt(`0x${hex[1]}${hex[2]}`), parseInt(`0x${hex[3]}${hex[4]}`), parseInt(`0x${hex[5]}${hex[6]}`)];
    }
    return [];
};
const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);
// Memory cache for the computed results to avoid multiple
// calculations for the same color
let results = {};
/**
 * A function that transforms a HEX color into CSS filters
 *
 * @param colorValue string hexadecimal color
 * @param opts HexToCssConfiguration function configuration
 *
 */
const hexToCSSFilter = (colorValue, opts = {}) => {
    let red;
    let green;
    let blue;
    if (results[colorValue] && !opts.forceFilterRecalculation) {
        return Object.assign({}, results[colorValue], { cache: true });
    }
    let color;
    try {
        [red, green, blue] = hexToRgb(colorValue);
        if (!isNumeric(red) || !isNumeric(green) || !isNumeric(blue)) {
            throw new Error(`hextToRgb returned an invalid value for '${colorValue}'`);
        }
        color = new Color(Number(red), Number(green), Number(blue));
    }
    catch (error) {
        throw new Error(`Color value should be in HEX format. ${error}`);
    }
    const solver = new Solver(color, Object.assign({}, 
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
const clearCache = (key) => {
    if (!key) {
        results = {};
    }
    else if (results[key]) {
        delete results[key];
    }
};

class NowboardIconComponent {
    constructor(service) {
        this.service = service;
        this.size = 1;
        this.disabled = false;
        this.icon = '';
        this.style = '';
        this.spanStyleWrapper = {};
        this.src = '';
        this.default_size = 12;
    }
    ngOnInit() {
        var _a, _b;
        if (!this.disabled) {
            if (!this.primary && ((_a = this.service.DefaultColor) === null || _a === void 0 ? void 0 : _a.primary)) {
                this.color = this.service.DefaultColor.primary;
            }
            else if (this.primary) {
                // @ts-ignore
                this.color = this.primary;
            }
            else {
                this.color = '#000000';
            }
        }
        else {
            if (!this.disabled_color && ((_b = this.service.DefaultColor) === null || _b === void 0 ? void 0 : _b.disabled_color)) {
                this.color = this.service.DefaultColor.disabled_color;
            }
            else if (this.disabled_color) {
                this.color = this.disabled_color;
            }
            else {
                this.color = '#000000';
            }
        }
        this.style = [
            `width: ${this.default_size * this.size}px`,
            `height: ${this.default_size * this.size}px`,
            `filter: ${this.filter()}`,
            `transform: scale(${this.size * 0.9})`
        ].join(';');
        this.spanStyleWrapper = {
            width: (this.default_size * this.size) + 'px',
            height: (this.default_size * this.size) + 'px',
        };
        this.src = this.service.getFromRegistry(this.icon);
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    filter() {
        var _a;
        const config = {
            acceptanceLossPercentage: 1,
            maxChecks: 10,
        };
        const convert = hexToCSSFilter(this.color, config);
        return (_a = convert.filter) === null || _a === void 0 ? void 0 : _a.replace(';', '');
    }
}
NowboardIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconComponent, deps: [{ token: NowboardIconService }], target: i0.ɵɵFactoryTarget.Component });
NowboardIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: NowboardIconComponent, selector: "nb-icon", inputs: { size: "size", primary: "primary", disabled_color: "disabled_color", disabled: "disabled", icon: "icon" }, usesOnChanges: true, ngImport: i0, template: `
    <span class="nb-icon {{icon}}-x{{size}}" [style]="spanStyleWrapper">
      <img [src]="src" style="{{style}}">
    </span>
  `, isInline: true, styles: ["span {display: inline-flex; align-items: center; justify-content: center;}"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-icon',
                    template: `
    <span class="nb-icon {{icon}}-x{{size}}" [style]="spanStyleWrapper">
      <img [src]="src" style="{{style}}">
    </span>
  `,
                    styles: ['span {display: inline-flex; align-items: center; justify-content: center;}']
                }]
        }], ctorParameters: function () { return [{ type: NowboardIconService }]; }, propDecorators: { size: [{
                type: Input
            }], primary: [{
                type: Input
            }], disabled_color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

class NowboardIconModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NowboardIconModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: NowboardIconModule,
            providers: [
                { provide: '__NowboardIcon__', useValue: config },
                NowboardIconService
            ]
        };
    }
}
NowboardIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconModule, deps: [{ token: NowboardIconModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
NowboardIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconModule, declarations: [NowboardIconComponent], exports: [NowboardIconComponent] });
NowboardIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconModule, providers: [
        NowboardIconService
    ], imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NowboardIconComponent
                    ],
                    imports: [],
                    exports: [
                        NowboardIconComponent
                    ],
                    providers: [
                        NowboardIconService
                    ]
                }]
        }], ctorParameters: function () { return [{ type: NowboardIconModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });

/*
 * Public API Surface of nowboard-icon
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NowboardIconComponent, NowboardIconModule, NowboardIconService };
//# sourceMappingURL=nowboard-icon.js.map
