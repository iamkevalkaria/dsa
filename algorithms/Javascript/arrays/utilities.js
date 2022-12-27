// This function formats script properties
function resetScriptProperty() {
  let prop = PropertiesService.getScriptProperties();
  prop.setProperty("fileIds", "[]");
}

// This function formats script properties
function getFileIdsFromScriptProps() {
  let prop = PropertiesService.getScriptProperties();
  return prop.getProperty("fileIds");
}


// This function formats script properties
function setFileIdsFromScriptProps(fileIdArray) {
  let prop = PropertiesService.getScriptProperties();
  prop.setProperty("fileIds" , fileIdArray);
}

// Saves file to Folder
function saveFile(blob, folderId, fileName, mimeType) {
  try {
    const newFile = {
      title: fileName,
      mimeType: mimeType,
      parents: [{ id: folderId }] //  Added
    };

    const uploadedFile = Drive.Files.insert(newFile, blob, {
      convert: true,
      supportsAllDrives: true,

    });
    return uploadedFile.id;
  } catch (err) {
    console.log("Error in saveFile(blob, folderId, fileName, mimeType) : ", err)
  }
}
