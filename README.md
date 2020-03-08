## vuejs-feather

An easy-to-use Vue wrapper for the awesome feather icons

## Install

```bash
yarn add vuejs-feather
```

## Usage

```js
// Only import what you need!
import VueFeather from "vuejs-feather";

Vue.use(VueFeather);
```

then do

```html
<icon-base name="arrow-right"></icon-base>
or

<IconBase name="arrow-left"></IconBase>
```

See all icons at (Feather)[https://feathericons.com/]

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

## Tree-shaking

`vuejs-feather` currently does not support tree-shaking and currently ships with all [Feather svg Icons](view-source:https://unpkg.com/feather-icons@4.26.0/dist/feather-sprite.svg) which is around 67kb. We're working to add tree-shaking to only include used icons.

## Worth Mentioning

- `vuejs-feather` is based on [Feather Icons](https://feathericons.com/) but can be extended to use external sprites like so:

```html
<icon-base name="arrow-right" src="/path-to-sprite.svg"></icon-base>
```

- I drew inspiration heavily from [vue-feather-icons](https://github.com/damafeez/vue-feather-icons)(might be worth your time to see), I just prefer this approach of importing a light-weight global component and then specifying the `name` of the icon to use, instead of importing them one by one.

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
