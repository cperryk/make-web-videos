# MakeWebVideos #

MakeWebVideos is a command-line utility for automatically generating web-ready videos from a set of mp4, ogg, or webm videos. By inputting a file glob and an out directory, makeWebVideos will export mp4, ogv, and webm copies of the videos.

## Installation ##
`npm install -g make-web-videos`

## Prerequisites ##

You must have ffmpeg installed. If this script silently fails, it may be because you do not have ffmpeg installed.

On Mac, you can install ffmpeg using macports: `port install ffmpeg`

## Usage ##

### Command Line ###

makeWebVideos &lt;input_glob&gt; [options]

#### Options ####

| option   | alias    | default | required | description                                           |
|----------|----------|---------|----------|-------------------------------------------------------|
| -o [dir] | --out    | none    | yes      | The directory to which to export the new video files. |
| -w [int]       | --width  | 540     | no       | The width of the export videos.                       |
| -h [int]       | --height | 304     | no       | The height of the export videos.                      |

#### Example ####

The following code will convert all mp4 videos in the current directory and output
new videos to an "out" directory. If "out" does not exist, it will be created.

```
makeWebVideos **.mp4 -o out
```

#### Usage Notes ####

- If the out directory doesn't exist, it will be automatically created.
- Any files in the out directory will be overwritten.


## Development Notes ##
- This relies on a branch of html5-media-converter. The branch circumvents some bugs related to mp4 conversions.

## To-do ##
- Programmatic API.
- Optional resizing.
