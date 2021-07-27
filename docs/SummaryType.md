# KomMonitorHarvesterApi.SummaryType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceDatasetName** | **String** | the name of the imported  source dataset. | [optional] 
**sourceDatasetId** | **String** | the id of the imported  source dataset. | [optional] 
**targetDatasetName** | **String** | the name of the target dataset. | [optional] 
**targetDatasetId** | **String** | the id of the target dataset. | [optional] 
**harvestProcessResult** | **String** | shows information about whether the harvest process of this dataset completed without errors or whether something went wrong | [optional] 
**errorsOccurred** | [**[SummaryTypeErrorsOccurred]**](SummaryTypeErrorsOccurred.md) |  | [optional] 

<a name="HarvestProcessResultEnum"></a>
## Enum: HarvestProcessResultEnum

* `COMPLETED_WITHOUT_ERRORS` (value: `"COMPLETED WITHOUT ERRORS"`)
* `ERRORS_OCCURRED` (value: `"ERRORS OCCURRED"`)

