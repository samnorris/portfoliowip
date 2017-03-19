<?php
class ArticleHolder extends Page {
    private static $allowed_children = array('ArticlePage');

    public function getCMSFields() {
        $fields = parent::getCMSFields();

        $textField = new TextField('ListeningTo');
        $fields->addFieldToTab('Root.Main', $textField, 'Content');
        $fields->addFieldToTab('Root.Main', new TextField('ListeningTo'), 'Content');

        $textField = new TextField('Artist');
        $fields->addFieldToTab('Root.Main', $textField, 'Content');
        $fields->addFieldToTab('Root.Main', new TextField('Artist'), 'Content');

        $textField = new TextField('Url');
        $fields->addFieldToTab('Root.Main', $textField, 'Content');
        $fields->addFieldToTab('Root.Main', new TextField('Url'), 'Content');

        return $fields;
    }

    private static $db = array(
        'ListeningTo' => 'Text',
        'Artist' => 'Text',
        'Url' => 'Text',
    );
}

class ArticleHolder_Controller extends Page_Controller {

}