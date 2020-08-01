## feather-icons-vue

Easy to use vue wrapper around feather icons, inheriting color and size from css cascade.
The whole deal about `feather-icons-vue` is that style context `color and size` are inherited.

```html
<h1 class="blue-text">
  This is a big text with a big icon <icon-base name="arrow-right"></icon-base>
</h1>
<!-- Icons is big and has blue color by default because its within an h1 context with blue color. -->
<!-- Default css cascade/inheritance applies -->
<!--  -->
<!-- If you'd explicitly like to have a different colored/sized icon, you can specify icon style with css -->
<h1 class="blue-text">
  This is a big text with a big icon
  <icon-base name="arrow-right" class="red-text sm"></icon-base>
</h1>
<!--  -->
<!-- or with style instead of class -->
<h1 class="blue-text">
  This is a big text with a big icon
  <icon-base
    name="arrow-right"
    style="color: red; font-size: 0.5rem;"
  ></icon-base>
</h1>
```

I decided to make a new one because I like to think of elements (even icons) styling purely in terms of css, no need for passing in props to specify size or color.

## Install

```bash
yarn add feather-icons-vue
# or
npm install feather-icons-vue
```

## Usage

```js
import IconBase from 'feather-icons-vue'

Vue.use(IconBase)
// you can also pass an option object with a custom name
Vue.use(IconBase, {
  as: 'MyIconSprites', // default is IconBase
})
```

then do

```html
<icon-base name="arrow-right" />
or

<IconBase name="arrow-left" />

or if you specified 'as' in options above, you can do

<my-icon-sprites name="arrow-right" />
or

<MyIconSprites name="arrow-left" />
```

## Sizes

By default, icons will be sized based on the current element's font-size (or propagated parent font-size)
Simply set the icon font-size as desired (either by adding css or styling directly)

`feather-icons-vue` ships with some default classes (for size), you can apply like so:

```html
<!-- font-size: 0.5rem -->
<icon-base name="arrow-right" class="xs"></icon-base>
<!-- font-size: 0.7rem -->
<icon-base name="arrow-right" class="sm"></icon-base>
<!-- font-size: 1.5rem -->
<icon-base name="arrow-right" class="md"></icon-base>
<!-- font-size: 2rem -->
<icon-base name="arrow-right" class="lg"></icon-base>
<!-- font-size: 4rem -->
<icon-base name="arrow-right" class="xl"></icon-base>
```

Attributes work also (note this is not a prop, attribute will be attached to root svg element):

```html
<!-- font-size: 0.5rem -->
<icon-base name="arrow-right" xs></icon-base>
<!-- font-size: 0.7rem -->
<icon-base name="arrow-right" sm></icon-base>
<!-- font-size: 1.5rem -->
<icon-base name="arrow-right" md></icon-base>
<!-- font-size: 2rem -->
<icon-base name="arrow-right" lg></icon-base>
<!-- font-size: 4rem -->
<icon-base name="arrow-right" xl></icon-base>
```

## Colors

By default, icons will take the parent's `color`, you can specifically specify icon color by simply adding a color class, like so:

```html
<!-- font-size: 0.5rem -->
<icon-base name="arrow-right" class="blue-icon"></icon-base>
```

then define `.blue-icon` class

```css
.blue-icon {
  color: blue;
}
```

## Styles

You can style icons directly also, instead of classes or size attributes

```html
<icon-base
  name="arrow-right"
  style="color: red; font-size: 0.5rem;"
></icon-base>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**feather-icons-vue** © [damafeez](https://github.com/damafeez), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by damafeez with help from contributors ([list](https://github.com/damafeez/feather-icons-vue)).

> GitHub [@damafeez](https://github.com/damafeez) · Twitter [@damafeez](https://twitter.com/damafeez)
