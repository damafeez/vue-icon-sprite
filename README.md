## vue-icon-sprite

An easy-to-use svg-sprites wrapper for vue

## Install

```bash
yarn add vue-icon-sprite
```

## Usage

```js
import IconBase from "vue-icon-sprite";

Vue.use(IconBase);
// you can also pass an option object with custom name and/or svg-sprite
Vue.use(IconBase, {
  as: "MyIconSprites", // default is IconBase
  src: require("@/assets/where-my-icon-leaves.svg") // location of your svg icon sprites, if you put your sprite in /assets/icons.svg you wouldn't have to specify this
});
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

you can specify sprite src inline also, like so:
<icon-base :src="require('@/assets/feather.svg')" name="arrow-right" />
```

## Sizes

By default, icons will be sized based on the current element's font-size (or propagated parent font-size)
Simply set the icon font-size as desired (either by adding css or styling directly)

`vuejs-feather` ships with some default classes (for size), you can apply like so:

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

## Colors

By default, icons will take the parent's `color`, you can override this by simply adding a color class or (size), like so:

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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**vuejs-feather** © [damafeez](https://github.com/damafeez), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by damafeez with help from contributors ([list](https://github.com/damafeez/vuejs-feather)).

> GitHub [@damafeez](https://github.com/damafeez) · Twitter [@damafeez](https://twitter.com/damafeez)
