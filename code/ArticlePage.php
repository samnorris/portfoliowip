<?php
class ArticlePage extends Page {

    public function getCMSFields() {
        $fields = parent::getCMSFields();

        $dateField = new DateField('Date');
        $dateField->setConfig('showcalendar', true);
        $fields->addFieldToTab('Root.Main', $dateField, 'Content');
        $fields->addFieldToTab('Root.Main', new TextField('Author'), 'Content');

        return $fields;
    }
    
	    private static $db = array(
        'Date' => 'Date',
        'Author' => 'Text'
    );
}


class ArticlePage_Controller extends Page_Controller {
}