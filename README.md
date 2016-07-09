# escape-css-selector

Escape css selectors of special characters

```
<html>
    <body>
        <div id="my-id:guid"></div>
        <script>
            $('#my-id:guid') // error, not a valid selector

            var validSelector = escapeCssSelector('#my-id:guid');
            $(validSelector) // hooray!
        </script>
    </body>
</html>
```