# AssistantApps.NoMansSky.Info

> This is a package that lets you get the latest No Man's Sky datamined information from the Assistant for No Man's Sky app. It simple adds the json files that the Android, iOS, Web and Desktop apps use.

Available from: [nuget.org/packages/AssistantApps.NoMansSky.Info](https://www.nuget.org/packages/AssistantApps.NoMansSky.Info/)

## Versioning
This nuget package's versioning is based on the version number of the No Man's Sky game files that the data comes from and follows the following format: 

_GameMajorVersion_ - _GameMinorVersion_ - _PackageBuildNumber_.

For example if the game version used was **3.89** then the nuget version will start with **3.89**. The last number in the version string is the build number of the package. This the build number for the AssistantNMS organisation, so it will not be consecutive as their are a few private builds within the organisation.

### WebApi usage example
On build the nuget package will place all the json and data files inside of the `bin/` folder.

The [AssistantNMS API](https://api.nmsassistant.com) makes use of this package and loads the directory using the following code:

```csharp
  string codeBasePath = Assembly.GetExecutingAssembly().GetName().CodeBase;
  string binFolderPath = Path.GetDirectoryName(codeBasePath).Substring(6); // This removes the 'file:/' prefix
  string assetsFolderPath = Path.Combine(binFolderPath, "Assets");
```
