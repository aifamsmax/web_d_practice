let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(0);//get the input array from the command line
    // console.log(inputArr);
// node main.js tree "directroy path"
// node main.js organise "directory path"
// node main.js help
let command = inputArr[2];
let types ={
    media: ["mp4","mp3","jpg","png","jpeg","gif"],
    documents: ["pdf","doc","docx","txt","csv"],
    code: ["js","html","css","java","c","cpp","py","json"],
    archives: ["zip","rar","7z","tar","gz"],
    app: ["exe","msi","apk","jar"],
}
switch(command){
    case "tree":
        treeFn(inputArr[3]);
        break;
    case "organise":
        organiseFn(inputArr[3]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("😁😁Invalid command");
        break;
}
function treeFn(dirPath)
 {
     console.log("Tree command implemented for ",dirPath);
     let destPath;
     if(dirPath == undefined)
     {
         console.log("Please enter a directory path");
         return;
     }else{
         let doesExist = fs.existsSync(dirPath);
         if(doesExist)
         {
             // 2.create -> organised_files -> directory
             let DoesExist = fs.existsSync(dirPath);
             if(DoesExist)
             {
                treeHelper(dirPath,"");
             }  
         }
         else
         {
             console.log("Please enter a directory path");
             return;
         }
         
     }
}
 function organiseFn(dirPath)
 {
    console.log("Organise command implemented for ",dirPath);
    //pseudo code
    // 1.input -> directory path given
    let destPath;
    if(dirPath == undefined)
    {
        console.log("Please enter a directory path");
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        {
            // 2.create -> organised_files -> directory
            destPath = path.join(dirPath,"organized_files");
            console.log(destPath); 
            let DoesExist = fs.existsSync(destPath);
            console.log(DoesExist); 
            if(DoesExist==false)
            {
                console.log("Creating directory");
                fs.mkdirSync(destPath); 
            }   
            else{
                console.log("Directory already exists");
            }
        }
        else
        {
            console.log("Please enter a directory path");
            return;
        }
        
    }
    organiseHelper(dirPath, destPath);
    
}
function helpFn(dirPath)
{
    console.log(`
    List of all the commands :
    // node main.js tree "directroy path"
    // node main.js organise "directory path"
    // node main.js help
    `);
}
function organiseHelper(src,dest)
{
    // 3. identify categories of all the files present in that input directory
    let childNames= fs.readdirSync(src);
    //console.log(childNames);
    for(let i=0; i< childNames.length;i++)
    {
        let childAddress = path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile)
        {
            //console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            console.log(childNames[i],"belongs to -->",category);
            // 4. copy/ cut files to that organised directory inside of any of category folder
            sendFiles(childAddress,dest,category);
        }
    }
}
function getCategory(name)
{
   let ext= path.extname(name);//get the extension of the file
   ext= ext.slice(1);//remove the dot 
   console.log(ext);
   for(let type in types)
   {
       for(let i=0; i<types[type].length;i++)
       {
           if(types[type][i]==ext)
           {
               return type;
           }
       }
   }
   return "others";
}
function sendFiles(src,dest,type)
{
    let destPath = path.join(dest,type);
    let doesExist = fs.existsSync(destPath);
    if(doesExist==false)
    {
        fs.mkdirSync(destPath);
    }
    let destFile = path.join(destPath,path.basename(src));//get the file name from the path and add it to the destination path  
    fs.copyFileSync(src,destFile); //copy the file to the destination path 
    fs.unlinkSync(src);//delete the file from the source path
} 
function treeHelper(dirPath,indent)
{
    let isFile =fs.lstatSync(dirPath).isFile();
    if(isFile)
    {
        let fileName =path.basename(dirPath);
        console.log(indent+"|----"+fileName);
    }
    else
    {
        console.log(indent+"|____"+path.basename(dirPath));//get the file name from the path
        fs.readdirSync(dirPath).forEach(child=>{//read the directory
            let childAddress = path.join(dirPath,child);//get the child address
            treeHelper(childAddress,indent+"\t");//recursive call
        });
        
    }
}