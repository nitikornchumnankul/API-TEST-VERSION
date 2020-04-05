# API-TEST-VERSION

# applied 
 - [x]  deployment.apps/podinfo
 - [x] horizontalpodautoscaler.autoscaling/podinfo
 - [ ]  canary.flagger.app/podinfo

# generated 
 - [ ]  deployment.apps/podinfo-primary
 - [ ]  horizontalpodautoscaler.autoscaling/podinfo-primary
 - [ ]  service/podinfo
 - [ ]  service/podinfo-canary
 - [ ]  service/podinfo-primary
 - [ ]  destinationrule.networking.istio.io/podinfo-canary
 - [ ]  destinationrule.networking.istio.io/podinfo-primary
 - [ ]  virtualservice.networking.istio.io/podinfo
