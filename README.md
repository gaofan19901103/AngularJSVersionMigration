# AngularJSVersionMigration
This is a project to understand the difference between AngularJS 1.5, 1.6, 1.7

In Angular 1.5x, the bindings/scope for a Directive can be accessed from controller itself and the life cycle hooks.
It seems that the Angular team think that it is not very good to have the binding/scope available inside both controller and life cycle hooks. 
So $compileProvider.preAssignBindingsEnabled(true) is introduced from 1.6x to make the bindings/scope available for both controller and life cycle.
And from 1.7x onward, bindings/scope will only be available in life cycle hooks ($onInit).


However, I found something very interesting that you can always use bindings/scope directly in the template ($ctrl.property), even without initiating them in controller.

And also I found the code inside controller is triggered before the code in $onInit.
