# Item descriptions

The game item descriptions have codes within them that make the game display those values differently. Below is an example from the Boltcaster 
```
Generalist weapon attachment for the <TECHNOLOGY>Multi-Tool<>. Access fire mode by pressing <IMG>CYCLEWEAPON<> and fire weapon with <IMG>ATTACK<>.\n\nThe <TECHNOLOLY>Boltcaster<> reconfigures the Multi-Tool to supercharge <EARTH>Metallic Elements<>, firing them as <STELLAR>high-velocity projectiles<> capable of causing extreme damage.
```

## Handling the "tags"

Certain items like `<TECHNOLOGY>Multi-Tool<>` are easy to handle, they simply mean that the text "Multi-Tool" should have a lightblue colour. Where codes like `<IMG>CYCLEWEAPON<>` require an image to be placed in that position. The image is based on the text between the `<>`.

## Fetching the data from the game files

ControllerSpec files contain an combination of the InputButtonId (name of the button in the NMS game files) and a path to the image file. The files are
`TKCONTROLLERSPECPS5.MBIN`, `TKCONTROLLERSPECXBOX.MBIN`, `TKCONTROLLERSPECMOUSE.MBIN`, `TKCONTROLLERSPECKEYBOARD.MBIN`, 

InputBindings files contain a list of items that have a InputActionId (value used in game item descriptions) and the InputButtonId. The files are
`GCINPUTBINDINGS_PS4_DS4PAD.MBIN`, `GCINPUTBINDINGS_XBOXONE_PAD.MBIN`, `GCINPUTBINDINGS_WIN_MOUSE.MBIN`, `GCINPUTBINDINGS_WIN_KEYBOARD.MBIN`, 

Using this regex (`<IMG>(\w+\s*)+<>`) we look for the values of all the tags that require images from all the items displayed in the apps. The values from this are the InputActionId.



