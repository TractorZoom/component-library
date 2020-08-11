# Select Props

| value          | required | description                                                                  |
| -------------- | -------- | ---------------------------------------------------------------------------- |
| dataCy         | no       | string added as the data-cy attribute on the input element                   |
| darkMode       | no       | boolean to indicate if styling should be inverted to be on a dark background |
| error          | no       | boolean value to indicate if text field should denote errored                |
| helperText     | no       | string value of helper text displayed below select                           |
| label          | yes      | string label for the input                                                   |
| options        | yes      | array of options                                                             |
| color          | no       | theme color for the input                                                    |
| renderOption   | no       | function used to render options in the dropdown                              |
| required       | no       | boolean value to indicate if text field should denote required               |
| selectedOption | no       | option that is currently selected                                            |

Additional props will be passed to [@material-ui/lab/Autocomplete](https://material-ui.com/api/autocomplete/)
