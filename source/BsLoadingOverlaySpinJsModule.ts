export default angular.module('bsLoadingOverlaySpinJs', ['angularSpinner'])
    .run([
        '$templateCache',
        ($templateCache: ng.ITemplateCacheService) =>
            $templateCache.put(
                'bsLoadingOverlaySpinJs',
                '<div us-spinner="{{bsLoadingOverlayTemplateOptions}}"></div>'
            )
    ]);
