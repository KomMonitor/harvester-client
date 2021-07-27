# KomMonitorHarvesterApi.HarvesterApi

All URIs are relative to *http://localhost:8089/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeHarvesting**](HarvesterApi.md#executeHarvesting) | **POST** /harvest/execute | Perform harvesting process according to submitted config.

<a name="executeHarvesting"></a>
# **executeHarvesting**
> HarvesterOutputType executeHarvesting(body)

Perform harvesting process according to submitted config.

Perform harvesting process according to submitted config.

### Example
```javascript
import {KomMonitorHarvesterApi} from 'kom_monitor_harvester_api';

let apiInstance = new KomMonitorHarvesterApi.HarvesterApi();
let body = new KomMonitorHarvesterApi.HarvesterInputType(); // HarvesterInputType | details necessary to execute harvesting process

apiInstance.executeHarvesting(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HarvesterInputType**](HarvesterInputType.md)| details necessary to execute harvesting process | 

### Return type

[**HarvesterOutputType**](HarvesterOutputType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

