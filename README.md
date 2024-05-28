#### Making the buttons library visible to the shopping project.  

```sh
cd /dados/tutorials/angular/angular-libraries/shared/dist/buttons
pnpm link /dados/tutorials/angular/angular-libraries/shopping
```

This command will make a symbolic link inside `shopping/node_modules` to the `@labs` directory.  

The directory will have that structure:    
`shopping/node_modules/@labs/buttons/`  
Files and Folders inside the directory:  
```sh
lib/
  fancy-button/
    fancy-button.component.d.ts
  buttons.component.d.ts
  buttons.service.d.ts
node_modules/
  .pnpm/
  @angular/
  tslib/
index.d.ts
package.json
public-api.d.ts
```


#### Using pnpm to link projects  

Using the commands below didn't work in the project.  
There are some bugs in that version of pnpm.  

Making a global link:  
```sh
pnpm link --global
pnpm link --global @labs/buttons
```

Making a directory link:  
```sh
export PROJECT=~/angular-libs
cd $PROJECT/shared/dist/buttons
pnpm link --dir $PROJECT/shopping
```


#### References

https://medium.com/@aleksanderkolata/how-to-develop-angular-libraries-locally-ed8e1fd16892

https://serko.dev/post/pnpm-link-usage