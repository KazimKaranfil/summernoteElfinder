A plugin for the Summernote WYSIWYG editor.

summernote ile Elfinder entegrasyonu yapar. Vide, Fotoğraf ve link eklemede elfinder çalıştırılarak sunucu taraflı dosyalara erişmenizi sağlar

Installation - Yükleme
1. Include JS - 
Include the following code after Summernote:

<script src="summernote-video-attributes.js"></script>

<script src="summernote-elfinder.js"></script>


3. Summernote options
Finally, customize the Summernote image popover.

Varsayılan arlar : 
BsElfinderAddon = {
    VideoExt: ".avi,.mp4,.mkv,.wmp,.ogg,.ogv",
    ImageExt: ".png,.gif,.jpeg,.jpg,.tif,.png",
    FileExt: "",
    ConnectorUrl: "/connector",
    DialogH: 450,
    DialogW: 840,
    Lang: "tr"
};


Örnek kod:
$(document).ready(function() {
BsElfinderAddon.VideoExt= ".avi,.mp4,.mkv,.wmp,.ogg,.ogv";
 $('#summernote').summernote();
});

4. Check out our other Summernote Plugins via our main Github page.
