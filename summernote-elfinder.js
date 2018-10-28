

var BsElfinderAddon = {
    VideoExt: ".avi,.mp4,.mkv,.wmp,.ogg,.ogv",
    ImageExt: ".png,.gif,.jpeg,.jpg,.tif,.png",
    FileExt: "",
    ConnectorUrl: "/connector",
    DialogH: 450,
    DialogW: 840,
    Lang: "tr"
};


function GetElfinder(Extentions, onFileSectednFunction) {

    var fm = $('<div id="elfinderdialog"/>').dialogelfinder({
        url: BsElfinderAddon.ConnectorUrl,
        lang: BsElfinderAddon.Lang,
        width: BsElfinderAddon.DialogW,
        height: BsElfinderAddon.DialogH,
        destroyOnClose: true,
        customData: { ext: Extentions },
        onlyMimes: ["image/png", "application/x-shockwave-flash"], // display png and flash
        getFileCallback: function (file, fm) {
            onFileSectednFunction(file);
            $("#elfinderdialog").each(function (ell) { $(this).remove() });
        },
        commandsOptions: {
            getfile: {
                oncomplete: 'close',
                folders: false
            }
        }
    }).dialogelfinder('instance');


}


$(document).ready(function () {


    $(window).on("shown.bs.modal", function ($dialog, handler) {
        console.log($dialog);
        console.log($($dialog.target).hasClass("link-dialog"));
        var Sourche = $($dialog.target);
        var FormGroup = $('<div class="input-group"/>');
        var btn = $('<div class="input-group-append"><button class="btn btn-info btn-sunucuda-gez" type="button">...</button></div>');
        var $btn = Sourche.find(".btn-sunucuda-gez");
        var ui = $.summernote.ui;
            var $TargetButton = null;




        if ($($dialog.target).find(".note-group-image-url").length == 1) {
            //foto işlemleri yapılıyor
            if ($btn.length == 0) {
                $($dialog.target).find(".note-group-image-url").append(FormGroup);
                FormGroup.append($($dialog.target).find(".note-image-url")).append(btn)

            }

            $btn = Sourche.find(".btn-sunucuda-gez");
            var $imageInput = Sourche.find('.note-image-input');
            var $imageUrl = Sourche.find('.note-image-url');
            $TargetButton = Sourche.find('.note-image-btn');


            $btn.on("click", function () {

                GetElfinder(BsElfinderAddon.ImageExt, function (file) {
                    $imageUrl.val(file.path);
                    var url = $imageUrl.val();
                    ui.toggleBtn($TargetButton, url);

                });

            });






        };

        if ($($dialog.target).hasClass("link-dialog")) {
            //foto işlemleri yapılıyor
            var $LinkUrl = Sourche.find(".note-link-url");
            $btn = Sourche.find(".btn-sunucuda-gez");
            console.log($btn)

            if ($btn.length == 0) {
                $LinkUrl.parent().append(FormGroup);


                FormGroup.append($LinkUrl).append(btn)

            }

            $btn = Sourche.find(".btn-sunucuda-gez");


            var $linkText = Sourche.find('.note-link-text');

            $TargetButton = Sourche.find('.note-link-btn');

            $btn.on("click", function () {

                GetElfinder(BsElfinderAddon.FileExt, function (file) {
                    $LinkUrl.val(file.path);
                    var url = $LinkUrl.val();
                     ui.toggleBtn($TargetButton, $linkText.val() && $LinkUrl.val())
                })

            });






        }






        if ($($dialog.target).find(".note-video-url").length==1) {


            var VideoUrl=$($dialog.target).find(".note-video-url")

            if ($btn.length == 0) {
                VideoUrl.parent().append(FormGroup);
                FormGroup.append(VideoUrl).append(btn);

            }

            $btn = Sourche.find(".btn-sunucuda-gez");
           
            $TargetButton = Sourche.find('.note-video-btn');


            $btn.on("click", function () {

                GetElfinder(BsElfinderAddon.VideoExt, function (file) {
                    VideoUrl.val(file.path);
                    var url = VideoUrl.val();
                    ui.toggleBtn($TargetButton, url);

                });

            });






        }




        if ($($dialog.target).find(".note-video-attributes-btn").length==1) {


            var VideoUrl = $($dialog.target).find(".note-video-attributes-href");

            if ($btn.length == 0) {
                VideoUrl.parent().append(FormGroup);
                FormGroup.append(VideoUrl).append(btn);
             }

            $btn = Sourche.find(".btn-sunucuda-gez");
           
            $TargetButton = Sourche.find('.note-video-attributes-href');


            $btn.on("click", function () {

                GetElfinder(BsElfinderAddon.VideoExt, function (file) {
                    VideoUrl.val(file.path);
                    var url = VideoUrl.val();
                    ui.toggleBtn($TargetButton, url);

                });

            });






        }

        console.log();
    });
});


