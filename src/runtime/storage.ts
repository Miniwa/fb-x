export class FbxOptions {
    public authorRegexes: RegExp[];
    public commentRegexes: RegExp[];
}

interface IFbxStoredOptions {
    authorRegexes: string[];
    commentRegexes: string[];
    [key: string]: any;
}

function getOptions(): Promise<FbxOptions> {
    return new Promise<FbxOptions>((resolve, reject) => {
        chrome.storage.sync.get((storedOptions: IFbxStoredOptions) => {
            if (chrome.runtime.lastError != null) {
                reject(new Error("Could not read options from sync: "
                + chrome.runtime.lastError.message));
            }

            let options = new FbxOptions();
            for (const authorRegex of storedOptions.authorRegexes) {
                options.authorRegexes.push(new RegExp(authorRegex));
            }
            for (const commentRegex of storedOptions.commentRegexes) {
                options.commentRegexes.push(new RegExp(commentRegex));
            }
            resolve(options);
        });
    });
}

function saveOptions(options: FbxOptions) {

}
