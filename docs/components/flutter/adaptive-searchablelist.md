# SearchableList

> This is the base of all searchable lists and grids

Available from: [github.com/AssistantApps/Flutter.Common](https://github.com/AssistantApps/Flutter.Common)

### Params
 - listGetter: `Future<ResultWithValue<List<T>>>` - **Required**
 - listItemSearch: `bool Function(T, String)` - **Optional**
 - listItemDisplayer: `Widget Function(BuildContext, T)` - **Optional**
 - listItemWithIndexDisplayer: `Widget Function(BuildContext, T, int)` - **Optional**
 - key: `Key` - **Optional**
 - firstListItemWidget: `Widget` - **Optional**
 - lastListItemWidget: `Widget` - **Optional**
 - hintText: `String` - **Optional**
 - loadingText: `String` - **Optional**
 - deleteAll: `void Function()` - **Optional**
 - minListForSearch: `int` - **Optional** - DefaultValue: `10`
 - addFabPadding: `bool` - **Optional** - DefaultValue: `false`
 - backupListGetter: `Future<ResultWithValue<List<T>>>` - **Optional**
 - backupListWarningMessage: `LocaleKey` - **Optional**

### Used in 
- [LazyLoadedSearchList](components/flutter-adaptive-lazyloadedsearchablelist.md)


