# KomMonitorHarvesterApi.AuthenticationType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | the authentication type | [optional] 
**username** | **String** | the user name to authenticate against KomMonitor instance | [optional] 
**password** | **String** | the user password to authenticate against KomMonitor instance (encrypted) | [optional] 
**keycloakUrl** | **String** | optional url of Keycloak instance URL to authenticate if type&#x3D;&#x27;KEYCLOAK&#x27; | [optional] 
**keycloakRealm** | **String** | optional name of Keycloak realm to authenticate if type&#x3D;&#x27;KEYCLOAK&#x27; | [optional] 
**keycloakClientId** | **String** | optional clientId of Keycloak realm to authenticate if type&#x3D;&#x27;KEYCLOAK&#x27; | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `BASICAUTH` (value: `"BASICAUTH"`)
* `KEYCLOAK` (value: `"KEYCLOAK"`)

