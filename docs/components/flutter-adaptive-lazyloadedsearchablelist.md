# Flutter - LazyLoadedSearchableList

> This loads elements as the user scrolls down. A good example of this is the donations page in the [Assistant for No Man's Sky app](https://nmsassistant.com). It loads the 20 latest donations initially and as the user reaches the bottom of the list, the next page is fetched and placed at the end of the list.

Available from: [github.com/AssistantApps/Flutter.Common](https://github.com/AssistantApps/Flutter.Common)

### Params
 - listGetter: `Future<ResultWithValue<List<T>>>` - **Required**
 - pageSize: `int`  - **Required**
 - listItemDisplayer: `Widget Function(BuildContext, T)`  - _Named_ - **Optional**
 - listItemWithIndexDisplayer: `Widget Function(BuildContext, T, int)`  - _Named_ - **Optional**
 - customKey: `Key`  - _Named_ - **Optional**
 - backupListGetter: `Future<ResultWithValue<List<T>>>`  - _Named_ - **Optional**
 - hintText: `String`  - _Named_ - **Optional**
 - loadingText: `String`  - _Named_ - **Optional**
 - addFabPadding: `bool`  - _Named_ - **Optional** - DefaultValue: `false`
 - loadMoreItemWidget: `Widget`  - _Named_ - **Optional**
 - errorMessage: `String`  - _Named_ - **Optional**
 - emptyMessage: `String`  - _Named_ - **Optional**

### Used in 


