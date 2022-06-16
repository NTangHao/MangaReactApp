

import {getDatabase, ref, child, get, onValue} from "firebase/database";
import {database} from "./components/firebase/firebase";



let Data; // Static data
export default Data = [
    {
        "description": "Lệnh Hòa năm XX, Nhật Bản đã thông qua một bộ luật cấm hoàn toàn việc quan hệ tình dục. Hikaru Inuta là một cậu học sinh danh dự có cha là một chỉ huy cấp cao trong Setori, cục kiểm soát hoạt động tình dục thuộc Bộ Y Tế, Lao Động, và Phúc Lợi. Một ngày nọ cậu được người bạn của mình rủ tới một câu lạc bộ ngầm bất hợp pháp, nơi mọi người tới để ăn chơi hưởng lạc. Bất ngờ thay cậu đã gặp được nữ minh tinh nổi tiếng hàng đầu hiện nay và là thần tượng của mình tại đây. Mọi chuyện sau đó sẽ ra sao?",
        "detail": {
            "author": "Murata Kouji",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-33.5/856014",
                    "name": "Chapter 33.5: Omake tập 1-3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-33/849277",
                    "name": "Chapter 33: Buổi tiệc BBQ của Cục Kiểm Soát Tình Dục"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-32/842280",
                    "name": "Chapter 32: Khỉ và chó"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-31/829396",
                    "name": "Chapter 31: Bạn gái cũ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-30/818668",
                    "name": "Chapter 30: Cuộc cách mạng tình dục"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-29/808111",
                    "name": "Chapter 29: Bóng hình của kẻ sa ngã"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-28/793426",
                    "name": "Chapter 28: Đưa vào"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-27/788638",
                    "name": "Chapter 27: Ma thuật"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-26/784369",
                    "name": "Chapter 26: Khoảng thời gian hạnh phúc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-25/782515",
                    "name": "Chapter 25: Món chính"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-24/780491",
                    "name": "Chapter 24: Can't stop"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-23/780146",
                    "name": "Chapter 23: Sụp đổ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-22/773087",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-21/764890",
                    "name": "Chapter 21: Buổi diễn của dục vọng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-20/764778",
                    "name": "Chapter 20: Phát cuồng vì em"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-19/764493",
                    "name": "Chapter 19: Thiên thần"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-18/764051",
                    "name": "Chapter 18: Bóp méo"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-17/763891",
                    "name": "Chapter 17: Hội nhóm của những kẻ sa ngã"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-16/762898",
                    "name": "Chapter 16: Giả dối"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-15/761200",
                    "name": "Chapter 15: Tớ xin lỗi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-14/758392",
                    "name": "Chapter 14: Ướt đẫm"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-13/757749",
                    "name": "Chapter 13: Bạn gái của bạn thân"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-12/754330",
                    "name": "Chapter 12: Đồng phạm"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-11/751171",
                    "name": "Chapter 11: Sáng thức dậy, tâm thanh tịnh như một vị hiền giả"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-10/750410",
                    "name": "Chapter 10: Chó rống đêm khuya"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-9/750409",
                    "name": "Chapter 9: Cậu ấy là của tôi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-8/750408",
                    "name": "Chapter 8: Chó"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-7/750407",
                    "name": "Chapter 7: Để bảo đảm thôi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-6/750406",
                    "name": "Chapter 6: Tiết học giáo dục công dân"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-5/750405",
                    "name": "Chapter 5: Hội chứng kiêng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam/chap-4/750404",
                    "name": "Chapter 4: Học sinh yêu quí của tôi"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Trái cấm/Chapter 3 Chồi non mới nhú",
                    "name": "Chapter 3: Chồi non mới nhú"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Trái cấm/Chapter 2 Nếm độc",
                    "name": "Chapter 2: Nếm độc"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Trái cấm/Chapter 1 Quan hệ tình dục trái phép",
                    "name": "Chapter 1: Quan hệ tình dục trái phép"
                }
            ],
            "genres": [
                "Drama",
                "Ecchi",
                "Manga",
                "Psychological",
                "Romance",
                "School Life",
                "Seinen"
            ],
            "image": "//st.nettruyenco.com/data/comics/179/trai-cam.jpg",
            "status": "Đang tiến hành",
            "title": "Trái cấm"
        },
        "image": "//st.nettruyenco.com/data/comics/179/trai-cam.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/trai-cam-454910",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Akai Ringo",
            "status": "Drama, Ecchi, Manga, Psychological, Romance, School Life, Seinen",
            "subscriber": "1.134.356",
            "update_time": "784",
            "view": "Murata Kouji"
        },
        "title": "Trái cấm"
    },
    {
        "description": "Một học sinh cao trung bình thường, Morioka Yuuto, được chọn làm ứng cử viên cho Quỷ Vương tiếp theo. Cậu bị chuyển đến học viện dành cho ác quỷ, học viện Ginsei (Ngôi Sao Bạc) nơi cậu bị các học viên khác khinh bỉ. [--Chị thề chị sẽ khiến em trở thành Quỷ Vương. Đó là lý do.....chị trở thành tùy tùng của em.] Cuộc gặp gỡ giữa Yuuto với một ác quỷ mĩ miều, Himekami Lizel đã thay đổi số phận và thế giới của cậu. Cậu có thể học bất kì loại phép thuật nào ngay lập tức và khả năng hấp thụ sức mạnh phép thuật là vô hạn nhờ việc động chạm thân thể với những cô gái tùy tùng của cậu. Đó là một năng lực đặc biệt mà tộc ác quỷ không có, chỉ độc nhất có ở con người tên Yuuto. Ứng cử viên cho Quỷ Vương tiếp theo đã thách đấu với các ác quỷ mạnh nhất để trở thành Quỷ Vương công lý.\nCâu chuyện viễn tưởng đầy thú vị và hấp dẫn về leo hạng trong học viện phép thuật bắt đầu!",
        "detail": {
            "author": "KUJI MASAMUNE",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-19/845304",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-18/816684",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-17/788654",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-16/777295",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-15/764826",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-14/744343",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-13/741714",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-12/741350",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-11/741100",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-10/741021",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-9/686270",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-8/673255",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-7/673043",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-6/642425",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-5/635518",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha/chap-4/631007",
                    "name": "Chapter 4"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Maou Gakuen no Hangyakusha/Chapter 3",
                    "name": "Chapter 3"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Maou Gakuen no Hangyakusha/Chapter 2",
                    "name": "Chapter 2"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Maou Gakuen no Hangyakusha/Chapter 1",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Action",
                "Adult",
                "Comedy",
                "Drama",
                "Ecchi",
                "Fantasy",
                "Harem",
                "Manga",
                "Mature",
                "Mystery",
                "Romance",
                "School Life",
                "Seinen",
                "Supernatural"
            ],
            "image": "//st.nettruyenco.com/data/comics/47/maou-gakuen-no-hangyakusha.jpg",
            "status": "Đang tiến hành",
            "title": "Maou Gakuen no Hangyakusha"
        },
        "image": "//st.nettruyenco.com/data/comics/47/maou-gakuen-no-hangyakusha.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/maou-gakuen-no-hangyakusha-305110",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Kẻ náo loạn học viện quỷ vương",
            "status": "Action, Adult, Comedy, Drama, Ecchi, Fantasy, Harem, Manga, Mature, Mystery, Romance, School Life, Seinen, Supernatural",
            "subscriber": "1.392.770",
            "update_time": "932",
            "view": "KUJI MASAMUNE"
        },
        "title": "Maou Gakuen no Hangyakusha"
    },
    {
        "description": "Cùng theo chân anh chàng Konoe Yuuto bị triệu hồi đến một thế giới nơi trao đổi nô lệ là hợp pháp, và .... tất nhiên là đi khắp nơi lập Harem bằng skill \"Đoạt Kỹ\" của mình rồi :))",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-74/855680",
                    "name": "Chapter 74"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-73/854510",
                    "name": "Chapter 73"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-72/853685",
                    "name": "Chapter 72"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-71/852486",
                    "name": "Chapter 71"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-70/850875",
                    "name": "Chapter 70"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-69/850266",
                    "name": "Chapter 69"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-68/829249",
                    "name": "Chapter 68"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-67/827462",
                    "name": "Chapter 67"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-66/826798",
                    "name": "Chapter 66"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-65/825623",
                    "name": "Chapter 65"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-64/823198",
                    "name": "Chapter 64"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-63/817369",
                    "name": "Chapter 63"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-62/815489",
                    "name": "Chapter 62"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-61/811586",
                    "name": "Chapter 61"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-60/809325",
                    "name": "Chapter 60"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-59/807905",
                    "name": "Chapter 59"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-58/800242",
                    "name": "Chapter 58"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-57/797700",
                    "name": "Chapter 57"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-56/795896",
                    "name": "Chapter 56"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-55/794971",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-54/794252",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-53/792027",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-52/789404",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-51/786361",
                    "name": "Chapter 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-50/784852",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-49/781726",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-48/778060",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-47/771242",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-46/763421",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-45/757789",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-44/756282",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-43/750967",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-42/745903",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-41/743418",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-40/733716",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-39/540044",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-38/509947",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-37/506799",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-36/499711",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-35/494550",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-34/490906",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-33/482379",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-32/478402",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-31/475229",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-30/406136",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-29/404089",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-28/392461",
                    "name": "Chapter 28"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-27/385244",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-26/383031",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-25/383030",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-24/378094",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-23/377475",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-22/377474",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-21/375554",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-20/375426",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-19/375314",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-18/375169",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-17/358660",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-16/356064",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-15/356063",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-14/353024",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-13/352292",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-12/346860",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-11/346603",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-10/340022",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-9/339185",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-8/309241",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-7/308618",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-6/308500",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-5/306933",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/chap-4/306747",
                    "name": "Chapter 4"
                },
                {
                    "link": "rgs://apptruyentranh-8117b.appspot.com/Isekai Shihai No Skill Taker Zero Kara Hajimeru Dorei Harem/Chapter 3",
                    "name": "Chapter 3"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Isekai Shihai No Skill Taker Zero Kara Hajimeru Dorei Harem/Chapter 2",
                    "name": "Chapter 2"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Isekai Shihai No Skill Taker Zero Kara Hajimeru Dorei Harem/Chapter 1",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Action",
                "Comedy",
                "Fantasy",
                "Harem",
                "Manga",
                "Martial Arts"
            ],
            "image": "//st.nettruyenco.com/data/comics/1/isekai-shihai-no-skill-taker-zero-kara-h-6414.jpg",
            "status": "Đang tiến hành",
            "title": "Isekai Shihai No Skill Taker: Zero Kara Hajimeru Dorei Harem"
        },
        "image": "//st.nettruyenco.com/data/comics/1/isekai-shihai-no-skill-taker-zero-kara-h-6414.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem-145930",
        "message_main": {
            "comment": "1.912",
            "genres": "Action, Comedy, Fantasy, Harem, Manga, Martial Arts",
            "status": "Đang tiến hành",
            "subscriber": "25.355",
            "update_time": "3 giờ trước",
            "view": "3.417.801"
        },
        "title": "Isekai Shihai No Skill Taker: Zero Kara Hajimeru Dorei Harem"
    },
    {
        "description": "Ngày xửa ngày xưa, có một thế giới nơi phép thuật có thể chi phối mọi thứ. Nhưng sâu trong rừng có một thanh niên dành thời gian để luyện tập cơ bắp. Mặc dù không thể sử dụng phép thuật, nhưng cậu ta có một cuộc sống yên bình với cha mình. Rồi một ngày, cuộc sống của cậu gặp nguy hiểm! Cơ thể của Saitama sẽ bảo vệ cậu ta khỏi những pháp sư? Cơ bắp được luyện tập của cậu có thể sánh vai với các pháp sư ưu tú ...? Câu chuyện về Saitama ở Hogwarts bắt đầu!",
        "detail": {
            "author": "Hajime Komoto",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-108/855912",
                    "name": "Chapter 108"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-107/853668",
                    "name": "Chapter 107"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-106/851085",
                    "name": "Chapter 106"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-105/846823",
                    "name": "Chapter 105"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-104/845010",
                    "name": "Chapter 104"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-103/842883",
                    "name": "Chapter 103"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-102/840879",
                    "name": "Chapter 102"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-101-1/835564",
                    "name": "Chapter 101"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-100/833257",
                    "name": "Chapter 100"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-99-1/830720",
                    "name": "Chapter 99"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-98-1/828374",
                    "name": "Chapter 98"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-97/826086",
                    "name": "Chapter 97"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-96/823920",
                    "name": "Chapter 96"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-95/821855",
                    "name": "Chapter 95"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-94/820640",
                    "name": "Chapter 94"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-93/818466",
                    "name": "Chapter 93"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-92/816011",
                    "name": "Chapter 92"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-91/811371",
                    "name": "Chapter 91"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-90/804825",
                    "name": "Chapter 90"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-89/801252",
                    "name": "Chapter 89"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-88/798620",
                    "name": "Chapter 88"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-87/796204",
                    "name": "Chapter 87"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-86/793541",
                    "name": "Chapter 86"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-85/790827",
                    "name": "Chapter 85"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-84/785323",
                    "name": "Chapter 84"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-83/780569",
                    "name": "Chapter 83"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-82/779164",
                    "name": "Chapter 82"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-81/775498",
                    "name": "Chapter 81"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-80/773469",
                    "name": "Chapter 80"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-79/770656",
                    "name": "Chapter 79"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-78/768099",
                    "name": "Chapter 78"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-77/764769",
                    "name": "Chapter 77"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-76/763020",
                    "name": "Chapter 76"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-75/759304",
                    "name": "Chapter 75"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-74/756117",
                    "name": "Chapter 74"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-73/748490",
                    "name": "Chapter 73"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-72/744243",
                    "name": "Chapter 72"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-71/738092",
                    "name": "Chapter 71"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-70/733983",
                    "name": "Chapter 70"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-69/731415",
                    "name": "Chapter 69"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-68/729704",
                    "name": "Chapter 68"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-67/727347",
                    "name": "Chapter 67"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-66/725170",
                    "name": "Chapter 66"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-65/722876",
                    "name": "Chapter 65"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-64/721476",
                    "name": "Chapter 64"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-63/718301",
                    "name": "Chapter 63"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-62/716254",
                    "name": "Chapter 62"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-61/714545",
                    "name": "Chapter 61"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-60/710336",
                    "name": "Chapter 60"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-59/707892",
                    "name": "Chapter 59"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-58/705241",
                    "name": "Chapter 58"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-57/702802",
                    "name": "Chapter 57"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-56/700071",
                    "name": "Chapter 56"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-55/697427",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-54/695038",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-53/692825",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-52/690258",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-51/688444",
                    "name": "Chapter 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-50/685735",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-49/684397",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-48/683098",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-47/680680",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-46/678157",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-45/674093",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-44/670497",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-43/668605",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-42/666382",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-41/664228",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-40/661338",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-39/659579",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-38/658076",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-37/654244",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-36/650226",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-35/647475",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-34/645907",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-33/644147",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-32/642264",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-31/638822",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-30/637235",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-29/635343",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-28/633083",
                    "name": "Chapter 28"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-27/630813",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-26/625956",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-25/620886",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-24/611768",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-23/603688",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-22/601014",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-21/593684",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-20/592377",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-19/589398",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-18/581532",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-17/579617",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-16/573805",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-15/571126",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-14/568105",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-13/562294",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-12/557737",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-11/556762",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-10/553892",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-9/553386",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-8/553043",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-7/553042",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-6/553041",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-5/553040",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-4/553039",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-3/553038",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-2/553037",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles/chap-1/537484",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Action",
                "Comedy",
                "Manga",
                "Shounen"
            ],
            "image": "//st.nettruyenco.com/data/comics/120/mashle-magic-and-muscles.jpg",
            "status": "Đang tiến hành",
            "title": "Mashle: Magic and Muscles"
        },
        "image": "//st.nettruyenco.com/data/comics/120/mashle-magic-and-muscles.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/mashle-magic-and-muscles-272564",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Phép Thuật và Cơ Bắp",
            "status": "Action, Comedy, Manga, Shounen",
            "subscriber": "8.327.421",
            "update_time": "10.519",
            "view": "Hajime Komoto"
        },
        "title": "Mashle: Magic and Muscles"
    },
    {
        "description": "Vì bố mẹ mình phải sang nước ngoài, nên Hinata, một học sinh cao trung vô cùng bình thường. Bố mẹ của Hinata cũng đã nhờ một gia sư riêng cho cậu ấy, một gia sư vô cùng đáng yêu và gợi cảm, Aoi để trông nom cho cậu, chưa kể là cô ấy còn trông rất giống với một diễn viên vô cùng quyến rũ, Sumire Nanasato. Và rồi liệu khi ba mẹ mình đi vắng, Hinata sẽ có thể học được trong tình cảnh này hay không...câu chuyện với một Onee-san vô cùng gợi cảm được bắt đầu...!",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/love-kyo-kateikyoushi-ga-xx-sugite-benkyou-dokoro-ja-nai/chap-6.5/800235",
                    "name": "Chapter 6.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/love-kyo-kateikyoushi-ga-xx-sugite-benkyou-dokoro-ja-nai/chap-6/799044",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/love-kyo-kateikyoushi-ga-xx-sugite-benkyou-dokoro-ja-nai/chap-5/784254",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/love-kyo-kateikyoushi-ga-xx-sugite-benkyou-dokoro-ja-nai/chap-4/782387",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/love-kyo-kateikyoushi-ga-xx-sugite-benkyou-dokoro-ja-nai/chap-3/777145",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/love-kyo-kateikyoushi-ga-xx-sugite-benkyou-dokoro-ja-nai/chap-2/773493",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/love-kyo-kateikyoushi-ga-xx-sugite-benkyou-dokoro-ja-nai/chap-1/772564",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Ecchi",
                "Manga",
                "Romance",
                "School Life",
                "Shounen"
            ],
            "image": "//st.nettruyenco.com/data/comics/97/love-kyo-kateikyoushi-ga-xx-sugite-benky-4430.jpg",
            "status": "Đang tiến hành",
            "title": "Love-Kyo: Kateikyoushi Ga Xx Sugite Benkyou Dokoro Ja Nai"
        },
        "image": "//st.nettruyenco.com/data/comics/97/love-kyo-kateikyoushi-ga-xx-sugite-benky-4430.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/love-kyo-kateikyoushi-ga-xx-sugite-benkyou-dokoro-ja-nai-495050",
        "message_main": {
            "comment": "181",
            "genres": "Comedy, Ecchi, Manga, Romance, School Life, Shounen",
            "status": "Đang tiến hành",
            "subscriber": "5.371",
            "update_time": "5 giờ trước",
            "view": "138.356"
        },
        "title": "Love-Kyo: Kateikyoushi Ga Xx Sugite Benkyou Dokoro Ja Nai"
    },
    {
        "description": "Tsukiyoda, một chàng trai nhút nhát, không thể hòa nhập được với cuộc sống hiện đại, sau khi giúp đỡ cô bạn nổi tiếng cùng trường và được trả công bằng bữa trưa. Những tưởng cuộc sống của mình đã thay đổi, nhưng không mọi thứ thay đổi",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-31/850961",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-30/846237",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-29/836496",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-28.2/610173",
                    "name": "Chapter 28.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-28.1/603637",
                    "name": "Chapter 28.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-27.2/602281",
                    "name": "Chapter 27.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-27.1/598940",
                    "name": "Chapter 27.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-26.2/588197",
                    "name": "Chapter 26.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-26.1/580480",
                    "name": "Chapter 26.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-25.2/577118",
                    "name": "Chapter 25.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-25.1/574153",
                    "name": "Chapter 25.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-24.2/573283",
                    "name": "Chapter 24.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-24.1/572066",
                    "name": "Chapter 24.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-23.2/565111",
                    "name": "Chapter 23.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-23.1/562945",
                    "name": "Chapter 23.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-22.2/559880",
                    "name": "Chapter 22.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-22.1/558792",
                    "name": "Chapter 22.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-21.2/518603",
                    "name": "Chapter 21.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-21.1/509705",
                    "name": "Chapter 21.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-20.3/482253",
                    "name": "Chapter 20.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-20.2/480659",
                    "name": "Chapter 20.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-20.1/480172",
                    "name": "Chapter 20.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-19.2/476759",
                    "name": "Chapter 19.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-19.1/476758",
                    "name": "Chapter 19.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-18.3/461372",
                    "name": "Chapter 18.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-18.2/461088",
                    "name": "Chapter 18.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-18.1/449307",
                    "name": "Chapter 18.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-17.2/386742",
                    "name": "Chapter 17.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-17.1/382506",
                    "name": "Chapter 17.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-16.2/375872",
                    "name": "Chapter 16.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-16.1/375741",
                    "name": "Chapter 16.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-15.2/375740",
                    "name": "Chapter 15.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-15.1/374626",
                    "name": "Chapter 15.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-14.2/373113",
                    "name": "Chapter 14.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-14.1/373026",
                    "name": "Chapter 14.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-13.2/371889",
                    "name": "Chapter 13.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-13.1/371645",
                    "name": "Chapter 13.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-12.2/371512",
                    "name": "Chapter 12.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-12.1/371396",
                    "name": "Chapter 12.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-11.2/370394",
                    "name": "Chapter 11.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-11.1/369850",
                    "name": "Chapter 11.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-10.2/369848",
                    "name": "Chapter 10.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-10.1/369849",
                    "name": "Chapter 10.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-9.2/369846",
                    "name": "Chapter 9.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-9.1/368451",
                    "name": "Chapter 9.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-8.2/353425",
                    "name": "Chapter 8.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-8.1/352720",
                    "name": "Chapter 8.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-7.2/352859",
                    "name": "Chapter 7.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-7.1/352383",
                    "name": "Chapter 7.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-6.2/352297",
                    "name": "Chapter 6.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-6.1/352109",
                    "name": "Chapter 6.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-5.2/352025",
                    "name": "Chapter 5.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-5.1/352024",
                    "name": "Chapter 5.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-4.3/350680",
                    "name": "Chapter 4.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-4.2/350489",
                    "name": "Chapter 4.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-4.1/350314",
                    "name": "Chapter 4.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-3.3/349987",
                    "name": "Chapter 3.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-3.2/349986",
                    "name": "Chapter 3.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-3.1/349412",
                    "name": "Chapter 3.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-2.2/349411",
                    "name": "Chapter 2.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-2.1/348501",
                    "name": "Chapter 2.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-1.3/348152",
                    "name": "Chapter 1.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-1.2/348037",
                    "name": "Chapter 1.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo/chap-1.1/347912",
                    "name": "Chapter 1.1"
                }
            ],
            "genres": [
                "Action",
                "Adult",
                "Adventure",
                "Drama",
                "Fantasy",
                "Horror",
                "Manga",
                "Mature",
                "School Life",
                "Sci-fi"
            ],
            "image": "//st.nettruyenco.com/data/comics/89/shibuya-kingyo.jpg",
            "status": "Đang tiến hành",
            "title": "Shibuya Kingyo"
        },
        "image": "//st.nettruyenco.com/data/comics/89/shibuya-kingyo.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/shibuya-kingyo-172410",
        "message_main": {
            "comment": "2.841.664",
            "genres": "Shibuya Kingyo - Cá Vàng Sát Thủ",
            "status": "Action, Adult, Adventure, Drama, Fantasy, Horror, Manga, Mature, School Life, Sci-fi",
            "subscriber": "1.902",
            "update_time": "9.406",
            "view": "Đang tiến hành"
        },
        "title": "Shibuya Kingyo"
    },
    {
        "description": "Câu chuyện lấy bối cảnh thời hiện đại, có khác một điều là những người có năng lực đặc biệt lại trở nên quá đỗi bình thường. Một cậu bé tên Midoriya Izuku tuy không có năng lực gì nhưng cậu vẫn mơ ước...",
        "detail": {
            "author": "HORIKOSHI Kouhei",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-353/856303",
                    "name": "Chapter 353"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-352/854289",
                    "name": "Chapter 352"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-351/847587",
                    "name": "Chapter 351"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-350/844924",
                    "name": "Chapter 350"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-349/839291",
                    "name": "Chapter 349"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-348/835871",
                    "name": "Chapter 348"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-347/834039",
                    "name": "Chapter 347"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-346/831442",
                    "name": "Chapter 346"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-345/828210",
                    "name": "Chapter 345"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-344/825928",
                    "name": "Chapter 344"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-343/824440",
                    "name": "Chapter 343"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-342/821222",
                    "name": "Chapter 342"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-341/817534",
                    "name": "Chapter 341"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-340/817533",
                    "name": "Chapter 340"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-339/817532",
                    "name": "Chapter 339"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-338/817531",
                    "name": "Chapter 338"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-337/801292",
                    "name": "Chapter 337"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-336/801291",
                    "name": "Chapter 336"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-335/795852",
                    "name": "Chapter 335"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-334/795327",
                    "name": "Chapter 334"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-333/795326",
                    "name": "Chapter 333"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-332/795325",
                    "name": "Chapter 332"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-331/795324",
                    "name": "Chapter 331"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-330/795323",
                    "name": "Chapter 330"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-329/775534",
                    "name": "Chapter 329"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-328/772828",
                    "name": "Chapter 328"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-327/770642",
                    "name": "Chapter 327"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-326/767734",
                    "name": "Chapter 326"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-325/761838",
                    "name": "Chapter 325"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-324/759051",
                    "name": "Chapter 324"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-323/759224",
                    "name": "Chapter 323"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-322/759223",
                    "name": "Chapter 322"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-321.5/759222",
                    "name": "Chapter 321.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-321/759221",
                    "name": "Chapter 321"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-320/759220",
                    "name": "Chapter 320"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-319/735137",
                    "name": "Chapter 319"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-318/730718",
                    "name": "Chapter 318"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-317/727401",
                    "name": "Chapter 317"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-316/725550",
                    "name": "Chapter 316"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-315/723292",
                    "name": "Chapter 315"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-314/723279",
                    "name": "Chapter 314"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-313/719796",
                    "name": "Chapter 313"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-312/719795",
                    "name": "Chapter 312"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-311/719794",
                    "name": "Chapter 311"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-310/719793",
                    "name": "Chapter 310"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-309/719792",
                    "name": "Chapter 309"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-308/719791",
                    "name": "Chapter 308"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-307/719790",
                    "name": "Chapter 307"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-306/719789",
                    "name": "Chapter 306"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-305/715080",
                    "name": "Chapter 305"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-304/715079",
                    "name": "Chapter 304"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-303/692786",
                    "name": "Chapter 303"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-302/689408",
                    "name": "Chapter 302"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-301/687588",
                    "name": "Chapter 301"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-300/687454",
                    "name": "Chapter 300"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-299/684609",
                    "name": "Chapter 299"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-298/683021",
                    "name": "Chapter 298"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-297/683020",
                    "name": "Chapter 297"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-296/674018",
                    "name": "Chapter 296"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-295/672653",
                    "name": "Chapter 295"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-294/668250",
                    "name": "Chapter 294"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-293/668127",
                    "name": "Chapter 293"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-292/663623",
                    "name": "Chapter 292"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-291/660128",
                    "name": "Chapter 291"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-290/658083",
                    "name": "Chapter 290"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-289/655331",
                    "name": "Chapter 289"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-288/646818",
                    "name": "Chapter 288"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-287/646124",
                    "name": "Chapter 287"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-286/644044",
                    "name": "Chapter 286"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-285/643435",
                    "name": "Chapter 285"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-284/638540",
                    "name": "Chapter 284"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-283/634896",
                    "name": "Chapter 283"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-282/633278",
                    "name": "Chapter 282"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-281/632071",
                    "name": "Chapter 281"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-280/629333",
                    "name": "Chapter 280"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-279/622312",
                    "name": "Chapter 279"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-278/613004",
                    "name": "Chapter 278"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-277/602025",
                    "name": "Chapter 277"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-276/602024",
                    "name": "Chapter 276"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-275/589350",
                    "name": "Chapter 275"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-274/589349",
                    "name": "Chapter 274"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-273/577129",
                    "name": "Chapter 273"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-272/572720",
                    "name": "Chapter 272"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-271/570320",
                    "name": "Chapter 271"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-270/567205",
                    "name": "Chapter 270"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-269/561623",
                    "name": "Chapter 269"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-268/556950",
                    "name": "Chapter 268"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-267/554818",
                    "name": "Chapter 267"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-266/553727",
                    "name": "Chapter 266"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-265/551229",
                    "name": "Chapter 265"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-264/548942",
                    "name": "Chapter 264"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-263/546694",
                    "name": "Chapter 263"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-262/544813",
                    "name": "Chapter 262"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-261/541521",
                    "name": "Chapter 261"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-260/539401",
                    "name": "Chapter 260"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-259/538094",
                    "name": "Chapter 259"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-258/538093",
                    "name": "Chapter 258"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-257/535192",
                    "name": "Chapter 257"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-256/532293",
                    "name": "Chapter 256"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-255/528807",
                    "name": "Chapter 255"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-254/527277",
                    "name": "Chapter 254"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-253/525731",
                    "name": "Chapter 253"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-252/523811",
                    "name": "Chapter 252"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-251/522078",
                    "name": "Chapter 251"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-250/520671",
                    "name": "Chapter 250"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-249/519016",
                    "name": "Chapter 249"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-248/515927",
                    "name": "Chapter 248"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-247/514959",
                    "name": "Chapter 247"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-246/512212",
                    "name": "Chapter 246"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-245/510531",
                    "name": "Chapter 245"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-244/508504",
                    "name": "Chapter 244"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-243/505329",
                    "name": "Chapter 243"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-242/503089",
                    "name": "Chapter 242"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-241/501141",
                    "name": "Chapter 241"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-240/497851",
                    "name": "Chapter 240"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-239/496476",
                    "name": "Chapter 239"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-238/492233",
                    "name": "Chapter 238"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-237/489455",
                    "name": "Chapter 237"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-236/487367",
                    "name": "Chapter 236"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-235/486303",
                    "name": "Chapter 235"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-234/483394",
                    "name": "Chapter 234"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-233/479563",
                    "name": "Chapter 233"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-232/478017",
                    "name": "Chapter 232"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-231/476127",
                    "name": "Chapter 231"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-230/473340",
                    "name": "Chapter 230"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-229/471670",
                    "name": "Chapter 229"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-228/470054",
                    "name": "Chapter 228: Trái tim bị tổn thương"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-227/466596",
                    "name": "Chapter 227"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-226/462031",
                    "name": "Chapter 226"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-225/460506",
                    "name": "Chapter 225"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-224/459011",
                    "name": "Chapter 224"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-223/457133",
                    "name": "Chapter 223: Con gián"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-222/455639",
                    "name": "Chapter 222: Tomura Shigaraki lạc lối"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-221/453584",
                    "name": "Chapter 221"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-220/451750",
                    "name": "Chapter 220"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-219/449850",
                    "name": "Chapter 219"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-218/448420",
                    "name": "Chapter 218"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-217/444961",
                    "name": "Chapter 217"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-216/442619",
                    "name": "Chapter 216: Khép lại ván đấu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-215/440792",
                    "name": "Chapter 215"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-214/439364",
                    "name": "Chapter 214"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-213/437120",
                    "name": "Chapter 213"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-212/431825",
                    "name": "Chapter 212"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-211/429238",
                    "name": "Chapter 211"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-210/427741",
                    "name": "Chapter 210: Giấc mơ về One For All"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-209/425735",
                    "name": "Chapter 209"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-208/424329",
                    "name": "Chapter 208"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-207/422725",
                    "name": "Chapter 207"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-206/420869",
                    "name": "Chapter 206"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-205/419200",
                    "name": "Chapter 205: Bước ngoặt"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-204/417402",
                    "name": "Chapter 204: Điều chỉnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-203/414424",
                    "name": "Chapter 203"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-202/411555",
                    "name": "Chapter 202"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-201/409910",
                    "name": "Chapter 201"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-200/408903",
                    "name": "Chapter 200"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-199/407416",
                    "name": "Chapter 199"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-198/406138",
                    "name": "Chapter 198"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-197/405059",
                    "name": "Chapter 197"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-196/403768",
                    "name": "Chapter 196"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-195/402444",
                    "name": "Chapter 195"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-194/401206",
                    "name": "Chapter 194: Mùa đông tại Cao trung U.A"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-193/397920",
                    "name": "Chapter 193"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-192/396312",
                    "name": "Chapter 192"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-191/394824",
                    "name": "Chapter 191: Dabi - Hawks - Endeavor"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-190/392741",
                    "name": "Chapter 190"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-189/390297",
                    "name": "Chapter 189: Lý do để tiếp tục chiến đấu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-188/388644",
                    "name": "Chapter 188"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-187/387433",
                    "name": "Chapter 187"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-186/385936",
                    "name": "Chapter 186"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-185/384705",
                    "name": "Chapter 185"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-184/383270",
                    "name": "Chapter 184"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-183/382022",
                    "name": "Chapter 183"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-182/380947",
                    "name": "Chapter 182"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-181/378843",
                    "name": "Chapter 181"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-180/377677",
                    "name": "Chapter 180"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-179/376494",
                    "name": "Chapter 179"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-178/375502",
                    "name": "Chapter 178"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-177/374558",
                    "name": "Chapter 177"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-176/373644",
                    "name": "Chapter 176"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-175/372642",
                    "name": "Chapter 175"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-174/371820",
                    "name": "Chapter 174"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-173/370549",
                    "name": "Chapter 173"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-172/369322",
                    "name": "Chapter 172"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-171/369321",
                    "name": "Chapter 171"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-170/369320",
                    "name": "Chapter 170"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-169/369319",
                    "name": "Chapter 169"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-168/369318",
                    "name": "Chapter 168"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-167/369317",
                    "name": "Chapter 167"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-166/369316",
                    "name": "Chapter 166"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-165/369315",
                    "name": "Chapter 165"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-164/369314",
                    "name": "Chapter 164"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-163/369313",
                    "name": "Chapter 163"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-162/369312",
                    "name": "Chapter 162"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-161/369311",
                    "name": "Chapter 161"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-160/369310",
                    "name": "Chapter 160"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-159/369309",
                    "name": "Chapter 159"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-158/369308",
                    "name": "Chapter 158"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-157/369307",
                    "name": "Chapter 157"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-156/369306",
                    "name": "Chapter 156"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-155/369305",
                    "name": "Chapter 155"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-154/369266",
                    "name": "Chapter 154"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-153/369257",
                    "name": "Chapter 153"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-152/369256",
                    "name": "Chapter 152"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-151/369255",
                    "name": "Chapter 151"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-150/369254",
                    "name": "Chapter 150"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-149/369253",
                    "name": "Chapter 149"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-148/369252",
                    "name": "Chapter 148"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-147/364852",
                    "name": "Chapter 147"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-146/362460",
                    "name": "Chapter 146"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-145/362459",
                    "name": "Chapter 145"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-144/362458",
                    "name": "Chapter 144"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-143/362457",
                    "name": "Chapter 143"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-142/358183",
                    "name": "Chapter 142"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-141/358182",
                    "name": "Chapter 141"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-140/356522",
                    "name": "Chapter 140"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-139/356521",
                    "name": "Chapter 139"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-138/356520",
                    "name": "Chapter 138"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-137/356519",
                    "name": "Chapter 137"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-136/349068",
                    "name": "Chapter 136"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-135/349067",
                    "name": "Chapter 135"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-134/349066",
                    "name": "Chapter 134"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-133/349065",
                    "name": "Chapter 133"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-132/346983",
                    "name": "Chapter 132"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-131/346421",
                    "name": "Chapter 131"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-130/345442",
                    "name": "Chapter 130"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-129/345097",
                    "name": "Chapter 129"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-128/345096",
                    "name": "Chapter 128"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-127/344964",
                    "name": "Chapter 127"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-126/343243",
                    "name": "Chapter 126"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-125/342700",
                    "name": "Chapter 125"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-124/341440",
                    "name": "Chapter 124"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-123/341435",
                    "name": "Chapter 123"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-122/341459",
                    "name": "Chapter 122"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-121/341439",
                    "name": "Chapter 121"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-120/335386",
                    "name": "Chapter 120"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-119/328852",
                    "name": "Chapter 119"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-118/328851",
                    "name": "Chapter 118"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-117/328042",
                    "name": "Chapter 117: - Là về năng lực của mày đấy thằng đần"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-116/328041",
                    "name": "Chapter 116: - Lời chào từ Tatarus"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-115/326125",
                    "name": "Chapter 115"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-114/325655",
                    "name": "Chapter 114"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-113/325654",
                    "name": "Chapter 113"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-112/324985",
                    "name": "Chapter 112"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-111/323142",
                    "name": "Chapter 111"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-110/323141",
                    "name": "Chapter 110"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-109/323140",
                    "name": "Chapter 109"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-108/320932",
                    "name": "Chapter 108"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-107/318385",
                    "name": "Chapter 107"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-106/318384",
                    "name": "Chapter 106"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-105/312532",
                    "name": "Chapter 105"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-104/311206",
                    "name": "Chapter 104"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-103/309477",
                    "name": "Chapter 103"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-102/300453",
                    "name": "Chapter 102"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-101/297711",
                    "name": "Chapter 101"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-100/294728",
                    "name": "Chapter 100"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-99/291237",
                    "name": "Chapter 99"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-98/289680",
                    "name": "Chapter 98"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-97/284304",
                    "name": "Chapter 97"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-96/275931",
                    "name": "Chapter 96"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-95/275281",
                    "name": "Chapter 95"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-94/275280",
                    "name": "Chapter 94"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-93/275279",
                    "name": "Chapter 93"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-92/275277",
                    "name": "Chapter 92"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-91/275276",
                    "name": "Chapter 91"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-90/275275",
                    "name": "Chapter 90"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-89/275271",
                    "name": "Chapter 89"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-88/275270",
                    "name": "Chapter 88"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-87/273616",
                    "name": "Chapter 87"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-86/273440",
                    "name": "Chapter 86"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-85/270548",
                    "name": "Chapter 85"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-84.5/265496",
                    "name": "Chapter 84.5: Omake"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-84/261657",
                    "name": "Chapter 84"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-83/259200",
                    "name": "Chapter 83"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-82/250212",
                    "name": "Chapter 82"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-81/250206",
                    "name": "Chapter 81"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-80/250205",
                    "name": "Chapter 80"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-79/250203",
                    "name": "Chapter 79"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-78/248456",
                    "name": "Chapter 78"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-77/248455",
                    "name": "Chapter 77"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-76/246890",
                    "name": "Chapter 76"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-75/243670",
                    "name": "Chapter 75"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-74/233836",
                    "name": "Chapter 74"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-73/231334",
                    "name": "Chapter 73"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-72/229222",
                    "name": "Chapter 72"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-71/229221",
                    "name": "Chapter 71"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-70/229220",
                    "name": "Chapter 70"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-69/229219",
                    "name": "Chapter 69"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-68/229218",
                    "name": "Chapter 68"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-67/227314",
                    "name": "Chapter 67"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-66/224170",
                    "name": "Chapter 66"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-65/222846",
                    "name": "Chapter 65"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-64/222831",
                    "name": "Chapter 64"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-63/222818",
                    "name": "Chapter 63"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-62/222817",
                    "name": "Chapter 62"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-61/221599",
                    "name": "Chapter 61"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-60/221598",
                    "name": "Chapter 60"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-59/219439",
                    "name": "Chapter 59"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-58/218859",
                    "name": "Chapter 58"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-57/218087",
                    "name": "Chapter 57"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-56/217756",
                    "name": "Chapter 56"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-55/217705",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-54/217704",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-53/214333",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-52/214042",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-51/208874",
                    "name": "Chapter 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-50/208873",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-49/206362",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-48/205743",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-47/284604",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-46/204201",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-45/197570",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-44/197569",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-43/191085",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-42/188401",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-41/188400",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-40/183032",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-39/183031",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-38/183030",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-37/178871",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-36/178835",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-35/178834",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-34/178833",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-33/178832",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-32/178831",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-31/178830",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-30/178829",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-29/178828",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-28/178827",
                    "name": "Chapter 28"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-27/178826",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-26/178825",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-25/178824",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-24/178823",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-23/178822",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-22/178821",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-21/178820",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-20/178819",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-19/178818",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-18/178817",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-17/178816",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-16/178815",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-15/178814",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-14/178813",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-13/178812",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-12/178811",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-11/178810",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-10/178809",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-9/178808",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-8/178807",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-7/178806",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-6/178805",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-5/178804",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung/chap-4/178803",
                    "name": "Chapter 4"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Trường Học Siêu Anh Hùng/Chapter 3",
                    "name": "Chapter 3"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Trường Học Siêu Anh Hùng/Chapter 2",
                    "name": "Chapter 2"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Trường Học Siêu Anh Hùng/Chapter 1",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Manga",
                "Shounen",
                "Supernatural"
            ],
            "image": "//st.nettruyenco.com/data/comics/182/truong-hoc-sieu-anh-hung.jpg",
            "status": "Đang tiến hành",
            "title": "Trường Học Siêu Anh Hùng"
        },
        "image": "//st.nettruyenco.com/data/comics/182/truong-hoc-sieu-anh-hung.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/truong-hoc-sieu-anh-hung-93980",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "My Hero Academia; Boku no Hero Academia",
            "status": "Action, Adventure, Comedy, Manga, Shounen, Supernatural",
            "subscriber": "35.343.267",
            "update_time": "7.762",
            "view": "HORIKOSHI Kouhei"
        },
        "title": "Trường Học Siêu Anh Hùng"
    },
    {
        "comment": [
            {
                "id": "JwRnF0HUekQowbkgDIsyDjUYAL53",
                "noidung": "truyen nay hay ko",
                "tenuser": "newname"
            },
            {
                "id": "JwRnF0HUekQowbkgDIsyDjUYAL53",
                "noidung": "dd",
                "tenuser": "newname"
            }
        ],
        "description": "Một chiếc tàu chở khách chở một nhóm học sinh trung học trong chuyến đi tham quan du lịch thì đi bị đắm khi gặp bão. Họ trôi dạt vào một hòn đảo không nằm trong bản đồ - Những người sống ở đó sử dụng thứ ngôn ngữ kì lạ, nền văn hóa man rợ được gọi là đảo \"Shimabito\". Nhóm học sinh những tưởng là đảo có người nên sẽ an toàn. Tuy nhiên, ngay sau đó, những người Shimabito đã bóc cóc giam cầm nhóm học sinh! Trong tình huống khắc nghiệt mà ngay cả nước uống cũng không đủ, áp lực từ sự man rợ của đám người Shimabito, các chàng trai và cô gái đang dần dần bộc lộ bản năng của mình. Khi những chuẩn mực đạo đức đều mất đi, họ vẫn sẽ là con người – hay sẽ trở nên như những con thú?",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-145/834978",
                    "name": "Chapter 145"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-144/831880",
                    "name": "Chapter 144"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-143/830518",
                    "name": "Chapter 143"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-142/829927",
                    "name": "Chapter 142"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-141/826115",
                    "name": "Chapter 141"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-140/825501",
                    "name": "Chapter 140"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-139/822639",
                    "name": "Chapter 139"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-138/821982",
                    "name": "Chapter 138"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-137/821102",
                    "name": "Chapter 137"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-136/820667",
                    "name": "Chapter 136"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-135/820021",
                    "name": "Chapter 135"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-134/819628",
                    "name": "Chapter 134"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-133/819139",
                    "name": "Chapter 133"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-132/818190",
                    "name": "Chapter 132"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-131/817432",
                    "name": "Chapter 131"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-130/816745",
                    "name": "Chapter 130"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-129/815562",
                    "name": "Chapter 129"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-128/809569",
                    "name": "Chapter 128"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-127/807856",
                    "name": "Chapter 127"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-126/807034",
                    "name": "Chapter 126"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-125/805912",
                    "name": "Chapter 125"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-124/801298",
                    "name": "Chapter 124"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-123/800544",
                    "name": "Chapter 123"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-122/794949",
                    "name": "Chapter 122"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-121/792662",
                    "name": "Chapter 121"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-120/789431",
                    "name": "Chapter 120"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-119/784946",
                    "name": "Chapter 119"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-118/779504",
                    "name": "Chapter 118"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-117/773591",
                    "name": "Chapter 117"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-116/768725",
                    "name": "Chapter 116"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-115/765829",
                    "name": "Chapter 115"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-114/760751",
                    "name": "Chapter 114"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-113/755631",
                    "name": "Chapter 113"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-112/748728",
                    "name": "Chapter 112"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-111/745992",
                    "name": "Chapter 111"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-110/745242",
                    "name": "Chapter 110"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-109/744331",
                    "name": "Chapter 109"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-108/742687",
                    "name": "Chapter 108"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-107/740486",
                    "name": "Chapter 107"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-106/667500",
                    "name": "Chapter 106"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-105/658311",
                    "name": "Chapter 105"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-104/655439",
                    "name": "Chapter 104"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-103/654918",
                    "name": "Chapter 103"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-102/654374",
                    "name": "Chapter 102"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-101/653859",
                    "name": "Chapter 101"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-100/653395",
                    "name": "Chapter 100"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-99/651446",
                    "name": "Chapter 99"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-98/651032",
                    "name": "Chapter 98"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-97/650675",
                    "name": "Chapter 97"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-96/648970",
                    "name": "Chapter 96"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-95/644910",
                    "name": "Chapter 95"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-94/574653",
                    "name": "Chapter 94"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-93/573867",
                    "name": "Chapter 93"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-92/572711",
                    "name": "Chapter 92"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-91/565691",
                    "name": "Chapter 91"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-90/565291",
                    "name": "Chapter 90"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-89/561537",
                    "name": "Chapter 89"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-88/557089",
                    "name": "Chapter 88"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-87/556858",
                    "name": "Chapter 87"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-86/550857",
                    "name": "Chapter 86"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-85/550397",
                    "name": "Chapter 85"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-84/550110",
                    "name": "Chapter 84"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-83/548000",
                    "name": "Chapter 83"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-82/540015",
                    "name": "Chapter 82"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-81/539291",
                    "name": "Chapter 81"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-80/538902",
                    "name": "Chapter 80"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-79/538543",
                    "name": "Chapter 79"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-78/538326",
                    "name": "Chapter 78"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-77/537872",
                    "name": "Chapter 77"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-76/537686",
                    "name": "Chapter 76"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-75/537496",
                    "name": "Chapter 75"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-74/537347",
                    "name": "Chapter 74"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-73/537107",
                    "name": "Chapter 73"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-72/536954",
                    "name": "Chapter 72"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-71/536379",
                    "name": "Chapter 71: Fix"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-70/536054",
                    "name": "Chapter 70"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-69/535865",
                    "name": "Chapter 69"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-68/535504",
                    "name": "Chapter 68"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-67/535322",
                    "name": "Chapter 67"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-66/535145",
                    "name": "Chapter 66"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-65/534993",
                    "name": "Chapter 65"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-64/533721",
                    "name": "Chapter 64"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-63/533490",
                    "name": "Chapter 63"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-62/533251",
                    "name": "Chapter 62"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-61/533026",
                    "name": "Chapter 61"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-60/532786",
                    "name": "Chapter 60"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-59/532621",
                    "name": "Chapter 59"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-58/531792",
                    "name": "Chapter 58"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-57/531586",
                    "name": "Chapter 57"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-56/530687",
                    "name": "Chapter 56"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-55/529951",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-54/529211",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-53/528420",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-52/527890",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-37/501882",
                    "name": "Chapter 37: - Chap 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-36/500193",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-35/497652",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-34/497022",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-33/496244",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-32/494774",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-31/493680",
                    "name": "Chapter 31: Niềm Vui Được Sống"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-30/493087",
                    "name": "Chapter 30: Tiếp Tế Cho Sự Sống"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-29/491552",
                    "name": "Chapter 29: Thân Phận Người Đã Chết"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-28/490004",
                    "name": "Chapter 28: Bước Vào Vùng Tối"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-27/489358",
                    "name": "Chapter 27: Còn Sống Thì Còn Đấu Tranh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-26/488817",
                    "name": "Chapter 26: Tôi Không Muốn Tương Lai Đó"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-25/488215",
                    "name": "Chapter 25: Đêm Đầu Tiên Của Tân Nương"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-24/487639",
                    "name": "Chapter 24: Ngã Rẽ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-23/487392",
                    "name": "Chapter 23: Nơi Nào Có Ý Chí, Nơi Đó Có Lối Đi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-22/486171",
                    "name": "Chapter 22: Không Thể Đánh Gục"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-21/484298",
                    "name": "Chapter 21: Đột Phá Vòng Vây"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-20/483894",
                    "name": "Chapter 20: Cơn Bão"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-19/483640",
                    "name": "Chapter 19: TIếp Cận Kẻ Thù"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-18/482790",
                    "name": "Chapter 18: Lệ Hoen Bờ Mi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-17/482228",
                    "name": "Chapter 17: Công Chúa Bị Giam Giữ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-16/481955",
                    "name": "Chapter 16: Vật Tế"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-15/481437",
                    "name": "Chapter 15: Lợi Ích Và Mất Mát"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-14.5/481148",
                    "name": "Chapter 14.5: Extra Đêm Trước Buổi Hiến Tế"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-14/480649",
                    "name": "Chapter 14: Cơn Khát"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-13/479622",
                    "name": "Chapter 13: Người Sẽ Lãnh Đạo Chúng Ta"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-12/479618",
                    "name": "Chapter 12: Người Sống Sót"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-11/475913",
                    "name": "Chapter 11: Ánh Sáng Tức Thì"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-10/473405",
                    "name": "Chapter 10: Hơi Thở Của Người Sống Sót"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-9/473207",
                    "name": "Chapter 9: Con Thuyền Bị Vỡ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-8/463626",
                    "name": "Chapter 8: Nắm Lấy Sinh Mệnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-7/463164",
                    "name": "Chapter 7: Hy Vọng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-6/461072",
                    "name": "Chapter 6: Nguy Hiểm Cận Kề"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-5/457486",
                    "name": "Chapter 5: Nghi Lễ Trong Bóng Tối"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc/chap-4/456666",
                    "name": "Chapter 4: Tuyệt Vọng"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Đảo Chết Chóc/Chapter 3 Ác Mộng Bắt Đầu",
                    "name": "Chapter 3: Ác Mộng Bắt Đầu"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Đảo Chết Chóc/Chapter 2 Lạc Vào Hoang Đảo",
                    "name": "Chapter 2: Lạc Vào Hoang Đảo"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Đảo Chết Chóc/Chapter 1 Đêm Hè Tang Thương",
                    "name": "Chapter 1: Đêm Hè Tang Thương"
                }
            ],
            "genres": [
                "Horror",
                "Manga",
                "Psychological",
                "School Life",
                "Tragedy"
            ],
            "image": "//st.nettruyenco.com/data/comics/152/dao-chet-choc.jpg",
            "status": "Đang tiến hành",
            "title": "Đảo Chết Chóc"
        },
        "image": "//st.nettruyenco.com/data/comics/152/dao-chet-choc.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/dao-chet-choc-211440",
        "message_main": {
            "comment": "12.347.937",
            "genres": "Ingoshima",
            "status": "Horror, Manga, Psychological, School Life, Tragedy",
            "subscriber": "3.559",
            "update_time": "24.214",
            "view": "Đang tiến hành"
        },
        "title": "Đảo Chết Chóc"
    },
    {
        "description": "Có một yếu tố đó là, cho đến nay, chưa bao giờ được thực hiện bằng VRMMOs và được coi là một bất khả thi kỹ thuật, lan rộng ra trên toàn thế giới, trở thành một hit lớn trong chớp mắt. Một năm rưỡi đã trôi qua kể từ khi ra mắt chương trình . Một thanh niên tên Mukudori Reiji đã hoàn thành kỳ thi vào đại học của mình và bắt đầu sống một mình ở Tokyo. Để kỷ niệm ngày kết thúc thời gian học tập dài như vậy, sau khi được anh trai của anh ấy mời từ lâu, cuối cùng anh ấy đã bắt đầu chơi game. Đây là một câu chuyện nơi ranh giới giữa game và thực tế là bị mờ. Và cũng có thể, một câu chuyện về những hồi tưởng.",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/infinite-dendrogram/chap-8/548075",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/infinite-dendrogram/chap-7/407850",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/infinite-dendrogram/chap-6/400159",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/infinite-dendrogram/chap-5/400146",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/infinite-dendrogram/chap-4/400122",
                    "name": "Chapter 4"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Infinite Dendrogram/Chapter 3",
                    "name": "Chapter 3"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Infinite Dendrogram/Chapter 2",
                    "name": "Chapter 2"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Infinite Dendrogram/Chapter 1",
                    "name": "Chapter 1"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Infinite Dendrogram/Chapter 0",
                    "name": "Chapter 0"
                }
            ],
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Fantasy",
                "Manga",
                "Romance"
            ],
            "image": "//st.nettruyenco.com/data/comics/6/infinite-dendrogram.jpg",
            "status": "Đang tiến hành",
            "title": "Infinite Dendrogram"
        },
        "image": "//st.nettruyenco.com/data/comics/6/infinite-dendrogram.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/infinite-dendrogram-179260",
        "message_main": {
            "comment": "97",
            "genres": "Action, Adventure, Comedy, Fantasy, Manga, Romance",
            "status": "Đang tiến hành",
            "subscriber": "1.953",
            "update_time": "6 giờ trước",
            "view": "130.484"
        },
        "title": "Infinite Dendrogram"
    },
    {
        "description": "Hậu truyện của Helck Manga. Kể về một anh chàng lính đánh thuê đen đủi muốn một cuộc sống yên bình, nhưng số phận của anh lại nói không",
        "detail": {
            "author": "Nanao Nanaki",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-21/856918",
                    "name": "Chapter 21: Tập kích"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-20/856917",
                    "name": "Chapter 20: Chuẩn bị"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-19/856916",
                    "name": "Chapter 19: Ngôi nhà của chúng ta"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-18.2/856080",
                    "name": "Chapter 18.2: Ảo ảnh (2)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-18.1/855848",
                    "name": "Chapter 18.1: Ảo ảnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-17.2/855251",
                    "name": "Chapter 17.2: Tân Đế Mundima (2)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-17.1/855065",
                    "name": "Chapter 17.1: Tân Đế Mundima (1)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-16/855064",
                    "name": "Chapter 16: Sự tích về vương quốc Finn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-15/852155",
                    "name": "Chapter 15: Shopping"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-14/851342",
                    "name": "Chapter 14: Thủ lĩnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-13.3/850743",
                    "name": "Chapter 13.3: Varka (3)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-13.2/841892",
                    "name": "Chapter 13.2: Varka (2)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-13.1/841891",
                    "name": "Chapter 13.1: Varka (1)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-13/841361",
                    "name": "Chapter 13: Varka (1)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-12/841360",
                    "name": "Chapter 12: Nhà thực vật học"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-11/841359",
                    "name": "Chapter 11: Sức mạnh mới"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-10/841358",
                    "name": "Chapter 10: Cách sống"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-9/841357",
                    "name": "Chapter 9: Lo lắng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-8.5/841356",
                    "name": "Chapter 8.5: Tôi muốn ăn gì đó thật ngọt ngào!"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-8/841355",
                    "name": "Chapter 8: Kị sĩ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-7/841354",
                    "name": "Chapter 7: Đầu tư"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-6/841353",
                    "name": "Chapter 6: Kẻ báo thù"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-5/841352",
                    "name": "Chapter 5: Hỏa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-4.5/841351",
                    "name": "Chapter 4.5: Lôi quỷ kiếm sĩ (Phần 2)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-4/841350",
                    "name": "Chapter 4: Lôi quỷ kiếm sĩ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-3/841349",
                    "name": "Chapter 3: Tửu quán"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem/chap-2/841348",
                    "name": "Chapter 2: Nguồn nước"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Verndio  Sử thi về mộng kiếm/Chapter 1 Mộng kiếm",
                    "name": "Chapter 1: Mộng kiếm"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Verndio  Sử thi về mộng kiếm/Chapter 0.1 Sơ lược nhân vật",
                    "name": "Chapter 0.1: Sơ lược nhân vật"
                },
                {
                    "link": "gs://apptruyentranh-8117b.appspot.com/Verndio  Sử thi về mộng kiếm/Chapter 0 Phần mở đầu",
                    "name": "Chapter 0: Phần mở đầu"
                }
            ],
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Fantasy",
                "Manga",
                "Shounen"
            ],
            "image": "//st.nettruyenco.com/data/comics/196/verndio-su-thi-ve-mong-kiem.jpg",
            "status": "Đang tiến hành",
            "title": "Verndio - Sử thi về mộng kiếm"
        },
        "image": "//st.nettruyenco.com/data/comics/196/verndio-su-thi-ve-mong-kiem.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/verndio-su-thi-ve-mong-kiem-60612",
        "message_main": {
            "comment": "172.002",
            "genres": "Action, Adventure, Comedy, Drama, Fantasy, Manga, Shounen",
            "status": "Nanao Nanaki",
            "subscriber": "180",
            "update_time": "3.826",
            "view": "Đang tiến hành"
        },
        "title": "Verndio - Sử thi về mộng kiếm"
    },
    {
        "description": "Haru-kun cùng mẹ chuyển đến sinh sống tại một thị trấn mới. Nhưng rồi một ngày, mẹ cậu đột nhiên bị teo nhỏ thành một cô bé cùng tuổi với cậu",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-16/847048",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-15/844978",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-14/831754",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-13/829672",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-12/795527",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-11/771108",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-10.5/741619",
                    "name": "Chapter 10.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-10/676255",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-9/517130",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-8.5/517100",
                    "name": "Chapter 8.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-8/500091",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-7/486302",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-6.5/473447",
                    "name": "Chapter 6.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-6/473446",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-5/458969",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-4/438510",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-3/434361",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-2/420396",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old/chap-1/420395",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Manga",
                "School Life",
                "Seinen",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/104/my-mother-is-10-years-old.jpg",
            "status": "Đang tiến hành",
            "title": "My Mother Is 10 Years Old"
        },
        "image": "//st.nettruyenco.com/data/comics/104/my-mother-is-10-years-old.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/my-mother-is-10-years-old-200720",
        "message_main": {
            "comment": "137.842",
            "genres": "okaa-san (10-sai) to Boku",
            "status": "Comedy, Manga, School Life, Seinen, Slice of Life",
            "subscriber": "189",
            "update_time": "2.245",
            "view": "Đang tiến hành"
        },
        "title": "My Mother Is 10 Years Old"
    },
    {
        "description": "Đôi bạn thân You và Tsuki chuyển lên Tokyo để trở thành diễn viên hài. Họ sống chung trong một căn hộ rộng 6 tấm tatami. Dù họ chỉ có 500 yên tiền ăn, nhưng cùng nhau họ vẫn có thể biến nó thành tiếng cười! Câu chuyện về giấc mơ lớn và cuộc sống cực kỳ khiêm tốn được bắt đầu từ đây!!",
        "detail": {
            "author": "Sei Fukui",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-15/861564",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-14/855719",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-13/851753",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-12/850943",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-11/850732",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-10/847517",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-9/846621",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-8/846480",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-7/846181",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-6/845239",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-5/844990",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-4/844838",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-3/844837",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-2/844836",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi/chap-1/844835",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Manga",
                "Shounen",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/151/kakeau-tsukihi.jpg",
            "status": "Đang tiến hành",
            "title": "Kakeau Tsukihi"
        },
        "image": "//st.nettruyenco.com/data/comics/151/kakeau-tsukihi.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/kakeau-tsukihi-61079",
        "message_main": {
            "comment": "21.030",
            "genres": "Comedy, Manga, Shounen, Slice of Life",
            "status": "Sei Fukui",
            "subscriber": "114",
            "update_time": "1.342",
            "view": "Đang tiến hành"
        },
        "title": "Kakeau Tsukihi"
    },
    {
        "description": "Con người gặp khó khăn trong việc tìm kiếm thức ăn, trong khi rác thải ra lại quá nhiều. Do đó các nhà khoa học đã chế tạo 1 sinh vật- 1 cỗ máy sinh học sống bằng cách ăn rác thải và sau đó sẽ bị giết làm nguồn cung cấp thức ăn cho con người. Nhưng mọi chuyện đã vượt ngoài tầm kiểm soát ở Tokyo...",
        "detail": {
            "author": "Fujisawa Yuki",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-104/861803",
                    "name": "Chapter 104"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-103/861802",
                    "name": "Chapter 103"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-102/861563",
                    "name": "Chapter 102"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-101/861490",
                    "name": "Chapter 101"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-100/861248",
                    "name": "Chapter 100"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-99/860557",
                    "name": "Chapter 99"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-98/856531",
                    "name": "Chapter 98"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-97/856001",
                    "name": "Chapter 97"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-96/855806",
                    "name": "Chapter 96"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-95/855527",
                    "name": "Chapter 95"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-94/854918",
                    "name": "Chapter 94"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-93/854436",
                    "name": "Chapter 93"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-92/853611",
                    "name": "Chapter 92"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-91/852558",
                    "name": "Chapter 91"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-90/852557",
                    "name": "Chapter 90"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-89/852349",
                    "name": "Chapter 89"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-88/852094",
                    "name": "Chapter 88"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-87/851717",
                    "name": "Chapter 87"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-86/851573",
                    "name": "Chapter 86"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-85/851239",
                    "name": "Chapter 85"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-84/850971",
                    "name": "Chapter 84"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-83/850690",
                    "name": "Chapter 83"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-82/850689",
                    "name": "Chapter 82"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-81/850387",
                    "name": "Chapter 81"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-80/850386",
                    "name": "Chapter 80"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-79/849981",
                    "name": "Chapter 79"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-78/849662",
                    "name": "Chapter 78"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-77/404262",
                    "name": "Chapter 77"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-76/404261",
                    "name": "Chapter 76"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-75/396055",
                    "name": "Chapter 75"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-74/361284",
                    "name": "Chapter 74"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-73/361283",
                    "name": "Chapter 73"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-72/263950",
                    "name": "Chapter 72"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-71/263949",
                    "name": "Chapter 71"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-70/263160",
                    "name": "Chapter 70"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-69/263059",
                    "name": "Chapter 69"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-68/108786",
                    "name": "Chapter 68"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-67/108785",
                    "name": "Chapter 67"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-66/108784",
                    "name": "Chapter 66"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-65/108783",
                    "name": "Chapter 65"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-64/108782",
                    "name": "Chapter 64"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-63/108781",
                    "name": "Chapter 63"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-62/108780",
                    "name": "Chapter 62"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-61/108779",
                    "name": "Chapter 61"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-60/108778",
                    "name": "Chapter 60"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-59/108777",
                    "name": "Chapter 59"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-58/108776",
                    "name": "Chapter 58"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-57.2/108775",
                    "name": "Chapter 57.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-57.1/108774",
                    "name": "Chapter 57.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-56/108773",
                    "name": "Chapter 56"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-55/108772",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-54/108771",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-53/108770",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-52/108769",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-51/108768",
                    "name": "Chapter 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-50/108767",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-49/108766",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-48/108765",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-47/108764",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-46/108763",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-45/108762",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-44/108761",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-43/108760",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-42/108759",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-41/108758",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-40/108757",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-39/108756",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-38/108755",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-37/108754",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-36/108753",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-35/108752",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-34/108751",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-33/20170",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-32/20167",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-31/20165",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-30/20163",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-29/20161",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-28/20159",
                    "name": "Chapter 28"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-27/108750",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-26/108749",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-25/108748",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-24/108747",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-23/108746",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-22/108745",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-21/108744",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-20/108743",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-19/108742",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-18/108741",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-17/20156",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-16/108740",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-15/108739",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-14/20154",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-13/20151",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-12/20147",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-11/20143",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-10/20141",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-9/20137",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-8/20135",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-7/20133",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-6/20131",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-5/20128",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-4/20124",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-3/20122",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-2/20119",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar/chap-1/20116",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Action",
                "Adult",
                "Adventure",
                "Horror",
                "Manga"
            ],
            "image": "//st.nettruyenco.com/data/comics/137/bio-meat-nectar.jpg",
            "status": "Đang tiến hành",
            "title": "Bio-Meat: Nectar"
        },
        "image": "//st.nettruyenco.com/data/comics/137/bio-meat-nectar.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/bio-meat-nectar-16730",
        "message_main": {
            "comment": "950.003",
            "genres": "Action, Adult, Adventure, fi, Horror, Manga, Sci",
            "status": "Fujisawa Yuki",
            "subscriber": "144",
            "update_time": "2.485",
            "view": "Đang tiến hành"
        },
        "title": "Bio-Meat: Nectar"
    },
    {
        "description": "Akane, một nữ nhân viên văn phòng, cùng với em gái lẫn chú chó cưng của mình, đã bị triệu hồi sang thế giới khác. Liệu ở thế giới mới thì cô sẽ làm hài lòng những vị thực khách bằng những món ăn ở thế giới của mình chứ?Hãy cùng theo dõi bộ truyện để biết thêm nha",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-18.2/861552",
                    "name": "Chapter 18.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-18.1/861298",
                    "name": "Chapter 18.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-17.3/860916",
                    "name": "Chapter 17.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-17.2/860634",
                    "name": "Chapter 17.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-17.1/856555",
                    "name": "Chapter 17.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-16.5/856343",
                    "name": "Chapter 16.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-16.3/856342",
                    "name": "Chapter 16.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-16.2/856341",
                    "name": "Chapter 16.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-16.1/856078",
                    "name": "Chapter 16.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-15.3/855837",
                    "name": "Chapter 15.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-15.2/855836",
                    "name": "Chapter 15.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-15.1/855835",
                    "name": "Chapter 15.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-15/764500",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-14.2/761530",
                    "name": "Chapter 14.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-14/759549",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-13.2/719079",
                    "name": "Chapter 13.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-13/713256",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-12.2/711230",
                    "name": "Chapter 12.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-12/705726",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-11.2/700113",
                    "name": "Chapter 11.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-11/700112",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-10.2/700111",
                    "name": "Chapter 10.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-10/638890",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-9.2/697746",
                    "name": "Chapter 9.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-9/633731",
                    "name": "Chapter 9: - Quý ngài gắt gỏng, trứng ốp cua, canh rong biển"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-8.2/646325",
                    "name": "Chapter 8.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-8/557171",
                    "name": "Chapter 8: - Đậu tằm và lời mời đến thế giới mới"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-7.2/448744",
                    "name": "Chapter 7.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-7/445406",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-6.2/445197",
                    "name": "Chapter 6.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-6/445078",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-5.2/445038",
                    "name": "Chapter 5.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-5/444851",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-4.2/444741",
                    "name": "Chapter 4.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-4/444612",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-3.2/444577",
                    "name": "Chapter 3.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-3/444574",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-2.2/444562",
                    "name": "Chapter 2.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-2/444439",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-1.2/443409",
                    "name": "Chapter 1.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac/chap-1/443373",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Fantasy",
                "Manga",
                "Seinen",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/74/am-thuc-den-tu-the-gioi-khac.jpg",
            "status": "Đang tiến hành",
            "title": "Ẩm thực đến từ thế giới khác"
        },
        "image": "//st.nettruyenco.com/data/comics/74/am-thuc-den-tu-the-gioi-khac.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/am-thuc-den-tu-the-gioi-khac-210660",
        "message_main": {
            "comment": "690.119",
            "genres": "Isekai Omotenashi Gohan",
            "status": "Comedy, Fantasy, Manga, Seinen, Slice of Life",
            "subscriber": "217",
            "update_time": "7.203",
            "view": "Đang tiến hành"
        },
        "title": "Ẩm thực đến từ thế giới khác"
    },
    {
        "description": "Cô học sinh cấp 1 Hotaru Ichijou vừa chuyển nhà cùng bố mẹ từ Tokyo xuống vùng nông thôn. Giờ đây em phải làm quen với lớp học mới khi chỉ có 5 học sinh trong một lớp học với đủ cấp độ lớp khác nhau từ cấp 1 đến cấp 2. Hãy tham gia vào chuyến hành trình thường ngày tại vùng quê của họ.\nNhân lực:\nTrans: pHuC\nEdit: Eroger\nTheo luật 20 cmt một chap. Hãy ủng hộ Bridge Group thêm nhé!",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-24/856003",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-23/854032",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-22/851241",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-21/851240",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-20/846932",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-19/845093",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-18/844046",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-17.5/842856",
                    "name": "Chapter 17.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-17/842855",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-16/842854",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-15/842853",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-14/842852",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-13/842851",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-12/842850",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-11/842849",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-10/842848",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-9.5/842847",
                    "name": "Chapter 9.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-9/842846",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-8/842845",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-7/842844",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-6/842843",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-5/842842",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-4/842841",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-3/105697",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-2/105696",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay/chap-1/105695",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Anime",
                "Comedy",
                "Live action",
                "Manga",
                "School Life",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/167/cuoc-song-thuong-ngay.jpg",
            "status": "Đang tiến hành",
            "title": "Cuộc sống thường ngày"
        },
        "image": "//st.nettruyenco.com/data/comics/167/cuoc-song-thuong-ngay.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-song-thuong-ngay-52870",
        "message_main": {
            "comment": "53",
            "genres": "Anime, Comedy, Live action, Manga, School Life, Slice of Life",
            "status": "Đang tiến hành",
            "subscriber": "613",
            "update_time": "19 giờ trước",
            "view": "13.853"
        },
        "title": "Cuộc sống thường ngày"
    },
    {
        "description": "Truyện kể về 1 con mắm vụng về đi kiếm bạn.",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-84/853549",
                    "name": "Chapter 84"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-83/850715",
                    "name": "Chapter 83"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-82/848293",
                    "name": "Chapter 82"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-81/846304",
                    "name": "Chapter 81"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-80/846303",
                    "name": "Chapter 80"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-79/841403",
                    "name": "Chapter 79"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-78/835858",
                    "name": "Chapter 78"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-77/835857",
                    "name": "Chapter 77"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-76/828212",
                    "name": "Chapter 76"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-75/826157",
                    "name": "Chapter 75"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-74/822074",
                    "name": "Chapter 74"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-73/822073",
                    "name": "Chapter 73"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-72/816533",
                    "name": "Chapter 72"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-71/816532",
                    "name": "Chapter 71"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-70/816531",
                    "name": "Chapter 70"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-69/816530",
                    "name": "Chapter 69"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-68/816529",
                    "name": "Chapter 68"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-67/816528",
                    "name": "Chapter 67"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-66/816527",
                    "name": "Chapter 66"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-65/816526",
                    "name": "Chapter 65"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-64/816525",
                    "name": "Chapter 64"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-63/816524",
                    "name": "Chapter 63"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-62/816523",
                    "name": "Chapter 62"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-61/816522",
                    "name": "Chapter 61"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-60/816521",
                    "name": "Chapter 60"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-59/762033",
                    "name": "Chapter 59"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-58/755442",
                    "name": "Chapter 58"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-57/750803",
                    "name": "Chapter 57"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-56/746113",
                    "name": "Chapter 56"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-55/743290",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-54/740614",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-53/737564",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-52/733581",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-51/730823",
                    "name": "Chapter 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-50/729073",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-49/726987",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-48/724716",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-47/722623",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-46/720517",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-45/717857",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-44/715874",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-43/714168",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-42/711865",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-41/709816",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-40/707209",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-39/704410",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-38/701973",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-37/699075",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-36/696709",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-35/694691",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-34/691415",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-33/689587",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-32/687484",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-31/685420",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-30/684025",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-29/682264",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-28/680133",
                    "name": "Chapter 28"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-27/677793",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-26/673528",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-25/669704",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-24/665774",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-23/661172",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-22/657147",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-21/649776",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-20/638362",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-19/629520",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-18/622761",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-17/611193",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-16/593396",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-15/588389",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-14/569484",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-13.5/563398",
                    "name": "Chapter 13.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-13/552866",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-12/548041",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-11/544653",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-10/540545",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-9/537172",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-8/534658",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-7/533098",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-6/528203",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-5/525089",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-4/224455",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-3/224347",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-2/224346",
                    "name": "Chapter 2: ."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban/chap-1/191712",
                    "name": "Chapter 1: ."
                }
            ],
            "genres": [
                "Comedy",
                "Manga",
                "School Life",
                "Seinen",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/164/bocchi-di-kiem-ban.png",
            "status": "Đang tiến hành",
            "title": "Bocchi đi kiếm bạn"
        },
        "image": "//st.nettruyenco.com/data/comics/164/bocchi-di-kiem-ban.png",
        "link": "http://www.nettruyenco.com/truyen-tranh/bocchi-di-kiem-ban-98920",
        "message_main": {
            "comment": "89",
            "genres": "Comedy, Manga, School Life, Seinen, Slice of Life",
            "status": "Đang tiến hành",
            "subscriber": "1.930",
            "update_time": "19 giờ trước",
            "view": "156.842"
        },
        "title": "Bocchi đi kiếm bạn"
    },
    {
        "description": "Tái sinh với skill thẩm định và xây dựng lãnh thổ.",
        "detail": {
            "author": "Miraijin A",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-63/834247",
                    "name": "Chapter 63"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-62/820939",
                    "name": "Chapter 62"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-61/820820",
                    "name": "Chapter 61"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-60/820648",
                    "name": "Chapter 60"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-59/820018",
                    "name": "Chapter 59"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-58/819827",
                    "name": "Chapter 58"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-57/819627",
                    "name": "Chapter 57"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-56/819561",
                    "name": "Chapter 56"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-55/819331",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-54/813487",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-53/790799",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-52/781727",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-51/781508",
                    "name": "Chapter 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-50/780603",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-49/780376",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-48/769043",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-47/768854",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-46/768695",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-45/748689",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-44/748045",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-43/732498",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-42/730387",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-41/724684",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-40/722001",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-39/721760",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-38/721429",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-37/721205",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-36/721131",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-35/720729",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-34/720505",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-33/720350",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-32/720041",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-31/693942",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-30/688659",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-29/686565",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-28/684934",
                    "name": "Chapter 28"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-27/683245",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-26/681583",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-25/677191",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-24/673160",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-23/669252",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-22/667590",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-21/666452",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-20/662602",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-19/658545",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-18-1/655766",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-17/651384",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-16/649064",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-15/646696",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-14/645031",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-13-1/643014",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-12/638241",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-11/636189",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-10/636188",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-9/636187",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-8/636186",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-7/633103",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-6/627612",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-5/627611",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-4/627610",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-3/627419",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-2/627418",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal/chap-1/627417",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Adventure",
                "Fantasy",
                "Manga",
                "Shounen"
            ],
            "image": "//st.nettruyenco.com/data/comics/202/tai-sinh-thanh-quy-toc-voi-ki-nang-appra-1803.jpg",
            "status": "Đang tiến hành",
            "title": "Tái Sinh Thành Quý Tộc Với Kĩ Năng 'Appraisal'"
        },
        "image": "//st.nettruyenco.com/data/comics/202/tai-sinh-thanh-quy-toc-voi-ki-nang-appra-1803.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/tai-sinh-thanh-quy-toc-voi-ki-nang-appraisal-329700",
        "message_main": {
            "comment": "5.052.515",
            "genres": "Adventure, Fantasy, Manga, Shounen",
            "status": "Miraijin A",
            "subscriber": "2.094",
            "update_time": "37.916",
            "view": "Đang tiến hành"
        },
        "title": "Tái Sinh Thành Quý Tộc Với Kĩ Năng 'Appraisal'"
    },
    {
        "description": "Câu truyện tềnh yêu của hai bạn trẻ. một chàng trai bình thường và một cô gái bá đạo",
        "detail": {
            "author": "Iori",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-27/855121",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-26/833848",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-25/831172",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-24/819612",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-23/815788",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-22/809818",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-21/804304",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-20/801407",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-19/493676",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-18/493338",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-17/490881",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-16/489196",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-15/488474",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-14/487386",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-13/475875",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-12/459559",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-11/457742",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-10/451969",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-9/450065",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-8/405236",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-7/389016",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-6/384726",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-5/383973",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-4/383972",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-3/383971",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-2/383970",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot/chap-1/383969",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Manga",
                "Romance",
                "Shounen",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/135/ban-gai-toi-la-so-mot.jpg",
            "status": "Đang tiến hành",
            "title": "Bạn gái tôi là số một"
        },
        "image": "//st.nettruyenco.com/data/comics/135/ban-gai-toi-la-so-mot.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/ban-gai-toi-la-so-mot-185670",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Boku no Kanojo wa Saikou desu!",
            "status": "Comedy, Manga, Romance, Shounen, Slice of Life",
            "subscriber": "404.566",
            "update_time": "374",
            "view": "Iori"
        },
        "title": "Bạn gái tôi là số một"
    },
    {
        "description": "",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-11.1/860869",
                    "name": "Chapter 11.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-11/854509",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-10/852575",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-9/835636",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-8/832845",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-7/820035",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-6/817320",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-5/816045",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-4/816031",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-3/805267",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-2/805266",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions/chap-1/805265",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Manga"
            ],
            "image": "//st.nettruyenco.com/data/comics/147/meika-san-cant-conceal-her-emotions.jpg",
            "status": "Đang tiến hành",
            "title": "Meika-San Can't Conceal Her Emotions"
        },
        "image": "//st.nettruyenco.com/data/comics/147/meika-san-cant-conceal-her-emotions.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/meika-san-cant-conceal-her-emotions-554430",
        "message_main": {
            "comment": "84.073",
            "genres": "The Maid Who Can't Hide Her Feelings",
            "status": "Comedy, Manga",
            "subscriber": "94",
            "update_time": "3.672",
            "view": "Đang tiến hành"
        },
        "title": "Meika-San Can't Conceal Her Emotions"
    },
    {
        "description": "Maruo, một cậu trai thèm khát những trận đấu, đã gặp Urara, một cô gái đang chạy trốn khỏi lũ xã hội đen thế giới ngầm. Từ đây, hành trình trở thành bà trùm phố đèn đỏ của Urara với sự hậu thuẫn của Maruo bắt đầu. Chào mừng các độc giả đến với bộ truyện yakuza siêu nhiên của Yuji Kaku, vị tác giả series Jigoraku – Địa Ngục Cực Lạc.",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-16/860660",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-15/855537",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-14/855176",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-13/854899",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-12/849620",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-11/843560",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-10/832333",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-9/831316",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-8/830306",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-7/828437",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-6/823959",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-5/823182",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-4/822957",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-3/821829",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-2/821828",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba/chap-1/821827",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Action",
                "Comedy",
                "Manga",
                "Shounen",
                "Supernatural"
            ],
            "image": "//st.nettruyenco.com/data/comics/130/maruo-va-urara-yeu-ma-tranh-ba.jpg",
            "status": "Đang tiến hành",
            "title": "Maruo và Urara - Yêu ma tranh bá"
        },
        "image": "//st.nettruyenco.com/data/comics/130/maruo-va-urara-yeu-ma-tranh-ba.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/maruo-va-urara-yeu-ma-tranh-ba-579860",
        "message_main": {
            "comment": "238",
            "genres": "Action, Comedy, Manga, Shounen, Supernatural",
            "status": "Đang tiến hành",
            "subscriber": "5.915",
            "update_time": "21 giờ trước",
            "view": "151.828"
        },
        "title": "Maruo và Urara - Yêu ma tranh bá"
    },
    {
        "description": "Câu chuyện về một thanh niên nghiêm túc căm ghét tình yêu. Nhưng một ngày nọ anh bị bột sus buscu tới gặp và xin giấy lau tinh của mình,\nCòn lại thì tự đọc và nghiên cứu đi.",
        "detail": {
            "author": "Chilt",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-17/844532",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-16/837275",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-15/837274",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-14/826546",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-13/809700",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-12/803940",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-11/796381",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-10/788162",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-9/788161",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-8/777346",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-7/774013",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-6/770019",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-5/765973",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-4/764264",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-3/759507",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-2/753454",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san/chap-1/499652",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Ecchi",
                "Manga",
                "Shounen",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/171/majime-succubus-hiragi-san.jpg",
            "status": "Hoàn thành",
            "title": "Majime Succubus Hiragi-san"
        },
        "image": "//st.nettruyenco.com/data/comics/171/majime-succubus-hiragi-san.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/majime-succubus-hiragi-san-250030",
        "message_main": {
            "comment": "Hoàn thành",
            "genres": "The Serious Succubus Hiragi-San",
            "status": "Comedy, Ecchi, Manga, Shounen, Slice of Life",
            "subscriber": "335.903",
            "update_time": "597",
            "view": "Chilt"
        },
        "title": "Majime Succubus Hiragi-san"
    },
    {
        "description": "Đây là phần 7 của bộ truyện Jojo’s Bizarre Adventure, nối tiếp phần 6 của bộ truyện, nhưng được đặt ở một thế giới khác.\nBối cảnh được đặt tại năm 1890 (cùng thời điểm xảy ra part 1 của Jojo’s Bizarre Adventure).\nTại miền viễn tây nước Mỹ, cuộc đua Steel Ball Run với phần thưởng 50 triệu đô đã được diễn ra, với đường đua chạy dọc nước Mỹ và hàng trăm người tham gia.\nTrong số đó là cựu tay đua nhưng nay đã bị liệt Johnny Joestar, và bậc thầy về kĩ thuật ‘Spin’, Gyro Zeppeli.",
        "detail": {
            "author": "ARAKI Hirohiko",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-66/861708",
                    "name": "Chapter 66"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-65/861707",
                    "name": "Chapter 65"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-64/861704",
                    "name": "Chapter 64"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-63/861703",
                    "name": "Chapter 63"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-62/861702",
                    "name": "Chapter 62"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-61/838941",
                    "name": "Chapter 61"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-60/834616",
                    "name": "Chapter 60"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-59/833548",
                    "name": "Chapter 59"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-58/826665",
                    "name": "Chapter 58"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-57/826664",
                    "name": "Chapter 57"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-56/826663",
                    "name": "Chapter 56"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-55/820246",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-54/820245",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-53/815477",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-52/813328",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-51/812189",
                    "name": "Chapter 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-50/802562",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-49/800048",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-48/774800",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-47/768642",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-46/742385",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-45/742384",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-44/742383",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-43/696811",
                    "name": "Chapter 43: Slient way phần 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-42/696810",
                    "name": "Chapter 42: Slient way phần 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-41/696809",
                    "name": "Chapter 41: Slient way phần 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-40/696808",
                    "name": "Chapter 40: Slient way phần 1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-39/657633",
                    "name": "Chapter 39: Catch the rainbow phần 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-38/657632",
                    "name": "Chapter 38: Catch The Rainbow phần 1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-37/657631",
                    "name": "Chapter 37: Bia Mộ Xanh phần 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-36/657630",
                    "name": "Chapter 36: Bia mộ xanh phần 1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-35/657629",
                    "name": "Chapter 35: Thế giới của người đàn ông đích thực phần 3."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-34/657628",
                    "name": "Chapter 34: Thế giới của người đàn ông đích thực phần 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-33/657627",
                    "name": "Chapter 33: Thế giới của người đàn ông đích thực - phần 1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-32/657626",
                    "name": "Chapter 32: Đích đến chặng 3 - Thành phố Canon"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-31/657625",
                    "name": "Chapter 31: Scary Monsters phần 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-30/657624",
                    "name": "Chapter 30: - Scary Monsters phần 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-29/657623",
                    "name": "Chapter 29: Scary Monsters phần 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-28/657622",
                    "name": "Chapter 28: Scary Monsters phần 1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-27/657621",
                    "name": "Chapter 27: Răng Nanh ( Tusk ) phần 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-26/599034",
                    "name": "Chapter 26: - Răng nanh (phần 2)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-25/599033",
                    "name": "Chapter 25: - Răng nanh (phần 1)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-24/599032",
                    "name": "Chapter 24: - Interlude"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-23/599031",
                    "name": "Chapter 23: - Kẻ khủng bố từ vương quốc xa xôi (phần 2)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-22/599029",
                    "name": "Chapter 22: - Kẻ khủng bố từ vương quốc xa xôi (phần 1)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-21/599028",
                    "name": "Chapter 21: Nhiệm vụ của Gyro Zeppeli (phần 2)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-20/599027",
                    "name": "Chapter 20: - Nhiệm vụ của Gyro Zeppeli (phần 1)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-19/599026",
                    "name": "Chapter 19: - Lòng bàn tay quỷ (phần 2)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-18/599018",
                    "name": "Chapter 18: - Lòng bàn tay quỷ (phần 1)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-17/599017",
                    "name": "Chapter 17: - Sa mạc không luật pháp (phần 3)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-16/599014",
                    "name": "Chapter 16: - Sa mạc không luật pháp (phần 2)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-15/599013",
                    "name": "Chapter 15: - Sa mạc không luật pháp (phần 1)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-14/599012",
                    "name": "Chapter 14: - Băng qua sa mạc arizona, tiếp tục đi đường tắt"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-13/599011",
                    "name": "Chapter 13: - Yêu cầu từ cảnh sát trưởng tới Mountain Tim"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-12/599010",
                    "name": "Chapter 12: - Chiến thắng bị từ chối"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-11/599005",
                    "name": "Chapter 11: - còn lại 100 mét"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-10/598972",
                    "name": "Chapter 10: - 200 mét cuối cùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-9/598971",
                    "name": "Chapter 9: - Xuống dốc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-8/598970",
                    "name": "Chapter 8: - Băng rừng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-7/598968",
                    "name": "Chapter 7: Pocoloco&Sandman"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-6/346602",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-5/346124",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-4/344025",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-3/343339",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-2/342386",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run/chap-1/341810",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Action",
                "Adult",
                "Adventure",
                "Drama",
                "Manga",
                "Martial Arts",
                "Mature",
                "Psychological",
                "Shounen",
                "Supernatural"
            ],
            "image": "//st.nettruyenco.com/data/comics/123/jojos-bizarre-adventure-part-7-steel-bal-1890.jpg",
            "status": "Đang tiến hành",
            "title": "Cuộc Phiêu Lưu Bí Ẩn Phần 7: Steel Ball Run"
        },
        "image": "//st.nettruyenco.com/data/comics/123/jojos-bizarre-adventure-part-7-steel-bal-1890.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run-170190",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Jojo’s Bizarre Adventure Part 7",
            "status": "Action, Adult, Adventure, Drama, Manga, Martial Arts, Mature, Psychological, Shounen, Supernatural",
            "subscriber": "755.259",
            "update_time": "175",
            "view": "ARAKI Hirohiko"
        },
        "title": "Cuộc Phiêu Lưu Bí Ẩn Phần 7: Steel Ball Run"
    },
    {
        "description": "Một thanh niên vừa mới có bạn gái, thì bỗng dưng lòi đâu ra một bé nữa cũng đến tỏ tình  và như bao aura main nam khác, thì thanh niên làm gì thì các bác cũng đoán ra được rồi đấy",
        "detail": {
            "author": "Hiroyuki",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-55/846462",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-54/840689",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-53/833818",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-52/830698",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-51/828079",
                    "name": "Chapter 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-50/825826",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-49/824544",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-48/816805",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-47/814583",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-46/810996",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-45/810995",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-44/808396",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-43/795634",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-42/794806",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-41/791580",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-40/784907",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-39/770179",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-38/782221",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-37/779874",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-36/777092",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-35/777091",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-34/774555",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-33/774554",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-32/771444",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-31/770753",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-30/762792",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-29/751522",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-28/750994",
                    "name": "Chapter 28"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-27/749616",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-26/745173",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-25/743237",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-24/738129",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-23/737061",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-22/735206",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-21/726408",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-20/720913",
                    "name": "Chapter 20: yêu thật rồi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-19/718192",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-18/715814",
                    "name": "Chapter 18: mãi mới đi nhây thực sự :v"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-17/712927",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-16/709784",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-15/708144",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-14/661127",
                    "name": "Chapter 14: Ba tay!?"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-13/659636",
                    "name": "Chapter 13: Mirika tái xuất"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-12/659448",
                    "name": "Chapter 12: Bạn gái và bạn gái"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-11/647135",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-10/590040",
                    "name": "Chapter 10: Trở về đi mà!"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-9/577883",
                    "name": "Chapter 9: Mình không muốn bị bỏ mặc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-8/570888",
                    "name": "Chapter 8: Một nơi dành cho ba người họ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-7/564215",
                    "name": "Chapter 7: Mình không muốn người khác phát hiện"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-6/559276",
                    "name": "Chapter 6: Mình không muốn làm cậu ấy phải thất vọng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-5/555973",
                    "name": "Chapter 5: Cảm xúc của Nagisa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-4/553050",
                    "name": "Chapter 4: Đêm hoài nghi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-3/548887",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-2/548886",
                    "name": "Chapter 2: Đàm phán về việc bắt cá hai tay!"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo/chap-1/548885",
                    "name": "Chapter 1: Dù cho đó không phải là một hướng đi đúng đắn!"
                }
            ],
            "genres": [
                "Comedy",
                "Manga",
                "Romance",
                "School Life",
                "Shounen",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/118/kanojo-mo-kanojo.jpg",
            "status": "Đang tiến hành",
            "title": "Kanojo mo Kanojo"
        },
        "image": "//st.nettruyenco.com/data/comics/118/kanojo-mo-kanojo.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/kanojo-mo-kanojo-280220",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Bắt cá hai tay!",
            "status": "Comedy, Manga, Romance, School Life, Shounen, Slice of Life",
            "subscriber": "736.891",
            "update_time": "1.233",
            "view": "Hiroyuki"
        },
        "title": "Kanojo mo Kanojo"
    },
    {
        "description": "Câu chuyện về vị bác sĩ cứu chữa cho cô elf nô lệ bị ngược đãi...\nLưu ý: truyện có những tình tiết có thể gây khó chịu cho người đọc, vui lòng cân nhắc trước khi xem",
        "detail": {
            "author": "Giba - chan",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-48/856380",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-47/852850",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-46/850964",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-45/849638",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-44/846694",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-43/844357",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-42/841414",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-41/840712",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-40/840025",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-39/835620",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-38/832331",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-37/829990",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-36/827227",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-35/819900",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-34/819164",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-33/818064",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-32/815888",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-31/813466",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-30/812034",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-29/812033",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-28/805986",
                    "name": "Chapter 28: Chung giường"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-27/802319",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-26/795002",
                    "name": "Chapter 26: Răn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-25/792687",
                    "name": "Chapter 25: Gấu!"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-24/789272",
                    "name": "Chapter 24: Hiếu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-23/784826",
                    "name": "Chapter 23: Lên đường"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-22/783653",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-21/782179",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-20/779853",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-19/778535",
                    "name": "Chapter 19: Sáng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-18/777357",
                    "name": "Chapter 18: Giải độc?"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-17/775251",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-16/774926",
                    "name": "Chapter 16: Đột ngột"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-15/773510",
                    "name": "Chapter 15: Bé elf ăn thịt"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-14/772630",
                    "name": "Chapter 14: Bé elf, răng giả và anh dược sĩ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-13/772629",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-11/772628",
                    "name": "Chapter 11: - 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-6/772627",
                    "name": "Chapter 6: - Chap 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc/chap-1/772626",
                    "name": "Chapter 1: - Chap 5"
                }
            ],
            "genres": [
                "Adult",
                "Drama",
                "Fantasy",
                "Manga",
                "Mystery",
                "Tragedy"
            ],
            "image": "//st.nettruyenco.com/data/comics/55/chang-duoc-su-se-khien-nang-elf-duoc-han-5686.jpg",
            "status": "Đang tiến hành",
            "title": "Chàng dược sư sẽ khiến nàng Elf được hạnh phúc"
        },
        "image": "//st.nettruyenco.com/data/comics/55/chang-duoc-su-se-khien-nang-elf-duoc-han-5686.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/chang-duoc-su-se-khien-nang-elf-duoc-hanh-phuc-494630",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Pharmacist Saves A Dying Elf, The Apothecary Will Make This Battered Elf Happy",
            "status": "Adult, Drama, Fantasy, Manga, Mystery, Tragedy",
            "subscriber": "1.622.586",
            "update_time": "1.894",
            "view": "Giba-chan"
        },
        "title": "Chàng dược sư sẽ khiến nàng Elf được hạnh phúc"
    },
    {
        "description": "",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-50/855865",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-49.1/852351",
                    "name": "Chapter 49.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-49/850466",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-48/846378",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-47/844179",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-46.1/841878",
                    "name": "Chapter 46.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-46/840711",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-45/838443",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-44.5/834799",
                    "name": "Chapter 44.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-44/829782",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-43/827311",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-42.6/823975",
                    "name": "Chapter 42.6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-42.5/823049",
                    "name": "Chapter 42.5: Valentine"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-42/821186",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-41/817282",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-40.2/815201",
                    "name": "Chapter 40.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-40/812412",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-39/809428",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-38/806363",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-37/803744",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-36/800141",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-35/788692",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-34/788691",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-33/788690",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-32/788689",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-31/785960",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-30.2/785095",
                    "name": "Chapter 30.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-30.1/784920",
                    "name": "Chapter 30.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-29.1/784721",
                    "name": "Chapter 29.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-29/784497",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-28.2/784496",
                    "name": "Chapter 28.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-28.1/783659",
                    "name": "Chapter 28.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-27.2/783355",
                    "name": "Chapter 27.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-27.1/783080",
                    "name": "Chapter 27.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-26/782750",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-25/782521",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-24/782331",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-23/781505",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-22.1/780682",
                    "name": "Chapter 22.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-22/780435",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-21/779810",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-20/779161",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-19.1/778740",
                    "name": "Chapter 19.1: Thông báo nho nhỏ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-19/777742",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-18/776192",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-17/775269",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-16/775007",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-15/774706",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-14/773993",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-13.5/772889",
                    "name": "Chapter 13.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-13/772149",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-12/771201",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-11/770939",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-10/755662",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-9/755533",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-8/750880",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-7/750879",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-6/750878",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-5/741563",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-4/740714",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-3/737663",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-2/733640",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-1.5/731365",
                    "name": "Chapter 1.5: gút bai xi du tô mo râu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-1/731028",
                    "name": "Chapter 1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha/chap-0/729388",
                    "name": "Chapter 0"
                }
            ],
            "genres": [
                "Comedy",
                "Fantasy",
                "Manga",
                "Romance"
            ],
            "image": "//st.nettruyenco.com/data/comics/227/oan-gia-chung-nha.jpg",
            "status": "Đang tiến hành",
            "title": "Oan gia chung nhà !"
        },
        "image": "//st.nettruyenco.com/data/comics/227/oan-gia-chung-nha.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/oan-gia-chung-nha-424670",
        "message_main": {
            "comment": "3.105.071",
            "genres": "Demon x Angel , can't get along !",
            "status": "Comedy, Fantasy, Manga, Romance",
            "subscriber": "6.505",
            "update_time": "45.135",
            "view": "Đang tiến hành"
        },
        "title": "Oan gia chung nhà !"
    },
    {
        "description": "Dân lưu manh xuyên không đến làng xì trum",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-35/855768",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-34/853345",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-33/850946",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-32/846677",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-31/844885",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-30/842764",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-29/840698",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-28/838437",
                    "name": "Chapter 28"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-27/835657",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-26/832922",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-25/830592",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-24/828182",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-23/825924",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-22/823939",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-21/822192",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-20/508720",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-19/501541",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-18/495427",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-17/487894",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-16/430286",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-15/407454",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-14/405407",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-13/393708",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-12/382180",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-11/382179",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-10/382178",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-9/375611",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-8/351847",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-7/345483",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-6/341804",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-5/337826",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-4/337825",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-3/324927",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-2/317319",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu/chap-1/315202",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Action",
                "Fantasy",
                "Harem",
                "Manga",
                "Shounen"
            ],
            "image": "//st.nettruyenco.com/data/comics/42/yankee-wa-isekai-de-seirei-ni-aisaremasu-415.jpg",
            "status": "Đang tiến hành",
            "title": "Yankee Wa Isekai De Seirei Ni Aisaremasu"
        },
        "image": "//st.nettruyenco.com/data/comics/42/yankee-wa-isekai-de-seirei-ni-aisaremasu-415.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/yankee-wa-isekai-de-seirei-ni-aisaremasu-159140",
        "message_main": {
            "comment": "850",
            "genres": "Action, Fantasy, Harem, Manga, Shounen",
            "status": "Đang tiến hành",
            "subscriber": "15.458",
            "update_time": "23 giờ trước",
            "view": "1.133.975"
        },
        "title": "Yankee Wa Isekai De Seirei Ni Aisaremasu"
    },
    {
        "description": "Naruto là một cậu bé có mơ ước trở thành hokage của làng Konoha,được Hokage phong ấn trong người một trong 9 quái vật của thể giới : Cửu vĩ Hồ ly. Vì cho cậu là một con quái vật, ko ai dám chơi với cậu!& Vì muốn được thừa nhận nên rất phá phách.Khi tốt nghiệp trướng ninja, lần đầu tiên cậu đã được thừa nhận và có một người bạn thân là Sasuke",
        "detail": {
            "author": "Kishimoto Mashashi",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-280/855520",
                    "name": "Chapter 280"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-279/854370",
                    "name": "Chapter 279: - Sức mạnh kỳ lạ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-278/852295",
                    "name": "Chapter 278: - Cái chết của Gaara"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-277/851560",
                    "name": "Chapter 277: - Nghệ thuật cuối cùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-276/850671",
                    "name": "Chapter 276: - Sharingan mới"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-275/848921",
                    "name": "Chapter 275: - Phần thưởng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-274/848249",
                    "name": "Chapter 274: - Giấc mơ không đạt được"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-273/846822",
                    "name": "Chapter 273: - Trận đấu cuối cùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-272/845314",
                    "name": "Chapter 272: - Bà Chiyo và Sasori"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-271/844531",
                    "name": "Chapter 271: - Năng lực chưa biết"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-270/843851",
                    "name": "Chapter 270"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-269/841757",
                    "name": "Chapter 269: - Điều có thể làm"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-268/839994",
                    "name": "Chapter 268: - Bậc thầy khối lũy vs bậc thầy khối lũy"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-267/838752",
                    "name": "Chapter 267: - Quyết tâm mạnh mẽ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-266/836629",
                    "name": "Chapter 266: - Sasori, xuất hiện"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-265/835664",
                    "name": "Chapter 265: - Bà Chiyo và Sakura"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-264/834684",
                    "name": "Chapter 264: - Nghệ thuật của Sasori"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-263/832891",
                    "name": "Chapter 263: - Lớn tiếng, nổi điên"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-262/830582",
                    "name": "Chapter 262"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-261/829685",
                    "name": "Chapter 261"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-260/828507",
                    "name": "Chapter 260"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-259/827502",
                    "name": "Chapter 259"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-258/825913",
                    "name": "Chapter 258"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-257/825216",
                    "name": "Chapter 257"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-256/822661",
                    "name": "Chapter 256"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-255/821335",
                    "name": "Chapter 255"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-254/815574",
                    "name": "Chapter 254"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-253/813636",
                    "name": "Chapter 253"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-252/812351",
                    "name": "Chapter 252"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-251/810605",
                    "name": "Chapter 251"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-250/808989",
                    "name": "Chapter 250"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-249/807950",
                    "name": "Chapter 249"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-248/806823",
                    "name": "Chapter 248"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-247/804413",
                    "name": "Chapter 247"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-246/802487",
                    "name": "Chapter 246"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-245/800251",
                    "name": "Chapter 245"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-244/796343",
                    "name": "Chapter 244: - Ngoại truyện 5 Anh hùng Sharingan"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-243/795108",
                    "name": "Chapter 243: - Ngoại truyện 5 Món quà"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-242/793043",
                    "name": "Chapter 242: - Ngoại truyện 4 Tên Ninja mít ướt"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-241/791429",
                    "name": "Chapter 241: - Ngoại truyện 3 Anh hùng thật sự"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-240/788660",
                    "name": "Chapter 240: - Ngoại truyện 2 Tinh thần đồng đội"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-239/785598",
                    "name": "Chapter 239: - Ngoại chuyện 1 Nhiệm vụ bắt đầu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-238/783983",
                    "name": "Chapter 238: - Ngày phiêu bạt"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-237/782917",
                    "name": "Chapter 237: -Tên ngốc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-236/781818",
                    "name": "Chapter 236: - Lời hứa không thể giữ được"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-235/775041",
                    "name": "Chapter 235: - Nhiệm vụ thất bại"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-234/775040",
                    "name": "Chapter 234: - Ngày chia tay"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-233/775039",
                    "name": "Chapter 233: - Kết thúc tồi tệ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-232/775038",
                    "name": "Chapter 232: - Thung lũng Tận cùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-231/775037",
                    "name": "Chapter 231: - Sức mạnh đặc biệt"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-230/775036",
                    "name": "Chapter 230: - Thức tỉnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-229/775035",
                    "name": "Chapter 229: - Quan hệ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-228/775034",
                    "name": "Chapter 228: - Linh cảm của Kakashi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-227/775033",
                    "name": "Chapter 227: - CHIRORI VS RASENGAN"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-226/774774",
                    "name": "Chapter 226: - Bạn thân"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-225/774003",
                    "name": "Chapter 225: - Trong bóng tối"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-224/772522",
                    "name": "Chapter 224: - Ngày hôm đó"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-223/771600",
                    "name": "Chapter 223: - Sasuke và cha"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-222/770900",
                    "name": "Chapter 222: - Nghi ngờ Itachi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-221/769995",
                    "name": "Chapter 221: - Người anh quá xa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-220/769197",
                    "name": "Chapter 220: - Itachi và Sasuke"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-219/768146",
                    "name": "Chapter 219: - Tương lai và quá khứ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-218/767526",
                    "name": "Chapter 218: - Đồng đội làng lá"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-217/764522",
                    "name": "Chapter 217: - Vì người quan trọng nhất"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-216/763478",
                    "name": "Chapter 216: - Giáo và khiên"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-215/762273",
                    "name": "Chapter 215: - Gaara của Sa mạc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-214/761089",
                    "name": "Chapter 214: - Rút lui"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-213/759488",
                    "name": "Chapter 213: - Món nợ lớn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-212/757897",
                    "name": "Chapter 212: - Nguy Nguy Nguy"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-211/755798",
                    "name": "Chapter 211: - Bất bình thường"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-210/753984",
                    "name": "Chapter 210: - Bí mật của Lee"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-209/751082",
                    "name": "Chapter 209: - Người trợ giúp tham chiến"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-208/743148",
                    "name": "Chapter 208: - Bước 1 là ngụy trang"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-207/737451",
                    "name": "Chapter 207: - Phi xa giác lạc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-206/734068",
                    "name": "Chapter 206: - Hiểm nguy"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-205/733530",
                    "name": "Chapter 205: - Quyết tâm của Kiba"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-204/731525",
                    "name": "Chapter 204: - Năng lực của Ukon"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-203/730595",
                    "name": "Chapter 203: - Bí mật của Sakon"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-202/728709",
                    "name": "Chapter 202: - Khát vọng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-201/727737",
                    "name": "Chapter 201: - Ngoài tính toán"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-200/726556",
                    "name": "Chapter 200: - Đúng như tính toán"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-199/720850",
                    "name": "Chapter 199: - Nguyện vọng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-198/718389",
                    "name": "Chapter 198: - Chuyển sinh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-197/714417",
                    "name": "Chapter 197: - Sẵn sàng liều mạng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-196/712543",
                    "name": "Chapter 196: - Đối thủ mạnh nhất"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-195/708833",
                    "name": "Chapter 195: - Khắc chế"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-194/707584",
                    "name": "Chapter 194: - Tương thông"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-193/705310",
                    "name": "Chapter 193: - Trò chơi kết thúc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-192/703821",
                    "name": "Chapter 192: - Sắp đặt"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-191/702332",
                    "name": "Chapter 191: - Chuyển sinh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-190/700584",
                    "name": "Chapter 190: - Không thể tha thứ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-189/689534",
                    "name": "Chapter 189: - Sức mạnh của sự tin tưởng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-188/687450",
                    "name": "Chapter 188: - Ninja làng lá"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-187/681099",
                    "name": "Chapter 187: - Van xin"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-186/677752",
                    "name": "Chapter 186: - Chiến thuật... thất bại"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-185/676197",
                    "name": "Chapter 185: - Đuổi theo làng âm thanh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-184/673185",
                    "name": "Chapter 184: - Làng lá và làng âm thanh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-183/671910",
                    "name": "Chapter 183: - Lời hứa danh dự"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-182/669664",
                    "name": "Chapter 182: - Tập hợp"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-181/668199",
                    "name": "Chapter 181: - Trận chiến bắt đầu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-180/663626",
                    "name": "Chapter 180"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-179/662172",
                    "name": "Chapter 179: - Đừng quên"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-178/660347",
                    "name": "Chapter 178: - Lời mời của làng âm thanh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-177/658850",
                    "name": "Chapter 177: - Nhóm âm tứ nhân"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-176/656960",
                    "name": "Chapter 176: - Cái gọi là kình địch"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-175/654330",
                    "name": "Chapter 175: - Naruto vs Sasuke"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-174/652303",
                    "name": "Chapter 174: - Cảm xúc, mỗi người"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-173/649581",
                    "name": "Chapter 173: - Những người đau buồn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-172/647298",
                    "name": "Chapter 172: - Về làng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-171/645305",
                    "name": "Chapter 171: - Người kế thừa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-170/643448",
                    "name": "Chapter 170: - Thế gọng kiềm ba chân"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-169/641465",
                    "name": "Chapter 169: - Liều mạng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-168/640722",
                    "name": "Chapter 168: - Chỉ một lần nữa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-167/638903",
                    "name": "Chapter 167: - Đúng lời hứa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-166/636867",
                    "name": "Chapter 166: - Tài năng của một ninja"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-165/634882",
                    "name": "Chapter 165: - Naruto đột kích"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-164/633124",
                    "name": "Chapter 164: - Ninja trị liệu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-163/630593",
                    "name": "Chapter 163: - Thứ không thể mục rữa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-162/627712",
                    "name": "Chapter 162"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-161/625485",
                    "name": "Chapter 161"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-160/622470",
                    "name": "Chapter 160"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-159/618119",
                    "name": "Chapter 159"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-158/615631",
                    "name": "Chapter 158"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-157/612624",
                    "name": "Chapter 157: - Câu trả lời là"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-156/611870",
                    "name": "Chapter 156: - Giao dịch"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-155/604153",
                    "name": "Chapter 155: - Tầng 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-154/603618",
                    "name": "Chapter 154: - Đạt được"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-153/594354",
                    "name": "Chapter 153: - Những kẻ truy tìm"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-152/593851",
                    "name": "Chapter 152: - Tầng 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-151/592771",
                    "name": "Chapter 151: - Cơ hội"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-150/591715",
                    "name": "Chapter 150: - Bắt đầu luyện tập"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-149/589465",
                    "name": "Chapter 149: - Huyền thoại"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-148/588408",
                    "name": "Chapter 148: - Sức mạnh của Itachi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-147/580901",
                    "name": "Chapter 147: - Trận đấu của tôi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-146/579700",
                    "name": "Chapter 146: - Lòng thù hận"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-145/575456",
                    "name": "Chapter 145: - Ký ức tuyệt vọng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-144/573662",
                    "name": "Chapter 144: - Kẻ truy tìm"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-143/573209",
                    "name": "Chapter 143: - Di vật của Đệ Tứ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-142/571230",
                    "name": "Chapter 142: - Kakashi và Itachi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-141/570185",
                    "name": "Chapter 141: - Uchiha Itachi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-140/567636",
                    "name": "Chapter 140: - Tiếp cận"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-139/567033",
                    "name": "Chapter 139: - Tên người đó là"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-138/565077",
                    "name": "Chapter 138: - Tiêu diệt làng lá kết thúc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-137/564176",
                    "name": "Chapter 137: - Ninja làng lá"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-136/564175",
                    "name": "Chapter 136: - Đòn cuối cùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-135/561790",
                    "name": "Chapter 135: - Trận đấu bão táp cuồng phong"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-134/561272",
                    "name": "Chapter 134: - Bí kíp nhẫn pháp Naruto"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-133/560577",
                    "name": "Chapter 133: - Sức mạnh thật sự"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-132/559832",
                    "name": "Chapter 132: - Hai người! Bóng tối và ánh sáng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-131/558315",
                    "name": "Chapter 131: - Ý nghĩa của cái tên GAARA"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-130/554973",
                    "name": "Chapter 130: - Tình yêu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-129/554321",
                    "name": "Chapter 129: - Đau"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-128/553854",
                    "name": "Chapter 128: - Quá giới hạn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-127/553376",
                    "name": "Chapter 127: - Cảm giác tồn tại"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-126/552253",
                    "name": "Chapter 126: - Bất cẩn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-125/551616",
                    "name": "Chapter 125: - Thức tỉnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-124/550833",
                    "name": "Chapter 124: - Trận chiến vĩnh viễn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-123/550055",
                    "name": "Chapter 123: - Phong ấn cuối cùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-122/549041",
                    "name": "Chapter 122: - Ý chí được thừa hưởng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-121/547971",
                    "name": "Chapter 121: - Thí nghiệm đáng sợ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-120/547215",
                    "name": "Chapter 120: - Hokage và Hokage"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-119/547214",
                    "name": "Chapter 119: - Cuộc đời của tôi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-118/547213",
                    "name": "Chapter 118: - Cản đường"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-117/543370",
                    "name": "Chapter 117: - Nhiệm vụ được giao"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-116/542028",
                    "name": "Chapter 116: - Tiêu diệt làng lá"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-115/541226",
                    "name": "Chapter 115: - Cuộc thi tuyển Chuunin kết thúc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-114/540497",
                    "name": "Chapter 114: Tấn công"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-113/539977",
                    "name": "Chapter 113: - Lý do chậm trễ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-112/539094",
                    "name": "Chapter 112: - Thể thuật của Sasuke"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-111/538711",
                    "name": "Chapter 111: - Sasuke và Gaara"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-110/538286",
                    "name": "Chapter 110: - Cuối cùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-109/537826",
                    "name": "Chapter 109: - Lá rơi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-108/535114",
                    "name": "Chapter 108: - Chiến thắng được sắp xếp"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-107/533909",
                    "name": "Chapter 107: - Tên con trai không muốn đánh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-106/533174",
                    "name": "Chapter 106: - Sasuke... Mất tư cách"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-105/532753",
                    "name": "Chapter 105: - Bay cao"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-104/532078",
                    "name": "Chapter 104: - Sức mạnh có thể thay đổi được"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-103/531528",
                    "name": "Chapter 103: - Kẻ thất bại"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-102/530491",
                    "name": "Chapter 102: - Chim trong lồng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-101/530113",
                    "name": "Chapter 101: - Còn nữa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-100/529171",
                    "name": "Chapter 100: - Quyết chiến"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-99/528634",
                    "name": "Chapter 99: - Vòng thi chính thức"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-98/528188",
                    "name": "Chapter 98: - Người thất bại đầy kiêu hãnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-97/527690",
                    "name": "Chapter 97: - Lý do tiếp tục sống"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-96/527295",
                    "name": "Chapter 96: - Vị khách bất ngờ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-95/526938",
                    "name": "Chapter 95: - Gặp gỡ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-94/526500",
                    "name": "Chapter 94: - Chìa khóa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-93/525970",
                    "name": "Chapter 93: Cảm xúc, mọi người"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-92/525452",
                    "name": "Chapter 92: - Làng lá, âm thanh, cát và"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-91/524846",
                    "name": "Chapter 91: - Tự nguyện làm đệ tử"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-90/524310",
                    "name": "Chapter 90: - Huấn luyện làm sao đây"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-89/523836",
                    "name": "Chapter 89: - Nguyện vọng của Naruto"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-88/523189",
                    "name": "Chapter 88: - Sasuke"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-87/522532",
                    "name": "Chapter 87: - Kết thúc vòng đấu loại"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-86/521879",
                    "name": "Chapter 86: - Ninja kiệt xuất"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-85/521503",
                    "name": "Chapter 85: - Giờ chính là lúc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-84/520946",
                    "name": "Chapter 84: - Thiên tài nỗ lực"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-83/520568",
                    "name": "Chapter 83: - Phá vỡ phòng ngừa tuyệt đối"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-82/519944",
                    "name": "Chapter 82: - Bí mật của Lee"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-81/519530",
                    "name": "Chapter 81: - Đối thủ của Gaara"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-80/518564",
                    "name": "Chapter 80: - Vượt qua giới hạn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-79/517773",
                    "name": "Chapter 79: - Gia tộc Hyuga"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-78/516542",
                    "name": "Chapter 78: - Neji và Hinata"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-77/516184",
                    "name": "Chapter 77: - Mánh khóe của Naruto"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-76/515453",
                    "name": "Chapter 76: - Kiba lật ngược tình thế Naruto lật ngược tình thế"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-75/515121",
                    "name": "Chapter 75: - Sự tiến bộ của Naruto"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-74/513659",
                    "name": "Chapter 74: - Trận đấu thứ sáu và"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-73/512700",
                    "name": "Chapter 73: - Tuyên bố bại trận"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-72/512444",
                    "name": "Chapter 72: - Đua tài"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-71/511873",
                    "name": "Chapter 71: - Bức tường quá cao"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-70/511119",
                    "name": "Chapter 70: - Kẻ sẽ chết là"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-69/510443",
                    "name": "Chapter 69: - Vị khách không mời"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-68/509935",
                    "name": "Chapter 68: - Dòng máu UCHIHA"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-67/509408",
                    "name": "Chapter 67: - Năng lực khác thường"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-66/508773",
                    "name": "Chapter 66: - Lời khuyên của Sakura"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-65/508111",
                    "name": "Chapter 65: - Trận chiến sinh tử"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-64/507424",
                    "name": "Chapter 64: - Thông điệp của Hokage"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-63/505826",
                    "name": "Chapter 63: - Bộ mặt khác"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-62/504926",
                    "name": "Chapter 62: Chuột sa bẫy"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-61/504144",
                    "name": "Chapter 61: Con đường nên chọn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-60/503263",
                    "name": "Chapter 60: Cơ hội cuối cùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-59/502282",
                    "name": "Chapter 59: - Thảm kịch của cát"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-58/501657",
                    "name": "Chapter 58: - Nhân chứng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-57/501169",
                    "name": "Chapter 57: - Sớm hơn 10 tiếng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-56/499152",
                    "name": "Chapter 56: - Sức mạnh đạt được"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-55/497582",
                    "name": "Chapter 55: - Cuộc chiến toàn diện"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-54/497296",
                    "name": "Chapter 54: - Sakura và Ino"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-53/496507",
                    "name": "Chapter 53: - Quyết tâm của Sakura"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-52/495662",
                    "name": "Chapter 52: - Điều kiện sử dụng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-51/495661",
                    "name": "Chapter 51: - Mãnh thú kiêu hãnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-50/495660",
                    "name": "Chapter 50: - Mình nhất định phải"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-49/494573",
                    "name": "Chapter 49: - Kẻ hèn nhát"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-48/494321",
                    "name": "Chapter 48: - Mục đích"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-47/493887",
                    "name": "Chapter 47: - Kẻ săn mồi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-46/493886",
                    "name": "Chapter 46: - Ám hiệu là"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-45/493384",
                    "name": "Chapter 45: - Vòng thi thứ hai"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-44/493143",
                    "name": "Chapter 44: - Mấu chốt của vòng thi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-43/492855",
                    "name": "Chapter 43: - Câu hỏi thứ 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-42/492588",
                    "name": "Chapter 42: - Cuộc chiến của mối người"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-41/492363",
                    "name": "Chapter 41: - Lời thì thầm của quỷ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-40/492058",
                    "name": "Chapter 40: - Vòng thi thứ nhất"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-39/491749",
                    "name": "Chapter 39: - Những đối thủ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-38/491532",
                    "name": "Chapter 38: - Bắt đầu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-37/491078",
                    "name": "Chapter 37: - Khắc tinh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-36/490840",
                    "name": "Chapter 36: - Nỗi phiền muộn của Sakura"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-35/490333",
                    "name": "Chapter 35: - Iruka và Kakashi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-34/490073",
                    "name": "Chapter 34: - Những kẻ xâm nhập"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-33/487382",
                    "name": "Chapter 33: - Cây cầu của những anh hùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-32/487381",
                    "name": "Chapter 32: - Thứ công cụ mang tên Ninja"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-31/487380",
                    "name": "Chapter 31: - Những cuộc chiến"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-30/487379",
                    "name": "Chapter 30: - Tương lai của ngươi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-29/487378",
                    "name": "Chapter 29: - Người quan trọng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-28/487377",
                    "name": "Chapter 28: - Cửu vĩ linh hồ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-27/487376",
                    "name": "Chapter 27: - Thức tỉnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-26/487375",
                    "name": "Chapter 26: - Phá giải Sharingan"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-25/487374",
                    "name": "Chapter 25: - Vì những ước mơ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-24/487373",
                    "name": "Chapter 24: - Tốc độ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-23/487372",
                    "name": "Chapter 23: - Hai đòn đột kích"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-22/487371",
                    "name": "Chapter 22: - Đối thủ xuất hiện"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-21/485427",
                    "name": "Chapter 21: - Gặp gỡ trong rừng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-20/485426",
                    "name": "Chapter 20: - Đất nước từng có một anh hùng"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-19/485425",
                    "name": "Chapter 19: - Biểu tượng của sự dũng cảm"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-18/485424",
                    "name": "Chapter 18: - Bắt đầu tập luyện"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-17/485423",
                    "name": "Chapter 17: - Chuẩn bị cho trận chiến"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-16/483366",
                    "name": "Chapter 16: - Ngươi là ai"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-15/483365",
                    "name": "Chapter 15: - Sharingan tái sinh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-14/483364",
                    "name": "Chapter 14: - Kế hoạch bí mật"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-13/483363",
                    "name": "Chapter 13: - Ta là NINJA"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-12/483362",
                    "name": "Chapter 12: - Kết thúc rồi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-11/483361",
                    "name": "Chapter 11: - Đổ bộ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-10/483360",
                    "name": "Chapter 10: - Hai gã bị hạ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-9/483359",
                    "name": "Chapter 9: - Vị khách tồi tệ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-8/482069",
                    "name": "Chapter 8: - Lý do thất bại"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-7/482068",
                    "name": "Chapter 7: - Kết luận của thầy Kakashi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-6/482067",
                    "name": "Chapter 6: - Không phải Sasuke"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-5/482066",
                    "name": "Chapter 5: - Bất cẩn là kẻ thù nguy hiểm nhât"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-4/482065",
                    "name": "Chapter 4: - Hatake Kakashi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-3/482064",
                    "name": "Chapter 3: Uchiha Sasuke"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-2/482063",
                    "name": "Chapter 2: Konohamaru"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau/chap-1/485422",
                    "name": "Chapter 1: Uzumaki Naruto"
                }
            ],
            "genres": [
                "Action",
                "Comedy",
                "Drama",
                "Fantasy",
                "Manga",
                "Shounen",
                "Truyện Màu"
            ],
            "image": "//st.nettruyenco.com/data/comics/31/cuu-vi-ho-ly-mau.jpg",
            "status": "Đang tiến hành",
            "title": "Cửu Vĩ Hồ Ly Màu"
        },
        "image": "//st.nettruyenco.com/data/comics/31/cuu-vi-ho-ly-mau.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/cuu-vi-ho-ly-mau-235830",
        "message_main": {
            "comment": "4.459.610",
            "genres": "Action, Comedy, Drama, Fantasy, Manga, Shounen, Truyện Màu",
            "status": "Kishimoto Mashashi",
            "subscriber": "784",
            "update_time": "7.210",
            "view": "Đang tiến hành"
        },
        "title": "Cửu Vĩ Hồ Ly Màu"
    },
    {
        "description": "Thanh niên chuyển sinh nhưng bị bỏ rơi giữa rừng. tự mình tìm cách thoát khỏi rừng để đến thị trấn gần đó nhưng khi đến thì bị tống vào ngục :v cậu phải làm gì trước tình cảnh éo le này đây?",
        "detail": {
            "author": "Otaku Sanctuary",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-26/855767",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-25.2/853344",
                    "name": "Chapter 25.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-25.1/846680",
                    "name": "Chapter 25.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-24.2/844882",
                    "name": "Chapter 24.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-24.1/842772",
                    "name": "Chapter 24.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-23/838440",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-22/835663",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-21.2/832926",
                    "name": "Chapter 21.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-21/830597",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-20.5/828183",
                    "name": "Chapter 20.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-20/825926",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-19/823821",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-18.2/819379",
                    "name": "Chapter 18.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-18/818346",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-17/815868",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-16/808280",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-15/733810",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-14.2/684820",
                    "name": "Chapter 14.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-14/676364",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-13.2/674862",
                    "name": "Chapter 13.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-13.1/674107",
                    "name": "Chapter 13.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-12/667576",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-11.2/671963",
                    "name": "Chapter 11.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-11/661117",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-10/658829",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-9.2/658244",
                    "name": "Chapter 9.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-9/654252",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-8/645299",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-7/643625",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-6/536296",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-5/520250",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-4/516744",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-3/512703",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-2/462817",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun/chap-1/450025",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Adult",
                "Adventure",
                "Fantasy",
                "Manga"
            ],
            "image": "//st.nettruyenco.com/data/comics/154/isekai-demo-bunan-ni-ikitai-shoukougun.jpg",
            "status": "Đang tiến hành",
            "title": "Isekai Demo Bunan ni Ikitai Shoukougun"
        },
        "image": "//st.nettruyenco.com/data/comics/154/isekai-demo-bunan-ni-ikitai-shoukougun.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/isekai-demo-bunan-ni-ikitai-shoukougun-214020",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Đột nhiên bị triệu hồi đến thế giới khác, tôi chỉ mong mình có một cuốc sống yên bình,It'sSudden,butIcametoAnotherWorld!ButihopetoliveSafely; 異世界でも無難に生きたい症候群",
            "status": "Adult, Adventure, Fantasy, Manga",
            "subscriber": "1.392.815",
            "update_time": "1.351",
            "view": "Otaku Sanctuary"
        },
        "title": "Isekai Demo Bunan ni Ikitai Shoukougun"
    },
    {
        "description": "Truyện về nàng công chúa luôn bị cho là vô dụng nhưng luôn cố gắng hết sức để chứng minh bản thân mình...",
        "detail": {
            "author": "Đang cập nhật",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/hyakka-mangekyou/chap-5/850678",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/hyakka-mangekyou/chap-4/847758",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/hyakka-mangekyou/chap-3/846182",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/hyakka-mangekyou/chap-2/842986",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/hyakka-mangekyou/chap-1/396699",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Drama",
                "Historical",
                "Manga",
                "Romance",
                "Shoujo"
            ],
            "image": "//st.nettruyenco.com/data/comics/213/hyakka-mangekyou.jpg",
            "status": "Đang tiến hành",
            "title": "Hyakka Mangekyou"
        },
        "image": "//st.nettruyenco.com/data/comics/213/hyakka-mangekyou.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/hyakka-mangekyou-191570",
        "message_main": {
            "comment": "63",
            "genres": "Drama, Historical, Manga, Romance, Shoujo",
            "status": "Đang tiến hành",
            "subscriber": "953",
            "update_time": "23 giờ trước",
            "view": "15.555"
        },
        "title": "Hyakka Mangekyou"
    },
    {
        "description": "Mikoto Ochiai đã sẵn sàng để nhảy ra khỏi sân thượng của trường trung học của cô sau khi cô đã bị từ chối bởi người mà cô ấy yêu. Tuy nhiên, giáo viên Vật lý khiêm chủ nhiệm của cô Jin Haiba bất ngờ xuất hiện trên sân thượng để hút thuốc lá, nói chuyện với cô và cứu cô khỏi ngã. Anh ấy thậm chí còn yêu cầu cô ấy đi hẹn hò cùng cậu khiến cô ấy bối rối. Những điều gì sẽ xảy ra giữ Mikoto thông minh và thầy giáo vô tư đó . Mời các bạn đón xem….Caajo nhật sớm nhất tại Fb của hai nhóm",
        "detail": {
            "author": "Mizuki Sora",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-60/848668",
                    "name": "Chapter 60"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-59/846620",
                    "name": "Chapter 59"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-58/840901",
                    "name": "Chapter 58"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-57/838771",
                    "name": "Chapter 57"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-56/832807",
                    "name": "Chapter 56"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-55/830618",
                    "name": "Chapter 55"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-54/826769",
                    "name": "Chapter 54"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-53/823024",
                    "name": "Chapter 53"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-52/818077",
                    "name": "Chapter 52"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-51/818074",
                    "name": "Chapter 51"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-50/818073",
                    "name": "Chapter 50"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-49/812718",
                    "name": "Chapter 49"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-48/806654",
                    "name": "Chapter 48"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-47/806653",
                    "name": "Chapter 47"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-46/799616",
                    "name": "Chapter 46"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-45/799018",
                    "name": "Chapter 45"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-44/794951",
                    "name": "Chapter 44"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-43/794950",
                    "name": "Chapter 43"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-42/788576",
                    "name": "Chapter 42"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-41/785557",
                    "name": "Chapter 41"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-40/785556",
                    "name": "Chapter 40"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-39/777612",
                    "name": "Chapter 39"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-38/777611",
                    "name": "Chapter 38"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-37/777610",
                    "name": "Chapter 37"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-36/777609",
                    "name": "Chapter 36"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-35/777608",
                    "name": "Chapter 35"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-34/777607",
                    "name": "Chapter 34"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-33/777606",
                    "name": "Chapter 33"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-32/749625",
                    "name": "Chapter 32"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-31/732155",
                    "name": "Chapter 31"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-30/724595",
                    "name": "Chapter 30"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-29/718165",
                    "name": "Chapter 29"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-28/716143",
                    "name": "Chapter 28"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-27/563807",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-26/561789",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-25/555770",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-24/555767",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-23/555766",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-22/483628",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-21/463266",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-20.1/452586",
                    "name": "Chapter 20.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-20/452585",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-19/446082",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-18/445221",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-17/444636",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-16/444635",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-15/444634",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-14.1/444633",
                    "name": "Chapter 14.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-14/420127",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-13/418972",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-12/418530",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-11/406755",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-10/404293",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-9/393830",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-8/390620",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-7.5/387506",
                    "name": "Chapter 7.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-7/385547",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-6/382392",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-5/375208",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-4/372118",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-3/370369",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-2/367620",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi/chap-1/345879",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Drama",
                "Manga",
                "Romance",
                "School Life",
                "Shoujo"
            ],
            "image": "//st.nettruyenco.com/data/comics/9/tsuiraku-jk-to-haijin-kyoushi.jpg",
            "status": "Đang tiến hành",
            "title": "Tsuiraku Jk To Haijin Kyoushi"
        },
        "image": "//st.nettruyenco.com/data/comics/9/tsuiraku-jk-to-haijin-kyoushi.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/tsuiraku-jk-to-haijin-kyoushi-171610",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Ông Thầy Vô Dụng Của Tôi",
            "status": "Comedy, Drama, Manga, Romance, School Life, Shoujo",
            "subscriber": "2.795.274",
            "update_time": "1.761",
            "view": "Mizuki Sora"
        },
        "title": "Tsuiraku Jk To Haijin Kyoushi"
    },
    {
        "description": "Cửu Long Trại Thành - Chốn hỗn độn nhất thế kỷ 20. Một chuyện tình dịu dàng sẽ nảy nở ở miền đất phản địa đàng này.",
        "detail": {
            "author": "MAYUZUKI Jun",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-20/855297",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-19/852301",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-18/828188",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-17/825625",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-16/823283",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-15/798361",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-14/788651",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-13/779432",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-12/769042",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-11/766289",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-10/762179",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-9/759037",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-8/756707",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-7/754609",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-6/749805",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-5/749804",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-4/749803",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-3/749802",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-2/749801",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance/chap-1/749800",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Drama",
                "Manga",
                "Romance",
                "Seinen",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/19/kowloon-generic-romance.jpg",
            "status": "Đang tiến hành",
            "title": "Kowloon Generic Romance"
        },
        "image": "//st.nettruyenco.com/data/comics/19/kowloon-generic-romance.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/kowloon-generic-romance-453310",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Chuyện tình Cửu Long thành",
            "status": "Comedy, Drama, Manga, Romance, Seinen, Slice of Life",
            "subscriber": "59.656",
            "update_time": "104",
            "view": "MAYUZUKI Jun"
        },
        "title": "Kowloon Generic Romance"
    },
    {
        "description": "Có bao giờ trong cuộc đời, bạn không thể quên được người mình đã từng yêu chưa? Bạn gái cũ của Ichimatsu Kairo, Kusakabe Hiyori đột ngột biến mất vào 7 năm trước nay đã xuất hiện trở lại. Thế nhưng, trái lại với cảm xúc nồng nàn đến bùng cháy của Ichimatsu, cô bạn gái cũ này đã nhờ vả anh một điều kỳ quặc...“Em muốn Ichimatsu quay phim tài liệu sinh nở giúp em, vì vậy hãy cho em tinh trùng của anh”. Một chuyện tình hài lãng mạn đầy nghẹt thở giữa BẠN GÁI CŨ X BẠN TRAI CŨ!?!?!?\n---------------------------------------------------------------------------------\nBản dịch của bộ truyện được thực hiện bởi Nhàn Rỗi Team. BBB Team chỉ là người úp hộ.\nhttps://www.facebook.com/Nha%CC%80n-R%C3%B4%CC%83i-Team-103753030978826",
        "detail": {
            "author": "YONESHIRO KYO",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-44/850955",
                    "name": "Chapter 44: Thiên thần tuyết"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-43/846662",
                    "name": "Chapter 43: Chuyến tàu cao tốc đến Yamagata"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-42.5/845514",
                    "name": "Chapter 42.5: Tổng hợp các Arc cho đến thời điểm hiện tại"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-42/844894",
                    "name": "Chapter 42: Không thể quay đầu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-41/840764",
                    "name": "Chapter 41: Đường ai nấy đi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-40.5/840378",
                    "name": "Chapter 40.5: Fix lỗi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-40/838452",
                    "name": "Chapter 40: Dù là cái chết cũng không thể chia lìa được đôi ta"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-39/835024",
                    "name": "Chapter 39: Người tuyệt nhất"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-38/830573",
                    "name": "Chapter 38: Tiếng lòng của Hiyori"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-37/828189",
                    "name": "Chapter 37: Lời mời gọi"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-36/826270",
                    "name": "Chapter 36: Gặp lại, lần nữa"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-35.5/824314",
                    "name": "Chapter 35.5: Recap trước khi vào phần tiếp theo"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-35/776178",
                    "name": "Chapter 35: Quyết định của Ichimatsu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-34/763813",
                    "name": "Chapter 34: Quyết định của Hiyori"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-33/756575",
                    "name": "Chapter 33: Quyết không quay đầu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-32/743036",
                    "name": "Chapter 32: Nơi chốn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-31/741423",
                    "name": "Chapter 31: TO LOVE"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-30/740546",
                    "name": "Chapter 30: Người phụ nữ gian dối"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-29/737483",
                    "name": "Chapter 29: Thuốc độc"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-28/734586",
                    "name": "Chapter 28: Hơi ấm của Hiyori"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-27/723569",
                    "name": "Chapter 27: Đồng minh hay kẻ thù?"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-26/722424",
                    "name": "Chapter 26: Kẻ tồi tệ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-25/721557",
                    "name": "Chapter 25: Chuyến tàu cao tốc đến Kyoto"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-24/716715",
                    "name": "Chapter 24: Ước mơ của cô con gái thứ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-23/713232",
                    "name": "Chapter 23: Thăm bệnh"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-22/712267",
                    "name": "Chapter 22: Vì tình yêu"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-21/711689",
                    "name": "Chapter 21: Lần trả thù đầu tiên"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-20/711478",
                    "name": "Chapter 20: Phòng làm việc của mẹ"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-19/696670",
                    "name": "Chapter 19: Hội ngộ cùng cô em út, Chiyoko"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-18/694582",
                    "name": "Chapter 18: Ý nghĩa tồn tại"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-17/688914",
                    "name": "Chapter 17: Trại giam"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-16/687426",
                    "name": "Chapter 16: Nhân chứng mục kích, Saeki Kana"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-15/685678",
                    "name": "Chapter 15: 2nd Trial (1)"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-14/684279",
                    "name": "Chapter 14: Sau nụ hôn"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-13/682848",
                    "name": "Chapter 13: Ước mơ của Hiyori"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-12/677788",
                    "name": "Chapter 12: Cảm xúc của Hiyori"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-11/673432",
                    "name": "Chapter 11: Họp bàn tác chiến"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-10/671926",
                    "name": "Chapter 10: Một bó hoa."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-9/669327",
                    "name": "Chapter 9: Câu chuyện của \"Hiyorin\"."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-8/668292",
                    "name": "Chapter 8: Người đáng tin cậy."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-7/668291",
                    "name": "Chapter 7: 1st Trial (4)."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-6/668290",
                    "name": "Chapter 6: 1st Trial (3)."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-5/668289",
                    "name": "Chapter 5: 1st Trial (2)."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-4/668288",
                    "name": "Chapter 4: 1st Trial (1)."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-3/668287",
                    "name": "Chapter 3: Mục đích."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-2/668286",
                    "name": "Chapter 2: Bạn gái cũ \"mới\"."
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi/chap-1/668285",
                    "name": "Chapter 1: Người tôi muốn kết hôn."
                }
            ],
            "genres": [
                "Comedy",
                "Drama",
                "Manga",
                "Psychological",
                "Romance",
                "Seinen",
                "Slice of Life"
            ],
            "image": "//st.nettruyenco.com/data/comics/30/chuoi-phim-tai-lieu-ve-chung-cuong-ban-g-4235.jpg",
            "status": "Đang tiến hành",
            "title": "Chuỗi Phim Tài Liệu Về Chứng Cuồng Bạn Gái Cũ Của Tôi."
        },
        "image": "//st.nettruyenco.com/data/comics/30/chuoi-phim-tai-lieu-ve-chung-cuong-ban-g-4235.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/chuoi-phim-tai-lieu-ve-chung-cuong-ban-gai-cu-cua-toi-361260",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Hãy cho em ''trung tình'' của anh; Documentary Of My Ex-girlfriend Complex; OUJOUGIWA NO IMI O SHIRE!",
            "status": "Comedy, Drama, Manga, Psychological, Romance, Seinen, Slice of Life",
            "subscriber": "419.949",
            "update_time": "718",
            "view": "YONESHIRO KYO"
        },
        "title": "Chuỗi Phim Tài Liệu Về Chứng Cuồng Bạn Gái Cũ Của Tôi."
    },
    {
        "description": "Tại thế giới này, chỉ có mình tôi là có thể mạnh lên nhờ ăn những đá phép thuật!\nTại vì nữ thần cảm thấy cái chết của tôi quá thương tâm nên quyết định cho tôi chuyển sinh và có một cuộc sống với, như bao nhiêu bộ thần sẽ trao sức mạnh mà main hằng mong muốn hoặc có thần thì ruồng bỏ main. Nhưng đây bà thần lại cho quay GACHA để lấy kĩ năng!! Và kỹ năng tôi nhận được lại là Phân hủy độc tố EX.... cái kỹ năng quái quỷ gì thế hả!!??",
        "detail": {
            "author": "Yuuki Ryou - Naruse Chisato",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-27/856602",
                    "name": "Chapter 27"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-26/854885",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-25/787945",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-24/758194",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-23/758193",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-22/758192",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-21/735108",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-20/719653",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-19/708628",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-18/697560",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-17/697450",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-16/689147",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-15/686957",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-14/679302",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-13/676332",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-12/651988",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-11/623459",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-10/593915",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-9/572025",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-8/558241",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-7/541065",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-6/534688",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-5/532639",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-4/531592",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-3/514862",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-2/505645",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-1.2/492306",
                    "name": "Chapter 1.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou/chap-1.1/491636",
                    "name": "Chapter 1.1"
                }
            ],
            "genres": [
                "Action",
                "Adventure",
                "Fantasy",
                "Manga",
                "Xuyên Không"
            ],
            "image": "//st.nettruyenco.com/data/comics/112/maseki-gurume-mamono-no-chikara-o-tabeta-1581.jpg",
            "status": "Đang tiến hành",
            "title": "Maseki Gurume: Mamono No Chikara O Tabeta Ore Wa Saikyou!"
        },
        "image": "//st.nettruyenco.com/data/comics/112/maseki-gurume-mamono-no-chikara-o-tabeta-1581.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/maseki-gurume-mamono-no-chikara-o-tabeta-ore-wa-saikyou-244320",
        "message_main": {
            "comment": "1.779.894",
            "genres": "Action, Adventure, Fantasy, Manga, Xuyên Không",
            "status": "Yuuki Ryou - Naruse Chisato",
            "subscriber": "1.786",
            "update_time": "23.937",
            "view": "Đang tiến hành"
        },
        "title": "Maseki Gurume: Mamono No Chikara O Tabeta Ore Wa Saikyou!"
    },
    {
        "description": "Câu chuyện về cậu học sinh Terada Youhei có khả năng thấy các hồn ma tình cờ gặp \"Rinko-san sân thượng\", một ma nữ muốn kết bạn nhưng lại chẳng có kĩ năng giao tiếp.",
        "detail": {
            "author": "Kaihei Nakahara",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-20/855506",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-19/749923",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-18/743012",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-17/740562",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-16/687748",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-15/679320",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-14/673744",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-13/640385",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-12/636313",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-11/632089",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-10/626916",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-9/565286",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-8/556679",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-7/551883",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-6/550527",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-5/548398",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-4/545604",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-3/543324",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-2/534504",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai/chap-1/507971",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Comedy",
                "Ecchi",
                "Manga",
                "Romance",
                "Slice of Life",
                "Supernatural"
            ],
            "image": "//st.nettruyenco.com/data/comics/129/ikenai-kanojo-no-otetsudai.jpg",
            "status": "Đang tiến hành",
            "title": "Ikenai Kanojo no Otetsudai"
        },
        "image": "//st.nettruyenco.com/data/comics/129/ikenai-kanojo-no-otetsudai.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/ikenai-kanojo-no-otetsudai-254730",
        "message_main": {
            "comment": "218.149",
            "genres": "Comedy, Ecchi, Manga, Romance, Slice of Life, Supernatural",
            "status": "Kaihei Nakahara",
            "subscriber": "157",
            "update_time": "4.013",
            "view": "Đang tiến hành"
        },
        "title": "Ikenai Kanojo no Otetsudai"
    },
    {
        "description": "Ngày tận thế, thảm họa ngàn năm mới có một lần do \"thanh kiếm nguyên thủy\" gây ra. Có một gia tộc đã cố gắng phá hủy \"Nguyên thủy kiếm\" vào ngày hôm đó, nhưng kế hoạch đã thất bại. Để ngăn chặn thảm họa lần tiếp theo, sakuya một thiếu niên mạnh nhất trong gia tộc đó đã đi đến 1000 năm sau để làm điều đó, ở đó là một thế giới phép thuật đang đợi cậu. Sakuya không để sử dụng được phép thuật nên đã bị coi thường ở thế giới đó...!? Câu truyện giả tưởng về con đường hoàng gia bắt đầu nơi [kiếm sĩ mạnh nhất] giải cứu thế giới!",
        "detail": {
            "author": "Mikoshiba Nana",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-6.2/861688",
                    "name": "Chapter 6.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-6.1/851154",
                    "name": "Chapter 6.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-5.3/846008",
                    "name": "Chapter 5.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-5.2/845206",
                    "name": "Chapter 5.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-5.1/845205",
                    "name": "Chapter 5.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-4.4/845204",
                    "name": "Chapter 4.4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-4.3/845203",
                    "name": "Chapter 4.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-4.2/845202",
                    "name": "Chapter 4.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-4.1/845201",
                    "name": "Chapter 4.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-3.3/845200",
                    "name": "Chapter 3.3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-3.2/845199",
                    "name": "Chapter 3.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-3.1/845198",
                    "name": "Chapter 3.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-2.1/845197",
                    "name": "Chapter 2.1"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-2/845196",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-1.2/845195",
                    "name": "Chapter 1.2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime/chap-1.1/845194",
                    "name": "Chapter 1.1: (bản trans)"
                }
            ],
            "genres": [
                "Action",
                "Fantasy",
                "Manga"
            ],
            "image": "//st.nettruyenco.com/data/comics/39/nana-seiken-to-maken-no-hime.jpg",
            "status": "Đang tiến hành",
            "title": "Nana Seiken to Maken no Hime"
        },
        "image": "//st.nettruyenco.com/data/comics/39/nana-seiken-to-maken-no-hime.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/nana-seiken-to-maken-no-hime-61223",
        "message_main": {
            "comment": "266.745",
            "genres": "Action, Fantasy, Manga",
            "status": "Mikoshiba Nana",
            "subscriber": "227",
            "update_time": "7.156",
            "view": "Đang tiến hành"
        },
        "title": "Nana Seiken to Maken no Hime"
    },
    {
        "description": "Dad is a Hero, Mom is a Spirit, I'm a Reincarnator summary: Well, I was reincarnated! And my father is a former hero? And my mother is a queen of the spirits!? With my knowledge of my past life and my powers in this world... I'll protect my family's happiness!",
        "detail": {
            "author": "Matsuura - Oohori Yukata",
            "episodes": [
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-26/856595",
                    "name": "Chapter 26"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-25/832032",
                    "name": "Chapter 25"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-24/732248",
                    "name": "Chapter 24"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-23/709273",
                    "name": "Chapter 23"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-22/685367",
                    "name": "Chapter 22"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-21/625413",
                    "name": "Chapter 21"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-20/581191",
                    "name": "Chapter 20"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-19.5/561828",
                    "name": "Chapter 19.5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-19/555976",
                    "name": "Chapter 19"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-18/554642",
                    "name": "Chapter 18"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-17/539275",
                    "name": "Chapter 17"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-16/535233",
                    "name": "Chapter 16"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-15/525973",
                    "name": "Chapter 15"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-14/519976",
                    "name": "Chapter 14"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-13/510851",
                    "name": "Chapter 13"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-12/504848",
                    "name": "Chapter 12"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-11/504847",
                    "name": "Chapter 11"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-10/504846",
                    "name": "Chapter 10"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-9/504845",
                    "name": "Chapter 9"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-8/504844",
                    "name": "Chapter 8"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-7/504843",
                    "name": "Chapter 7"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-6/504842",
                    "name": "Chapter 6"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-5/504841",
                    "name": "Chapter 5"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-4/504840",
                    "name": "Chapter 4"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-3/504839",
                    "name": "Chapter 3"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-2/504838",
                    "name": "Chapter 2"
                },
                {
                    "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator/chap-1/470620",
                    "name": "Chapter 1"
                }
            ],
            "genres": [
                "Fantasy",
                "Manga",
                "Seinen"
            ],
            "image": "//st.nettruyenco.com/data/comics/172/dad-is-a-hero-mom-is-a-spirit-im-a-reinc-3032.jpg",
            "status": "Đang tiến hành",
            "title": "Dad is a Hero, Mom is a Spirit, I'm a Reincarnator"
        },
        "image": "//st.nettruyenco.com/data/comics/172/dad-is-a-hero-mom-is-a-spirit-im-a-reinc-3032.jpg",
        "link": "http://www.nettruyenco.com/truyen-tranh/dad-is-a-hero-mom-is-a-spirit-im-a-reincarnator-224440",
        "message_main": {
            "comment": "Đang tiến hành",
            "genres": "Chichi wa Eiyuu, Haha wa Seirei, Musume no Watashi wa Tenseisha",
            "status": "Fantasy, Manga, Seinen",
            "subscriber": "1.186.491",
            "update_time": "877",
            "view": "Matsuura - Oohori Yukata"
        },
        "title": "Dad is a Hero, Mom is a Spirit, I'm a Reincarnator"
    }
]

// Data get from firebase replace Data for getting from firebase
let Data2;
   const starCountRef = ref(database);
   onValue(starCountRef, (snapshot) => {
       Data2 = snapshot.val();
       console.log( typeof Data2);
   });

const REGEX_UNWANTED_CHARACTERS = /[^\d\-.,]/g
const REGEX_DASHES_EXEPT_BEGINING = /(?!^)-/g
const REGEX_PERIODS_EXEPT_LAST = /\.(?=.*\.)/g

function formatNumber(number) {
    if ((number.match(/e/g) ?? []).length === 1) {
        const numberParts = number.split('e')
        return `${formatNumber(numberParts[0])}e${formatNumber(numberParts[1])}`
    }

    const sanitizedNumber = number
        .replace(REGEX_UNWANTED_CHARACTERS, '')
        .replace(REGEX_DASHES_EXEPT_BEGINING, '')

    if (
        ((sanitizedNumber.match(/,/g) ?? []).length >= 2 && !sanitizedNumber.includes('.')) ||
        ((sanitizedNumber.match(/\./g) ?? []).length >= 2 && !sanitizedNumber.includes(','))
    ) {
        return sanitizedNumber.replace(/[.,]/g, '')
    }

    return sanitizedNumber.replace(/,/g, '.').replace(REGEX_PERIODS_EXEPT_LAST, '')
}

const mangahot = Data.filter((item)=>{
    return item.message_main.comment !=="Đang tiến hành"
}).sort((a, b) => formatNumber(b.message_main.comment) - formatNumber(a.message_main.comment)).slice(0,5);

const mangafull = Data.filter((item)=>{
    return item.detail.status ==='Hoàn thành'
}).slice(0,5);

const mangamoi = Data
    .sort((a, b) => formatNumber(a.message_main.update_time) - formatNumber(b.message_main.update_time))
    .slice(0,5);



const categoriesData = [
    {
        id: 0,
        categoryName: "Hot Nhất",
        mangas: mangahot
    },
    {
        id: 1,
        categoryName: "Mới Nhất",
        mangas: mangamoi
    },
    {
        id: 2,
        categoryName: "Đã Full",
        mangas: mangafull
    },
]

const bookmarkData = []

export {categoriesData,Data2,bookmarkData}
