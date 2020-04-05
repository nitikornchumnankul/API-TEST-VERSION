kubectl autoscale deployment hello-version --cpu-percent=50 --min=1 --max=2 -n test --dry-run -o yaml > autoscale.yaml

