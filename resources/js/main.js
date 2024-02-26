function hamburgerBtn() {
    const menuWidth = document.getElementById("hamburger").style.transform;

    if (menuWidth == "translateX(278px)") {
        document.getElementById("hamburger").style.transform = "translateX(0)";
    } else {
        document.getElementById("hamburger").style.transform = "translateX(278px)";
    }
}

function openNav() {
    const sideBarWidth = document.getElementById("mySidenav").style.transform;
    
    if (sideBarWidth == "translateX(120px)") {
        document.getElementById("mySidenav").style.transform = "translateX(0)";
        document.getElementById("close-open").style.transform = "rotate(0deg)";
    } else {
        document.getElementById("mySidenav").style.transform = "translateX(120px)";
        document.getElementById("close-open").style.transform = "rotate(180deg)";
    }
}

$(function() {
    (function(name) {
        var container = $('#pagination-' + name);
        if (!container.length) return;
        var sources = function () {
            var result = [
                {
                    id: 1,
                    title: "Cập nhật phiên bản 14.5",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Nâng cấp tính năng giao dịch, tăng cường bảo mật rương đồ",
                    date: "16/06",
                },
                {
                    id: 3,
                    title: "Hướng dẫn nâng cấp trang bị thú cưng",
                    date: "11/06",
                },
                {
                    id: 4,
                    title: 'Sự kiện "Ngày Hè Sôi Động"',
                    date: "06/06",
                },
                {
                    id: 5,
                    title: "Mở tính năng đăng ký Bang Hội",
                    date: "01/06",
                },
                {
                    id: 6,
                    title: 'Thông báo Gộp máy chủ S1 "Hoang Đế" và S2 "Hoàng..."',
                    date: "01/06",
                },
                {
                    id: 7,
                    title: 'Máy chủ mới S99 "Thiên Nam Môn"',
                    date: "31/05",
                },
                {
                    id: 8,
                    title: 'Mở phó bản mới "Đaị Liêu Kim Tướng"',
                    date: "15/05",
                },
                {
                    id: 9,
                    title: 'Nâng cấp tính năng "Sư Đồ" Thêm kỹ năng, thêm v...',
                    date: "06/05",
                },
                {
                    id: 10,
                    title: 'Mở phó bản mới "Khiêu Chiến Nhất Phẩm Đường"',
                    date: "22/04",
                },

                {
                    id: 11,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 12,
                    title: "b",
                    date: "16/06",
                },
                {
                    id: 13,
                    title: "c",
                    date: "11/06",
                },
                {
                    id: 14,
                    title: "d",
                    date: "06/06",
                },
                {
                    id: 15,
                    title: "e",
                    date: "01/06",
                },
                {
                    id: 16,
                    title: "f",
                    date: "01/06",
                },
                {
                    id: 17,
                    title: "g",
                    date: "31/05",
                },
                {
                    id: 18,
                    title: "h",
                    date: "15/05",
                },
                {
                    id: 19,
                    title: "h",
                    date: "06/05",
                },
                {
                    id: 20,
                    title: "i",
                    date: "22/04",
                },

                {
                    id: 21,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 22,
                    title: "b",
                    date: "16/06",
                },
                {
                    id: 23,
                    title: "c",
                    date: "11/06",
                },
                {
                    id: 24,
                    title: "d",
                    date: "06/06",
                },
                {
                    id: 25,
                    title: "e",
                    date: "01/06",
                },
                {
                    id: 26,
                    title: "f",
                    date: "01/06",
                },
                {
                    id: 27,
                    title: "g",
                    date: "31/05",
                },
                {
                    id: 28,
                    title: "h",
                    date: "15/05",
                },
                {
                    id: 29,
                    title: "h",
                    date: "06/05",
                },
                {
                    id: 30,
                    title: "i",
                    date: "22/04",
                },

                {
                    id: 21,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 22,
                    title: "b",
                    date: "16/06",
                },
                {
                    id: 23,
                    title: "c",
                    date: "11/06",
                },
                {
                    id: 24,
                    title: "d",
                    date: "06/06",
                },
                {
                    id: 25,
                    title: "e",
                    date: "01/06",
                },
                {
                    id: 26,
                    title: "f",
                    date: "01/06",
                },
                {
                    id: 27,
                    title: "g",
                    date: "31/05",
                },
                {
                    id: 28,
                    title: "h",
                    date: "15/05",
                },
                {
                    id: 29,
                    title: "h",
                    date: "06/05",
                },
                {
                    id: 30,
                    title: "i",
                    date: "22/04",
                },

                {
                    id: 21,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 22,
                    title: "b",
                    date: "16/06",
                },
                {
                    id: 23,
                    title: "c",
                    date: "11/06",
                },
                {
                    id: 24,
                    title: "d",
                    date: "06/06",
                },
                {
                    id: 25,
                    title: "e",
                    date: "01/06",
                },
                {
                    id: 26,
                    title: "f",
                    date: "01/06",
                },
                {
                    id: 27,
                    title: "g",
                    date: "31/05",
                },
                {
                    id: 28,
                    title: "h",
                    date: "15/05",
                },
                {
                    id: 29,
                    title: "h",
                    date: "06/05",
                },
                {
                    id: 30,
                    title: "i",
                    date: "22/04",
                },

                {
                    id: 21,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 22,
                    title: "b",
                    date: "16/06",
                },
                {
                    id: 23,
                    title: "c",
                    date: "11/06",
                },
                {
                    id: 24,
                    title: "d",
                    date: "06/06",
                },
                {
                    id: 25,
                    title: "e",
                    date: "01/06",
                },
                {
                    id: 26,
                    title: "f",
                    date: "01/06",
                },
                {
                    id: 27,
                    title: "g",
                    date: "31/05",
                },
                {
                    id: 28,
                    title: "h",
                    date: "15/05",
                },
                {
                    id: 29,
                    title: "h",
                    date: "06/05",
                },
                {
                    id: 30,
                    title: "i",
                    date: "22/04",
                },

                {
                    id: 21,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 22,
                    title: "b",
                    date: "16/06",
                },
                {
                    id: 23,
                    title: "c",
                    date: "11/06",
                },
                {
                    id: 24,
                    title: "d",
                    date: "06/06",
                },
                {
                    id: 25,
                    title: "e",
                    date: "01/06",
                },
                {
                    id: 26,
                    title: "f",
                    date: "01/06",
                },
                {
                    id: 27,
                    title: "g",
                    date: "31/05",
                },
                {
                    id: 28,
                    title: "h",
                    date: "15/05",
                },
                {
                    id: 29,
                    title: "h",
                    date: "06/05",
                },
                {
                    id: 30,
                    title: "i",
                    date: "22/04",
                },

                {
                    id: 21,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 22,
                    title: "b",
                    date: "16/06",
                },
                {
                    id: 23,
                    title: "c",
                    date: "11/06",
                },
                {
                    id: 24,
                    title: "d",
                    date: "06/06",
                },
                {
                    id: 25,
                    title: "e",
                    date: "01/06",
                },
                {
                    id: 26,
                    title: "f",
                    date: "01/06",
                },
                {
                    id: 27,
                    title: "g",
                    date: "31/05",
                },
                {
                    id: 28,
                    title: "h",
                    date: "15/05",
                },
                {
                    id: 29,
                    title: "h",
                    date: "06/05",
                },
                {
                    id: 30,
                    title: "i",
                    date: "22/04",
                },

                {
                    id: 21,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 22,
                    title: "b",
                    date: "16/06",
                },
                {
                    id: 23,
                    title: "c",
                    date: "11/06",
                },
                {
                    id: 24,
                    title: "d",
                    date: "06/06",
                },
                {
                    id: 25,
                    title: "e",
                    date: "01/06",
                },
                {
                    id: 26,
                    title: "f",
                    date: "01/06",
                },
                {
                    id: 27,
                    title: "g",
                    date: "31/05",
                },
                {
                    id: 28,
                    title: "h",
                    date: "15/05",
                },
                {
                    id: 29,
                    title: "h",
                    date: "06/05",
                },
                {
                    id: 30,
                    title: "i",
                    date: "22/04",
                },

                {
                    id: 21,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 22,
                    title: "b",
                    date: "16/06",
                },
                {
                    id: 23,
                    title: "c",
                    date: "11/06",
                },
                {
                    id: 24,
                    title: "d",
                    date: "06/06",
                },
                {
                    id: 25,
                    title: "e",
                    date: "01/06",
                },
                {
                    id: 26,
                    title: "f",
                    date: "01/06",
                },
                {
                    id: 27,
                    title: "g",
                    date: "31/05",
                },
                {
                    id: 28,
                    title: "h",
                    date: "15/05",
                },
                {
                    id: 29,
                    title: "h",
                    date: "06/05",
                },
                {
                    id: 30,
                    title: "i",
                    date: "22/04",
                },
            ];

            return result;
        }();

        var options = {
            dataSource: sources,
            callback: function (response, pagination) {
                window.console && console.log(response, pagination);

                var dataHtml = '<div class="board-info flex flex-col gap-3 mt-8">';

                $.each(response, function (index, item) {
                    dataHtml += `
                                <a href="news-detail.html">
                                    <div class="flex justify-between border-b border-[#385a54]">  
                                        <p class="max-w-[675px] truncate"> ${item.title} </p>
                                        <p> ${item.date} </p>
                                    </div>
                                </a>
                                `;
                });

                dataHtml += '</div>';

                container.prev().html(dataHtml);
            }
        };

      //$.pagination(container, options);
        container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
        });
    })('tintuc');
})

$(function() {
    (function(name) {
        var container = $('#pagination-' + name);
        if (!container.length) return;
        var sources = function () {
            var result = [
                {
                    id: 1,
                    title: "Nâng cấp tính năng giao dịch, tăng cường bảo mật r...",
                    date: "22/06",
                    content: `<div><p>abc</p></div>`
                },
            ];

            return result;
        }();

        var options = {
            dataSource: sources,
            callback: function (response, pagination) {
                window.console && console.log(response, pagination);

                var dataHtml = '<div class="board-info flex flex-col gap-3 mt-16">';

                $.each(response, function (index, item) {
                    dataHtml += `
                    <a href="news-detail.html">
                    <div class="flex justify-between border-b border-[#385a54]">  
                        <p class="max-w-[675px] truncate"> ${item.title} </p>
                        <p> ${item.date} </p>
                    </div>
                </a>
                                `;
                });

                dataHtml += '</div>';

                container.prev().html(dataHtml);
            }
        };

      //$.pagination(container, options);
        container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
        });
    })('sukien');
})

$(function() {
    (function(name) {
        var container = $('#pagination-' + name);
        if (!container.length) return;
        var sources = function () {
            var result = [
                {
                    id: 1,
                    title: "Tinh Nang",
                    date: "22/06",
                },
            ];

            return result;
        }();

        var options = {
            dataSource: sources,
            callback: function (response, pagination) {
                window.console && console.log(response, pagination);

                var dataHtml = '<div class="board-info flex flex-col gap-3 mt-16">';

                $.each(response, function (index, item) {
                    dataHtml += `
                    <a href="news-detail.html">
                    <div class="flex justify-between border-b border-[#385a54]">  
                        <p class="max-w-[675px] truncate"> ${item.title} </p>
                        <p> ${item.date} </p>
                    </div>
                </a>
                                `;
                });

                dataHtml += '</div>';

                container.prev().html(dataHtml);
            }
        };

      //$.pagination(container, options);
        container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
        });
    })('tinhnang');
})

$(function() {
    (function(name) {
        var container = $('#pagination-' + name);
        if (!container.length) return;
        var sources = function () {
            var result = [
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
            ];

            return result;
        }();

        var options = {
            dataSource: sources,
            callback: function (response, pagination) {
                window.console && console.log(response, pagination);

                var dataHtml = '<div class="board-info flex flex-col gap-3 mt-16">';

                $.each(response, function (index, item) {
                    dataHtml += `
                    <a href="news-detail.html">
                    <div class="flex justify-between border-b border-[#385a54]">  
                        <p class="max-w-[675px] truncate"> ${item.title} </p>
                        <p> ${item.date} </p>
                    </div>
                </a>
                                `;
                });

                dataHtml += '</div>';

                container.prev().html(dataHtml);
            }
        };

      //$.pagination(container, options);
        container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
        });
    })('huongdan');
})

$(function() {
    (function(name) {
        var container = $('#pagination-' + name);
        if (!container.length) return;
        var sources = function () {
            var result = [
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
            ];

            return result;
        }();

        var options = {
            dataSource: sources,
            pageSize: 20,
            callback: function (response, pagination) {
                window.console && console.log(response, pagination);

                var dataHtml = '<div class="board-info flex flex-col gap-3 mt-16">';

                $.each(response, function (index, item) {
                    dataHtml += `
                    <a href="news-detail.html">
                    <div class="flex justify-between border-b border-[#385a54]">  
                        <p class="max-w-[675px] truncate"> ${item.title} </p>
                        <p> ${item.date} </p>
                    </div>
                </a>
                                `;
                });

                dataHtml += '</div>';

                container.prev().html(dataHtml);
            }
        };

      //$.pagination(container, options);
        container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
        });
    })('news');
})
$(function() {
    (function(name) {
        var container = $('#pagination-' + name);
        if (!container.length) return;
        var sources = function () {
            var result = [
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
            ];

            return result;
        }();

        var options = {
            dataSource: sources,
            pageSize: 20,
            callback: function (response, pagination) {
                window.console && console.log(response, pagination);

                var dataHtml = '<div class="board-info flex flex-col gap-3 mt-16">';

                $.each(response, function (index, item) {
                    dataHtml += `
                    <a href="news-detail.html">
                    <div class="flex justify-between border-b border-[#385a54]">  
                        <p class="max-w-[675px] truncate"> ${item.title} </p>
                        <p> ${item.date} </p>
                    </div>
                </a>
                                `;
                });

                dataHtml += '</div>';

                container.prev().html(dataHtml);
            }
        };

      //$.pagination(container, options);
        container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
        });
    })('event');
})
$(function() {
    (function(name) {
        var container = $('#pagination-' + name);
        if (!container.length) return;
        var sources = function () {
            var result = [
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
            ];

            return result;
        }();

        var options = {
            dataSource: sources,
            pageSize: 20,
            callback: function (response, pagination) {
                window.console && console.log(response, pagination);

                var dataHtml = '<div class="board-info flex flex-col gap-3 mt-16">';

                $.each(response, function (index, item) {
                    dataHtml += `
                    <a href="news-detail.html">
                    <div class="flex justify-between border-b border-[#385a54]">  
                        <p class="max-w-[675px] truncate"> ${item.title} </p>
                        <p> ${item.date} </p>
                    </div>
                </a>
                                `;
                });

                dataHtml += '</div>';

                container.prev().html(dataHtml);
            }
        };

      //$.pagination(container, options);
        container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
        });
    })('feature');
})
$(function() {
    (function(name) {
        var container = $('#pagination-' + name);
        if (!container.length) return;
        var sources = function () {
            var result = [
                {
                    id: 1,
                    title: "a",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 1,
                    title: "Huong Dan",
                    date: "22/06",
                },
                {
                    id: 2,
                    title: "Huong Dan",
                    date: "22/06",
                },
            ];

            return result;
        }();

        var options = {
            dataSource: sources,
            pageSize: 20,
            callback: function (response, pagination) {
                window.console && console.log(response, pagination);

                var dataHtml = '<div class="board-info flex flex-col gap-3 mt-16">';

                $.each(response, function (index, item) {
                    dataHtml += `
                    <a href="news-detail.html">
                    <div class="flex justify-between border-b border-[#385a54]">  
                        <p class="max-w-[675px] truncate"> ${item.title} </p>
                        <p> ${item.date} </p>
                    </div>
                </a>
                                `;
                });

                dataHtml += '</div>';

                container.prev().html(dataHtml);
            }
        };

      //$.pagination(container, options);
        container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
        });
    })('instruct');
})

$(document).ready(function(){
    $('#btn-1 h6').hover(function(){
        $('#btn-img-1').css('visibility', 'visible');
    })
    $('#btn-1').mouseout(function(){
        $("#btn-img-1").css('visibility', 'hidden');
    })

    $('#btn-2 h6').hover(function(){
        $('#btn-img-2').css('visibility', 'visible');
    })
    $('#btn-2').mouseout(function(){
        $("#btn-img-2").css('visibility', 'hidden');
    })

    $('#btn-3 h6').hover(function(){
        $('#btn-img-3').css('visibility', 'visible');
    })
    $('#btn-3').mouseout(function(){
        $("#btn-img-3").css('visibility', 'hidden');
    })

    $('#btn-4 h6').hover(function(){
        $('#btn-img-4').css('visibility', 'visible');
    })
    $('#btn-4').mouseout(function(){
        $("#btn-img-4").css('visibility', 'hidden');
    })
});

$(document).ready(function(){
    $('#news-btn-1 h6').hover(function(){
        $('#news-btn-img-1').css('visibility', 'visible');
    })
    $('#news-btn-1').mouseout(function(){
        $("#news-btn-img-1").css('visibility', 'hidden');
    })

    $('#news-btn-2 h6').hover(function(){
        $('#news-btn-img-2').css('visibility', 'visible');
    })
    $('#news-btn-2').mouseout(function(){
        $("#news-btn-img-2").css('visibility', 'hidden');
    })

    $('#news-btn-3 h6').hover(function(){
        $('#news-btn-img-3').css('visibility', 'visible');
    })
    $('#news-btn-3').mouseout(function(){
        $("#news-btn-img-3").css('visibility', 'hidden');
    })

    $('#news-btn-4 h6').hover(function(){
        $('#news-btn-img-4').css('visibility', 'visible');
    })
    $('#news-btn-4').mouseout(function(){
        $("#news-btn-img-4").css('visibility', 'hidden');
    })
});

