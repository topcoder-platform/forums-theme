# Topcoder Theme

## Description

Custom theme for Topcoder Theme.


## Notes

- This theme needs the `Feature.NewFlyouts.Enabled` config set as `true` for the flyouts to work properly.
- The theme name should be equal the `key` property in `addon.json` (example it should be `topcoder` with current key value)

## Building Styles / Javascript / Images

- Install dependencies:
```
npm i
```

- This theme is built with the [Vanilla CLI](https://docs.vanillaforums.com/developer/vanilla-cli/) and does not come with its own build toolchain. With that installed you can simply run:

```bash
vanilla build --vanillasrc ./
```

or

```bash
vanilla build --vanillasrc ./ --watch
```

to build your styles/js/images.



Documentation for the CLI can be found [here](https://docs.vanillaforums.com/developer/vanilla-cli/#build-tools).
