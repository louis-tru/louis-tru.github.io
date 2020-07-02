declare function sh_isEmailAddress(url: any): boolean;
declare function sh_setHref(tags: any, numTags: any, inputString: any): void;
declare function sh_konquerorExec(s: any): string[];
/**
Highlights all elements containing source code in a text string.  The return
value is an array of objects, each representing an HTML start or end tag.  Each
object has a property named pos, which is an integer representing the text
offset of the tag. Every start tag also has a property named node, which is the
DOM element started by the tag. End tags do not have this property.
@param  inputString  a text string
@param  language  a language definition object
@return  an array of tag objects
*/
declare function sh_highlightString(inputString: any, language: any): {
    pos: number;
}[];
declare function sh_getClasses(element: any): any[];
declare function sh_addClass(element: any, name: any): void;
/**
Extracts the tags from an HTML DOM NodeList.
@param  nodeList  a DOM NodeList
@param  result  an object with text, tags and pos properties
*/
declare function sh_extractTagsFromNodeList(nodeList: any, result: any): void;
/**
Extracts the tags from the text of an HTML element. The extracted tags will be
returned as an array of tag objects. See sh_highlightString for the format of
the tag objects.
@param  element  a DOM element
@param  tags  an empty array; the extracted tag objects will be returned in it
@return  the text of the element
@see  sh_highlightString
*/
declare function sh_extractTags(element: any, tags: any): string;
/**
Merges the original tags from an element with the tags produced by highlighting.
@param  originalTags  an array containing the original tags
@param  highlightTags  an array containing the highlighting tags - these must not overlap
@result  an array containing the merged tags
*/
declare function sh_mergeTags(originalTags: any, highlightTags: any): any;
/**
Inserts tags into text.
@param  tags  an array of tag objects
@param  text  a string representing the text
@return  a DOM DocumentFragment representing the resulting HTML
*/
declare function sh_insertTags(tags: any, text: any): DocumentFragment;
/**
Highlights an element containing source code.  Upon completion of this function,
the element will have been placed in the "sh_sourceCode" class.
@param  element  a DOM <pre> element containing the source code to be highlighted
@param  language  a language definition object
*/
declare function sh_highlightElement(element: any, language: any): void;
declare function sh_getXMLHttpRequest(): any;
declare function sh_load(language: any, element: any, prefix: any, suffix: any): void;
/**
Highlights all elements containing source code on the current page. Elements
containing source code must be "pre" elements with a "class" attribute of
"sh_LANGUAGE", where LANGUAGE is a valid language identifier; e.g., "sh_java"
identifies the element as containing "java" language source code.
*/
declare function highlight(prefix: any, suffix: any, tag: any): void;
declare function sh_highlightDocument(prefix: any, suffix: any): void;
declare var sh_languages: {} | undefined;
declare var sh_requests: {};
