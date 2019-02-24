import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    uploadedimgurl: any;
    result: any;
    textresult: any;
    logoresult: any;
    textdataresult: any;
    analysedtextdata: any;
    constructor(public httpclient: HttpClient) { }
    sendPostRequest() {

        const postData = {
            'requests': [
                {'image': {'source': {
                            'imageUri': this.uploadedimgurl}
                    },
                    'features': [{
                        'type': 'LOGO_DETECTION',
                        'maxResults': 10
                    }, {
                        'type': 'TEXT_DETECTION',
                        'maxResults': 1
                    }]}]
        };
        this.httpclient.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyACbCX2hq_U5tzHua_q5vZc1-ZC1obzBQM',
            postData, {headers: {'Content-Type': 'application/json'}})
            .subscribe(data => {
                this.result = data;
                this.textresult = this.result.responses[0].fullTextAnnotation.text;
                this.logoresult = this.result.responses[0].logoAnnotations;
                // console.log(this.result.responses[0].fullTextAnnotation.text);
            } , error => {
                console.log(error);
            });

    }

    analysetext() {

        const postData = {
            'document': {
                'type': 'PLAIN_TEXT',
                'content': this.textresult
            }
        };

        this.httpclient.post('https://language.googleapis.com/v1/documents:analyzeEntities?key=AIzaSyACbCX2hq_U5tzHua_q5vZc1-ZC1obzBQM',
            postData, {headers: {'Content-Type': 'application/json'}})
            .subscribe(data => {
                this.analysedtextdata = data;
                this.textdataresult = this.analysedtextdata.entities ;
                console.log(this.textdataresult);
            } , error => {
                console.log(error);
            });

    }
    ngOnInit() {
    }

}
