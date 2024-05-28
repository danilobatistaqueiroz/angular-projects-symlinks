

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


https://medium.com/@aleksanderkolata/how-to-develop-angular-libraries-locally-ed8e1fd16892

https://serko.dev/post/pnpm-link-usage